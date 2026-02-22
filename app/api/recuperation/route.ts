import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

/**
 * GET → afficher la liste des étudiants
 */
export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT 
        id,
        nom,
        prenom,
        email,
        telephone,
        niveauAnglais,
        pays,
        quartier,
        date_creation
      FROM inscription
      ORDER BY date_creation DESC
    `);

    return NextResponse.json(rows);
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

    await db.query(
      `INSERT INTO inscription
       (nom, prenom, email, telephone, niveauAnglais, quartier)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [nom, prenom, email, telephone, niveauAnglais, pays, quartier]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Erreur lors de l’insertion' },
      { status: 500 }
    );
  }
}
