const FilterReducer=(state,action)=>
{
    switch(action.type)
    {
        case "Load_Filter_Product":
         let priceArr = action.payload.map((curElem) => curElem.price);
         let maxPrice = Math.max(...priceArr);
       return {
            ...state,
            filter_products:[...action.payload],//use copy insted of real data because we dont want to chnage any origm=nal data
            all_products:[...action.payload],
            filters: {...state.filters,maxPrice:maxPrice,price: maxPrice },
            }
            case "set_grid_view":
               return {
                ...state,
                grid_view:true,
                }
                case "set_List_view":
                   return{
                    ...state,
                    grid_view:false,
                    }
                    case "get_sort_value":
                        let userSortValue=document.getElementById("sort");
                        let sort_value=userSortValue.options[userSortValue.selectedIndex].value;
                        console.log(sort_value);
                        return{
                            ...state,
                            sorting_value:sort_value,
                        }
                        case "sorting_products":
                            let newSortdata;
                           //  const {filter_products}=state;
                            let tempSortData=[...action.payload]

                            if(state.sorting_value==="AtoZ")
                            {
                               newSortdata=tempSortData.sort((a,b)=>a.name.localeCompare(b.name))
                            }
                            else if(state.sorting_value==="ZtoA")
                            {
                               newSortdata=tempSortData.sort((a,b)=>b.name.localeCompare(a.name))
                            }
                            else if(state.sorting_value==="Highest")
                            {
                               newSortdata=tempSortData.sort(((a,b)=>b.price-a.price))
                            }
                            else if(state.sorting_value==="lowest")
                            {
                               newSortdata=tempSortData.sort(((a,b)=>a.price-b.price))
                            }
                            return{
                                ...state,
                                 filter_products:newSortdata,
                            }
                            case "get_data_value":
                               const {name,value}=action.payload;                                 
                                 return{
                                    ...state,
                                    filters:{
                                       ...state.filters,
                                       [name]:value,
                                    },
                                 };
                           // let newSortData;
                           // // let tempSortProduct = [...action.payload];
                     
                           // const { filter_products, sorting_value } = state;
                           // let tempSortProduct = [...filter_products];
                     
                           // const sortingProducts = (a, b) => {
                           //   if (sorting_value === "lowest") {
                           //     return a.price - b.price;
                           //   }
                     
                           //   if (sorting_value === "highest") {
                           //     return b.price - a.price;
                           //   }
                     
                           //   if (sorting_value === "a-z") {
                           //     return a.name.localeCompare(b.name);
                           //   }
                     
                           //   if (sorting_value === "z-a") {
                           //     return b.name.localeCompare(a.name);
                           //   }
                           // };
                     
                           // newSortData = tempSortProduct.sort(sortingProducts);
                     
                           // return {
                           //   ...state,
                           //   filter_products: newSortData,
                           // }
                                 case "filter_products":
                                    let{all_products}=state;
                                    let temFiltersProducts=[...all_products];
                                    const {text,category,company,color,price}=state.filters;
                                    if(text)
                                    {
                                       temFiltersProducts=temFiltersProducts.filter((curElem)=>
                                       {
                                          return curElem.name.toLowerCase().includes(text);//agr ap include krte hai jo ki humne kia hai to agr kisis v word mai s hoga vo show hone lgega or agr starts with kroge to particukar jo value  s se start hori hai vhi show krega
                                       })
                                    }
                                    if(category)
                                    {
                                       temFiltersProducts=temFiltersProducts.filter((curElem)=>
                                       {
                                          if(category==="All")
                                          {
                                             return curElem;
                                          }
                                          else
                                          {
                                             return curElem.category===category
                                          }
                                       })
                                    }
                                    if(company)
                                    {
                                       
                                       temFiltersProducts=temFiltersProducts.filter((curElem)=>
                                       {
                                          if(company==="All")
                                          {
                                             return curElem;
                                          }
                                          else
                                          {
                                             return curElem.company===company
                                          }
                                       })
                                    }
                                    // if (color) {
                                    //    if(color==="All")
                                    //    {
                                    //       temFiltersProducts = temFiltersProducts.filter((curElem) =>
                                    //       curElem
                                    //       );
                                    //    }
                                    //    else
                                    //    {
                                    //       temFiltersProducts = temFiltersProducts.filter((curElem) =>
                                    //         curElem.colors.includes(color)
                                    //         );
                                    //    }
                                    //  }
                                    if (color !== "all") {
                                       temFiltersProducts = temFiltersProducts.filter((curElem) =>
                                         curElem.colors.includes(color)
                                       );
                                     }
                                    if(price)
                                     {
                                       temFiltersProducts = temFiltersProducts.filter((curElem) =>
                                       curElem.price <=price
                                     )}

                                    return{
                                       ...state,
                                       filter_products: temFiltersProducts,
                                    }
                                    case "reset_all_values":
                                      return{
                                       ...state,
                                       filters:{
                                          ...state.filters,
                                          text:"",
                                          categroies:"all",
                                          companies:"all",
                                          color:"all",
                                          maxPrice: state.filters.maxPrice,
                                          price: state.filters.maxPrice,
                                          minPrice:0 ,
                                      },


                                      }
                                   default:
                                   return state;
                              
    }
} 
export default FilterReducer;