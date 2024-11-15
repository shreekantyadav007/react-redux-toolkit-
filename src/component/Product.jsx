import React from 'react'

export const Product = ({name, imageUrl, price, handleClick}) => {
  return (
    <>
        <div className="card" key={name}>
            <img src={imageUrl} alt="" />
            <h2>{name}</h2>
            <h2>Price: {price}</h2>
            <button className='btn'  onClick={handleClick}>Add to cart</button>
            {/* <input type='hidden' name='quantity' value={quantity} /> */}
        </div>
    </>
  );
}
