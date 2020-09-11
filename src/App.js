import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Authors from "./Components/Authors/Authors";
import CreateAuthor from "./Components/CreateAuthor/CreateAuthor";
import Books from "./Components/Books/Books";
import CreateBook from "./Components/CreateBook/CreateBook";
import UpdateBook from "./Components/UpdateBook/UpdateBook";
import UpdateAuthor from "./Components/UpdateAuthor/UpdateAuthor";
import BookDetails from "./Components/BookDetails/BookDetails";

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Route path='/' exact component={Home} />
        <Route path='/authors' component={Authors} />
        <Route path='/CreateAuthor' component={CreateAuthor} />
        <Route path='/books' exact component={Books} />
        <Route path='/book/create' component={CreateBook} />
        <Route path='/books/book/:id' component={BookDetails} />
        <Route path='/book/update/:id' component={UpdateBook} />
        <Route path='/author/update/:id' component={UpdateAuthor} />
      </div>
    </Router>
  );
}

export default App;
