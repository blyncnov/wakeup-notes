import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const sampleNotes = [
  {
    id: 1,
    note_title: "Shopping List",
    note_description: "List of items to buy",
    note_content: "Milk, Bread, Eggs, Butter",
    note_label: "Personal",
    note_visibility: "PUBLIC",
    note_location: "Home",
    note_latitude: 40.7128,
    note_longitude: -74.006,
  },
  {
    id: 2,
    note_title: "Project Ideas",
    note_description: "Ideas for my next project",
    note_content: "Build a Nuxt.js App",
    note_label: "Work",
    note_visibility: "PRIVATE",
    note_location: "Office",
    note_latitude: 34.0522,
    note_longitude: -118.2437,
  },
  {
    id: 3,
    note_title: "Meeting Notes",
    note_description: "Notes from team meeting",
    note_content: "Discussed project timelines and deliverables",
    note_label: "Work",
    note_visibility: "PRIVATE",
    note_location: "Conference Room",
    note_latitude: 37.7749,
    note_longitude: -122.4194,
  },
  {
    id: 4,
    note_title: "Vacation Plans",
    note_description: "Details of upcoming vacation",
    note_content: "Visit Paris, book tickets and hotels",
    note_label: "Personal",
    note_visibility: "PUBLIC",
    note_location: "Travel Agency",
    note_latitude: 48.8566,
    note_longitude: 2.3522,
  },
  {
    id: 5,
    note_title: "Fitness Goals",
    note_description: "Goals for staying fit",
    note_content: "Workout 5 times a week, eat healthy",
    note_label: "Health",
    note_visibility: "PUBLIC",
    note_location: "Gym",
    note_latitude: 51.5074,
    note_longitude: -0.1278,
  },
];

async function seed() {
  // Insert all data here
  for (const note of sampleNotes) {
    await prisma.note.create({
      data: note,
    });
  }

  console.log("Sample notes added successfully!");
}

try {
  await seed();
  await prisma.$disconnect();
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}
