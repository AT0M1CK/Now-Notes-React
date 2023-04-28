import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen flex">
      <nav className="w-56 flex-none bg-slate-300 ...">Sidebar</nav>

      <main className="flex-1 min-w-0 overflow-auto ...">
        <div>Hello there!</div>
      </main>
    </div>
  );
}
