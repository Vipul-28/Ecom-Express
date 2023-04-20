import React from 'react'
import { useReducer } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useContext } from 'react'
import { useProductContext } from './ProductContact';
import reducer from "../reducer/FilterReducer"
const FilterContext=createContext();
const initialState=
{
    filter_products:[],
    all_products:[],
    grid_view:false,
    sorting_value:"lowest",
    filters:{
        text:"",
        categroies:"all",
        companies:"all",
        color:"all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },
}
const Filter_Context = ({children}) => {
    const {products}=useProductContext();
   const[state,dispatch]= useReducer(reducer,initialState);
   const setGridView=()=>
   {
    return dispatch({type:"set_grid_view"})
   }
   const setListView=()=>
   {
    return dispatch({type:"set_List_view"})
   }
   const sorting=()=>
   {
    dispatch({type:"get_sort_value"})
   }
   const updateFilterValue=(event)=>
   {
    let name=event.target.name;
    let value=event.target.value;
    return dispatch({type:"get_data_value",payload:{name,value}});
   }
   const clearFun=()=>
   {
     return dispatch({type:"reset_all_values"})
   }
//    useEffect(()=>
//    {
//        dispatch({type:"sorting_products",payload:products})
//        dispatch({type:"filter_products"});
    
//    },[products,state.sorting_value,state.filters])
   
//    useEffect(()=>
//    {
//        dispatch({type:"sorting_products",payload:products})
//     dispatch({type:"filter_products"});

//    },[state.filters]))
useEffect(()=>{
 dispatch({type:"Load_Filter_Product",payload:products})
},[products])
useEffect(()=>
{
    dispatch({type:"sorting_products",payload:products})
    dispatch({type:"filter_products"});   
},[products, state.sorting_value, state.filters])


  return (
   <FilterContext.Provider value={{...state,setGridView,setListView,sorting,updateFilterValue,clearFun}}>
   {children}
   </FilterContext.Provider>
  )
}
export const UseFilterContext=()=>
{
    return useContext(FilterContext);
}
export default Filter_Context