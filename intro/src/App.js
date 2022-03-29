import React, { Component } from "react";
import Navi from "./Navi";
import { Col, Container, Row } from "reactstrap";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import Notfound from "./Notfound";
import Cartlist from "./Cartlist";
import Formdemo from "./Formdemo";
import Formdemo2 from "./Formdemo2";


export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };
  changeCategory = (ctgry) => {
    this.setState({ currentCategory: ctgry.categoryName });
    this.getProducts(ctgry.id);
  };

  componentDidMount() {
    this.getProducts();
  }
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  AddtoCart = (product) => {
    let newCart = this.state.cart;
    var addedİtem = newCart.find((c) => c.product.id === product.id);
    if (addedİtem) {
      addedİtem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added", 1); 
  };
  removeFromCart = (product) => {
    var newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
  };
  render() {
    let Productinfo = { title: "Product", surname: "" };
    let Categorinfo = { title: "", surname: "kerim" };

    return (
      <div>
        <Container>
          <Row>
            <Navi
              removeFromCart={this.removeFromCart}
              cart={this.state.cart}
            ></Navi>
          </Row>

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={Categorinfo}
              ></CategoryList>
            </Col>

            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      products={this.state.products}
                      AddtoCart={this.AddtoCart}
                      currentCategory={this.state.currentCategory}
                      info={Productinfo}
                    ></ProductList>
                  )}
                ></Route>
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <Cartlist
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                     
                    ></Cartlist>
                  )}
                ></Route>

                <Route path="/Form1" component={Formdemo}></Route>
                <Route path="/Form2" component={Formdemo2}></Route>

                <Route component={Notfound}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
