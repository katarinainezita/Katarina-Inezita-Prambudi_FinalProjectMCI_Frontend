import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styles from "./styles/navbar.module.css"
import Logo from '../assets/logo.png';
import { FaShoppingCart } from "react-icons/fa";

class Navbar extends Component {
  render() {
    return (
        <div className={Styles.header}>
            <div className={Styles.container}>            
            <div className={Styles.logo}>
                <img src={Logo} alt = "Logo" style={{ width: '30px', height: '30px', marginTop: '8px'}}></img>
                <h1 style={{fontWeight: '500px', marginTop: '14px', marginLeft: '10px', fontSize: '20px'}}> Nusantara</h1>
            </div>
            <ul className={Styles.topmenu}>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/transaction">Transaction</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
            <div classname={Styles.cart}>
                <FaShoppingCart style={{width: '100%', marginLeft: '10px', marginTop: '16px', marginRight: '100%'}}/>
            </div>
        </div>
        </div>
      
    );
  }
}

export default Navbar;