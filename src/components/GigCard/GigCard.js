import React from "react";
import './GigCard.scss'
import { Link } from "react-router-dom";

const GigCard = ( item ) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src={item.item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.item.pp} alt="" />
            <span>{item.item.username}</span>
          </div>
          <p>{item.item.desc}</p>
          <div className="star">
            <img src="./star.png" alt="" />
            <span>{item.item.star}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              $ {item.item.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;