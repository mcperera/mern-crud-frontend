import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <p>
          Hello, Let's manage books and authors{" "}
          <span role="img" aria-label="looking">
            &#129488;
          </span>{" "}
          <br />
          Please use the navigator..{" "}
          <span role="img" aria-label="up-hand">
            &#9757;
          </span>{" "}
          <br /> Thank you!{" "}
          <span role="img" aria-label="hands">
            &#128079;
          </span>
          <span
            style={{ fontSize: "10px", display: "block", marginTop: "10px" }}>
            Do not delete authors who has listed books, working on it!
          </span>
        </p>
      </div>
    );
  }
}

export default Home;
