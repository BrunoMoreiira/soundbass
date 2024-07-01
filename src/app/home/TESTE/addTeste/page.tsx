"use client";

import { Button } from "@/components/ui/button";
import router from "next/router";

export default function addTeste(){

    return(

      <div>

      <h1>add alguma merda</h1>

<Button 
          variant="outline"
          onClick={() => {
            console.log('Botão clicado');
            router.push('/home/TESTE/addTeste');
          }}
        >
          alguma merda
        </Button>

        <br />
        <br />


      </div>
    )

  
}