/*
  Warnings:

  - Changed the type of `note_latitude` on the `Note` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `note_longitude` on the `Note` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Note" DROP COLUMN "note_latitude",
ADD COLUMN     "note_latitude" DOUBLE PRECISION NOT NULL,
DROP COLUMN "note_longitude",
ADD COLUMN     "note_longitude" DOUBLE PRECISION NOT NULL;
