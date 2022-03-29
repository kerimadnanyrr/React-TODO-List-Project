import React, { Component } from "react";
import { Table,Button } from "reactstrap";

export default class ProductList extends Component {
    
  render() {
    return (
      <div>
        <h1>
          {this.props.info.title}-{this.props.currentCategory}
        </h1>
        <h1>{this.props.info.surname}</h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>productName</th>
              <th>quantityPerUnit</th>
              <th>unitPrice</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  {" "}
                  <Button onClick={()=>this.props.AddtoCart(product)} color="primary">Sepete Ekle</Button>
                </td>

                <td>@mdo</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
