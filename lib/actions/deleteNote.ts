'use server';

import { getServerSession } from 'next-auth';
import { prisma } from '../prisma';
import { authOptions } from '../auth';

export async function deleteNote(noteId: string) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return { success: false, error: 'Unauthorized' };
    }

    await prisma.note.delete({
      where: {
        id: noteId,
        userId: session.user.id,
      },
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to delete note' };
  }
}