import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Segundeame",
  description: "Segundeame es web que conecta a los usuarios interesados en darle una segunda oportunidad a materiales y objetos. Tiene como objetivo abordar el problema de la cantidad de basura que podría tener un segundo uso pero que a menudo se desecha"
};



export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header className="w-full flex justify-between align-center bg-green-700">
          <div className="flex align-center justify-center ml-2">
            <a href="./"><img src="\logo.png" alt="logo de segundeame" className="h-10" /></a>
          </div>
          <nav className="flex align-center justify-center">
            <ul className="flex align-center justify-center">
              <li className="flex align-center justify-center mr-2"><a href="./perfil" className="text-white align-center justify-center">Perfil</a></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}


