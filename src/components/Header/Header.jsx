import React from "react";
import eswaran from "./images/eswaran.png";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";
// eslint-disable-next-line
const Header = () => {
  return (
    // eslint-disable-next-line
    <>
      <nav className="navbar navbar-expand navbar-dark bg-black mt-0">
        <div className="mx-auto ">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav d-flex align-items-center">
              <img className="mr" src={eswaran} alt="Mian-Logo" />
              <li className="nav-item mr">
                <Link className="nav-link" aria-current="page" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item mr">
                <Link className="nav-link " to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown mr">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  CATEGORY{" "}
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <div className="dropdown-divider"></div>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <div className="dropdown-divider"></div>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <form className="d-flex mr">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
              <i className="bi bi-cart3 mr"></i>
              <i className="bi bi-person-square"></i>
            </ul>
          </div>
        </div>
      </nav>
    </>
    // eslint-disable-next-line
  );
};

export default Header;
