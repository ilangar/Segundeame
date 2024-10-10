import { NextResponse } from 'next/server';
import { prisma } from '@/db';  // Ya tienes Prisma configurado
import { uploadFile } from '@/supabase';  // Importa la función para subir a Supabase
import multer from 'multer';

// Configuración de Multer para manejar archivos
const upload = multer({
    storage: multer.memoryStorage(),  // Para manejar el archivo en memoria
});

export const config = {
    api: {
        bodyParser: false,  // Necesario para que Multer maneje la solicitud
    },
};

export async function POST(req) {
    return new Promise((resolve, reject) => {
        upload.single('file')(req, {}, async (err) => {
            if (err) {
                console.error('Error uploading file:', err);
                return resolve(NextResponse.json({ error: 'Error uploading file' }, { status: 400 }));
            }

            try {
                // Obtener datos del cuerpo
                const { iDUser, material, caracteristicas, email, telefono } = req.body;

                // Subir la imagen y obtener la URL
                const imageUrl = await uploadFile(req.file);  // Usamos req.file porque Multer maneja el archivo
                if (!imageUrl) {
                    return resolve(NextResponse.json({ error: 'Error uploading image' }, { status: 400 }));
                }

                // Crear un nuevo material en la base de datos
                const newMaterial = await prisma.material.create({
                    data: {
                        iDUser: parseInt(iDUser),
                        material,
                        caracteristicas,
                        email,
                        telefono: parseInt(telefono),
                        fotoUrl: imageUrl,  // Almacena la URL de la imagen subida
                    },
                });

                // Responder con el nuevo registro creado
                resolve(NextResponse.json({ message: newMaterial }, { status: 201 }));
            } catch (error) {
                console.error('Error creating material:', error);
                resolve(NextResponse.json({ error: 'Error creating material' }, { status: 400 }));
            }
        });
    });
}
