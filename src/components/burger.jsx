'use strict';

import React from 'react';
import Menu from 'components/menu.jsx';

class Burger extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state={atribute:'lines', switch:true, atribute2:'content'};
  }
  handleClick(){
    if(this.state.switch==true)
      this.setState({atribute:'lines closed', switch:false, atribute2:'content show'});
    else
      this.setState({atribute:'lines', switch:true, atribute2:'content'});
  }
  render(){
    return(
      <div className="wrap">
        <div className="burger" onClick={this.handleClick}>
          <div className={this.state.atribute} >
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
        </div >
        <div className={this.state.atribute2}>
          <Menu  />
        </div>
      </div>
    );
  }
}


export default Burger;