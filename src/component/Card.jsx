import React from 'react'
import '../styles/Card.css'

export default function Card({handleClick,item}) {


    const {title,author,price,img}=item;
  return (
    <div className='card'>
        <div className="image_box">
        <img src={item.img} alt="image" />

        </div>

        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p> Price- {price } Rs</p>
            <button onClick={()=>{
                handleClick(item)
            }}>Add to Cart</button>
        </div>
        
      
    </div>
  )
}
