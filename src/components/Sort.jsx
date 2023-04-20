import React, { useState } from 'react'
import styled from 'styled-components';
import {BsFillGridFill,BsList} from "react-icons/bs"
import { UseFilterContext } from "../context/Filter_Context";

const Sort = () => {
  const {filter_products,grid_view,setGridView,setListView,sorting}=UseFilterContext();
  return (
    <Wrapper className='sort-section'>
     <div className="sorting-list--grid">
     <button onClick={setGridView} className={grid_view?"active sort-btn":'sort-btn'}>
      <BsFillGridFill className="icon" />
     </button>
     <button onClick={setListView} className={!grid_view?"active sort-btn":'sort-btn'}>
      <BsList className='icon' />
     </button>
     </div>
      <div className="product-data">
        <p>{`${filter_products.length} product Available`}</p>
      </div>
      <div className='sort-section'>
      <form action="#">
        <label htmlFor="sort">
          <select name="sort" id="sort" className='sort-selection--style' onClick={sorting}>
            <option value="lowest">price(Lowest)</option>
            <option value="#" disabled></option>
            <option value="Highest">price(Highest)</option>
            <option value="#" disabled></option>
            <option value="AtoZ">A-Z</option>
            <option value="#" disabled></option>
            <option value="ZtoA">Z-A</option>
          </select>
        </label>
      </form>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;


export default Sort