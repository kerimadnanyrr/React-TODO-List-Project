import React, { Component } from 'react'
import { Table,Button } from 'reactstrap'

export default class Cartlist extends Component {

  renderCart(){
    return(
      <Table striped>
        <thead>

          <tr>
            <td>#</td>
            <td>Category id</td>
            <td>Product Name</td>
            <td>Units Price</td>
            <td>Units İn Stock</td>
            <td>Quantity</td>

          </tr>
          </thead>

          <tbody>

            {this.props.cart.map(cartitem=>(

              <tr key={cartitem.product.id}>
                <td>{cartitem.product.id}</td>
                <td>{cartitem.product.categoryId}</td>
                <td>{cartitem.product.productName}</td>
                <td>{cartitem.product.unitPrice}</td>
                <td>{cartitem.product.unitsInStock}</td>
                <td>{cartitem.quantity}</td>
                <td>
                  <Button color="danger" onClick={()=>this.props.removeFromCart(cartitem.product)}>Remove</Button>
                </td>


                
                
                </tr>
            ))}
          </tbody>
      </Table>
    )
  }
  render() {
    return (
      <div> {this.renderCart()}</div>
    )
  }
}
