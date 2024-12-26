import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  // Only allow GET request
  assertMethod(event, ["GET"]);

  const notes = await prisma.note.findMany();
  return notes;
});
