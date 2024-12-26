import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  // Only allow POST request
  assertMethod(event, ["POST"]);

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

  // Validate the required fields (optional but recommended)
  if (!note_title || !note_content || !note_location) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required fields",
    });
  }

  // Create a new note using Prisma
  await prisma.note.create({
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

  return "Note created";
});
