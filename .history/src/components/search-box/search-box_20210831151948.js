import React from 'react'
import './searchbox.css'
export default function SearchBox( {setsearchText} ) {
    return (
        <div>
            <input type="search" className="search-box" onChange={e=>setsearchText(e.target.value)} placeholder="Enter Name"/>
        </div>
    )
}
