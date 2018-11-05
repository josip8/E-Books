'use strict';

import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import {Switch, BrowserRouter, HashRouter, Route, NoMatch} from 'react-router-dom';
import 'styles/style.css';

import Title from 'components/title.jsx';
import Menu from 'components/menu.jsx';
import Search from 'components/search.jsx';
import Main from 'components/main.jsx';
import Nav_bottom from 'components/navigate_bottom.jsx';
import Footer from 'components/footer.jsx';
import Burger from 'components/burger.jsx';
import BookDetails from 'components/bookDetails.jsx';
import Register from 'components/register.jsx';
import AddNewBook from 'components/addNewBook.jsx';
import EditBook from 'components/editBook.jsx';
let userID = '';
let isLogged = false;

class App extends Component{
  constructor(props){
    super(props);
    this.state = {searchInput:''};
    this.updateState = this.updateState.bind(this);
  }
  updateState(val) {
    this.setState({
      searchInput: val
    });
  }
  render(){
    return(
      <div className="app">
        <Burger />
        <Title naslov="E-books"/>  
        <Menu />   
        <Search callbackFromParent={this.updateState}  />  
        <Main searchInput={this.state.searchInput}/>
        <Nav_bottom />
        <Footer />
      </div>
    );
  }
}

class BookExample extends Component{
  constructor(props){
    super(props);
  }
  render(){
    this.props.book;
    return(
      <div className="app1">
        <Burger />
        <Title naslov="E-books"/>  
        <Menu />   
        <Search />  
        <BookDetails book={this.props.location.state} isLoggedIn={isLogged} />
        <Footer />
      </div>
    );
  }
}

class RegistrationPage extends Component{
  render(){
    return(
      <div className="app1">
        <Burger />
        <Title naslov="E-books"/>  
        <Menu />   
        <Search />  
        <Register />
        <Footer />
      </div>
    );
  }
}

class AddNewBookPage extends Component{
  render(){
    return(
      <div className="app1">
        <Burger />
        <Title naslov="E-books"/>  
        <Menu />   
        <Search />  
        <AddNewBook />
        <Footer />
      </div>
    );
  }
}

class UpdateBookPage extends Component{
  render(){
    return(
      <div className='app1'>
        <Burger />
        <Title naslov="E-books"/>  
        <Menu />   
        <Search />  
        <EditBook data={this.props.location.state}/>
        <Footer />
      </div>
    );
  }
}

const site=document.getElementById('site');

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/bookDetails' component={BookExample}/>
      <Route path='/editBook' component={UpdateBookPage}/>
      <Route path='/register' render={()=><RegistrationPage/>}/>
      <Route path='/addNewBook' render={()=><AddNewBookPage/>}/>
    </Switch>
  </HashRouter>,
  site
);
