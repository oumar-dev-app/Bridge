import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // 🔑 OBLIGATOIRE
  const messageId = Number(id);

  if (isNaN(messageId)) {
    return NextResponse.json(
      { message: 'ID invalide' },
      { status: 400 }
    );
  }

  try {
    const [result]: any = await db.execute(
      'DELETE FROM Message WHERE id = ?',
      [messageId]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: 'Message introuvable' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Message supprimé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur suppression MySQL:', error);
    return NextResponse.json(
      { message: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
