import React, { useState } from "react";
import { createAuthor } from "../../actions/author";

export default function CreateAuthor() {
  const [author, setAuthor] = useState({ firstName: "", lastName: "" });

  function handleChange(event) {
    switch (event.target.name) {
      case "firstName":
        setAuthor({ ...author, firstName: event.target.value });
        break;
      case "lastName":
        setAuthor({ ...author, lastName: event.target.value });
        break;
      default:
        break;
    }
  }

  function resetAuthorDetails() {
    setAuthor({ firstName: "", lastName: "" });
  }

  function onSubmit(event) {
    event.preventDefault();
    createAuthor(author, (data) => {
      console.log(author);
    });
    alert("Author Created");
    resetAuthorDetails();
  }
  return (
    <div className='container'>
      <h4>Create New Author</h4>
      <br />
      <form onSubmit={onSubmit}>
        <div className='form-group col-sm-4'>
          <input
            value={author.firstName}
            name='firstName'
            className='form-control'
            placeholder='First Name'
            onChange={handleChange}
          ></input>
        </div>
        <div className='form-group col-sm-4'>
          <input
            value={author.lastName}
            name='lastName'
            className='form-control'
            placeholder='Last Name'
            onChange={handleChange}
          ></input>
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
