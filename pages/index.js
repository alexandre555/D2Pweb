import Link from 'next/link';

function Home(){
    return (
        <div>
            <h1>D2P - Página Inicial</h1>
            <Link href="/sobre">
                <a>Quem sou eu?</a>
            </Link>
        </div>
        
    )
}

export default Home