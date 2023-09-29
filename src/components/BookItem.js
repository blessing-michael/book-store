import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Loader from './Tracker';
import { getBooksData } from '../redux/books/booksSlice';

const BookLists = () => {
  const {
    books, isLoading, error, isSuccessful,
  } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksData());
  }, [dispatch, isSuccessful]);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (error) return <h2>Sorry! Something went wrong</h2>;
  if (books.length === 0) return <h2>No books available now. Please come check later</h2>;
  return books.map((book) => (
    <div key={book.id}>
      <Book key={book.id} book={book} />
    </div>
  ));
};

export default BookLists;
