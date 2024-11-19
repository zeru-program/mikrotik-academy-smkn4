import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar"
import NavbarDashboard from "../components/NavbarDashboard"
import "../../Dashboard.css"; 

const MainSection = () => {
  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li><i className="bx bx-chevron-right" /></li>
            <li>
              <a className="active" href="#">Home</a>
            </li>
          </ul>
        </div>
        <a href="#" className="btn-download">
          <i className="bx bxs-cloud-download" />
          <span className="text">Download PDF</span>
        </a>
      </div>
      <ul className="box-info">
        <li>
          <i className="bx bxs-calendar-check" />
          <span className="text">
            <h3>1020</h3>
            <p>New Order</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-group" />
          <span className="text">
            <h3>2834</h3>
            <p>Visitors</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-dollar-circle" />
          <span className="text">
            <h3>$2543</h3>
            <p>Total Sales</p>
          </span>
        </li>
      </ul>
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Recent Orders</h3>
            <i className="bx bx-search" />
            <i className="bx bx-filter" />
          </div>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Date Order</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="img/people.png" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td><span className="status completed">Completed</span></td>
              </tr>
              <tr>
                <td>
                  <img src="img/people.png" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
              <tr>
                <td>
                  <img src="img/people.png" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td><span className="status process">Process</span></td>
              </tr>
              <tr>
                <td>
                  <img src="img/people.png" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
              <tr>
                <td>
                  <img src="img/people.png" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td><span className="status completed">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="todo">
          <div className="head">
            <h3>Todos</h3>
            <i className="bx bx-plus" />
            <i className="bx bx-filter" />
          </div>
          <ul className="todo-list">
            <li className="completed">
              <p>Todo List</p>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
            <li className="completed">
              <p>Todo List</p>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
            <li className="not-completed">
              <p>Todo List</p>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
            <li className="completed">
              <p>Todo List</p>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
            <li className="not-completed">
              <p>Todo List</p>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
          </ul>
        </div>
      </div>
      {/* Add the rest of the content here (box-info, table-data, etc.) */}
    </main>
  );
};

const DashboardHome = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [clickNav, setClickNav] = useState(false); // State dipindahkan ke sini

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);
  const toggleNav = () => setClickNav(!clickNav); 
  
  useEffect(() => {
    if(window.innerWidth > 700) {
      setClickNav(true)
     }
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div>
      <SideBar 
        activeMenu={activeMenu} 
        setActiveMenu={setActiveMenu} 
        clickNav={clickNav} // Kirim nilai clickNav
      />
      <section id="content">
        <NavbarDashboard
          isSearchVisible={isSearchVisible}
          toggleSearch={toggleSearch}
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode}
          toggleNav={toggleNav} // Kirim fungsi untuk toggle nav
        />
        <MainSection />
      </section>
    </div>
  );
};

    
export default DashboardHome;
