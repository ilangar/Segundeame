import { Router } from "express";
import {PrismaClient} from '@prisma/client'

const router = Router()
const prisma = new PrismaClient();

router.get('/materiales', async (req, res) =>{
    const material = await prisma.material.findMany()
    res.json(material)
})

export default router;