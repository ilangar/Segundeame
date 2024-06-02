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
      <body className={inter.className}>{children}
      <header>
        <div>
          <img src="/home.png" alt="logo de segundeame" />
        </div>
        <nav>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </header>
      </body>
    </html>
  );
}


