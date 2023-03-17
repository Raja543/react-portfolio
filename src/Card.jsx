import React from "react";
import "./Card.css";
import img from "./images/css.png";
function Card() {
  return (
    <>
      <div className="Cards">
        <div className="Card">
          <img src={img} alt="mypic" className="Card__img" />
          <div className="Card__info">
            <span className="Card__category">ReactJS</span>
            <h3 className="Card__title">Raja</h3>
          </div>
        </div>
        <div className="Card">
          <img src={img} alt="mypic" className="Card__img" />
          <div className="Card__info">
            <span className="Card__category">ReactJS</span>
            <h3 className="Card__title">Raja</h3>
          </div>
        </div>
        <div className="Card">
          <img src={img} alt="mypic" className="Card__img" />
          <div className="Card__info">
            <span className="Card__category">ReactJS</span>
            <h3 className="Card__title">Raja</h3>
          </div>
        </div>
        <div className="Card">
          <img src={img} alt="mypic" className="Card__img" />
          <div className="Card__info">
            <span className="Card__category">ReactJS</span>
            <h3 className="Card__title">Raja</h3>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Card;
