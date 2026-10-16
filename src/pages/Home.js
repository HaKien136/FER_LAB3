import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> {"|"}
        <Link to="/products">Products</Link>
      </nav>
      <p>Welcome to ProductStore</p>
    </div>
  );
}

export default Home;
