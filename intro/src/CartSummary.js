import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
  } from "reactstrap";

export default class CartSummary extends Component {

RenderComponent() {
    return(
        <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>
         Sepetiniz : {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map(Cartitem=>(
            <DropdownItem key={Cartitem.product.id}>{Cartitem.product.productName}
            <Badge color='success'>{Cartitem.quantity}</Badge>
            <Badge color='primary' onClick={()=>this.props.removeFromCart(Cartitem.product)}>D</Badge>
            
             </DropdownItem>
            

          ))}
       
          <DropdownItem divider />
          <DropdownItem>

            <Link to="cart">GO to Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
}

  render() {
    return (
      <div>{this.props.cart.length>0?this.RenderComponent():<div></div>}</div>
    )
  }
}
