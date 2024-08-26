/*
  Warnings:

  - You are about to drop the column `foto` on the `Material` table. All the data in the column will be lost.
  - Added the required column `fotoUrl` to the `Material` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Material" DROP COLUMN "foto",
ADD COLUMN     "fotoUrl" TEXT NOT NULL;
