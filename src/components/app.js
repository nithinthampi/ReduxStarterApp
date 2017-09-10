import React, { Component } from 'react';
import BookList from '../containers/book_list'
import BookSelected from '../containers/selected_book_detail'

export default class App extends Component {
  render() {
    return (
      <div>
      <BookList />
      <BookSelected />
      </div>
    );
  }
}
