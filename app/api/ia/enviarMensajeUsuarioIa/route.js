import { NextResponse } from 'next/server';
import axios from 'axios';
import { prisma } from '@/db'; // Asumiendo que tienes una conexión configurada con Prisma

const ipAddress = 'quintoproyecto.onrender.com';

export async function POST(req) {
  try {
    const response = await axios.post(`http://${ipAddress}`, {
      title: "mensaje usuario",
      body: "materiales"
    });

    console.log('Response data:', response.data);

    // Retornar una respuesta si es necesario
    return NextResponse.json({ data: response.data });
  } catch (error) {
    console.error('Error:', error.message);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
