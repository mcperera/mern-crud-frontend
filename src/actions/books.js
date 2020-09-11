import axios from "axios";

function fetchBooks(callBack) {
  axios
    .get("https://merncrudfsc.herokuapp.com/books")
    .then((res) => callBack(res.data));
}

export { fetchBooks };
