import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/db';  // Ya tienes Prisma configurado
import { upload } from '@/multerConfig';  // Importa la configuración de Multer
import { uploadImage } from '@/supabase';  // Importa la función para subir a Supabase

export const config = {
    api: {
        bodyParser: false,  // Necesario para que Multer maneje el cuerpo de la solicitud
    },
};

export default async function POST(req, res) {
    try {
        // Usar Multer para manejar la subida del archivo
        upload.single('file')(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ error: 'Error uploading file' });
            }

            // Recibe el resto del cuerpo de la solicitud
            const body = req.body;

            // Subir la imagen a Supabase y obtener la URL
            const imageUrl = await uploadImage(req.file);

            // Crear un nuevo registro en la base de datos utilizando Prisma
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
            return res.status(201).json({ message: newMaterial });
        });
    } catch (error) {
        console.error('Error creating material:', error);
        return res.status(400).json({ error: 'Error creating material' });
    }
}
