import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import {prisma} from '@/db';

export async function GET(req, res) {
    try {
        const newMaterial = await prisma.material.findMany();
        return NextResponse.json({message: newMaterial}, {status:201});
    } catch (error) {
        return NextResponse.json({ error: error }, {status: 400});
    }
}