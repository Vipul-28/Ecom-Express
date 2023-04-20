import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import {Button} from "../styles/Button"
const CartAmountToggle = ({amount,setIncrease,setDecrease}) => {

  return (
    <div className='cart-button'>
        <div className="amount-toggle">
            <button onClick={()=>setDecrease()}>
                <FaMinus/>
            </button>
            <div className='amount-style'>{amount}</div>
            <button onClick={()=>setIncrease()}>
                <FaPlus />
            </button>
        </div>
    </div>
  )
}

export default CartAmountToggle