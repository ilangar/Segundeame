-- CreateTable
CREATE TABLE "Material" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "material" TEXT NOT NULL,

    CONSTRAINT "Material_pkey" PRIMARY KEY ("id")
);
