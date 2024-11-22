import { NextResponse } from 'next/server';
import { prisma } from '@/db';

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, contrasena, nombre, apellido, telefono } = body;

        // Verifica si el usuario ya existe en la base de datos
        let usuario = await prisma.usuarios.findUnique({
            where: { email },
        });

        if (usuario) {
            // Si el usuario existe, verifica la contraseña
            if (usuario.contrasena === contrasena) {
                return NextResponse.json({ message: 'Login exitoso', usuario }, { status: 200 });
            } else {
                return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 });
            }
        } else {
            // Si el usuario no existe, lo crea
            usuario = await prisma.usuarios.create({
                data: {
                    email,
                    contrasena,  // Almacena la contraseña sin cifrar
                    nombre,
                    apellido,
                    telefono,
                },
            });
            return NextResponse.json({ message: 'Usuario creado', usuario }, { status: 201 });
        }
    } catch (error) {
        console.error('Error en el login o registro:', error.message);
        return NextResponse.json({ error: 'Error en el login o registro', details: error.message }, { status: 400 });
    }
}
