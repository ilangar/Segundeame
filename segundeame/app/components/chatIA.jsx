"use client" 

//FALTA CONECTARLO A LA BASE DE DATOS 


import React, { useState } from 'react';

const ChatIA = ({ onSearch }) => {
  const [send, setSend] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  }

  const handleSend = () => {
    if(send === true) {
      setSend(false)
    } else {
      setSend(true)
    }
  }
 
  return (
    
    <div className="flex align-center justify-center flex-col ">
      <div>
        {send ? (
          <h1 className="flex align-center justify-center mt-10">Respuesta</h1>   
        ):(
          <h1 className="flex align-center justify-center mt-10 w-[400px]">Cuentale a nuestra IA que proyecto quieres realizar para que te responda ocn los materiales necesarios y los pasos para realizarlo</h1>
         )}
        </div>
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          
          <input type="text" 
            placeholder="Qué necesitas..."
            value={searchTerm}
            onChange={handleSearchChange}
            className=" flex ml-7 mb- py-2 px-40 focus:outline-none focus:ring-2 focus:ring-[#6C9675] drop-shadow-md"
          />
          <button
            type="submit"
            className=" mb-[px] bg-white py-2 px-4 hover:bg-[#80B48B] focus:outline-none drop-shadow-md"
            onClick = {handleSend}
            >
            
          Enviar</button>
        </form>
    </div>
  )
}

export default ChatIA;