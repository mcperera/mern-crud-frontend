import React from "react";

import { bookCard, cardBody } from "./BookCard.module.css";

function BookCard({ name }) {
  return (
    <div className={`card ${bookCard}`}>
      <div className={`card-body ${cardBody}`}>
        <h5 className="card-title text-center">{name}</h5>
      </div>
    </div>
  );
}

export default BookCard;
