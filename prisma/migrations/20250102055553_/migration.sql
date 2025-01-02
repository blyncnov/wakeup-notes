/*
  Warnings:

  - The values [PUBLIC,PROTECTED] on the enum `NoteVisibility` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "NoteVisibility_new" AS ENUM ('public', 'private');
ALTER TYPE "NoteVisibility" RENAME TO "NoteVisibility_old";
ALTER TYPE "NoteVisibility_new" RENAME TO "NoteVisibility";
DROP TYPE "NoteVisibility_old";
COMMIT;

-- AlterTable
ALTER TABLE "Note" ADD COLUMN     "note_password" TEXT NOT NULL DEFAULT '12345',
ALTER COLUMN "note_visibility" SET DEFAULT 'public';
