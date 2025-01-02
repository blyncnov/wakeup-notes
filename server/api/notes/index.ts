import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  // Only allow GET request
  assertMethod(event, ["GET"]);

  const query = getQuery(event);

  // Ensure lat and lng are valid
  const latitude = 7.2230094;
  const longitude = 3.4546299;

  if (!latitude || !longitude) {
    return { message: "Invalid coordinates" };
  }

  // Radius in kilometers
  const radius = 10;

  const notes = await prisma.$queryRaw`
    SELECT * FROM (
      SELECT *,
             (6371 * acos(cos(radians(${latitude})) * cos(radians(note_latitude))
             * cos(radians(note_longitude) - radians(${longitude}))
             + sin(radians(${latitude}))
             * sin(radians(note_latitude)))) AS "distance"
      FROM "Note"
    ) AS subquery
    WHERE "distance" < ${radius};
  `;

  return notes;
});
