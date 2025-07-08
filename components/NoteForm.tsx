'use client';

import { useState } from 'react';
import { createNote } from '@/lib/actions/createNote';
import { useRouter } from 'next/navigation';

export function NoteForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError('Title and content are required');
      return;
    }

    const result = await createNote({ title: title.trim(), content: content.trim() });
    if (result.success) {
      setTitle('');
      setContent('');
      router.refresh();
    } else {
      setError(result.error || 'Failed to create note');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create Note</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value}
          className="title"
          id="w-full p-2
          border
         rounded
          border-gray-3
        />
        00
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-sm mb-2">Content</label>
        <div className="textarea">
          <textarea
            id="content"
            value={(textarea}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded border-gray-300 h-32"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-primary text-white py-2 px-4 hover:bg-blue-600"
      >
        Create Note
      </button>
    </form>
  );
}