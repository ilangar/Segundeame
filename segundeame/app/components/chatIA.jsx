"use client"

import React, { useState } from 'react';


const ChatIA = ({ onSearch = null }) => {
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
    if (send === true) {
      setSend(false)
    } else {
      setSend(true)
    }
  }

  return (

    <div className="flex align-center justify-center flex-col   ">
      <div className="fixed left-1/2 top-32 -translate-x-1/2 items-center ">
        {send ? (
          <p className="flex text-center rounded-lg px-2 py-2 w-[520px] bg-[#80B48B]">Creando una idea... </p>
        ) : (
          <h1 className="flex text-center rounded-lg py-2 w-[520px] bg-[#80B48B]">Cuentale a nuestra IA que proyecto quieres realizar para que te responda ocn los materiales necesarios y los pasos para realizarlo</h1>
        )}
      </div>

      <form onSubmit={handleSearchSubmit} className=" flex align-center items-center">
        <div className=" fixed focus:outline-none bottom-4 left-1/2 -translate-x-1/2 items-center">
          <label className=" ">
            <input type="text" id="inputText" placeholder="Qué necesitas..." value={searchTerm} onChange={handleSearchChange}
              className="py-2 px-20 bg-white focus:outline-none drop-shadow-md rounded-l-lg"
            />
          </label>

          <button
            type="submit" id="generateButton"
            className="fixed bg-white py-2 px-4 hover:bg-[#80B48B] focus:outline-none drop-shadow-md rounded-r-lg"
            onClick={handleSend}
          >Enviar</button>
        </div>
      </form>


    </div>


  )
}

export default ChatIA;