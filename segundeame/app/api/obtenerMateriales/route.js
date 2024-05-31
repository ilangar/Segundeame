const express = require('express');
const multer = require('multer');
const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/api/obtenerMateriales', upload.single('foto'), async (req, res) => {
  const { iDUser, material, caracteristicas, contacto } = req.body;
  const foto = req.file;

  if (!iDUser || !material || !caracteristicas || !contacto) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  let fotoUrl = '';
  if (foto) {
    const fileName = `${Date.now()}-${foto.originalname}`;
    fotoUrl = path.join(__dirname, 'uploads', fileName);
    require('fs').writeFileSync(foto, foto.buffer);
  }

  try {
    const nuevoMaterial = await prisma.material.create({
      data: {
        iDUser: parseInt(iDUser),
        material,
        caracteristicas,
        contacto,
        foto,
      },
    });
    res.status(201).json(nuevoMaterial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el material' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
