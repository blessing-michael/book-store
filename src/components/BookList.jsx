import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

function Booklist() {
  const books = [
    {
      id: 1,
      title: 'Book 1',
      category: 'Action',
      author: ' Blessing Michael',
      completed: '65%',
      currentChapter: 'Chapter 3',
    },
    {
      id: 2,
      title: 'Book 2',
      category: 'Fiction',
      author: 'Martin Luther',
      completed: '80%',
      currentChapter: 'Chapter 1',
    },
    {
      id: 3,
      title: 'Book 3',
      category: 'Economy',
      author: 'Quin Din',
      completed: '99%',
      currentChapter: 'Chapter 10',
    },
  ];

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
