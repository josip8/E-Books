'use strict';

import React from 'react';
import Link from 'react-router-dom/Link';
import axios from 'axios';

class Item extends React.Component{
  constructor(){
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(){
    axios.post('http://localhost:8081/library/delete', {
      id:this.props.id
    })
      .then(data => {
        alert(data.data);
        window.location.reload();
      });
  }
  render(){
    this.props.summary;
    return(
      <div className="item">
        <Link to={{pathname:'/bookDetails', state:{id:this.props.id}}}>
          <img  src={this.props.imagePath}/>
          <label>{this.props.title}</label>
          <label>{this.props.autor}</label>
          <label>{this.props.zanr}</label>
        </Link>
        <div className="deleteOrEdit">
          <button onClick={this.handleDelete}>Delete</button>
          <button>
            <Link to={{pathname:'/editBook', state:{
              id: this.props.id,
              title: this.props.title,
              author: this.props.autor,
              genre: this.props.zanr,
              summary: this.props.summary
            }}}>
            Edit Book
            </Link>
          </button>
        </div>
      </div>
    );
  }
}
export default Item;
