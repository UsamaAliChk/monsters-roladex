import React from 'react'
import './card.css'
export default function Card( {monster} ) {
    return (
        <div className="card">
            <img alt="Monster" src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
            <h2>{monster.name}</h2>
        </div>
    )
}
