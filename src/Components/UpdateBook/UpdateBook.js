import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookById, updateBookById } from "../../actions/book";
import { fetchAuthors } from "../../actions/authors";

export default function UpdateBook() {
  const { id } = useParams();
  const [authors, setAuthors] = useState([]);
  const [updatedBook, setupdatedBook] = useState(null);

  useEffect(() => {
    getBookById(id, (book) => {
      setupdatedBook(book);
    });

    fetchAuthors((authorsList) => {
      setAuthors(authorsList);
    });
  }, []);

  function handleChange(event) {
    switch (event.target.name) {
      case "name":
        setupdatedBook({ ...updatedBook, name: event.target.value });
        break;
      case "isbn":
        setupdatedBook({ ...updatedBook, isbn: event.target.value });
        break;
      case "author":
        setupdatedBook({ ...updatedBook, author: event.target.value });
        break;
      default:
        break;
    }
  }

  function onUpdate(event) {
    event.preventDefault();
    updateBookById(updatedBook, () => {
      alert("Book Updated");
      window.location = `/books/book/${id}`;
    });
  }

  if (!updatedBook) {
    return (
      <div>
        <h5>Loading...</h5>
      </div>
    );
  } else {
    return (
      <div className='container'>
        <h4>Update Book</h4>
        <br />
        <form onSubmit={onUpdate}>
          <div className='form-group col-sm-4'>
            <input
              value={updatedBook.name}
              name='name'
              className='form-control'
              placeholder='Name of the book'
              onChange={handleChange}
            ></input>
          </div>
          <div className='form-group col-sm-4'>
            <input
              value={updatedBook.isbn}
              name='isbn'
              className='form-control'
              placeholder='ISBN'
              onChange={handleChange}
            ></input>
          </div>
          <div className='form-group col-sm-4'>
            <label>Select Author</label>
            {console.log(updatedBook)}
            <select
              value={updatedBook.author._id}
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
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}
