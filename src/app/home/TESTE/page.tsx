"use client";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

const TESTE: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <Card>
        <h1>Alguma coisa</h1>
        <p>Testando</p>
        <p>Outro teste</p>
        <Button 
          variant="outline"
          onClick={() => {
            console.log('Botão clicado');
            router.push('/home/TESTE/addTeste');
          }}
        >
          Ir para Add Teste
        </Button>
      </Card>
    </div>
  );
};

export default TESTE;
