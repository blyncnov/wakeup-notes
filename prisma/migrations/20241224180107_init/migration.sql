-- CreateEnum
CREATE TYPE "NoteVisibility" AS ENUM ('PUBLIC', 'PROTECTED');

-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "note_title" TEXT NOT NULL,
    "note_description" TEXT NOT NULL,
    "note_content" TEXT NOT NULL,
    "note_label" TEXT NOT NULL,
    "note_visibility" TEXT NOT NULL DEFAULT 'PUBLIC',
    "note_location" TEXT NOT NULL,
    "note_latitude" TEXT NOT NULL,
    "note_longitude" TEXT NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);
