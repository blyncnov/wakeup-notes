import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const notes = await prisma.note.findMany();
  return notes;
});