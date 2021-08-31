import React from 'react'
import './card-list.css'
export default function cardlist(props) {
    return (
        <div className="card-list">
            {props.children}
        </div>
    )
}
