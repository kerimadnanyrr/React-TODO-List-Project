import { ListGroup, ListGroupItem } from "reactstrap";
import React, { Component } from "react";

export default class CategoryList extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }
  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };
  render() {
    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <ListGroup>
          {this.state.categories.map((ctgry) => (
            <ListGroupItem  active={ctgry.categoryName===this.props.currentCategory?true:false}
              key={ctgry.id}
              onClick={() => this.props.changeCategory(ctgry)}
            >
              {ctgry.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        
      </div>
    );
  }
}
