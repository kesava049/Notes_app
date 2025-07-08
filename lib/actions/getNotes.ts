'use server';

import { prisma } from '../prisma';

export async function getNotes(userId: string) {
  try {
    const notes = await prisma.note.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    return notes;
  } catch (error) {
    return [];
  }
}