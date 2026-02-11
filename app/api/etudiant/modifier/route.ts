import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export const PUT: any = async (request: NextRequest, context: any) => {
  // Récupère l'id depuis le context.params ou le body
  const id = Number(context.params?.id ?? (await request.json()).id);
  if (isNaN(id)) {
    return NextResponse.json({ message: 'ID invalide' }, { status: 400 });
  }

  const data = await request.json();
  const { nom, prenom, email, telephone, niveauAnglais, quartier } = data;

  try {
    await db.execute(
      `
      UPDATE etudiants
      SET nom=?, prenom=?, email=?, telephone=?, niveauAnglais=?, quartier=?
      WHERE id=?
      `,
      [nom, prenom, email, telephone, niveauAnglais, quartier, id]
    );

    return NextResponse.json({ message: 'Modifié' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
  }
};

