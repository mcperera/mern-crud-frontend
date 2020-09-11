import axios from "axios";

function getBookById(id, callBack) {
  axios
    .get(`https://merncrudfsc.herokuapp.com/book/${id}`)
    .then(({ data }) => callBack(data));
}

function deleteBookById(id, callBack) {
  axios
    .delete(`https://merncrudfsc.herokuapp.com/book/${id}`)
    .then(({ data }) => {
      if (data.ok) {
        callBack();
      }
    });
}

function createBook(book, callBack) {
  axios
    .post("https://merncrudfsc.herokuapp.com/book", book)
    .then(({ data }) => callBack(data));
}

function updateBookById(updateBook, callBack) {
  axios
    .patch(
      `https://merncrudfsc.herokuapp.com/book/${updateBook._id}`,
      updateBook
    )
    .then(({ data }) => callBack(data));
}

export { getBookById, deleteBookById, createBook, updateBookById };
