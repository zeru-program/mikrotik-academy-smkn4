import React, { useState, useEffect } from "react"
import Splash from "../components/Splash"
import "../../Dashboard.css"
import Swal from 'sweetalert2'

const db = import.meta.env.VITE_DB;

const Login = () => {
  if (sessionStorage.getItem("hasLogin")) {
    window.location.href = "/"
  }
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [role, setRole] = useState("admin")

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(db + "account.json")
      .then((res) => res.json())
      .then((data) => {
        var find = false
        for (let key in data) {
          var val = data[key]

          if ((user === val.username || user === val.email) && pass === val.password && role === val.role) {
            find = true
            Swal.fire({
              title: "Success",
              text: "Berhasil login",
              icon: "success"
            }).then((result) => {
              if (result.isConfirmed) {
                sessionStorage.setItem("hasLogin", true)
                sessionStorage.setItem("username", val.username)
                sessionStorage.setItem("email", val.email)
                sessionStorage.setItem("role", val.role)
                sessionStorage.setItem("password", val.password)
                window.location.href = "/?auth=succes"
              }
            })
          }
        }
        if (!find) {
          Swal.fire({
            title: "Failed",
            text: "Username atau password tidak cocok.",
            icon: "error"
          });
        }
      });
  };

  return (
    <>
      <Splash />
      <section className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit} className="rounded-2 d-flex flex-column bg-light shadow py-2 container" style={{ width: "300px" }}>
          <h1 className="fw-bold mb-3 mt-2 text-center">Login</h1>
          <label>Username/Email</label>
          <input className="mb-2 form-control" type="text" value={user} onInput={(e) => setUser(e.target.value)} placeholder="ketik disini.." required />
          <label>Password</label>
          <input className="mb-2 form-control" type="password" value={pass} onInput={(e) => setPass(e.target.value)} placeholder="ketik disini.." required />
          <label>Role</label>
          <select className="mb-4 form-control" type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="ketik disini.." required >
            <option value="admin">Admin</option>
            <option value="developer">Developer</option>
          </select>
          <button type="submit" className="status mb-2 btn text-light" style={{ background: "#0125FF" }}>Submit</button>
        </form>
      </section>
    </>
  )
}

export default Login