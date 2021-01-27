import { useState } from 'react';
import Link from 'next/Link';

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