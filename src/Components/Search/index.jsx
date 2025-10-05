
import React from 'react'
import './index.css'


export default function Search({searchValue, setSearchValue}) {
  return (
    <div className='Search_Container'>
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
    </div>
  )
}
