import React from 'react'
import '../Card/Card.css'
import { Link } from 'react-router-dom'
const Cards =({emoji,heading,detail,data,link})=> {
  return (
    <>
    <div className='photo'>
        <img src={emoji}/>
        <span>{heading}</span>
        <span>{detail}</span>
        <button  className='  c-button'>{<Link to={link}>{data}</Link>}</button>
    </div>
    </>
  )
}

export default Cards