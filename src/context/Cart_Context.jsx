import React, { createContext, useContext, useEffect } from 'react'
import { useReducer } from 'react';
import reducer from "../reducer/Cart_Reducer"

const CartContext=createContext();
const getLocalData=()=>
{
    let newData=localStorage.getItem("MyCart");
    if(newData===[])
    return [];
    else
    return JSON.parse(newData);
}
const initialState={
    // cart:[],
    cart:getLocalData(),
    total_item:"",
    total_amount:"",
    shipping_fee:50000, 
}
const CartProvider=(({children})=>
{
        const [state,dispatch]=useReducer(reducer,initialState)
     const addToCart=(id,color,amount,product)=>{
    
        dispatch({type:"add_to_cart",payload:{id,color,amount,product}});
     };
     const removeData=((id)=>
     {
        dispatch({type:"remove_data",payload:id})
    })
    const clearData=()=>
    {
        dispatch({type:"delete_all_data"});
    }
    const setIncrease=(id)=>
    {
        dispatch({type:"increment_data",payload:id})
    }
    const setDecrease=(id)=>
    {
        dispatch({type:"decrement_data",payload:id})
        
    }
    useEffect(()=>
    {
        // dispatch({type:"total_amount"});
        // dispatch({type:"total_item"})
        dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
        localStorage.setItem("MyCart",JSON.stringify(state.cart));
    },[state.cart]);
        return (<CartContext.Provider value={{...state,addToCart,removeData,clearData,setDecrease,setIncrease}}>
            {children}
        </CartContext.Provider>)
    })
const useCartContext=()=>
{
    return useContext(CartContext)
}
export {CartProvider,useCartContext}