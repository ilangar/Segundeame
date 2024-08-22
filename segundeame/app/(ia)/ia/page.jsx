"use client"

import ChatIA from "@/app/components/chatIA";


export default function IA() {
  

    const handleSearch = (searchTerm) => {
      console.log("Se realizó una búsqueda con el término:", searchTerm);
      // Puedes realizar otras acciones, como actualizar el estado del componente padre, hacer una llamada a una API, etc.
    };
    return (
     
    <div className="bg-[#6C9675] h-[90.1%]">
      <div >
        <ChatIA onSearch={handleSearch}/>
      </div>
    </div>
  
       
    );
  }
  