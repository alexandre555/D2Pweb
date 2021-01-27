import { useState } from 'react';

function Home(){
    return (
        <div>
            <h1>Home a</h1>
            <Contador />
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