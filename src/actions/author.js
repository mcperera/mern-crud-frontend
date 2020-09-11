import axios from "axios";

function getAuthorById(id, callBack) {
  axios
    .get(`https://merncrudfsc.herokuapp.com/author/${id}`)
    .then(({ data }) => callBack(data));
}

function deleteAuthorById(id, callBack) {
  axios
    .delete(`https://merncrudfsc.herokuapp.com/author/${id}`)
    .then(({ data }) => {
      if (data.ok) {
        callBack();
      }
    });
}

function createAuthor(author, callBack) {
  axios
    .post("https://merncrudfsc.herokuapp.com/author", author)
    .then(({ data }) => callBack(data));
}

function updateAuthorById(updateAuthor, callBack) {
  axios
    .patch(
      `https://merncrudfsc.herokuapp.com/author/${updateAuthor._id}`,
      updateAuthor
    )
    .then(({ data }) => callBack(data));
}

export { getAuthorById, deleteAuthorById, createAuthor, updateAuthorById };
