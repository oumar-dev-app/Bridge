import { supabase } from '@/lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Méthode non autorisée' });

  const { nom, prenom, email, telephone, niveauAnglais, pays, quartier } = req.body;

  const { data, error } = await supabase
    .from('inscription')
    .insert([{ nom, prenom, email, telephone, niveauAnglais, pays, quartier }]);

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json({ data });
}
