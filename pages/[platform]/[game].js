import React from 'react'
import {useRouter} from "next/router"
import Link from 'next/link';
import Head from 'next/head';
export default function Game() {
    const router=useRouter();
    const {game,platform}=router.query;
    console.log(router);
    return (
        <div>
            <head>
             <title>
                 {game} | {platform}
                 </title>   
            </head>
            <h1>hola a todos</h1>
            <h1>Estamos en
                la plataforma:
                {platform}
            </h1>
            <h1>Estamos
                viendo el juego: {game}
            </h1>

            <Link href="/ps5/GTA5">
               
                <a>
                    <h2>ps5 - GtaV
                    </h2>
                </a>
                
            
            </Link>
            <Link href="/">
            <a>
Inicio
            </a>
            </Link>
        </div>
    )
}
