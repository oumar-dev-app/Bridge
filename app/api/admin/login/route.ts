import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email et mot de passe requis" },
      { status: 400 }
    );
  }

  const [rows]: any = await db.execute(
    "SELECT * FROM admin WHERE email = ?",
    [email]
  );

  if (rows.length === 0) {
    return NextResponse.json(
      { message: "Identifiants incorrects" },
      { status: 401 }
    );
  }

  const admin = rows[0];
  const isValid = await bcrypt.compare(password, admin.password);

  if (!isValid) {
    return NextResponse.json(
      { message: "Mot de passe incorrects" },
      { status: 401 }
    );
  }

  const token = jwt.sign(
    { adminId: admin.id, username: admin.username },
    process.env.JWT_SECRET as string,
    { expiresIn: "1d" }
  );

  const response = NextResponse.json({ message: "Connexion réussie" });

  response.cookies.set("admin_token", token, {
    httpOnly: true,
    path: "/", 
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
