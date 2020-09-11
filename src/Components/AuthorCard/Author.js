import React from "react";
import { deleteAuthorById } from "../../actions/author";

function Author({ _id, firstName, lastName, row }) {
  function handleDelete() {
    if (window.confirm(`Do you want delete ${firstName} ${lastName}?`)) {
      deleteAuthorById(_id, () => {
        console.log("Deleted");
      });
    }
  }

  function handleUpdate() {
    window.location = `/author/update/${_id}`;
  }

  return (
    <tr>
      <th scope='row'>{row + 1}</th>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>
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
      </td>
    </tr>
  );
}

export default Author;
