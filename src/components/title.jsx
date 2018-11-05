'use strict';

import React, { Component } from 'react';
import axios from 'axios';
//import logo from 'images/e-book.png'

class Title extends React.Component{
  constructor(props){
    super(props);

    this.state = {username:'', password:'', isloggedIn: false, userID:''};
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount(){
    localStorage.getItem('isLogged') && this.setState({
      isloggedIn: true,
      userID: localStorage.getItem('userID'),
      username: localStorage.getItem('username')
    });
  }
  handleLogIn(event){
    axios.post('http://localhost:8081/authentication/login',{
      username: this.state.username,
      password: this.state.password
    })
      .then(data => {
        if(data.data != 'User not found'){
          this.setState({
            isloggedIn: true
          });
          localStorage.setItem('isLogged', 'true');
          localStorage.setItem('userID', data.data.id);
          localStorage.setItem('username', data.data.username);
          window.location.reload();
        }
        else alert('Wrong username or password');
      });
  }
  handleLogout(event){
    localStorage.removeItem('isLogged');
    window.location.reload();
  }
  handleChange(event){
    if(event.target.type === 'text')
      this.setState({username: event.target.value});
    else this.setState({password: event.target.value});
  }
  render(){
    return(
      <div className="title">
        <div className="logo">
          <img src='components/images/book.png' height="50px" width="70px" />
          {this.props.naslov}
        </div>
        {this.state.isloggedIn ? ( 
          <div className="userInfo">
                        Logged in as {this.state.username}
            <button onClick={this.handleLogout}>
                            Log out
            </button>
          </div>
        ) : (
          <form className="login">
            <input value={this.state.username} onChange={this.handleChange} type="text" placeholder="username"  />
            <input value={this.state.password} onChange={this.handleChange} type="password" placeholder="password"  />
            <button onClick={this.handleLogIn}>
                        Log in
            </button>
          </form>
        )
        }
                    
      </div>
    );
  }
}

export default Title;
