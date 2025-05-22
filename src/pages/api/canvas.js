// src/pages/api/canvas.js
import { supabase } from '../../lib/supabase'

export default async function handler(req, res) {
  const currentMonth = new Date().toISOString().slice(0, 7) // “YYYY-MM”
  const monthParam = req.query.month
  const month = typeof monthParam === 'string' ? monthParam : currentMonth

  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('notebook')
      .select('paths')
      .eq('month', month)
      .single()

    if (error && error.code !== 'PGRST116') {
      return res.status(500).json({ error: error.message })
    }
    return res.status(200).json({ paths: data?.paths || [] })
  }

  if (req.method === 'POST') {
    // POST salva sempre nel mese corrente
    const { paths } = req.body
    const { error } = await supabase
      .from('notebook')
      .upsert({ month: currentMonth, paths }, { onConflict: 'month' })

    if (error) {
      return res.status(500).json({ error: error.message })
    }
    return res.status(200).end()
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
