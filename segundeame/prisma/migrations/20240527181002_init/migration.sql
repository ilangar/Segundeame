/*
  Warnings:

  - Added the required column `caracteristicas` to the `Material` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contacto` to the `Material` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foto` to the `Material` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Material" ADD COLUMN     "caracteristicas" TEXT NOT NULL,
ADD COLUMN     "contacto" TEXT NOT NULL,
ADD COLUMN     "foto" TEXT NOT NULL;
