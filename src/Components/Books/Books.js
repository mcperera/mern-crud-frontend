import React, { useState, useEffect } from "react";
import BookCard from "../BookCard/BookCard";
import { col, title } from "./Books.module.css";
import { Link } from "react-router-dom";
import { fetchBooks } from "../../actions/books";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks((books) => {
      setBooks(books);
    });
  });

  const bookCard = books.map((item) => (
    <Link
      to={`books/book/${item._id}`}
      key={item._id}
      className={`col-4 ${col} ${title}`}
    >
      <BookCard {...item} />
    </Link>
  ));

  if (books.length === 0) {
    return <h5>Loading...</h5>;
  } else {
    return (
      <div className='container'>
        <h5>Books</h5>
        <div className='row'>{bookCard}</div>
      </div>
    );
  }
}

export default Books;
