import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { NoteForm } from '@/components/NoteForm';
import { NoteCard } from '@/components/NoteCard';
import { getNotes } from '@/lib/actions/getNotes';
import { authOptions } from '@/lib/auth';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/auth/signin');
  }

  const notes = await getNotes(session.user.id);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-2">Welcome, {session.user.name}</h1>
        <p className="text-gray-600">Email: {session.user.email}</p>
      </div>
      <NoteForm />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}