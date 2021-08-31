import React from 'react'
import './card-list.css';
import Card from '../card/card';
export default function cardlist(props) {
    return (
        <div className="card-list">
           {
               props.monsters.map(monster=>{
                   return <Card monster={monster}/>
               })
           } 
        </div>
    )
}
