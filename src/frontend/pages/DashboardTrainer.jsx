import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import NavbarDashboard from "../components/NavbarDashboard";
import GetTrainer from "../../backend/GetTrainer";
import UpdateTrainer from "../../backend/UpdateTrainer";
import UpdateCmsImg from "../../backend/UpdateCmsImg";
import UpdateStatusTrainer from "../../backend/UpdateStatusTrainer";
import DeleteTrainer from "../../backend/DeleteTrainer";
import DeleteCmsImg from "../../backend/DeleteCmsImg";
import PostTrainer from "../../backend/PostTrainer";
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

const TableTrainer = () => {
  const { dataTrainer } = GetTrainer();
  const [infoShown, setInfoShown] = useState(false);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("true");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sertifikatOne, setSertifikatOne] = useState(null);
  const [sertifikatTwo, setSertifikatTwo] = useState(null);
  const [sertifikatThree, setSertifikatThree] = useState(null);
  const [clickCreate, setClickCreate] = useState(false)
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false)
  
  const temporaryEdit = (uniqueId, elem) => {
    if (!infoShown) {
      Swal.fire("Informasi", "Untuk membatalkan pengeditan data silakan reload/refresh halaman.", "info");
      setInfoShown(true);
    }
        const siblingTd = elem.closest("tr").getElementsByTagName("td");
        for (let i = 5; i < siblingTd.length - 2; i++) {
            siblingTd[i].contentEditable = true;
            siblingTd[i].classList.add("temp-update-class");
        }
        elem.classList.add("bg-success")
        elem.classList.remove("bg-warning")
        elem.innerHTML = "<i class='bi-floppy2-fill text-light' />";
        elem.onclick = async () => {
           var contentId = document.querySelectorAll(".temp-update-class");
           var success = await UpdateTrainer(
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
        
const temporaryDelete = async (id, urlImg, s1, s2, s3) => {
  // Show confirmation dialog
  const result = await Swal.fire({
    title: "Anda yakin?",
    text: "Anda akan menghapus Data Trainer yang anda pilih",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });

  // Check if the action was canceled
  if (result.isDismissed) {
    return false;
  }

  try {
    // Prepare file paths by stripping the base URL
    const filePathImage = urlImg.replace(
      `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/trainer/`, ""
    );
    const filePathS1 = s1.replace(
      `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/trainer/`, ""
    );
    
    // Remove secondary files if provided
    if (s2) {
      const filePathS2 = s2.replace(
        `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/trainer/`, ""
      );
      const { error: errorS2 } = await supabase.storage
        .from("trainer")
        .remove([filePathS2]);

      if (errorS2) {
        throw new Error('Gagal menghapus file S2');
      }
    } else if (s3) {
      const filePathS3 = s3.replace(
        `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/trainer/`, ""
      );
      const { error: errorS3 } = await supabase.storage
        .from("trainer")
        .remove([filePathS3]);

      if (errorS3) {
        throw new Error('Gagal menghapus file S3');
      }
    }

    // Remove the primary image
    const { error: errorImage } = await supabase.storage
      .from("trainer")
      .remove([filePathImage]);
      
    const { error: errorS1 } = await supabase.storage
      .from("trainer")
      .remove([filePathS1]);

    if (errorImage) {
      throw new Error('Gagal menghapus file gambar utama');
    } else if (errorS1) {
      throw new Error('Gagal menghapus file gambar s1');
    }

    // Delete trainer data
    const res = await DeleteTrainer(id);
    if (res) {
      Swal.fire("Success", "Data berhasil dihapus", "success").then(
        (result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        }
      );
    } else {
      alert("Gagal menghapus data trainer");
    }
  } catch (error) {
    console.error("Error deleting:", error);
    alert(`Gagal menghapus: ${error.message}`);
  }
};

  
  const updateStatus = async (id, status) => {
      var res = await UpdateStatusTrainer(id, status)
      
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

  if (!sertifikatOne) return alert("Please select an image to upload");

  const bucketName = "trainer";
  try {
    setUploading(true);

    // Mengatur daftar file untuk diunggah
    const filesToUpload = [
      { file: image, name: image.name },
      { file: sertifikatOne, name: sertifikatOne.name },
      sertifikatTwo && { file: sertifikatTwo, name: sertifikatTwo.name },
      sertifikatThree && { file: sertifikatThree, name: sertifikatThree.name },
    ].filter(Boolean); // Filter nilai null atau undefined

    // Melakukan upload semua file secara paralel
    const uploadPromises = filesToUpload.map(({ file, name }) => {
      return supabase.storage.from(bucketName).upload(name, file, {
        cacheControl: "3600",
        upsert: false,
      });
    });

    // Menunggu semua upload selesai
    const results = await Promise.all(uploadPromises);

    // Mengecek apakah ada error
    const errors = results.filter(({ error }) => error);
    if (errors.length > 0) {
      errors.forEach(({ error }) => console.error("Error uploading file:", error.message));
      return alert("Some files failed to upload. Check the console for details.");
    }

    // Mengambil public URL untuk semua file yang berhasil diunggah
    const publicUrls = results.map(({ data }, index) => {
      if (data) {
        return `${SUPABASE_URL}/storage/v1/object/public/${bucketName}/${filesToUpload[index].name}`;
      }
      return "";
    });

    // Kirim data ke API lain
    const success = await PostTrainer(name, email, phone, publicUrls[0], publicUrls[1], publicUrls[2], publicUrls[3], status);

    if (success) {
      Swal.fire(
        "Success",
        "Data berhasil ditambahkan, silakan reload halaman",
        "success"
      ).then((result) => {
        if (result.isConfirmed) {
          location.reload();
        }
      });
    } else {
      Swal.fire("Error", "Gagal menambahkan data", "error");
    }
  } catch (error) {
    console.error("Error uploading images:", error);
    alert("Error uploading images: " + error.message);
  } finally {
    setUploading(false);
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
          <h1 className="text-center mt-3 mb-3">New trainer</h1>
          <label className="mb-1">Nama lengkap</label>
          <input onInput={(e) => setName(e.target.value)} type="text" value={name} className="form-control mb-2" required placeholder="ketik disini.." />
          <label className="mb-1">Gambar</label>
          <input onInput={(e) => setImage(e.target.files[0])} accept="image/*" type="file" className="form-control mb-2" required />
          <label className="mb-1">Email</label>
          <input onInput={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control mb-2" required placeholder="ketik disini.." />
          <label className="mb-1">Nomor Handphone</label>
          <input onInput={(e) => setPhone(e.target.value)} value={phone} type="number" className="form-control mb-2" required placeholder="ketik disini.." />
          <label className="mb-1">Sertifikat 1</label>
          <input onInput={(e) => setSertifikatOne(e.target.files[0])} accept="image/*" type="file" className="form-control mb-2" />
          <label className="mb-1">Sertifikat 2 (op)</label>
          <input onInput={(e) => setSertifikatTwo(e.target.files[0])} accept="image/*" type="file" className="form-control mb-2" />
          <label className="mb-1">Sertifikat 3 (op)</label>
          <input onInput={(e) => setSertifikatThree(e.target.files[0])} accept="image/*" type="file" className="form-control mb-2" />
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
          <h3>Trainer management</h3>
          <i className="bx bx-search" />
          <i className="bx bx-filter" />
        </div>
        <button onClick={handleCreate} className="btn-download" style={{}}>Create new</button>
        <table className="mt-3">
          <thead>
            <tr>
              <th className="">No</th>
              <th>Gambar</th>
              <th>Sertifikat 1</th>
              <th>Sertifikat 2</th>
              <th style={{paddingRight: "5px"}}>Sertifikat 3</th>
              <th style={{paddingRight: "5px"}}>Nama lengkap</th>
              <th>Email</th>
              <th>Nomor Telepon</th>
              <th style={{paddingRight: "100px"}}>Status</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
          {Array.isArray(dataTrainer) &&
              dataTrainer.map((tr, index) => (
                <tr>
                  <td style={{paddingRight:"20px"}}>{index + 1}</td>
                  <td style={{paddingRight:"20px"}}><img style={{width: "80px",height: "auto"}} src={tr.image} /></td>
                  <td style={{paddingRight:"20px"}}>
                   {tr.sertifikat1 ? (
                   <img style={{width: "80px",height: "auto"}} src={tr.sertifikat1} />
                   ) : <span className="status pending">X</span>
                   }
                   </td>
                  <td style={{paddingRight:"20px"}}>
                   {tr.sertifikat2 ? (
                   <img style={{width: "80px",height: "auto"}} src={tr.sertifikat2} />
                   ) : <span className="status pending">X</span>
                   }
                   </td>
                   <td style={{paddingRight:"20px"}}>
                   {tr.sertifikat3 ? (
                   <img style={{width: "80px",height: "auto"}} src={tr.sertifikat3} />
                   ) : <span className="status pending">X</span>
                   }
                   </td>
                 <td style={{paddingRight:"20px", textWrap: "nowrap"}}>{tr.name}</td>
                 <td style={{paddingRight:"20px", textWrap: "nowrap"}}>{tr.email}
                 </td>
                 <td style={{paddingRight:"20px", textWrap: "nowrap"}}>{tr.phone}
                 </td>
                  <td style={{paddingRight:"20px", textWrap: "nowrap"}}><span className={`status ${tr.status ? "completed" : "pending"}`}>{tr.status ? "aktif" : "Tidak aktif"}</span></td>
                  <td className="gap-2 d-flex align-items-center">
                    <button
                      onClick={(e) =>
                        updateStatus(tr.key, !tr.status)
                      }
                      className={`${tr.status ? "completed" : "pending"} btn status`}
                    >
                      <i className={`bi-${tr.status ? "toggle-on" : "toggle-off"} text-light`} />
                    </button>
                    <button
                      onClick={(e) =>
                        temporaryEdit(tr.key, e.currentTarget)
                      }
                      className="btn btn-warning status"
                    >
                      <i className="bi-pencil text-dark" />
                    </button>
                    <button
                      onClick={(e) => temporaryDelete(tr.key, tr.image, tr.sertifikat1, tr.sertifikat2, tr.sertifikat3)}
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
          <h1>Dashboard Trainer</h1>
          <ul className="breadcrumb">
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" />
            </li>
            <li>
              <a className="active" href="#">
                Trainer
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="btn-download">
          <i className="bx bxs-cloud-download" />
          <span className="text">Download PDF</span>
        </a>
      </div>
      <TableTrainer />
    </main>
  );
};

const DashboardTrainer = () => {
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

export default DashboardTrainer;
