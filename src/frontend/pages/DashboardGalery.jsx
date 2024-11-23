import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import NavbarDashboard from "../components/NavbarDashboard";
import GetGalery from "../../backend/GetGalery";
import UpdateStatusGalery from "../../backend/UpdateStatusCms";
import DeleteGalery from "../../backend/DeleteGalery";
import PostGalery from "../../backend/PostGalery";
import "../../Dashboard.css";
import Swal from 'sweetalert2'
import { createClient } from "@supabase/supabase-js"
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

const TableGalery = () => {
  const { dataGalery } = GetGalery();
  const [infoShown, setInfoShown] = useState(false);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("true");
  const [petugas, setPetugas] = useState("");
  const [clickCreate, setClickCreate] = useState(false)
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false)
  
  const temporaryEditCms = (uniqueId, elem) => {
    if (!infoShown) {
      Swal.fire("Informasi", "Untuk membatalkan pengeditan data silakan reload/refresh halaman.", "info");
      setInfoShown(true);
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
        
  const temporaryDeleteCms = async (id, urlImg) => {
    // Show confirmation dialog
    const result = await Swal.fire({
      title: "Anda yakin?",
      text: "Anda akan menghapus Gambar Galery yang anda pilih",
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
          const filePath = urlImg.replace(
          `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/galery/`,
          ""
        );
  
        // Hapus file dari storage Supabase
        const { data, error } = await supabase.storage
          .from("galery")
          .remove([filePath]); 
          
        const res = await DeleteGalery(id);
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
      var res = await UpdateStatusGalery(id, status)
      
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image to upload");
    const fileName = image.name;
    const bucketName = "galery"; 

    try {
      setUploading(true);


      // Upload image to Supabase storage
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(fileName, image, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        console.error("Error uploading image:", error.message);
        alert("Error uploading image: " + error.message);
      } else {
        // Construct the public URL
        const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${bucketName}/${fileName}`;

        const success = await PostGalery(publicUrl, status, petugas)
        
        if (success) {
          Swal.fire(
            "Success",
            "Gambar berhasil ditambahkan, silakan reload halaman",
            "success"
          ).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          });
        } else {
          Swal.fire("Error", "Gagal menambahkan data", "error");
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image : " + error);
    } finally {
      location.reload()
      setUploading(false);
    }
  };

  const handleCreate = () => {
     setClickCreate(!clickCreate)
   };


  return (
    <div className="table-data">
      <div className={`w-100 vh-100 ${clickCreate ? "d-flex" : "d-none"} justify-content-center align-items-center position-fixed top-0 start-0`} style={{background: "rgba(0,0,0,.3)", backdropFilter: "blur (2px)", zIndex: "5000"}}>
      <form onSubmit={handleSubmit} className="d-flex position-relative justify-content-center container py-3 bg-light px-2 rounded-2 flex-column shadow" style={{height:"auto"}}>
          <i className="bi-x-lg text-danger position-absolute" style={{right: "10px", top: "1px"}} onClick={() => setClickCreate(!clickCreate)} />
          <h1 className="text-center mt-3 mb-3">Create new galery</h1>
          <label className="mb-1">Image</label>
          <input id="imageInput" onInput={(e) => setImage(e.target.files[0])} accept="image/*" type="file" className="form-control mb-2" required />
          <label className="mb-1">Petugas</label>
          <input onInput={(e) => setPetugas(e.target.value)} type="text" className="form-control mb-2" required />
          <label className="mb-1">Status</label>
          <select className="form-control mb-2" onChange={(e) => setStatus(e.target.value)} value={status}>
           <option value="true">
            Aktif
           </option>
           <option value="false">
            Tidak aktif
           </option>
          </select>
          <button type="submit" className="btn-download mt-2">{uploading ? "Submitting.." : "Submit"}</button>
       </form>
      </div>
      <div className="order">
        <div className="head mb-2">
          <h3>Manage galery</h3>
          <i className="bx bx-search" />
          <i className="bx bx-filter" />
        </div>
        <button onClick={handleCreate} className="btn-download" style={{}}>Create new</button>
        <table className="mt-3">
          <thead>
            <tr>
              <th className="">No</th>
              <th>Image</th>
              <th style={{paddingRight: "100px"}}>Status</th>
              <th style={{paddingRight: "10px"}}>Created at</th>
              <th style={{paddingRight: "10px"}}>Created by</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
          {Array.isArray(dataGalery) &&
              dataGalery.map((gr, index) => (
                <tr>
                  <td style={{paddingRight:"20px"}}>{index + 1}</td>
                  <td style={{paddingRight:"20px"}}><img style={{width: "100px"}} src={gr.img} /></td>
                  <td className="text-nowrap" style={{paddingRight:"20px"}}><span className={`status ${gr.status ? "completed" : "pending"}`}>{gr.status ? "aktif" : "Tidak aktif"}</span></td>
                 <td style={{paddingRight:"20px"}}>{gr.created_at}</td>
                  <td style={{paddingRight:"20px"}}>{gr.created_by}</td>
                   <td className="gap-2 d-flex">
                    <button
                      onClick={(e) => temporaryDeleteCms(gr.keyr, gr.img)}
                      className="btn btn-danger status">
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
          <h1>Dashboard Galery</h1>
          <ul className="breadcrumb">
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" />
            </li>
            <li>
              <a className="active" href="#">
                Galery
              </a>
            </li>
          </ul>
        </div>
      </div>
      <TableGalery />
    </main>
  );
};

const DashboardGalery = () => {
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

export default DashboardGalery
