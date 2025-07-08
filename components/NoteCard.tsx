'use client';

import { deleteNote } from '@/lib/actions/deleteNote';
import { useRouter } from 'next/navigation';

type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
};

export function NoteCard({ note }: { note: Note }) {
  const router = useRouter();

  const handleDelete = async () => {
    const result = await deleteNote(note.id);
    if (result.success) {
      router.refresh();
    } else {
      alert('Failed to delete note');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
      <p className="text-gray-600 mb-4">{note.content}</p>
      <p className="text-gray-500 text-sm mb-4">
        Created: {new Date(note.createdAt).toLocaleDateString()}
      </p>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}