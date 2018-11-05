import React, { Component } from 'react';
import Main from 'components/main.jsx';
import App from 'index.js';
import classnames from 'classnames';


class Search extends React.Component{
  constructor(props){
    super(props);

    this.inputField=this.inputField.bind(this);
  }
  inputField({target}){
    this.props.callbackFromParent(target.value);
  }  
  render(){
    return(
      <div className="search" >
        <input type="text" name="search" placeholder="search"  onChange={this.inputField}/>               
      </div>
    );
  }
}
export default Search;
