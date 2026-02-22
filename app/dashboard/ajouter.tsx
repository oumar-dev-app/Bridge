'use client';
import { Container } from 'lucide-react';
import { useState } from 'react';

export default function Ajouter({ onSuccess }: { onSuccess: () => void }) {
  const [form, setForm] = useState<any>({});

  const submit = async (e: any) => {
    e.preventDefault();

    await fetch('/api/recuperation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setForm({});
    onSuccess();
  };

  return (
    <Container>
      <form onSubmit={submit}>
        <input placeholder="Nom"
          onChange={e => setForm({ ...form, nom: e.target.value })} />

        <input placeholder="Prénom"
          onChange={e => setForm({ ...form, prenom: e.target.value })} />

        <input placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })} />

        <input placeholder="Téléphone"
          onChange={e => setForm({ ...form, telephone: e.target.value })} />

        <input placeholder="Niveau anglais"
          onChange={e => setForm({ ...form, niveauAnglais: e.target.value })} />

        <input placeholder="Pays"
          onChange={e => setForm({ ...form, pays: e.target.value })} />

        <input placeholder="Quartier"
          onChange={e => setForm({ ...form, quartier: e.target.value })} />

        <button type="submit">Enregistrer</button>
      </form>
    </Container>

  );
}
