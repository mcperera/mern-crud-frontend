import React, { useState, useEffect, useRef } from "react";
import BookCard from "../BookCard/BookCard";
import { col, title } from "./Books.module.css";
import { Link } from "react-router-dom";
import { fetchBooks } from "../../actions/books";

function Books() {
  const [books, setBooks] = useState([]);
  const mountedRef = useRef(true);

  useEffect(() => {
    fetchBooks((books) => {
      if (mountedRef.current) {
        setBooks(books);
      }
    });
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const bookCard = books.map((item) => (
    <Link
      to={`books/book/${item._id}`}
      key={item._id}
      className={`col-4 ${col} ${title}`}>
      <BookCard {...item} />
    </Link>
  ));

  if (books.length === 0) {
    return <h5>Loading...</h5>;
  } else {
    return (
      <div className="container">
        <h5>Books</h5>
        <div className="row">{bookCard}</div>
      </div>
    );
  }
}

export default Books;
