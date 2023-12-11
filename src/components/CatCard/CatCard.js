import React from 'react'
import { Link } from 'react-router-dom'
import './CatCard.scss'
const CatCard = (card) => {
  console.log(card)
  return (
    <Link to="/gigs?cat=design">
    <div className='catCard'>
        <img src={card.card.img} alt="" />
        <span className='desc'>{card.card.desc}</span>
        <span className='title'>{card.card.title}</span>
    </div>
    </Link>
  )
}

export default CatCard