import React from 'react'
import '../styles/navbar.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Navbar({size,setShow}) {
  return (
    <nav>
        <div className='nav_box'>
            <span className='my_shop'  onClick={()=>setShow(true)}>
                SwiftCart
             </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <i className='fas fa-cart-plus'></i>

                </span>
                <span>{size}</span>
            </div>

        </div>
      
    </nav>
  )
}
