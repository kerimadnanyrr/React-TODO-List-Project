import React, { Component } from 'react'

export default class Formdemo extends Component {

    state ={ userName:'',city:''}
    
    onChangeHandler=(event)=>{
   let name=event.target.name;
   let value=event.target.value;

   this.setState({[name]:value  })
    }

 onSubmitHandler=(event)=>{
     event.preventDefault();
     alert(this.state.userName)
 }
  render() {
    return (
      <div>
<form onSubmit={this.onSubmitHandler}>

    <h3>userName</h3>
    
    <input type="text" name='userName' onChange={this.onChangeHandler}></input>
    <h3>userName is {this.state.userName}</h3>
  <input type="submit"></input>

  
  <h3>City</h3>
    
    <input type="text" name='city' onChange={this.onChangeHandler}></input>
    <h3>City is {this.state.city}</h3>
  <input type="submit"></input>

</form>

      </div>
    )
  }
}
