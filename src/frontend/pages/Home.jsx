import React, { useState, useEffect } from "react";
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import HeaderNavbarLarge from "../components/HeaderNavbarLarge"

const HeroHeader = () => {
  return (
    <header
      className="w-100 d-flex justify-content-center align-items-center hero-home"
      style={{
        background:
          "url('https://mikrotik.smkdp1jkt.sch.id/wp-content/uploads/2018/09/MIKROTIK-AKADEMI-2-768x392.jpg') center center",
        backgroundSize: "cover",
      }}
    >
    </header>
  );
};

// Section Components
const HomeSection = () => {
  return (
    <section className="w-100 shadow-hover bg-sc mb25 box-opening shadow-sm py-3 d-flex flex-wrap">
      <div className="container-fluid">
        <img src="#" alt="Picture Kepala Sekolah" />
      </div>
      <div className="container-fluid">
        <h1>Sambutan Kepala Sekolah</h1>
        <div className="position-relative con-hr w-100">
          <div className="hr-ac position-absolute" />
          <hr className="w-100" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          aspernatur quibusdam repudiandae perferendis animi, veritatis nihil
          fugit excepturi iste in.
        </p>
      </div>
    </section>
  );
};

const TrainerSection = () => {
  return (
    <section className="w-100 h-auto shadow-hover bg-sc mb25 box-trainer shadow-sm py-3 d-flex flex-wrap">
      <div className="container-fluid">
        <h1>Trainer Kami</h1>
        <div className="position-relative con-hr w-100">
          <div className="hr-ac position-absolute" />
          <hr className="w-100" />
        </div>
        <div className="w-100 gap-3 mt-2 d-flex flex-wrap">
          <div className="box-trainer position-relative shadow-sm">
            <img src="#" alt="Foto Orang" />
            <span>Nama Trainer - Jabatan ?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const GaleryKomentar = () => {
    return (
    <section className="w-100 section-galery py-3 gap25 d-grid">
      <div className="bg-sc shadow-hover box-gk-1 shadow-sm py-3 d-flex">
        <div className="container-fluid">
          <h1>Galery</h1>
          <div className="position-relative con-hr w-100">
            <div className="hr-ac position-absolute" />
            <hr className="w-100" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="bg-sc shadow-hover box-gk-2 shadow-sm py-3 d-flex">
        <div className="container-fluid">
          <h1>Komentar</h1>
          <div className="position-relative con-hr w-100">
            <div className="hr-ac position-absolute" />
            <hr className="w-100" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
    )
}

const ProfileSekolah = () => {
    return (
    <section className="w-100 p-0 section-profile-sekolah gap-lg-25 mb-lg-2 d-grid">
      <div className="d-flex flex-column">
        <div className="w-auto shadow-hover bg-sc mb25 box-ps-1 shadow-sm py-3 d-flex">
          <div className="container-fluid">
            <h1>Apa itu Mikrotik Academy?</h1>
            <div className="position-relative con-hr w-100">
              <div className="hr-ac position-absolute" />
              <hr className="w-100" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate aspernatur quibusdam repudiandae perferendis animi, veritatis nihil fugit excepturi iste in.</p>
          </div>
        </div>
        <div className="w-auto shadow-hover bg-sc mb25 box-ps-2 shadow-sm py-3 d-flex">
          <div className="container-fluid">
            <h1>Profile Sekolah</h1>
            <div className="position-relative con-hr w-100">
              <div className="hr-ac position-absolute" />
              <hr className="w-100" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate aspernatur quibusdam repudiandae perferendis animi, veritatis nihil fugit excepturi iste in.</p>
          </div>
        </div>
      </div>
      <div className="w-auto shadow-hover bg-sc mb-2 box-ps-3 shadow-sm py-3 d-flex">
        <div className="container-fluid">
          <h1>Fasilitas</h1>
          <div className="position-relative con-hr w-100">
            <div className="hr-ac position-absolute" />
            <hr className="w-100" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
    )
}

const MateriManfaat = () => {
    return (
    <section className="w-100 section-materi-manfaat mb-2 d-grid py-3 gap25">
      <div className="bg-sc shadow-hover box-mt-1 shadow-sm py-3 d-flex">
        <div className="container-fluid">
          <h1>Materi</h1>
          <div className="position-relative con-hr w-100">
            <div className="hr-ac position-absolute" />
            <hr className="w-100" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="bg-sc shadow-hover box-mt-2 shadow-sm py-3 d-flex">
        <div className="container-fluid">
          <h1>Manfaat</h1>
          <div className="position-relative con-hr w-100">
            <div className="hr-ac position-absolute" />
            <hr className="w-100" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
    )
}

const Partner = () => {
    return (
    <section className="w-100 bg-sc shadow-hover mb-2 box-partner shadow-sm py-3 d-flex flex-wrap">
      <div className="container-fluid">
        <h1>Partner kami</h1>
        <div className="position-relative con-hr w-100">
          <div className="hr-ac position-absolute" />
          <hr className="w-100" />
        </div>
        <div className="w-100 gap-3 d-flex flex-wrap">
          <img src="#" alt="img" />
        </div>
      </div>
    </section>
    )
}

const Home = () => {
  return (
    <div>
      <HeaderNavbarLarge />
      <Nav />
      <HeroHeader />
      <main className="mt-5 container">
        <HomeSection />
        <ProfileSekolah />
        <MateriManfaat />
        <TrainerSection />
        <Partner />
        <GaleryKomentar/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
