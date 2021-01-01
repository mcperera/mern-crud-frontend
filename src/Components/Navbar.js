import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Manage Books
        </Link>
        <div className="collpase navbar-collpase">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/authors" className="nav-link">
                Authors
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/books" className="nav-link">
                Books
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/author/create-author" className="nav-link">
                Create Author
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/book/create-book" className="nav-link">
                Create Book
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
