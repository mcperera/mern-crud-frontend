import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookById, deleteBookById } from "../../actions/book";

export default function BookDetails() {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    getBookById(id, (book) => {
      setBookDetails(book);
    });
  });

  function handleDelete() {
    if (window.confirm(`Do you want delete ${bookDetails.name}?`)) {
      deleteBookById(id, () => {
        console.log("Deleted");
        window.location = "/books";
      });
    }
  }

  function handleUpdate() {
    window.location = `/book/update/${id}`;
  }

  if (!bookDetails) {
    return (
      <div>
        <h5>Loading...</h5>
      </div>
    );
  } else {
    return (
      <div className='card text-center'>
        <div className='card-body'>
          <h5 className='card-title text-center'>{bookDetails.name}</h5>
          <p className='card-text text-center'>
            ISBN : {bookDetails.isbn}
            <br />
            Author :{" "}
            {`${bookDetails.author.firstName} ${bookDetails.author.lastName}`}
          </p>
          <div className='btn-group' role='group' aria-label='Basic example'>
            <button
              name='update'
              type='button'
              className='btn btn-dark'
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              name='delete'
              type='button'
              className='btn btn-dark'
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
