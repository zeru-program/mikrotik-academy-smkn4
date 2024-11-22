import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import NavbarDashboard from "../components/NavbarDashboard";
import GetAccount from "../../backend/GetAccount";
import UpdateAccount from "../../backend/UpdateAccount";
import DeleteAccount from "../../backend/DeleteAccount";
import "../../Dashboard.css";
import Swal from 'sweetalert2'
import { createClient } from "@supabase/supabase-js"
import PostAccount from "../../backend/PostAccount";
const db = import.meta.env.VITE_DB;

// supabase configuration
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const Todo = () => (
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
);

const TableAccount = () => {
  const { dataAccount } = GetAccount();
 const [infoShown, setInfoShown] = useState(false);
 const [clickCreate, setClickCreate] = useState(false)
 const [user, setUser] = useState("")
 const [email, setEmail] = useState("")
 const [pass, setPass] = useState("")
 const [role, setRole] = useState("admin")
 const [createdBy, setCreatedBy] = useState("")
 const [status, setStatus] = useState("true")

  const temporaryEdit = (uniqueId, elem) => {
    console.log(uniqueId)
    if (!infoShown) {
      Swal.fire("Informasi", "Untuk membatalkan pengeditan data silakan reload/refresh halaman.", "info");
      setInfoShown(true); // Set infoShown to true to prevent future alerts
    }
        const siblingTd = elem.closest("tr").getElementsByTagName("td");
        for (let i = 1; i < siblingTd.length - 2; i++) {
            siblingTd[i].contentEditable = true;
            siblingTd[i].classList.add("temp-update-class");
        }
        elem.classList.add("bg-success")
        elem.classList.remove("bg-warning")
        elem.innerHTML = "<i class='bi-floppy2-fill text-light' />";
        
        elem.onclick = async () => {
           var contentId = document.querySelectorAll(".temp-update-class");
           var success = await UpdateAccount(
                uniqueId,
                contentId[0].textContent,
                contentId[1].textContent,
                contentId[2].textContent,
                contentId[3].textContent
              );
              if (success) {
        Swal.fire("Success", "Data berhasil di ubah", "success").then(
          (result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          }
        );
      } else {
        Swal.fire("Error", "Gagal mengupdate data", "error");
      }
        }
    };
  const temporaryDelete = async (id) => {
    // Show confirmation dialog
    const result = await Swal.fire({
      title: "Anda yakin?",
      text: "Anda akan menghapus Data Account yang anda pilih",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    // Check if the action was canceled
    if (result.isDismissed) {
      return false;
    } else {
      try {
        const res = await DeleteAccount(id);
        if (res) {
          Swal.fire("Success", "Data berhasil dihapus", "success").then(
            (result) => {
              if (result.isConfirmed) {
                location.reload();
              }
            }
          );
        } else {
          alert("Gagal menghapus");
        }
      } catch (error) {
        console.error("Error deleting:", error);
        alert("Gagal menghapus");
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await PostAccount(user, email, pass, role, status, createdBy)
    if (res) {
      Swal.fire(
        "Success",
        "Account berhasil ditambahkan, silakan reload halaman",
        "success"
      ).then((result) => {
        if (result.isConfirmed) {
          location.reload();
        }
      });
    } else {
      Swal.fire("Error", "Gagal menambahkan data", "error");
    }
  };
  const handleCreate = () => {
    setClickCreate(!clickCreate)
  };
  return (
    <div className="table-data">
       <div className={`w-100 vh-100 ${clickCreate ? "d-flex" : "d-none"} justify-content-center align-items-center position-fixed top-0 start-0`} style={{background: "rgba(0,0,0,.3)", backdropFilter: "blur (2px)", zIndex: "1000"}}>
      <form onSubmit={handleSubmit} className="d-flex position-relative justify-content-center container mt-5 py-3 bg-light px-2 rounded-2 flex-column shadow" style={{height:"auto"}}>
          <i className="bi-x-lg text-danger position-absolute" style={{right: "10px", top: "1px"}} onClick={() => setClickCreate(!clickCreate)} />
          <h1 className="text-center mt-3 mb-3">New account</h1>
          <label className="mb-1">Username</label>
          <input onInput={(e) => setUser(e.target.value)} type="text" value={user} className="form-control mb-2" required placeholder="ketik disini.." />
          <label className="mb-1">Email</label>
          <input onInput={(e) => setEmail(e.target.value)} type="email" value={email} className="form-control mb-2" required placeholder="ketik disini.." />
          <label className="mb-1">Password</label>
          <input onInput={(e) => setPass(e.target.value)} type="text" value={pass} className="form-control mb-2" required placeholder="ketik disini.." />
          <label className="mb-1">Created by</label>
          <input onInput={(e) => setCreatedBy(e.target.value)} type="text" value={createdBy} className="form-control mb-2" required placeholder="ketik disini.." />
          <label className="mb-1">Role</label>
          <select className="form-control mb-2" onChange={(e) => setRole(e.target.value)} value={role}>
           <option value="admin">
            Admin
           </option>
           <option value="developer">
            Developer
           </option>
          </select>
          <label className="mb-1">Status</label>
          <select className="form-control mb-2" onChange={(e) => setStatus(e.target.value)} value={status}>
           <option value="true">
            Aktif
           </option>
           <option value="false">
            Tidak aktif
           </option>
          </select>
          <button type="submit" className="btn-download mt-2">Submit</button>
       </form>
      </div>
      <div className="order">
        <div className="head mb-1">
          <h3>Manage your account</h3>
          <i className="bx bx-search" />
          <i className="bx bx-filter" />
        </div>
        <button onClick={handleCreate} className="btn-download mb-4" style={{}}>Create new</button>
         <table>
          <thead>
            <tr>
              <th className="">No</th>
              <th style={{width: "150px", paddingRight: "10px"}}>Username</th>
              <th style={{width: "150px"}}>Email</th>
              <th style={{width: "150px"}}>Role</th>
              <th style={{width: "150px"}}>Password</th>
              <th>Status</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
          {Array.isArray(dataAccount) &&
              dataAccount.map((acc, index) => (
                <tr>
                  <td style={{paddingRight:"20px"}}>{index + 1}</td>
                  <td>{acc.username}</td>
                  <td style={{paddingRight:"20px"}}>{acc.email}</td>
                  <td style={{paddingRight:"20px",width: "50%"}}>{acc.role}</td>
                  <td style={{paddingRight:"20px",width: "50%"}}>{acc.password}</td>
                  <td style={{paddingRight:"20px"}}><span className={`status ${acc.status ? "completed" : "pending"} text-nowrap`}>{acc.status ? "aktif" : "Tidak aktif"}</span></td>
                  <td className="gap-2 d-flex">
                    <button
                      onClick={(e) =>
                        temporaryEdit(acc.keyr, e.currentTarget)
                      }
                      className="btn btn-warning status"
                    >
                      <i className="bi-pencil text-dark" />
                    </button>
                    <button
                      onClick={(e) => temporaryDelete(acc.keyr)}
                      className="btn btn-danger status"
                    >
                      <i className="bi-trash text-light" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const MainSection = () => {
  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Dashboard account</h1>
          <ul className="breadcrumb">
            <li>
              <a href="/dashboard">Dashboard </a>
            </li>
            <li>
              <i className="bx bx-chevron-right" />
            </li>
            <li>
              <a className="active" href="#">
                Account
              </a>
            </li>
          </ul>
        </div>
      </div>
      <TableAccount />
    </main>
  );
};

const DashboardAccount = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [clickNav, setClickNav] = useState(false); // State dipindahkan ke sini

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);
  const toggleNav = () => setClickNav(!clickNav);

  useEffect(() => {
    if (window.innerWidth > 700) {
      setClickNav(true);
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

export default DashboardAccount;
