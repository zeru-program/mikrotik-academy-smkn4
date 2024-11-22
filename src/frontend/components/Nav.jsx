import React from "react"
import GetCmsImg from "../../backend/GetCmsImg";

const Nav = () => {
  const { dataCmsImg } = GetCmsImg();
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid position-relative">
        <button className="navbar-brand align-items-center border-0 bg-transparent  gap-3" onClick={() => window.location.href = "/"}>
          <img
            src={dataCmsImg.find((item) => item.name === "logo_navbar" && item.status == true)?.img  || ""}
            alt="Logo"
          />
        </button>
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