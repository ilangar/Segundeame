import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/db';

export async function POST(req, res) {
    try {
        const body = await req.json();

        const newMaterial = await prisma.material.create({
            data: {
                iDUser: body.iDUser,
                material: body.material,
                caracteristicas: body.caracteristicas,
                email: body.email,
                telefono: body.telefono,
                fotoUrl: body.fotoUrl,
            },
        });

        return NextResponse.json({ message: newMaterial }, { status: 201 });
    } catch (error) {
        console.error('Error creating material:', error);
        return NextResponse.json({ error: 'Error creating material' }, { status: 400 });
    }
}