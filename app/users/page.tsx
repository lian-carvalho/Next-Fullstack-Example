'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [message, setMessage] = useState('');

  async function fetchUsers() {
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  async function handleDelete(id: number) {
    if (!confirm('Tem certeza?')) return;

    const res = await fetch(`/api/users/${id}`, { method: 'DELETE' });
    const data = await res.json();
    setMessage(data.message);

    setUsers((prev) => prev.filter((u) => u.id !== id));
  }

  return (
    <div className="min-h-screen p-8">
      <div className="flex mb-6 justify-between items-center">
        <h1 className="text-2xl">Usuários cadastrados</h1>
        <Link href='/cadastro' className='text-gray-500'>Ir para página de cadastro</Link>
      </div>

      <table className="w-full border border-zinc-700">
        <thead>
          <tr>
            <th className='p-2 border border-zinc-700'>ID</th>
            <th className='p-2 border border-zinc-700'>Nome</th>
            <th className='p-2 border border-zinc-700'>Email</th>
            <th className='p-2 border border-zinc-700' colSpan={2}>Ações</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center">
              <td className='p-2'>{user.id}</td>
              <td className='p-2'>{user.name}</td>
              <td className='p-2'>{user.email}</td>
              <td className='p-2'>
                <button
                  className="text-red-500 hover:opacity-70 duration-300 cursor-pointer"
                  onClick={() => handleDelete(user.id)}
                >
                  Apagar
                </button>
              </td>
              <td className="p-2">
                <Link className='text-blue-400 hover:opacity-70 duration-300' href={``}>
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="p-6 text-center text-green-500">
        {message}
      </p>
    </div>
  );
}