'use client';

import { useState, FormEvent } from 'react';

import Link from 'next/link';

export default function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!name || !email) {
            alert('Dados inconsistentes');
            return;
        };

        setLoading(true);

        const res = await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email }),
        });

        let data;
        try {
            data = await res.json();
        } catch {
            data = {};
        }

        setLoading(false);

        if (res.ok) {
            setMessage('Usuário criado com sucesso!');
            setName('');
            setEmail('');
        } else {
            setMessage(data.error || 'Erro ao cadastrar');
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-zinc-900 p-6 rounded-2xl shadow-lg w-full max-w-md"
            >
                <h1 className="text-2xl mb-4">Cadastro</h1>

                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mb-3 p-2 rounded bg-zinc-800"
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-3 p-2 rounded bg-zinc-800"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 p-2 rounded cursor-pointer"
                    disabled={loading}
                >
                    {loading ? 'Enviando...' : 'Cadastrar'}
                </button>

                <Link
                    href="/users"
                    className="block w-full text-center mt-3 p-2 rounded bg-zinc-700 hover:bg-zinc-600 transition"
                >
                    Ver usuários cadastrados
                </Link>

                {message && (
                    <p className="mt-3 text-sm">{message}</p>
                )}
            </form>
        </div>
    );
}