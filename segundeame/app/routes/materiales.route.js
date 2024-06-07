import { Router } from "express";
import {PrismaClient} from '@prisma/client'

const router = Router()
const prisma = new PrismaClient();

router.get('/materiales', async (req, res) =>{
    const material = await prisma.material.findMany()
    res.json(material)
})

router.post('/materiales', async (req, res) => {
    const newMaterial = await prisma.material.create({
        data: req.body, 
    })
    res.json(newMaterial)
})

export default router;