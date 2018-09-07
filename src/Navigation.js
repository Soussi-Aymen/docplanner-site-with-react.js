import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="/">
          <img
            className="logo-docplanner"
            src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="220"
            height="28"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className=" collapse navbar-collapse mr-sm-2 "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                About Us <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Carrier
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Departement
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  Marketing & PR
                </a>
                <a className="dropdown-item" href="/">
                  Customer Success & Sales
                </a>
                <a className="dropdown-item" href="/">
                  IT , Product, Design & UI
                </a>
                <a className="dropdown-item" href="/">
                  Finance & Administration
                </a>
                <a className="dropdown-item" href="/">
                  HR & more
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
