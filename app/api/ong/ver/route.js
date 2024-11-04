import { NextResponse } from 'next/server';
import { prisma } from '@/db';

export async function GET(req) {
    try {
        const newONG = await prisma.oNG.findMany();
        return NextResponse.json({ message: newONG }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
export async function POST(req) {
    try {
        const body = await req.json(); 
        const busqueda = body.busqueda || ''; 

        const newONG = await prisma.oNG.findMany({
            where: {
                material: {
                    contains: busqueda, 
                    mode: 'insensitive', 
                },
            },
        });

        return NextResponse.json({ message: newONG }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
