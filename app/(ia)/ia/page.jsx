"use client"

require('dotenv').config();
const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY)
import ChatIA from "@/app/components/chatIA";
import { GoogleGenerativeAI } from "@google/generative-ai"
import ReactDOM from 'react-dom';
const genAI = new GoogleGenerativeAI(API_KEY);

import { useState } from 'react';

export default function IA() {

  const [respuestaIA, setRes] = useState("")
  
  const handleSearch = async (inputText) => {
    console.log("Se realizó una búsqueda con el término:", inputText);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
    const prompt = inputText;

    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      console.log(response.candidates[0].content.parts[0].text);
      setRes(response.candidates[0].content.parts[0].text) 
    } catch (error) {
      console.error('Error al generar contenido:', error);
    }
  };
  
  return (

    <div className="bg-[#6C9675] h-full">
      <div >
        <ChatIA onSearch={handleSearch} />
        <div className="relative top-20 flex justify-center" >
          dela
          <p className="text-center rounded-lg py-4 px-6 bg-[#80B48B] w-full max-w-[90%] md:max-w-[75%] lg:max-w-[60%] max-h-[425px] overflow-y-auto break-words border-[#80B48B] border-8"> 
            {"comenzá cortando las piernas del jean para obtener dos rectángulos grandes que serán las partes frontal y trasera, y una tira larga y ancha (de unos 15 cm de ancho) para los laterales y la base. Si querés bolsillos externos, usá los bolsillos traseros del jean, recortalos y cosélos en el rectángulo frontal. Después, colocá el rectángulo trasero sobre la mesa, uní con alfileres la tira larga que será el lateral y la base, rodeando todo el rectángulo, y cosé las piezas juntas. Luego, uní el rectángulo frontal al otro lado de la tira larga, asegurándote con alfileres antes de coser para formar la estructura básica. En la parte superior de la mochila, colocá un cierre para que puedas abrir y cerrar el compartimento principal. Para las correas, cortá dos tiras largas de jean o usá cinturones viejos, cosiendo un extremo en la parte superior trasera y el otro en la parte inferior trasera. Si querés un acabado más prolijo, podés agregar un forro interior con tela que se ajuste al tamaño de las piezas. "} 
          </p>
        </div>
      </div>
    </div>


  );
}

