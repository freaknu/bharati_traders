import React, { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute(
      "data-bs-theme",
      darkMode ? "light" : "dark"
    );
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <div className="navbar-logo d-flex align-items-center">
          <button
            className="btn navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand me-3" href="/">
            <div className="d-flex align-items-center">
              {/* Placeholder for logo, replace with <img> as needed */}
              <span className="me-2">[Logo]</span>
              <h5 className="mb-0 d-none d-sm-block">Bharati Traders</h5>
            </div>
          </a>
        </div>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>

          <ul className="navbar-nav navbar-nav-icons flex-row align-items-center">
            <li className="nav-item">
              <div className="px-2">
                <input
                  className="form-check-input d-none"
                  type="checkbox"
                  id="themeToggle"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <label
                  className="cursor-pointer"
                  htmlFor="themeToggle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Switch theme"
                >
                  <i
                    className={`fa ${darkMode ? "fa-sun" : "fa-moon"} fa-lg`}
                  ></i>
                </label>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#!"
                id="navbarDropdownUser"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="avatar avatar-l">
                  <img
                    className="rounded-circle"
                    src="/assets/img/team/avatar.jpg" // Replace with actual avatar image path
                    alt="Shankar Yadav"
                  />
                </div>
              </a>
              <div
                className="dropdown-menu dropdown-menu-end py-0 shadow border"
                aria-labelledby="navbarDropdownUser"
              >
                <div className="card border-0">
                  <div className="card-body p-0">
                    <div className="text-center pt-4 pb-3">
                      <div className="avatar avatar-xl">
                        <img
                          className="rounded-circle"
                          src="/assets/img/team/avatar.jpg" // Replace with actual avatar image path
                          alt="Shankar Yadav"
                        />
                      </div>
                      <h6 className="mt-2">Shankar Yadav</h6>
                    </div>
                    <ul className="nav d-flex flex-column mb-2 pb-1">
                      <li className="nav-item">
                        <a className="nav-link px-3" href="/profile">
                          <i className="fas fa-user me-2"></i>Profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-3" href="/settings">
                          <i className="fas fa-cog me-2"></i>Settings
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-3" href="/logout">
                          <i className="fas fa-sign-out-alt me-2"></i>Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
