import { NextResponse } from 'next/server';
import { prisma } from '@/db';  // Ya tienes Prisma configurado
import { uploadFile } from '@/supabase';  // Importa la función para subir a Supabase

export async function POST(req) {
    try {
        // Parsear el cuerpo de la solicitud
        const body = await req.json();

        // Subir la imagen y obtener la URL
        const imageUrl = await uploadFile(body.foto);
        console.log(imageUrl);

        if (!imageUrl) {
            return NextResponse.json({ error: 'Error uploading image' }, { status: 400 });
        }

        // Crear un nuevo material en la base de datos
        const newMaterial = await prisma.material.create({
            data: {
                iDUser: body.iDUser,
                material: body.material,
                caracteristicas: body.caracteristicas,
                email: body.email,
                telefono: parseInt(body.telefono),
                fotoUrl: imageUrl,  // Almacena la URL de la imagen subida
            },
        });

        // Responder con el nuevo registro creado
        return NextResponse.json({ message: newMaterial }, { status: 201 });

    } catch (error) {
        console.error('Error creating material:', error);
        return NextResponse.json({ error: 'Error creating material' }, { status: 400 });
    }
}
