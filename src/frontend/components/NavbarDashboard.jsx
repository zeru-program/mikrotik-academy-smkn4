
const NavbarDashboard = ({ toggleNav, isSearchVisible, toggleSearch, isDarkMode, toggleDarkMode }) => {
  return (
    <nav>
      <i className="bx bx-menu" onClick={toggleNav} /> {/* Panggil toggleNav */}
      
      <input
        type="checkbox"
        id="switch-mode"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        hidden
      />
      <label htmlFor="switch-mode" className="switch-mode" />
      <a href="#" className="notification position-fixed" style={{right: "90px", top: "15px"}}>
        <i className="bx bxs-bell" />
        <span className="num">8</span>
      </a>
      <a href="/dashboard" className="profile position-fixed" style={{right: "20px", top: "10px"}} >
        <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="Profile" />
      </a>
    </nav>
  );
};

export default NavbarDashboard
