import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar"
import NavbarDashboard from "../components/NavbarDashboard"
import "../../Dashboard.css"; 
import GetAccount from "../../backend/GetAccount";
import GetTrainer from "../../backend/GetTrainer";
import GetCms from "../../backend/GetCms";
import Swal from "sweetalert2";

const MainSection = () => {
  const { dataAccount } = GetAccount()
  const { dataTrainer } = GetTrainer()
  const { dataCms } = GetCms()
  const [note, setNote] = useState("")
  useEffect(() => {
    fetch(import.meta.env.VITE_DB + "note.json")
    .then(res => res.json())
    .then(data => {
      setNote(data.note)
    })
  }, [])
  const saveNote = () => {
    fetch(import.meta.env.VITE_DB + "note.json", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        note: note
      })
    })
    .then(res => {
      if (res.ok) {
        Swal.fire(
          "Success",
          "Note berhasil disave, silakan reload halaman",
          "success"
        ).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });
      }
    })
  }
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
      </div>
      <ul className="box-info">
        <li>
          <i className="bx bx-run" />
          <span className="text">
            <h3>{dataTrainer.length}</h3>
            <p>Trainer</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-group" />
          <span className="text">
            <h3>{dataAccount.length}</h3>
            <p>Account</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-dollar-circle" />
          <span className="text">
            <h3>{dataCms.length}</h3>
            <p>Total CMS</p>
          </span>
        </li>
      </ul>
      <div className="table-data">
        <div className="todo">
          <div className="head">
            <h3>Notes</h3>
            <i className="bx bx-plus" />
            <i className="bx bx-filter" />
          </div>
          <div>
            <textarea type="text" onInput={(e) => setNote(e.target.value)} value={note} className="form-control" rows={10} />
          </div>
          <button onClick={saveNote} className="btn-info mt-3 px-4 btn">Save</button>
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
