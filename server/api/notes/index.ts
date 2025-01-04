import { Note } from "@prisma/client";
import prisma from "~/lib/prisma";

export default defineEventHandler(
  async (
    event
  ): Promise<{ statusCode: number; message: string; data?: Note[] }> => {
    // Allow only GET and POST requests
    assertMethod(event, ["GET", "POST"]);

    // Parse the request body
    const body = await readBody(event);
    const { lat, lng } = body;

    console.log(`Received coordinates: ${lat}, ${lng}`);

    // Validate coordinates
    if (typeof lat !== "number" || typeof lng !== "number") {
      return { message: "Invalid coordinates", statusCode: 400 };
    }

    // Define search radius in kilometers
    const radius = 5;

    // Fetch notes within the specified radius
    const notes = await prisma.$queryRaw<Note[]>`
    SELECT * FROM (
      SELECT *,
             (6371 * acos(cos(radians(${lat})) * cos(radians(note_latitude))
             * cos(radians(note_longitude) - radians(${lng}))
             + sin(radians(${lat}))
             * sin(radians(note_latitude)))) AS "distance"
      FROM "Note"
    ) AS subquery
    WHERE "distance" < ${radius};
  `;

    return {
      statusCode: 200,
      message: "Successfully fetched notes",
      data: notes,
    };
  }
);
