import { Inter } from "next/font/google";
import "./globals.css";
import HamburgerMenu from './components/menu.jsx';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Segundeame",
  description:
    "Segundeame es una web que conecta a los usuarios interesados en darle una segunda oportunidad a materiales y objetos. Tiene como objetivo abordar el problema de la cantidad de basura que podría tener un segundo uso pero que a menudo se desecha.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="text-xl">
      <body className={inter.className}>
        <header className="w-full flex justify-between items-center bg-[#2F653E] text-xl fixed top-0 z-50">
          <div className="flex items-center ml-2">
            <a href="./" className="flex items-center m-2">
              <img
                src="/logo.png"
                alt="logo de segundeame"
                className="h-10"
              />
            </a>
          </div>
          <HamburgerMenu />
        </header>
        <section>{children}</section>
      </body>
    </html>
  );
}
