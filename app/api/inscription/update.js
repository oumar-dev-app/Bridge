import { supabase } from '../../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method !== 'PUT') return res.status(405).json({ error: 'Méthode non autorisée' });

  const { id, nom, prenom, email, telephone, niveauAnglais, pays, quartier } = req.body;

  const { data, error } = await supabase
    .from('inscription')
    .update({ nom, prenom, email, telephone, niveauAnglais, pays, quartier })
    .eq('id', id);

  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ data });
}