import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  // Only allow GET request
  assertMethod(event, ["GET"]);

  const query = getQuery(event);

  // Find note id
  const noteId = Number(query.id);

  // Find note with id
  const note = await prisma.note.findUnique({
    where: {
      id: noteId,
    },
  });

  return note;
});
