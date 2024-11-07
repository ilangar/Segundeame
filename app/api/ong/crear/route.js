import { NextResponse } from 'next/server';
import { prisma } from '@/db';  // Ya tienes Prisma configurado
import { uploadFile } from '@/supabase';  // Importar la función para subir a Supabase
import multer from 'multer';
import { createClient } from '@supabase/supabase-js';
import https from 'https';

// Configurar Node.js para permitir certificados autofirmados solo en desarrollo
if (process.env.NODE_ENV === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

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
        const formData = await req.formData();
        const iDUser = formData.get('iDUser');
        const material = formData.get('material');
        const caracteristicas = formData.get('caracteristicas');
        const email = formData.get('email');
        const telefono = formData.get('telefono');
        const file = formData.get('file');
        
        console.log(file);

        // Crear un agente https para ignorar certificados autofirmados
        const agent = new https.Agent({
          rejectUnauthorized: false,
        });

        // Subir la imagen a Supabase y obtener la URL pública
        const imageUrl = await uploadFile(file, { agent });  // Pasar el agente en la llamada

        if (!imageUrl) {
          return resolve(NextResponse.json({ error: 'Error uploading image' }, { status: 400 }));
        }

        // Crear un nuevo registro en la base de datos
        const newONG = await prisma.oNG.create({
          data: {
            iDUser: parseInt(iDUser),  // Asegúrate de que sea un entero si es necesario
            material,
            caracteristicas,
            email,
            telefono,
            fotoUrl: imageUrl,  // Almacena la URL de la imagen subida
          },
        });

        resolve(NextResponse.json({ message: newONG }, { status: 201 }));
      } catch (error) {
        console.error('Error creating ONG:', error);
        resolve(NextResponse.json({ error: 'Error creating ONG' }, { status: 400 }));
      }
    });
  });
}
