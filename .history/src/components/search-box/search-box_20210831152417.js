import React from 'react'
import './searchbox.css'
export default function SearchBox( {placeholder,handelChange} ) {
    return (
        <div>
            <input type="search" className="search-box" onChange={handelChange} placeholder={placeholder}/>
        </div>
    )
}
