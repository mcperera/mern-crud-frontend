function test({ name }) {
  console.log(name);
}

const book = { name: "lol", isbn: "sadsad", date: "12/12/12" };

const tvseris = { title: "ABC", price: "455", duration: "4.5", ...book };

test(book);

console.log(tvseris);
