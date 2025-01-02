export default defineEventHandler((event) => {
  return {
    version: "v1.0.0",
    Name: "Spartial Notes",
    // connect: process.env.DATABASE_URL,
    // pulse: process.env.PULSE_API_KEY,
    Description:
      "Leave a note at your favorite spot, and it will be waiting for you when you return!",
  };
});
