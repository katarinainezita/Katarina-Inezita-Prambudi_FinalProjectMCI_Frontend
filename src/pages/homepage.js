import React, { Component } from 'react';
import Styles from '../components/styles/global.module.css';

import produk_1 from "../assets/produk/image Product (1).png";
import produk_2 from "../assets/produk/image Product (2).png";
import produk_3 from "../assets/produk/image Product (3).png";
import produk_4 from "../assets/produk/image Product (4).png";
import produk_5 from "../assets/produk/image Product.png";
import produk_6 from "../assets/produk/Product Picture01.png";
import produk_7 from "../assets/produk/Product Picture02.png";
import produk_8 from "../assets/produk/Product Picture03.png";

class Homepage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={`${Styles.wrapper} ${Styles.banner_1}`}></div>
                <div className={Styles.wrapper}>
                    <div className={Styles.row}>
                        <div className={Styles.card}>
                            <div className={Styles.input_group_1}>
                                <input type="search" placeholder="Cari Produk"/>
                                <button>Cari</button>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.row}>
                        <div className={Styles.grid_produk}>
                            <div className={Styles.item_produk}>
                                <img src={produk_1} alt="Item Produk" />
                                <h2>Nike Air Max 270 React</h2>
                                <h4>IDR 900.000</h4>
                                <button>BELI</button>
                            </div>
                            <div className={Styles.item_produk}>
                            <img src={produk_2} alt="Item Produk" />
                                <h2>Nike Air Max 270 React</h2>
                                <h4>IDR 540.000</h4>
                                <button>BELI</button>
                            </div>
                            <div className={Styles.item_produk}>
                            <img src={produk_3} alt="Item Produk" />
                                <h2>Nike Air Max 270 React</h2>
                                <h4>IDR 1.900.000</h4>
                                <button>BELI</button>
                            </div>
                            <div className={Styles.item_produk}>
                            <img src={produk_4} alt="Item Produk" />
                                <h2>Nike Air Max 270 React</h2>
                                <h4>IDR 700.000</h4>
                                <button>BELI</button>
                            </div> 
                            <div className={Styles.item_produk}>
                            <img src={produk_5} alt="Item Produk" />
                                <h2>Nike Air Max 270 React</h2>
                                <h4>IDR 500.000</h4>
                                <button>BELI</button>
                            </div> 
                            <div className={Styles.item_produk}>
                            <img src={produk_6} alt="Item Produk" />
                                <h2>Nike Air Max 270 React</h2>
                                <h4>IDR 1.200.000</h4>
                                <button>BELI</button>
                            </div> 
                            <div className={Styles.item_produk}>
                            <img src={produk_7} alt="Item Produk" />
                                <h2>Nike Air Max 270 React</h2>
                                <h4>IDR 500.000</h4>
                                <button>BELI</button>
                            </div>
                            <div className={Styles.item_produk}>
                            <img src={produk_8} alt="Item Produk" />
                                <h2>Nike Air Max 270 React</h2>
                                <h4>IDR 990.000</h4>
                                <button>BELI</button>
                            </div>  

                        </div>
                        
                    </div>
                </div>

                
            </React.Fragment>
        )
    }
}

export default Homepage;