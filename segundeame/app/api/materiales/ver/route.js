import { NextResponse } from 'next/server';
import { prisma } from '@/db';

export async function GET(req) {
    try {
        const newMaterial = await prisma.material.findMany();
        return NextResponse.json({ message: newMaterial }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
