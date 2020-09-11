import axios from "axios";

function fetchAuthors(callBack) {
  axios
    .get("https://merncrudfsc.herokuapp.com/authors")
    .then(({ data }) => callBack(data));
}

export { fetchAuthors };
