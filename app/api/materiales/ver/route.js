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

export async function POST(req) {
    try {
        const body = await req.json(); 
        const busqueda = body.busqueda || ''; 

        const newMaterial = await prisma.material.findMany({
            where: {
                material: {
                    contains: busqueda, 
                    mode: 'insensitive', 
                },
            },
        });

        return NextResponse.json({ message: newMaterial }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
