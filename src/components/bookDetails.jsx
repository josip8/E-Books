'use strict';

import React from 'react';
import axios from 'axios';

class BookDetails extends React.Component{
  constructor(props){
    super(props);
    this.state={value:'', comments: [], allItems:[], currentItem:[], grade: 0, numbOfGrades: 0, isLoggedIn: false, userID: 0};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(){
    if(this.state.value === ''){
      alert('You must enter at least one character!');
    }
    else {
      axios.post('http://localhost:8081/comments', {
        text: this.state.value,
        bookID: this.state.currentItem.id,
        userID: localStorage.getItem('userID')
      })
        .then(() => {
          window.location.reload();
        });
    }       
  }

  handleDelete(event){
    axios.post('http://localhost:8081/comments/delete', {
      id: event.target.value
    })
      .then(() => {
        window.location.reload();
      });
  }

  componentDidMount(){
    if(this.props.book){
      localStorage.setItem('book_id', this.props.book.id);
    }
    localStorage.getItem('isLogged') && this.setState({
      isLoggedIn: true,
      userID: localStorage.getItem('userID')
    });
    axios.get('http://localhost:8081/library')
      .then(data => {
        this.setState({
          allItems : data.data
        });
        return this.state.allItems;
      })
      .then(allItems => {
        allItems.forEach(item => {
          if(localStorage.getItem('book_id') == item.id){
            this.setState({
              currentItem: item
            });
          }
        });
        return this.state.currentItem;
      })
      .then(current => {
        axios.get('http://localhost:8081/comments/'+current.id)
          .then(data => {
            this.setState({
              comments : data.data
            });
          });
        axios.get('http://localhost:8081/grades/'+current.id)
          .then(data => {
            data.data.forEach(item => {
              this.setState({
                grade: this.state.grade + (item.value*100),
                numbOfGrades: this.state.numbOfGrades + 1
              });
            });
          });
      });
  }

  render(){
    this.props.book;
    this.props.isLoggedIn;
    return(
      <div className="bookDetails">
        <div className="first">
          <div className='image'>
            <img  src={this.state.currentItem.image_url} height="380" width="240" />
            <div className="grades">
              <img src='components/images/star.png' height="30"/>
              <label> {isNaN(this.state.grade/this.state.numbOfGrades) ? 0:this.state.grade/this.state.numbOfGrades}/100, </label>
              <label className="votes"> {this.state.numbOfGrades} votes </label>
            </div>
            <button>Download</button>
            <button>Read</button>
          </div>
          <div className='descript'>
            <label className="title">Title: {this.state.currentItem.title}</label>
            <label className="title">Author: {this.state.currentItem.author}</label>
            <label className="title">
                Short Description:
            </label>
            <label>
              {this.state.currentItem.summary}
            </label>
            <label className="title">Genre: {this.state.currentItem.genre}</label>
          </div>
        </div>
        <div className="comments">
          <label className="title">Comments and reviews:</label>
          {!this.state.isLoggedIn &&
            <div>Log in to post a comment!</div>
          }
          {this.state.isLoggedIn &&
            <form className="comment" onSubmit={this.handleSubmit}>
              <textarea rows="3" cols="90" placeholder="Add a public comment" value={this.state.value} onChange={this.handleChange} />
              <input type="submit" value="Submit" />
            </form>
          }
          {this.state.comments.map(comment =>{
            return <div className="userComment">
              <label>{comment.username}:</label>
              <div>{comment.text}</div>
              {comment.user_fk == this.state.userID && 
                  <button value={comment.id} onClick={this.handleDelete}>Delete</button>
              }
            </div>;
          })}
          {this.state.comments.length === 0 &&
            <div>No comments yet</div>
          }
        </div>
      </div>
    );
  }
}
export default BookDetails;
