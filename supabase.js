import { createClient } from '@supabase/supabase-js';

// Crear cliente de Supabase
const supabase = createClient(
  'https://ubhawvhjtmupucogjads.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViaGF3dmhqdG11cHVjb2dqYWRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4Nzk4OTUsImV4cCI6MjAzMTQ1NTg5NX0.Wxf-zwHmP367Fm2mim0rQWO-wF2i_dKFfrtYNL-wEXM'
);

// Función para subir archivos
export async function uploadFile(file) {
  try {
    const filePath = `uploads/${file.name}`;  // Usamos el nombre original del archivo
    console.log(file);
    const { data, error } = await supabase.storage
      .from('fotos') // Asegúrate de usar el bucket correcto
      .upload(filePath, file, {  // Cambiamos `file` por `file.buffer`
        contentType: file.mimetype,  // Establecemos el tipo de contenido
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      console.error('Error uploading file:', error);
      return null;
    }

    // Obtener la URL pública de la imagen subida
    const { data: publicUrlData } = supabase
      .storage
      .from('fotos') // Usar el mismo bucket aquí
      .getPublicUrl(filePath);

    const publicUrl = publicUrlData?.publicUrl;
    return publicUrl;
  } catch (error) {
    console.error('Error uploading file:', error);
    return null;
  }
}
