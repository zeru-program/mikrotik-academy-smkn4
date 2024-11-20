import React, { useState, useEffect } from 'react'

const Splash = () => {
    const [dispAn, setDispAn] = useState(true)
    const [none, setNone] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setDispAn(false)
            setNone(true)
        }, 2300)
    }, [])
  return (
    <div className='w-100 vh-100 position-fixed start-0 top-0 justify-content-center align-items-center' style={{display: none ? "none" : "flex",backdropFilter: "blur(2px)", zIndex: "999999999", background: "rgba(225,225,225,1)"}}>
       <span className="spinner-grow text-ac" style={{display: dispAn ? "flex" : "none"}}></span>
    </div>
  )
}

export default Splash
