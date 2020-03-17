import React from 'react';

const shoes = (props) => {
  return (
    <div className="Shoes">
      <p>I have {props.brand} {props.type}'s and they are size {props.size}</p>
    </div>
  )
}


export default shoes;
