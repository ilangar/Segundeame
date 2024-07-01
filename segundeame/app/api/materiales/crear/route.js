import { NextRequest, NextResponse } from 'next/server';
import {prisma} from '@/db';

export async function POST(req, res) {
    try {
        const body = await req.json();
        const newMaterial = await prisma.material.create({
            data: {
                iDUser: body.iDUser,
                material: body.material,
                caracteristicas: body.caracteristicas,
                fotoUrl: body.fotoUrl,
            },
        });
        return NextResponse.json({message: newMaterial}, {status:201});
    } catch (error) {
        return NextResponse.json({ error: error }, {status: 400});
    }
}
