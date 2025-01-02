import { Note } from "@prisma/client";
import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  // Only allow GET request
  assertMethod(event, ["GET"]);

  // i have http://localhost:3000/notes?lat=7.2230117&lng=3.4546358 as the url of the page
  // how can i extract the lat and lng from the query string in the browser

  // Extract query string
  const query = getQuery(event);
  console.log(event._method);

  const latitude = 7.2230117;
  const longitude = 3.4546358;

  // Ensure lat and lng are valid

  if (!latitude || !longitude) {
    return { message: "Invalid coordinates" };
  }

  // Radius in kilometers
  const radius = 10;

  const notes = await prisma.$queryRaw<Note[]>`
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
