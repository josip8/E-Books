'use strict';

import axios from 'axios';
import React from 'react';
import Item from 'components/item.jsx';
import Search from 'components/search.jsx';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={ allItems:[], searchedItems:[] };
  }
  componentDidMount(){
    axios.get('http://localhost:8081/library')
      .then(data => {
        this.setState({
          allItems : data.data
        });
      });
  }
  render(){
    this.props.searchInput;
    for(let x=0; x < this.state.allItems.length; x++){
      delete this.state.searchedItems[x];
      if(this.state.allItems[x].title.toUpperCase().includes(this.props.searchInput.toUpperCase())){
        this.state.searchedItems[x]=this.state.allItems[x];            
      }
    } 

    if(this.state.searchedItems.length > 0){
      return(
        <div className="main" >
          {this.state.searchedItems.map(item => {
            return <Item key={item.id} title={item.title} imagePath={item.image_url} autor={item.author} zanr={item.genre} summary={item.summary} id={item.id}/>;
          })
          }
        </div>
      );
    }
    else return (
      <div className="main" >
        <p>Book not found</p>
      </div>
    );
  }
}
export default Main;
