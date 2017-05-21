import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render(){
    if(!this.props.book){
      return <h4>Select a book to get started.</h4>
    }
    return (
      <div>
        <h4>Details for:</h4>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
