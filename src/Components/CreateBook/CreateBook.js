import React, { useEffect, useState } from "react";
import { createBook } from "../../actions/book";
import { fetchAuthors } from "../../actions/authors";

export default function CreateBook() {
  const [bookDetails, setBookDetails] = useState({
    name: "",
    isbn: "",
    autor: "",
  });
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors((authorsList) => {
      setAuthors(authorsList);
    });
  });

  function handleChange(event) {
    switch (event.target.name) {
      case "name":
        setBookDetails({ ...bookDetails, name: event.target.value });
        break;
      case "isbn":
        setBookDetails({ ...bookDetails, isbn: event.target.value });
        break;
      case "author":
        setBookDetails({ ...bookDetails, author: event.target.value });
        break;
      default:
        break;
    }
  }

  function resetBookDetails() {
    setBookDetails({
      name: "",
      isbn: "",
      autor: "",
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    createBook(bookDetails, (data) => {
      alert("Book Created");
      resetBookDetails();
    });
  }

  return (
    <div className='container'>
      <h4>Create New Book</h4>
      <br />
      <form onSubmit={onSubmit}>
        <div className='form-group col-sm-4'>
          <input
            value={bookDetails.name}
            name='name'
            className='form-control'
            placeholder='Name of the book'
            onChange={handleChange}
          ></input>
        </div>
        <div className='form-group col-sm-4'>
          <input
            value={bookDetails.isbn}
            name='isbn'
            className='form-control'
            placeholder='ISBN'
            onChange={handleChange}
          ></input>
        </div>
        <div className='form-group col-sm-4'>
          <label>Select Author</label>
          <select
            value={bookDetails.author}
            className='form-control'
            name='author'
            onChange={handleChange}
          >
            {authors.map((item) => (
              <option key={item._id} value={item._id}>
                {`${item.firstName} ${item.lastName}`}
              </option>
            ))}
          </select>
        </div>
        <div className='form-group col-sm-4'>
          <button type='submit' className='btn btn-dark'>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
