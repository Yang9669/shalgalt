import './tom.css';
import React from 'react'
// import {Routes, Route, useNavigate} from 'react-router-dom';

function Tom() {
  const buttonTypes = {
    red: "red",
    blue: "blue",
    green: "green",
}
  return (
    <div className="Tom">
        <div className='dund'>
              <div className='ulaan'>
                  <button className='ulaan1'>READ MORE</button>
              </div>
              <div className='Zurag'></div>
              <div className='nogoon'>
                  <button className='nogoon1'>READ MORE</button>
              </div>
              <div className='blue'>
                  <button className='blue1'>READ MORE</button>
              </div>
               {/* <button 
          className={getClasses([styles.button, styles[`button-${buttonTypes[variant]}`]])}>
              <img src={img} alt="" className={variant === "black" ? styles.displayNone:styles.img}/>
              {text}
          </button> */}
        </div>
    </div>
    
  );
}

export default Tom;
