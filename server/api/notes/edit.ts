import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  // Only allow PUT, PATCH, or POST requests
  assertMethod(event, ["POST", "PUT", "PATCH"]);

  // Read the body of the request
  const body = await readBody(event);

  // Destructure the received data from the body
  const {
    note_title,
    note_description,
    note_content,
    note_label,
    note_visibility,
    note_location,
    note_latitude,
    note_longitude,
  } = body;

  // Find the note by the ID
  const mynote = await prisma.note.findFirst({
    where: {
      id: 1,
    },
  });

  if (!mynote) {
    return "Note not found";
  }

  // Create a new note using Prisma
  await prisma.note.update({
    where: {
      id: mynote.id,
    },
    data: {
      note_title,
      note_description,
      note_content,
      note_label,
      note_visibility,
      note_location,
      note_latitude,
      note_longitude,
    },
  });

  return "Note Updated";
});
