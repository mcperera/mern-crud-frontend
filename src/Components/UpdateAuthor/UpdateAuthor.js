import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAuthorById, updateAuthorById } from "../../actions/author";

function UpdateAuthor() {
  const { id } = useParams();
  const [updateAuthor, setUpdateAuthor] = useState([]);

  useEffect(() => {
    getAuthorById(id, (author) => {
      setUpdateAuthor(author);
    });
  }, [id]);

  function handleChange(event) {
    switch (event.target.name) {
      case "firstName":
        setUpdateAuthor({ ...updateAuthor, firstName: event.target.value });
        break;
      case "lastName":
        setUpdateAuthor({ ...updateAuthor, lastName: event.target.value });
        break;
      default:
        break;
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    updateAuthorById(updateAuthor, () => {
      alert("Author Updated");
      window.location = `/authors`;
    });
  }

  return (
    <div className='container'>
      <h4>Update Author</h4>
      <br />
      <form onSubmit={onSubmit}>
        <div className='form-group col-sm-4'>
          <input
            name='firstName'
            value={updateAuthor.firstName}
            className='form-control'
            placeholder='First Name'
            onChange={handleChange}
          ></input>
        </div>
        <div className='form-group col-sm-4'>
          <input
            name='lastName'
            value={updateAuthor.lastName}
            className='form-control'
            placeholder='Last Name'
            onChange={handleChange}
          ></input>
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

export default UpdateAuthor;
