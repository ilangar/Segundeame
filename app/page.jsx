"use client"

import React, { useState, useEffect } from 'react';

export default function Home() {
  const images = ['bg-[url("/foto1.png")]', 'bg-[url("/foto2.png")]', 'bg-[url("/foto3.png")]'];
  
  const [backgroundUrl, setBackgroundUrl] = useState(images[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = images.indexOf(backgroundUrl);
      const nextIndex = (currentIndex + 1) % images.length;
      setBackgroundUrl(images[nextIndex]);
    }, 3000);

    return () => clearInterval(timer); 
  }, [backgroundUrl]);

  return (
    <main className={`absolute -z-20 ${backgroundUrl} h-full w-full`}>
      <div className="absolute -z-10 bg-gradient-to-r from-black to-transparent h-full w-full"> 
        <div className="absolute top-12 left-1/2 -translate-x-1/2 items-center bg-transparent h-40 w-full mt-10 pl-8">
          <img src="\logo.png" alt="logo de segundeame" className="h-20"/>
          <p className="text-white ml-4 text-xl">Te segundeamos para que vos puedas ayudar al planeta</p>
        </div>        
      </div>
      
      <div className="ml-12 absolute aling-center bottom-10 bg-[#80B48B] hover:bg-[#6C9675] focus:outline-none focus:bg-green-300 rounded-md py-2 px-4">
        <a href="./elegir" className="text-white ">Inicia sesión</a>
      </div>
    </main>
  );
}
