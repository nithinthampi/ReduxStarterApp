import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import BookSelectedReducer from './reducer_selected_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  bookSelected: BookSelectedReducer
});

export default rootReducer;
