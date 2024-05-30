-- CreateTable
CREATE TABLE "Usuarios" (
    "iDUser" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("iDUser")
);
