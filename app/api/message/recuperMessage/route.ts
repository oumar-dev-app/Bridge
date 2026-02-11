import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const [rows] = await db.query(
      'SELECT * FROM Message ORDER BY created_at DESC'
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error('Erreur MySQL:', error);
    return NextResponse.json(
      { message: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
