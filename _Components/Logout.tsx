'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
    const router = useRouter();

    const logout = async () => {
        await fetch('/api/logout', { method: 'POST' });
        router.push('/login');
        router.refresh();
    };

    return <button
        onClick={logout}
        className="px-6 py-2 hover:bg-gray-300 cursor-pointer bg-white rounded-lg text-sm font-semibold"
    >
        Déconnexion
    </button>;
}
