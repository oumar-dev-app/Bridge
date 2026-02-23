'use client';
import Container from '@/_Components/Container';
import { Mail, Search, Timer, Trash } from 'lucide-react';
import { useEffect, useState } from 'react';
import LogoutButton from './Logout';

type Etudiant = {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    niveauAnglais: string;
    pays: string;
    quartier: string;
    date_creation: string;
};



export default function DashboardClient() {
    const [activeTab, setActiveTab] = useState<'liste' | 'ajout' | 'message'>('liste');
    const [etudiants, setEtudiants] = useState<Etudiant[]>([]);
    const [messages, setMessages] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');

    const [form, setForm] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        niveauAnglais: '',
        pays: '',
        quartier: '',
    });
    const [editId, setEditId] = useState<number | null>(null);

    const [editForm, setEditForm] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        niveauAnglais: '',
        pays: '',
        quartier: '',
    });

    const supprimerEtudiant = async (id: number) => {
        if (!confirm('Voulez-vous supprimer cet étudiant ?')) return;

        try {
            const res = await fetch(`/api/etudiant/${id}`, {
                method: 'DELETE',
            });

            if (!res.ok) throw new Error();
            alert("Etudiant supprimè avec succè !")
            // Mise à jour immédiate de l’UI
            setEtudiants((prev) => prev.filter((e) => e.id !== id));
        } catch (err) {
            alert('Erreur lors de la suppression');
        }
    };

    const supprimerMessage = async (id: number) => {
        if (!confirm('Voulez-vous supprimer ce message ?')) return;

        try {
            const res = await fetch(`/api/etudiant/suppression/${id}`, {
                method: 'DELETE',
            });

            const data = await res.json();

            if (res.ok) {
                setMessages(prev => prev.filter(m => m.id !== id));
                alert("Message supprime avec succè");
            } else {
                alert(data.message);
            }
        } catch (err) {
            console.error(err);
            alert('Erreur serveur');
        }
    };


    const chargerEtudiants = async () => {
        setLoading(true);
        const res = await fetch('/api/recuperation');
        const data = await res.json();
        setEtudiants(data);
        setLoading(false);
    };

    const chargerMessages = async () => {
        setLoading(true);
        const res = await fetch('/api/message/recuperMessage');
        const data = await res.json();
        setMessages(data);
        setLoading(false);
    };

    useEffect(() => {
        if (activeTab === 'liste') chargerEtudiants();
        if (activeTab === 'message') chargerMessages();
    }, [activeTab]);

    const ajouterEtudiant = async (e: React.FormEvent) => {
        e.preventDefault();

        await fetch('/api/etudiant/inscription', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        setForm({
            nom: '',
            prenom: '',
            email: '',
            telephone: '',
            niveauAnglais: '',
            pays: '',
            quartier: '',
        });

        setActiveTab('liste');
        chargerEtudiants();
    };

    // 🔍 FILTRAGE DES ÉTUDIANTS || RECHERCHER AUTOMATIQUE DES ÉTUDINTS
    const etudiantsFiltres = etudiants.filter((e) =>
        e.nom.toLowerCase().includes(search.toLowerCase()) ||
        e.prenom.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Container>
            <div className="bg-blue-950 p-10 mb-10 rounded-lg">
                <h1 className="text-2xl font-semibold text-center text-white">
                    Bienvenue dans Bridge Admin
                </h1>

                {/* BARRE DE NAVIGATION */}
                <div className="flex justify-between items-center border-y border-white/20 p-2 mt-6">
                    <select className='hover:bg-gray-400  hoverEffect text-sm font-semibold bg-white p-2 rounded-lg md:hidden hover:cursor-pointer md:gap-0'>
                        <option onClick={() => setActiveTab('liste')}>
                            Lister
                        </option>
                        <option onClick={() => setActiveTab('ajout')}>
                            Ajouter
                        </option>
                        <option onClick={() => setActiveTab('message')}>
                            Messages
                        </option>
                    </select>
                    <div className='hover:bg-gray-400  hoverEffect text-sm font-semibold bg-white  rounded-lg md:hidden hover:cursor-pointer md:gap-0'>
                        <LogoutButton />
                    </div>

                    <div className="hidden md:flex gap-4 hover:cursor-pointer  rounded-lg  border-t-white">
                        <button
                            onClick={() => setActiveTab('liste')}
                            className="px-6 py-2 hover:bg-gray-300 cursor-pointer bg-white rounded-lg text-sm font-semibold">Liste</button>
                        <button onClick={() => setActiveTab('ajout')}
                            className="px-6 py-2 hover:bg-gray-300 cursor-pointer bg-white rounded-lg text-sm font-semibold">Ajouter</button>
                        <button onClick={() => setActiveTab('message')}
                            className="px-6 py-2 hover:bg-gray-300 cursor-pointer bg-white rounded-lg text-sm font-semibold">Messages</button>
                        <LogoutButton />
                    </div>

                    {activeTab === 'liste' && (
                        <div className="items-center hidden  md:flex  '">
                            <div className="bg-white p-2 rounded-l-lg">
                                <Search />
                            </div>
                            <input
                                type="search"
                                placeholder="Rechercher..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="bg-white p-2 outline-0 rounded-r-lg text-black"
                            />

                        </div>
                    )}
                </div>


                {/* LISTE DES ÉTUDIANTS */}
                {activeTab === 'liste' && (
                    <div className="mt-10">
                        <h2 className="text-xl text-white font-semibold mb-4">
                            Liste des étudiants inscrits
                        </h2>
                        {/*  FORMULAIRE DE MODIFICATION */}
                        {editId !== null && (
                            <form
                                onSubmit={async (e) => {
                                    e.preventDefault();

                                    const res = await fetch(`/api/etudiant/${editId}`, {
                                        method: 'PUT',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify(editForm),
                                    });

                                    if (!res.ok) {
                                        alert('Erreur modification');
                                        return;
                                    }
                                    alert("Etudiant modifier avec succè !")

                                    setEditId(null);
                                    chargerEtudiants();
                                }}
                                className="rounded-lg p-4 border border-white/20 text-white mb-4"
                            >
                                <h3 className="font-semibold mb-4">Modifier étudiant</h3>

                                {Object.entries(editForm).map(([key, value]) => (
                                    <input
                                        key={key}
                                        value={value}
                                        onChange={(e) =>
                                            setEditForm({ ...editForm, [key]: e.target.value })
                                        }
                                        className="w-full mb-3 p-2 border border-white/20 rounded "
                                        required
                                    />
                                ))}

                                <div className="flex gap-2 text-sm font-semibold  ">
                                    <button className="bg-blue-600 px-4 p-2 py-2 rounded-lg text-white">
                                        Enregistrer
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setEditId(null)}
                                        className="bg-gray-400 px-4 p-2 py-2 rounded-lg text-white"
                                    >
                                        Annuler
                                    </button>
                                </div>
                            </form>
                        )}

                        {loading ? (
                            <p className="text-white"><i>Chargement...</i></p>
                        ) : etudiantsFiltres.length === 0 ? (
                            <p className="text-white">Aucun étudiant trouvé</p>
                        ) : (
                            etudiantsFiltres.map((e) => (
                                <div
                                    key={e.id}
                                    className=" rounded-lg p-4 border border-white/20 text-white mb-4"
                                >
                                    {/* infos étudiant */}
                                    <div className="space-y-5 text-sm">
                                        <p><strong>Nom:</strong> {e.nom}</p>
                                        <p><strong>Prénom:</strong> {e.prenom}</p>
                                        <p><strong>Email:</strong> {e.email}</p>
                                        <p><strong>Téléphone:</strong> {e.telephone}</p>
                                        <p><strong>Niveau:</strong> {e.niveauAnglais}</p>
                                        <p><strong>pays:</strong> {e.pays}</p>
                                        <p><strong>Quartier:</strong> {e.quartier}</p>

                                    </div>

                                    {/* boutons */}
                                    <div className="flex justify-between items-center gap-3 mt-10">
                                        <div >
                                            <div className='flex items-center gap-3'>
                                                <button
                                                    onClick={() => {
                                                        setEditId(e.id);
                                                        setEditForm({
                                                            nom: e.nom,
                                                            prenom: e.prenom,
                                                            email: e.email,
                                                            telephone: e.telephone,
                                                            niveauAnglais: e.niveauAnglais,
                                                            pays: e.pays,
                                                            quartier: e.quartier,
                                                        });
                                                    }}
                                                    className="bg-blue-600 px-4 hover:bg-blue-500 cursor-pointer p-2 py-2 text-sm font-semibold rounded-lg text-white"
                                                >
                                                    Modifier
                                                </button>

                                                <button
                                                    onClick={() => supprimerEtudiant(e.id)}
                                                    className=" px-2 p-2 py-2 cursor-pointer border border-white/20 hover:bg-red-300 hover:text-black rounded-full text-white"
                                                >
                                                    <Trash size={15} />
                                                </button>

                                            </div>
                                        </div>

                                        <div className='flex items-center gap-3 text-sm'>
                                            <span className="flex items-center gap-1 text-sm">
                                                <Timer size={14} className='text-blue-600' />
                                                {new Date(e.date_creation).toLocaleString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}


                    </div>
                )}



                {/* AJOUT */}
                {activeTab === 'ajout' && (
                    <form onSubmit={ajouterEtudiant} className="border border-white/20 p-6 shadow-lg max-w-xl m-auto rounded-lg mt-20">
                        <h2 className="text-xl font-semibold text-center text-white mb-4">Ajouter un étudiant</h2>

                        {Object.entries(form).map(([key, value]) => (
                            <input
                                key={key}
                                placeholder={key}
                                value={value}
                                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                                className="w-full mb-3 p-2 border border-white/20 text-black bg-white rounded-lg"
                                required
                            />
                        ))}

                        <button className="bg-blue-900 text-white w-full py-2 rounded-lg">
                            Enregistrer
                        </button>
                    </form>
                )}



                {/* MESSAGES */}
                {activeTab === 'message' && (
                    <div className="mt-10">
                        <h2 className="text-xl text-white font-semibold mb-4">Messages</h2>

                        {messages.map((m) => (
                            <div key={m.id} className="text-white border border-white/20 p-2 rounded-lg mb-2">
                                <div className='p-2 border-b mb-5 border-white/20'>
                                    <Mail className='text-blue-600 text-center' />
                                    <h1 className='font-bold '>{m.email},</h1>
                                    <br />
                                </div>

                                <p>{m.message}</p>
                                <div className="flex justify-end text-sm gap-3 mt-2">
                                    <span className="flex items-center gap-1">
                                        <Timer size={14} className='text-blue-600' />
                                        {new Date(m.created_at).toLocaleString()}
                                    </span>
                                    <div className=" px-2 p-2 py-2 cursor-pointer border border-white/20 hover:bg-red-300 hover:text-black rounded-full text-white">
                                        <Trash
                                            onClick={() => supprimerMessage(m.id)}
                                            size={15} />
                                    </div>


                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Container>
    );
}

