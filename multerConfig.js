import multer from 'multer';

// Usamos la memoria para almacenar temporalmente el archivo antes de subirlo
const storage = multer.memoryStorage();
const upload = multer({ storage });

export { upload };
