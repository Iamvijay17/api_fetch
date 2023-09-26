import React from "react";
import Cards from "./Cards";
// import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Api Fetch
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Cards">
                Cards
              </a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
