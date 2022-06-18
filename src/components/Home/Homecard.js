import React from 'react'
import './Homecard.css'
const Homecard = (props) => {
  return (
    // <div className="contain">
        <div className="card-data">
            <div className="card-data-text">
                <h1>{props.title}</h1>
                <h3>{props.description}</h3>
            </div>
            <div className="card-data-img">
                    <img src={`${props.image}`} alt="card-image" />

                </div>
        </div>
          
    // </div>
  )
}

export default Homecard