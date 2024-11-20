import React from "react"

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid position-relative">
        <a className="navbar-brand align-items-center gap-3" href="/">
          <img
            src="/images/logo-mikrotik1.jpg"
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="bi bi-list" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Beranda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#profile-sekolah">
                Profile Sekolah
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#materi-manfaat">
                Materi &amp; Manfaat
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#trainer">
                Trainer Kami
              </a>
            </li>
            {/*<li className="nav-item">
              <a className="nav-link" href="#partner">
                Partner Kami
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Galery &amp; Komentar
              </a>
            </li>*/}
          </ul>
        </div>
        <div className="nav-login-lg position-absolute">
          <a href="/login">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav