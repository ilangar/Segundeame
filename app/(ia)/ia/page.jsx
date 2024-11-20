"use client"

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY)
import ChatIA from "@/app/components/chatIA";
import { GoogleGenerativeAI } from "@google/generative-ai"
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
          <p className="text-center rounded-lg py-4 px-6 bg-[#80B48B] w-full max-w-[90%] md:max-w-[75%] lg:max-w-[60%] max-h-[425px] overflow-y-auto break-words border-[#80B48B] border-8"> 
            {respuestaIA} 
          </p>
        </div>
      </div>
    </div>


  );
}

