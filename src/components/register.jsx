'use strict';

import React, { Component } from 'react';
import axios from 'axios';

class Register extends React.Component{
  constructor(props){
    super();
    this.state = {username:'', password:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    if(event.target.type === 'text')
      this.setState({username: event.target.value});
    else this.setState({password: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:8081/authentication/register', {
      username: this.state.username,
      password: this.state.password
    })
      .then(response => alert(response.data));
  }
  render(){
    return(
      <div className = "bookDetails">
        <div className = "register">
          <form onSubmit={this.handleSubmit}>
            <label>
            Username:
              <input value={this.state.username} onChange={this.handleChange} type="text" name="username" />
            </label>
            <label>
            Password:
              <input value={this.state.password} onChange={this.handleChange} type="password" name="password" />
            </label>
            <input type="submit" value="Register" />
          </form>
        </div>
      </div>  
    );
  }
}

export default Register;
