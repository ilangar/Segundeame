import { NextResponse } from 'next/server';
import { prisma } from '@/db';  // Ya tienes Prisma configurado
import { createClient } from '@supabase/supabase-js';
import multer from 'multer';

// Configuración de Multer para manejar archivos en memoria
const upload = multer({
  storage: multer.memoryStorage(),
});

const supabase = createClient(
  'https://ubhawvhjtmupucogjads.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViaGF3dmhqdG11cHVjb2dqYWRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4Nzk4OTUsImV4cCI6MjAzMTQ1NTg5NX0.Wxf-zwHmP367Fm2mim0rQWO-wF2i_dKFfrtYNL-wEXM'
);

export const requestBodyParsing = false;

export async function POST(req) {
  return new Promise((resolve, reject) => {
    upload.single('file')(req, {}, async (err) => {
      if (err) {
        console.error('Error uploading file:', err);
        return resolve(NextResponse.json({ error: 'Error uploading file' }, { status: 400 }));
      }

      try {
        if (!req.file) {
          return resolve(NextResponse.json({ error: 'No file uploaded' }, { status: 400 }));
        }

        // Datos del formulario
        const { iDUser, material, caracteristicas, email, telefono } = req.body || {};
        const fileBuffer = req.file.buffer;
        const fileName = req.file.originalname;

        // Subir la imagen a Supabase y obtener la URL pública
        const imageUrl = await uploadFile(fileBuffer, fileName);

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
            telefono,
            fotoUrl: imageUrl,  // URL pública de la imagen
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

// Función para subir archivos a Supabase
async function uploadFile(fileBuffer, fileName) {
  const { data, error } = await supabase.storage
    .from('fotos') // Cambia esto por el nombre de tu bucket en Supabase
    .upload(`uploads/${fileName}`, fileBuffer, {
      cacheControl: '3600',
      upsert: true,
      contentType: 'image/jpeg', // Asegúrate de que coincida con el tipo de archivo
    });

  if (error) {
    console.error('Error uploading file to Supabase:', error);
    return null;
  }

  // Obtén la URL pública
  const { publicUrl } = supabase.storage.from('your-bucket-name').getPublicUrl(`uploads/${fileName}`);
  return publicUrl;
}
