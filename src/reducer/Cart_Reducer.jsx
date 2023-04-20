import React from 'react'

const Cart_Reducer = (state,action) => {
  if(action.type==="add_to_cart")
  {
    let {id,color,amount,product}=action.payload;
    let existingProducts=state.cart.find((curElem)=>
    {
      return curElem.id===id+color;
    })
    if(existingProducts)
    {
      let updatedProduct=state.cart.map((curElem)=>
      {
        if(curElem.id===id+color)
        {
          let newAmount=curElem.amount+amount;
          if(newAmount>=curElem.max)
          {
            newAmount=curElem.max;
          }
          return{
            ...curElem,
            amount:newAmount,
          }
        }
        else
        {
          return curElem
        }
      })
     return{
      ...state,
      cart:updatedProduct,
     }
    }
    else
    {
      let cartProduct;
      cartProduct={
        id:id+color,
        name:product.name,
        color,
        amount,
        image:product.image[0].url,
        price:product.price,
        max:product.stock,
      }
      return{
        ...state,
        cart:[...state.cart,cartProduct],
    }
    }
  }
  if(action.type==="increment_data")
{
  let newInc=state.cart.map((curElem)=>
  {
    if(curElem.id===action.payload)
    {
      let NewAmount=curElem.amount+1
      if(NewAmount>curElem.max)
      NewAmount=curElem.max;
      return{
        ...curElem,
        amount:NewAmount,
      }
    }
    else
    {
      return curElem
    }
  });
  return {...state,cart:newInc}
} 
if(action.type==="decrement_data")
{
  let newDec=state.cart.map((curElem)=>
  {
    if(curElem.id===action.payload)
    {
      let NewAmount=curElem.amount-1
      if(NewAmount<=0)
      NewAmount=1;
      return{
        ...curElem,
        amount:NewAmount,
      }
    }
    else
    {
      return curElem
    }
  });
  return {...state,cart:newDec}
} 
  if(action.type==="remove_data")
  {
    let updateCart;
    updateCart=state.cart.filter((curElem,id)=>
    {
      return curElem.id!==action.payload
    })
  return{
    ...state,
    cart:updateCart,
}
}
if(action.type==="delete_all_data")
{
  return {
    ...state,
    cart:[],
  }
}
if(action.type==="total_item")
{
  let total=state.cart.reduce((initialValue,curElem)=>
  {
    let {amount}=curElem;
    initialValue=initialValue+amount;
    return initialValue;
  },0)
  return {...state,total_item:total}
}
if(action.type==="total_amount")
{
  let amountss=state.cart.reduce((initialValue,curElem)=>
  {
    let {price,amount}=curElem;
    initialValue=initialValue+(price*amount);
    return initialValue
  },0)
  return {...state,total_amount:amountss}

}
return state;

}

export default Cart_Reducer;