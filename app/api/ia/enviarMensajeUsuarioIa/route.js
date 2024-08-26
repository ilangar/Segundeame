import { NextResponse } from 'next/server';
import { prisma } from '@/db';


const axios = require('axios');

const ipAddress = 'quintoproyecto.onrender.com';

function post (){
axios.post(`http://${ipAddress}`, {
title: "mensaje usuario", 
body: "materiales" })
.then(response => {
resp = (response.data);
console.log('Response data:', response.data)
})
.catch(error => {
console.error('Error:', error.message);
});
}