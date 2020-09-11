import React, { useState, useEffect } from "react";
import Author from "../AuthorCard/Author";
import { fetchAuthors } from "../../actions/authors";

function Authors() {
  const [authors, SetAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors((authors) => {
      SetAuthors(authors);
    });
  });

  const authorRow = authors.map((item, index) => (
    <Author key={item._id} {...item} row={index} />
  ));

  if (authors.length === 0) {
    return <h5>Loading...</h5>;
  } else {
    return (
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>First</th>
              <th scope='col'>Last</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>{authorRow}</tbody>
        </table>
      </div>
    );
  }
}

export default Authors;
