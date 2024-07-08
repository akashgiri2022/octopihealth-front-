import React from 'react'
import Card from './Card.jsx'
import Data from "./Data.js"
import "../styles.css"

function Exercise() {
    const resArr = Data.map((data)=>{
        return <Card data={data} key={data.id}/>
    })

  return (
    <div className='card-grid'>
        {resArr}
    </div>
  )
}

export default Exercise
