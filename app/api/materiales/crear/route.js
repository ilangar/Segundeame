import { NextResponse } from 'next/server';
import { prisma } from '@/db';  // Ya tienes Prisma configurado
import { uploadFile } from '@/supabase';  // Importar la función para subir a Supabase
import multer from 'multer';
import { createClient } from '@supabase/supabase-js';

// Configuración de Multer para manejar archivos en memoria
const upload = multer({
  storage: multer.memoryStorage(),
});

const supabase = createClient(
  'https://ubhawvhjtmupucogjads.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViaGF3dmhqdG11cHVjb2dqYWRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4Nzk4OTUsImV4cCI6MjAzMTQ1NTg5NX0.Wxf-zwHmP367Fm2mim0rQWO-wF2i_dKFfrtYNL-wEXM'
);
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
       console.log('File:', req.file);  // Verifica si Multer está manejando el archivo correctamente
        if (!req.file) {
          return resolve(NextResponse.json({ error: 'No file uploaded' }, { status: 400 }));
        }


        const formData = await req.formData();
        const iDUser = formData.get('iDUser');
        const material = formData.get('material');
        const caracteristicas = formData.get('caracteristicas');
        const email = formData.get('email');
        const telefono = formData.get('telefono');
        const file = formData.get('file');
        // Subir la imagen a Supabase y obtener la URL pública
        console.log(file);
        const imageUrl = await uploadFile(file);  // Pasar el archivo procesado por Multer

        if (!imageUrl) {
          return resolve(NextResponse.json({ error: 'Error uploading image' }, { status: 400 }));
        }

        // Crear un nuevo material en la base de datos
        const newMaterial = await prisma.material.create({
          data: {
            iDUser: parseInt(iDUser),  // Asegúrate de que sea un entero si es necesario
            material,
            caracteristicas,
            email,
            telefono,
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
