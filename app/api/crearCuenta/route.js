import { NextResponse } from "next/server";
import { prisma } from "@/db";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, contrasena, nombre, apellido, telefono } = body;

    // Verifica si el usuario ya existe en la base de datos
    let usuarioExistente = await prisma.usuarios.findUnique({
      where: { email },
    });

    if (usuarioExistente) {
      return NextResponse.json(
        { error: "El correo electrónico ya está registrado." },
        { status: 400 }
      );
    }

    // Crear el nuevo usuario sin cifrar la contraseña
    const usuario = await prisma.usuarios.create({
      data: {
        email,
        contrasena, // Contraseña almacenada sin cifrar (no recomendado)
        nombre,
        apellido,
        telefono,
      },
    });

    return NextResponse.json(
      { message: "Usuario creado con éxito", usuario },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error en el registro:", error.message);
    return NextResponse.json(
      { error: "Error en el registro", details: error.message },
      { status: 500 }
    );
  }
}
