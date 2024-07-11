import { NextResponse } from 'next/server';
import { prisma } from '@/db';

export async function GET(req) {
    try {
        const newChatBot = await prisma.chatBot.findMany();
        return NextResponse.json({ message: newChatBot }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
