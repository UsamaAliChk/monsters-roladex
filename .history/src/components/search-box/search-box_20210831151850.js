import React from 'react'
import './searchbox.css'
export default function SearchBox( {setsearchText} ) {
    return (
        <div>
            <input type="search" onChange={e=>setsearchText(e.target.value)} placeholder="Enter Name"/>
        </div>
    )
}
