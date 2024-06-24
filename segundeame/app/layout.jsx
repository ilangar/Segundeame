import { Alegreya } from "next/font/google";
import "./globals.css";
import HamburgerMenu from './components/menu.jsx';

const inter = Alegreya({ subsets: ["latin"] });

export const metadata = {
  title: "Segundeame",
  description: "Segundeame es web que conecta a los usuarios interesados en darle una segunda oportunidad a materiales y objetos. Tiene como objetivo abordar el problema de la cantidad de basura que podría tener un segundo uso pero que a menudo se desecha"
};


export default function RootLayout({ children }) {
  return (
    <html lang="es" className="text-xl">
      <body className={inter.className}>
        <header className="w-full flex justify-between align-center bg-[#80B48B] text-xl">
          <div className="flex align-center justify-center  ml-2">
            <a href="./" className="flex align-center justify-center m-2"><img src="\logo.png" alt="logo de segundeame" className="h-10" /></a>
          </div>
          <nav className="flex align-center justify-center">

            <ul className="flex align-center justify-center">
              <li className="flex align-center justify-center mt-3 mr-20"><a href="./perfil" className="text-white hover:text-[black] flex align-center justify-center">Perfil</a></li>
            </ul>
          </nav>
          <HamburgerMenu/>

        </header>
        {children}
      </body>
    </html>
  );
}


