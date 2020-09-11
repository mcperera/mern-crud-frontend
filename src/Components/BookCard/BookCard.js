import React from "react";

function BookCard({ name }) {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title text-center'>{name}</h5>
      </div>
    </div>
  );
}

export default BookCard;
