'use strict';

import React from 'react';
import axios from 'axios';

class addNewBook extends React.Component{
  constructor(props){
    super();
    this.state = {title:'', genre:'', author:'', summary:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    switch(event.target.name){
    case 'title':
      this.setState({title: event.target.value});
      break;
    case 'author':
      this.setState({author: event.target.value});
      break;
    case 'genre':
      this.setState({genre: event.target.value});
      break;
    case 'summary':
      this.setState({summary: event.target.value});
      break;
    }
  }
  handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:8081/library/addNew', {
      title: this.state.title,
      author: this.state.author,
      genre: this.state.genre,
      summary: this.state.summary
    })
      .then(response => alert(response.data));
  }
  render(){
    return(
      <div className = "bookDetails">
        <div className = "addNewBook">
          <form onSubmit={this.handleSubmit}>
            <label>
            Title:
              <input value={this.state.title} onChange={this.handleChange} type="text" name="title" />
            </label>
            <label>
            Author:
              <input value={this.state.author} onChange={this.handleChange}  name="author" />
            </label>
            <label>
            Genre:
              <input value={this.state.genre} onChange={this.handleChange}  name="genre" />
            </label>
            <label>
            Summary:
              <input value={this.state.summary} onChange={this.handleChange} name="summary" />
            </label>
            <input type="submit" value="Add new Book" />
          </form>
        </div>
      </div>
    );
  }
}

export default addNewBook;

