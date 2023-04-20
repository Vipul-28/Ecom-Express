import React from 'react'
import FormatPricer from "../helpers/FormatPricer"
import CartAmountToggle from "../components/CartAmountToggle"
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/Cart_Context'
import { useState } from 'react'
const CartData = ({id,amount,name,price,image,color,max}) => {


    const {setIncrease,setDecrease,removeData}=useCartContext();
  return (
    <div className="cart_heading grid grid-five-column">
    <div className='cart-image--name'>
     <div>
    
        <figure>
            <img src={image} alt={id} />
        </figure>
     </div>
     <div>
        <p>{name}</p>
       <div className='color-div'>
        <p>colors:</p>
        <div className='color-style' style={{background:color,color:color}}></div>
       </div>
     </div>
    </div>
    <div className='cart-hide'>
       <p>
       <FormatPricer price={price} />
       </p>
    </div>
    <CartAmountToggle amount={amount} setDecrease={()=>setDecrease(id)} setIncrease={()=>setIncrease(id)} />
     <div className="cart-hide">
        <p>
        <FormatPricer price={price*amount} />
        </p>
     </div>
     <div>
        <FaTrash onClick={()=>removeData(id)} className='remove_icon' />
     </div>
    </div>
  )
}

export default CartData