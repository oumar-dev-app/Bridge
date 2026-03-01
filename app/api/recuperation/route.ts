import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

/**
 * GET → afficher la liste des étudiants
 */
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('inscription')
      .select('id, nom, prenom, email, telephone, niveauAnglais, pays, quartier, date_creation')
      .order('date_creation', { ascending: false });

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

/**
 * POST → ajouter un nouvel étudiant
 */
export async function POST(req: Request) {
  try {
    const {
      nom,
      prenom,
      email,
      telephone,
      niveauAnglais,
      pays,
      quartier,
    } = await req.json();

    const { data, error } = await supabase
      .from('inscription')
      .insert([
        { nom, prenom, email, telephone, niveauAnglais, pays, quartier }
      ]);

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Erreur lors de l’insertion' },
      { status: 500 }
    );
  }
}