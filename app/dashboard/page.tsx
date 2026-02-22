// app/dashboard/page.tsx
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { jwtVerify } from 'jose';
import DashboardClient from '@/_Components/DashboardClient';

export default async function DashboardPage() {
  const cookieStore = await cookies(); 
  console.log('COOKIE ADMIN:', cookieStore.get('admin_token'));
  const token = cookieStore.get('admin_token')?.value;

  if (!token) redirect('/login');

  try {
    await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET!)
    );
  } catch {
    redirect('/login');
  }

  return <DashboardClient />;
}
