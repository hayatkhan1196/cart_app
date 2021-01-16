import React, { Component } from "react";
import Products from "./Section/Products";
import Details from "./Section/Details";
import { Route } from "react-router-dom";
import Cart from "./Section/Cart";
import Payment from "./Section/Payment";
export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Products} exact />
        <Route path="/product" component={Products} exact />
        <Route path="/product/:id" component={Details} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/payment" component={Payment} exact />
      </section>
    );
  }
}

export default Section;
