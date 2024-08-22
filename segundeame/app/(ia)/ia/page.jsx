"use client"
const API_KEY = 'AIzaSyDvnumRKZ3buAEEkQYToOlo3JgiaQekIQQ';
import ChatIA from "@/app/components/chatIA";
import { GoogleGenerativeAI } from "@google/generative-ai"
const genAI = new GoogleGenerativeAI(API_KEY);

export default function IA() {
  const handleSearch = async (inputText) => {
    console.log("Se realizó una búsqueda con el término:", inputText);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
    const prompt = inputText;

    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      console.log(response.candidates[0].content.parts[0].text);
      const respuestaIA = response.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error al generar contenido:', error);
    }
  };
  return (

    <div className="bg-[#6C9675] h-[90.1%]">
      <div >
        <ChatIA onSearch={handleSearch} />
        <div className="fixed left-1/2 top-32 -translate-x-1/2 items-center" >
        <p className="flex text-center rounded-lg py-2 w-[520px] bg-[#80B48B]">  </p>
        </div>
      </div>
    </div>


  );
}

