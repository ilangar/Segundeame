import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function uploadImage(file) {
    const fileName = `${Date.now()}_${file.originalname}`; // Nombre único para la imagen
    const { data, error } = await supabase.storage
        .from('images') // El nombre del bucket en Supabase
        .upload(fileName, file.buffer, {
            contentType: file.mimetype,
        });

    if (error) {
        throw new Error('Error uploading image to Supabase');
    }

    // Obtener la URL pública de la imagen subida
    const url = `${supabase.storage.from('images').getPublicUrl(fileName).data.publicUrl}`;
    return url;
}
