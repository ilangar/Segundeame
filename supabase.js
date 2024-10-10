import { createClient } from '@supabase/supabase-js';

// Create Supabase client
const supabase = createClient('https://ubhawvhjtmupucogjads.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViaGF3dmhqdG11cHVjb2dqYWRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4Nzk4OTUsImV4cCI6MjAzMTQ1NTg5NX0.Wxf-zwHmP367Fm2mim0rQWO-wF2i_dKFfrtYNL-wEXM')

// Upload file using standard upload
export async function uploadFile(file) {
  // Generar un nombre de archivo único (puedes usar un timestamp o cualquier otra lógica)
  const x = `uploads/${file.name}`;

  const { data, error } = await supabase.storage
    .from('fotos') // Asegurarse de usar el bucket correcto
    .upload(filePath, file);

  if (error) {
    console.error('Error uploading file:', error);
    return null;
  }

  // Obtener la URL pública de la imagen subida
  const { data: publicUrlData } = supabase.storage
    .from('fotos') // Usar el mismo bucket aquí
    .getPublicUrl(filePath);

  const publicUrl = publicUrlData?.publicUrl;
  return publicUrl;
}
