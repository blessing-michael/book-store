import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

function Booklist() {
  const books = [];

  return (
    <div>
      <ul className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <div>
        <AddBook />
      </div>
    </div>
  );
}

export default Booklist;
