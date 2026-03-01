import { supabase } from '../../../lib/supabaseClient';

export default async function handler(req, res) {
  const { data, error } = await supabase
    .from('inscription')
    .select('*')
    .order('date_creation', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ data });
}