import React from 'react';

class Nav_bottom extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state={page_numb:1, first_button:1, last_button:'Next'};
  }
  handleClick(){

  }
  render(){
    return(
      <div className="navigate_bottom">
        <div className="dropdown">
          <button className="dropbtn">Order by:</button>
          <div className="dropdown-content">
            <a href="#">A-Z</a>
            <a href="#">Z-A</a>
            <a href="#">0-10</a>
            <a href="#">10-0</a>
               
          </div>
        </div>
        <div className="other">
          <button className="first" onClick={this.handleClick()}>
            {this.state.first_button}
          </button>
          <button className="second" onClick={this.handleClick()}>
            {this.state.page_numb + 1}
          </button>
          <button className={this.state.last_button} onClick={this.handleClick()}>
            {this.state.last_button}
          </button>         
          <button>
            Go to:
          </button>
        </div>
      </div>
    );
  }
}
export default Nav_bottom;