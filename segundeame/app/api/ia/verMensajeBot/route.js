import { NextResponse } from 'next/server';
import { prisma } from '@/db';


const axios = require('axios');

const ipAddress = 'quintoproyecto.onrender.com';

axios.get(`http://${ipAddress}`)
.then(response => {
resp = (response.data);
console.log('Response data:', response.data)
})
.catch(error => {
console.error('Error:', error.message);
});