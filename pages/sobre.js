import Link from 'next/link';
import { useState } from 'react';

function Home(){
    return (
        <div>
            <h1>D2P - Página Inicial</h1>
            <Link href="/">
                <a>Quer voltar para o início?</a>
            </Link>
            <p>Eu sou um contador de histórias!</p>
        </div>
        
    )
}

export default Home