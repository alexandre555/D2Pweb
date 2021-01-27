import Link from 'next/link';

import { useState } from 'react';

function Home(){
    return (
        <div>
            <h1>D2P - Página Inicial</h1>
            <Link href="/sobre">
                <a>Quem sou eu?</a>
            </Link>
            <hr />
            <h1><Contador /></h1>
        </div>
        
    )
}

function Contador(){
    const [contador, setContador] = useState(1);

    function addContador(){
        setContador(contador +1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={addContador}>Add</button>
        </div>
    )
}

export default Home