/*
  Warnings:

  - The primary key for the `Material` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Material` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Material` table. All the data in the column will be lost.
  - Added the required column `iDUser` to the `Material` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Material" DROP CONSTRAINT "Material_pkey",
DROP COLUMN "id",
DROP COLUMN "userId",
ADD COLUMN     "iDMaterial" SERIAL NOT NULL,
ADD COLUMN     "iDUser" INTEGER NOT NULL,
ADD CONSTRAINT "Material_pkey" PRIMARY KEY ("iDMaterial");
