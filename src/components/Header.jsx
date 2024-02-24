import React from 'react'
import { Link } from 'react-router-dom';
import {FiShoppingBag} from "react-icons/fi";
import { useSelector } from 'react-redux';

const Header = () => {

  const { cartItems } = useSelector(state => state.cart);

  return (
    <>
       <div className="navbar">
          <div className="logo">
            REDUX TOOLKIT
          </div>
          <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/cart"} >
                Your Cart 
                <FiShoppingBag />
                <span>{cartItems.length}</span>
            </Link>
          </div>
       </div>
    </>
  )
}

export default Header