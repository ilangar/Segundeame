import { NextResponse } from 'next/server';
import { prisma } from '@/db';

export async function POST(req, res) {
    try {
        const body = await req.json();
        const newChatBot = await prisma.chatBot.create({
            data: {
                iDUser: body.iDUser,
                mensajeUsuario: body.mensajeUsuario,
            },
        });

        return NextResponse.json({ message: newChatBot }, { status: 201 });
    } catch (error) {
        console.error('Error al enviar mensaje:', error.message, error);
        return NextResponse.json({ error: 'Error al enviar mensaje', details: error.message }, { status: 400 });
    }
}
