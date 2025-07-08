'use server';

import { getServerSession } from 'next-auth';
import { prisma } from '../prisma';
import { authOptions } from '../auth';

export async function createNote(data: { title: string; content: string }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return { success: false, error: 'Unauthorized' };
    }

    await prisma.note.create({
      data: {
        title: data.title,
        content: data.content,
        userId: session.user.id,
      },
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to create note' };
  }
}