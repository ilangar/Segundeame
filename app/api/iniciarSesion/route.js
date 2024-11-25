import { NextResponse } from 'next/server';
import { prisma } from '@/db';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, contrasena } = body;

    // Busca al usuario por email
    const usuario = await prisma.usuarios.findUnique({
      where: { email },
    });

    if (!usuario) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    // Verifica la contraseña
    if (usuario.contrasena === contrasena) {
      return NextResponse.json({ message: 'Inicio de sesión exitoso', usuario }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 });
    }
  } catch (error) {
    console.error('Error en el inicio de sesión:', error.message);
    return NextResponse.json({ error: 'Error en el inicio de sesión', details: error.message }, { status: 500 });
  }
}
