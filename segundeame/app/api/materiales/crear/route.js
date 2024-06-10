import { Router } from "express";
import {PrismaClient} from '@prisma/client'

const router = Router()
const prisma = new PrismaClient();

router.post('/materiales', async (req, res) => {
    const newMaterial = await prisma.material.create({
        data: req.body, 
    })
    res.json(newMaterial)
})

export default router;