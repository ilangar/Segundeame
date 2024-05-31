import Image from "next/image";
import HamburgerMenu from "./components/harmburguer";

export default function Home() {

  const nombre = "Cata"

  return (
   
    <div>
    <HamburgerMenu />
    {/* Resto del contenido de tu página */}
    <h1>Hola</h1>
  </div>

     
  );
}
