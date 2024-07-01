"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation"; // Corrigido: Importar useRouter e usePathname de 'next/navigation'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname(); // Corrigido: Usar usePathname para acessar a rota atual

  return (
    <div className="home-layout">
      <header className="header">
        <div className="container">
          <h1>Meu Site</h1>
        </div>
      </header>

      <div className="flex gap-4">
        {
          pathname !== "/home/TESTE" && (
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="p-1 rounded-full hover:bg-gray-200"
            >
              <ArrowLeft className="w-6 h-6 text-gray-500" />
            </Button>
          )
        }
      </div>
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>© 2024 Meu Site. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
