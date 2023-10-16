import Link from "next/link";
import "./global.css";
import Navbar from "../components/Navbar";
import { orbitron } from "./fonts";
import { exo2 } from "./fonts";

export const metadata = {
  title: {
    default: "Epiq Gamer",
    template: "%s | Epiq Gamer",
  },
  description: "Reviewing only the best indie games!",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      <body className='flex flex-col px-4 py-2 min-h-screen" bg-gray-400'>
        <header>
          <Navbar />
        </header>

        <main className="py-3">{children}</main>
        <footer className="border-t py-3 text-center bg-gray-400 text-xs">
          Game Data and images courtesy of{" "}
          <a href="https://rawg.io" target="_blank">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
