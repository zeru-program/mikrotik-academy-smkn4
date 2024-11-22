import React, { useState, useEffect } from "react"
import Splash from "../components/Splash"
import "../../Dashboard.css"

const Login = () => {
    return (
        <>
        <Splash/>
        <section className="w-100 vh-100 d-flex justify-content-center align-items-center">
          <form className="rounded-2 d-flex flex-column bg-light shadow py-2 container" style={{width: "300px"}}>
           <h1 className="fw-bold mb-3 mt-2 text-center">Login</h1>
           <label>Username/Email</label>
           <input className="mb-2 form-control" type="text" placeHolder="ketik disini.." />
           <label>Password</label>
           <input className="mb-2 form-control" type="password" placeHolder="ketik disini.." />
           <label>Role</label>
           <select className="mb-4 form-control" type="text" placeHolder="ketik disini.." >
            <option value="admin">Admin</option>
           </select>
           <button type="submit" className="status mb-2 btn text-light" style={{background: "#0125FF"}}>Submit</button>
          </form>
        </section>
        </>
   )
}

export default Login