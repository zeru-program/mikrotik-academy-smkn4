import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import NavbarDashboard from "../components/NavbarDashboard";
import GetCms from "../../backend/GetCms";
import GetCmsImg from "../../backend/GetCmsImg";
import UpdateCms from "../../backend/UpdateCms";
import UpdateCmsImg from "../../backend/UpdateCmsImg";
import UpdateStatusCms from "../../backend/UpdateStatusCms";
import DeleteCms from "../../backend/DeleteCms";
import DeleteCmsImg from "../../backend/DeleteCmsImg";
import "../../Dashboard.css";
import Swal from 'sweetalert2'
const db = import.meta.env.VITE_DB;



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

const TableCmsText = () => {
  const { dataCms } = GetCms();
  const [cmsText, setCmsText] = useState([]);
    const [infoShown, setInfoShown] = useState(false);
  const temporaryEditCms = (uniqueId, elem) => {
    if (!infoShown) {
      Swal.fire("Informasi", "Untuk membatalkan pengeditan data silakan reload/refresh halaman.", "info");
      setInfoShown(true); // Set infoShown to true to prevent future alerts
    }
        const siblingTd = elem.closest("tr").getElementsByTagName("td");
        for (let i = 1; i < siblingTd.length - 1; i++) {
            siblingTd[i].contentEditable = true;
            siblingTd[i].classList.add("temp-update-class");
        }
        elem.classList.add("bg-success")
        elem.classList.remove("bg-warning")
        elem.innerHTML = "<i class='bi-floppy2-fill text-light' />";
        
        elem.onclick = async () => {
           var contentId = document.querySelectorAll(".temp-update-class");
           var success = await UpdateCms(
                uniqueId,
                contentId[0].textContent,
                contentId[1].textContent,
                contentId[2].textContent,
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
        Swal.fire("Error", "Gagal menambahkan data", "error");
      }
        }
    };
    const temporaryDeleteCms = async (id) => {
    // Show confirmation dialog
    const result = await Swal.fire({
      title: "Anda yakin?",
      text: "Anda akan menghapus Data CMS yang anda pilih",
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
        const res = await DeleteCms(id);
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
  return (
    <div className="table-data">
      <div className="order">
        <div className="head">
          <h3>Manage your content (text)</h3>
          <i className="bx bx-search" />
          <i className="bx bx-filter" />
        </div>
        <table>
          <thead>
            <tr>
              <th className="">No</th>
              <th style={{width: "50px"}}>Id</th>
              <th style={{width: "150px"}}>Cms name</th>
              <th>Content</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
          {Array.isArray(dataCms) &&
              dataCms.map((cms, index) => (
                <tr>
                  <td style={{paddingRight:"20px"}}>{index + 1}</td>
                  <td>{cms.id}</td>
                  <td style={{paddingRight:"20px"}}>{cms.name}</td>
                  <td style={{paddingRight:"20px",width: "50%"}}>{cms.content}</td>
                  <td className="gap-2 d-flex">
                    <button
                      onClick={(e) =>
                        temporaryEditCms(cms.id, e.currentTarget)
                      }
                      className="btn btn-warning status"
                    >
                      <i className="bi-pencil text-dark" />
                    </button>
                    <button
                      onClick={(e) => temporaryDeleteCms(cms.id)}
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
      <TableCmsImg />
    </div>
  );
};

const TableCmsImg = () => {
  const { dataCmsImg } = GetCmsImg();
  const [infoShown, setInfoShown] = useState(false);
  
  const temporaryEditCms = (uniqueId, elem) => {
    if (!infoShown) {
      Swal.fire("Informasi", "Untuk membatalkan pengeditan data silakan reload/refresh halaman.", "info");
      setInfoShown(true); // Set infoShown to true to prevent future alerts
    }
        const siblingTd = elem.closest("tr").getElementsByTagName("td");
        for (let i = 2; i < siblingTd.length - 2; i++) {
            siblingTd[i].contentEditable = true;
            siblingTd[i].classList.add("temp-update-class");
        }
        elem.classList.add("bg-success")
        elem.classList.remove("bg-warning")
        elem.innerHTML = "<i class='bi-floppy2-fill text-light' />";
        elem.onclick = async () => {
           var contentId = document.querySelectorAll(".temp-update-class");
           var success = await UpdateCmsImg(
                uniqueId,
                contentId[0].textContent,
                contentId[1].textContent,
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
        Swal.fire("Error", "Gagal menambahkan data", "error");
      }
        }
    };
    
  const temporaryDeleteCms = async (id) => {
    // Show confirmation dialog
    const result = await Swal.fire({
      title: "Anda yakin?",
      text: "Anda akan menghapus Data CMS yang anda pilih",
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
        const res = await DeleteCmsImg(id);
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
  
  const updateStatus = async (id, status) => {
      var res = await UpdateStatusCms(id, status)
      
     if (res) {
       Swal.fire("Success", "Status berhasil diubah", "success").then(
         (result) => {
           if (result.isConfirmed) {
                location.reload();
             }
           }
         );
       } else {
          alert("Gagal menghapus");
       }
  }
  return (
    <div className="table-data">
      <div className="order">
        <div className="head">
          <h3>Manage your content (image)</h3>
          <i className="bx bx-search" />
          <i className="bx bx-filter" />
        </div>
        <table>
          <thead>
            <tr>
              <th className="">No</th>
              <th>Image</th>
              <th>Cms name</th>
              <th>Url</th>
              <th style={{paddingRight: "100px"}}>Statuss </th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
          {Array.isArray(dataCmsImg) &&
              dataCmsImg.map((cms, index) => (
                <tr>
                  <td style={{paddingRight:"20px"}}>{index + 1}</td>
                  <td style={{paddingRight:"20px"}}><img style={{width: "100px"}} src={cms.img} /></td>
                  <td style={{paddingRight:"20px"}}>{cms.name}</td>
                  <td style={{paddingRight:"20px"}}>{cms.img}</td>
                  <td style={{paddingRight:"20px"}}><span className={`status ${cms.status ? "completed" : "pending"}`}>{cms.status ? "aktif" : "Tidak aktif"}</span></td>
                  <td className="gap-2 d-flex">
                    <button
                      onClick={(e) =>
                        temporaryEditCms(cms.id, e.currentTarget)
                      }
                      className="btn btn-warning status"
                    >
                      <i className="bi-pencil text-dark" />
                    </button>
                    <button
                      onClick={(e) =>
                        updateStatus(cms.id, !cms.status)
                      }
                      className={`${cms.status ? "completed" : "pending"} btn status`}
                    >
                      <i className={`bi-${cms.status ? "toggle-on" : "toggle-off"} text-light`} />
                    </button>
                    <button
                      onClick={(e) => temporaryDeleteCms(cms.id)}
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
  const dataCms = GetCms();
  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Dashboard CMS</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" />
            </li>
            <li>
              <a className="active" href="#">
                Cms
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="btn-download">
          <i className="bx bxs-cloud-download" />
          <span className="text">Download PDF</span>
        </a>
      </div>
      <TableCmsText />
    </main>
  );
};

const DashboardCms = () => {
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

export default DashboardCms;
