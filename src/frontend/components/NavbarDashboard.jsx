
const NavbarDashboard = ({ toggleNav, isSearchVisible, toggleSearch, isDarkMode, toggleDarkMode }) => {
  return (
    <nav>
      <i className="bx bx-menu" onClick={toggleNav} /> {/* Panggil toggleNav */}
      <a href="#" className="nav-link">Categories</a>
      <form action="#" className={isSearchVisible ? "show" : ""}>
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button type="button" onClick={toggleSearch} className="search-btn">
            <i className={`bx ${isSearchVisible ? "bx-x" : "bx-search"}`} />
          </button>
        </div>
      </form>
      <input
        type="checkbox"
        id="switch-mode"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        hidden
      />
      <label htmlFor="switch-mode" className="switch-mode" />
      <a href="#" className="notification">
        <i className="bx bxs-bell" />
        <span className="num">8</span>
      </a>
      <a href="#" className="profile">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="Profile" />
      </a>
    </nav>
  );
};

export default NavbarDashboard
