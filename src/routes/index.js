import React from "react";
import { Route, Switch } from "react-router-dom";
import Styles from "../components/styles/global.module.css";

import Homepage from "../pages/homepage";
import CartPage from "../pages/cart";
import ContactPage from "../pages/contact";
import ProductPage from "../pages/product";
import ProductDetailPage from "../pages/productDetail";
import AboutPage from "../pages/about";
import TransactionPage from "../pages/transaction";
import CheckoutPage from "../pages/checkout";
import Navbar from "../components/navbar";

const Routes = () => {
  return (
    <div>
      <div className={Styles.layout} >
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/product" exact component={ProductPage} />
        <Route path="/product/:seller_id" exact component={ProductDetailPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/checkout" exact component={CheckoutPage} />
        <Route path="/transaction" exact component={TransactionPage} />
      </Switch>
      </div>
    </div>
  );
};

export default Routes;