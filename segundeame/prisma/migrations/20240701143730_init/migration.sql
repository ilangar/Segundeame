/*
  Warnings:

  - Added the required column `email` to the `Material` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefono` to the `Material` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Material" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "telefono" INTEGER NOT NULL;
