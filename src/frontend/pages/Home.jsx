import React, { useState, useEffect } from "react";
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"
import Splash from "../components/Splash"
import HeaderNavbarLarge from "../components/HeaderNavbarLarge"
import GetCms from "../../backend/GetCms";
import GetCmsImg from "../../backend/GetCmsImg";
import GetTrainer from "../../backend/GetTrainer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroHeader = () => {
  const { dataCmsImg } = GetCmsImg();
  const [cover, setCover] = useState("")
  useEffect(() => {
    setTimeout(() => {
      setCover("cover")
    }, 2000)
  }, [])
  // Safely retrieve the image URL
  return (
    <header
      className="w-100 d-flex justify-content-center align-items-center hero-home"
      data-aos="fade-in"
      data-aos-delay="2300"
      style={{
        background: `url(${dataCmsImg.find((item) => item.name === "hero_banner" && item.status == true)?.img || ""}) center center`,
        backgroundSize: cover,
      }}
    ></header>
  );
};

// Section Components
const HomeSection = () => {
  const { dataCmsImg } = GetCmsImg();
  const { dataCms } = GetCms()
  return (
    <section className="w-100 shadow-hover bg-sc mb25 box-opening shadow-sm py-3 d-flex flex-wrap" data-aos="fade-up" data-aos-delay="2300">
      <div className="container-fluid">
        <img
          src={dataCmsImg.find((item) => item.name === "hero_kepsek" && item.status == true)?.img || ""}
          style={{ pointerEvents: "none" }}
          className="img-hero-home"
          data-aos="zoom-in"
          data-aos-delay="2500"
          alt="Picture Kepala Sekolah"
        />
      </div>
      <div className="container-fluid mt-2">
        <h1 data-aos="fade-up" data-aos-delay="500">{dataCms.find((item) => item.id === "h1")?.content || "Sambutan Kepala Sekolah"}</h1>
        <div className="position-relative con-hr w-100">
          <div className="hr-ac position-absolute" />
          <hr className="w-100" />
        </div>
        <div data-aos="fade-up" data-aos-delay="800" className="w-100" style={{ whiteSpace: "pre-line" }}>
          <p>Assalamualaikum Warahmatullahi Wabarakatuh,</p>
          <p>Salam sejahtera untuk kita semua. Pertama-tama, marilah kita panjatkan puji dan syukur ke hadirat Allah Subhanahu wa Ta'ala atas segala nikmat dan karunia-Nya. Pada kesempatan yang istimewa ini, saya ingin menyampaikan rasa bangga dan apresiasi yang setinggi-tingginya atas capaian SMK Negeri 4 Kota Bogor yang telah sukses menyelesaikan tiga tahun Program SMK Pusat Keunggulan pada tahun 2024.</p>
          <p>Dengan keberhasilan ini, SMK Negeri 4 Kota Bogor kini telah menyandang gelar sebagai SMK Pusat Keunggulan. Gelar ini bukan sekadar penghargaan, tetapi juga amanat dan tanggung jawab besar untuk terus mengembangkan mutu pendidikan kejuruan yang berorientasi pada dunia usaha, dunia industri, dunia kerja, serta pengembangan kewirausahaan.</p>

          <p>Kami percaya bahwa keberhasilan ini merupakan hasil kerja keras seluruh elemen sekolah, mulai dari pimpinan, tenaga pendidik, siswa, hingga para mitra yang telah memberikan dukungan secara langsung maupun tidak langsung. Semoga gelar ini menjadi pendorong bagi SMK Negeri 4 Kota Bogor untuk terus menghasilkan lulusan yang kompeten, profesional, dan mampu bersaing di tingkat nasional maupun internasional.</p>

          <p>Pada kesempatan yang berbahagia ini, saya juga ingin mengucapkan selamat dan terima kasih kepada rekan-rekan di Kompetensi Keahlian Teknik Komputer Jaringan (TKJ) serta Teknik Jaringan Komputer dan Telekomunikasi (TJKT) atas dedikasi dan kerja kerasnya. Berkat usaha bersama, SMK Negeri 4 Kota Bogor kini telah resmi membuka Mikrotik Academy.</p>

          <p>Program Mikrotik Academy ini merupakan langkah strategis yang sangat penting dalam upaya meningkatkan kualitas pendidikan kejuruan, khususnya di bidang teknologi jaringan. Melalui program ini, siswa tidak hanya mendapatkan ilmu pengetahuan teoritis, tetapi juga kesempatan untuk mempraktikkan keterampilan langsung menggunakan perangkat jaringan mutakhir.</p>

          <p>Dengan adanya Mikrotik Academy, SMK Negeri 4 Kota Bogor juga memiliki kemampuan untuk menyelenggarakan program Sertifikasi MikroTik Certified Network Associate (MTCNA). Program sertifikasi ini memberikan pengakuan resmi kepada siswa yang telah menguasai konsep dasar jaringan dan mampu mengelola perangkat MikroTik dengan baik. Sertifikat MTCNA tidak hanya menjadi nilai tambah bagi siswa di dunia kerja, tetapi juga membuka peluang karier yang lebih luas di tingkat nasional maupun internasional.</p>

          <p>Kami berharap, program ini dapat menghasilkan lulusan yang tidak hanya memiliki kompetensi teknis (hard skills), tetapi juga sikap kerja yang baik (soft skills). Dengan demikian, mereka mampu menjawab tantangan dunia usaha dan dunia industri yang terus berkembang, serta memiliki daya saing yang tinggi di pasar kerja global.</p>

          <p>Lebih dari itu, keberadaan Mikrotik Academy di SMK Negeri 4 Kota Bogor diharapkan dapat menjadi salah satu langkah awal untuk meningkatkan standar kualitas pendidikan vokasi di Indonesia. Kami yakin, dengan semangat kolaborasi antara sekolah, masyarakat, dan dunia usaha, kita dapat terus mencetak generasi muda yang siap menghadapi masa depan dengan inovasi dan keahlian yang tinggi.</p>

          <p>Kepala Sekolah<br />Drs. Mulya Murprihartono, M.Si.</p>

          <p>Wassalamualaikum Warahmatullahi Wabarakatuh.</p>
        </div>
      </div>
    </section>
  );
};

const ProfileSekolah = () => {
  const { dataCmsImg } = GetCmsImg();
  const { dataCms } = GetCms()
  return (
    <section className="w-100 p-0 section-profile-sekolah gap-lg-25 mb-lg-2 d-grid" data-aos="fade-up" id="profile-sekolah">
      <div className="d-flex flex-column">
        <div className="w-auto shadow-hover bg-sc mb25 box-ps-1 shadow-sm py-3 d-flex flex-column">
          <div className="w-100 justify-content-center d-flex">
            <img data-aos="zoom-in" data-aos-delay="500" src={dataCmsImg.find((item) => item.name === "profile_mikrotik_academy" && item.status == true)?.img || ""} className="" style={{ width: "90%" }} alt="logo mikrotik" />
          </div>
          <div className="container-fluid mt-3">
            <div className="position-relative con-hr w-100">
              <div className="hr-ac position-absolute" />
              <hr className="w-100" />
            </div>
            <p data-aos="fade-up" data-aos-delay="500">
              {dataCms.find((item) => item.id === "p1")?.content || "Loading.."}
            </p>
          </div>
        </div>
        <div className="w-auto shadow-hover bg-sc mb25 box-ps-2 shadow-sm py-3 d-flex" data-aos="fade-up">
          <div className="container-fluid">
            <h1 data-aos="fade-up" data-aos-delay="500">{dataCms.find((item) => item.id === "p2")?.content || "Loading.."}</h1>
            <div className="position-relative con-hr w-100">
              <div className="hr-ac position-absolute" />
              <hr className="w-100" />
            </div>
            <p data-aos="fade-up" data-aos-delay="800">
              {dataCms.find((item) => item.id === "p3")?.content || "Loading.."}
            </p>
          </div>
        </div>
      </div>
      <div className="w-auto shadow-hover bg-sc mb-2 box-ps-3 shadow-sm py-3 d-flex" data-aos="fade-up">
        <div className="container-fluid">
          <h1 data-aos="fade-up" data-aos-delay="500">{dataCms.find((item) => item.id === "p4")?.content || "Loading.."}</h1>
          <div className="position-relative con-hr w-100">
            <div className="hr-ac position-absolute" />
            <hr className="w-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

const MateriManfaat = () => {
  const { dataCms } = GetCms()
  return (
    <section className="w-100 section-materi-manfaat mb-2 d-grid py-3 gap25" id="materi-manfaat">
      <div data-aos="fade-up" className="bg-sc shadow-hover box-mt-1 shadow-sm py-3 d-flex">
        <div className="container-fluid">
          <h1 data-aos="fade-up" data-aos-delay="500">{dataCms.find((item) => item.id === "mm1")?.content || "Loading.."}</h1>
          <div className="position-relative con-hr w-100">
            <div className="hr-ac position-absolute" />
            <hr className="w-100" />
          </div>
          <p data-aos="fade-up" style={{ whiteSpace: "pre-line" }} data-aos-delay="800">
            MikroTik Academy akan memberikan sertifikasi MTCNA (MikroTik Certified Network Associate) yang menjadi langkah awal bagi peserta training untuk bergabung dalam asosiasi dan sebagai syarat untuk mengambil sertifikasi yang lebih tinggi dari MikroTik.
          </p>

          <p className="m-0">Materi MTCNA di antaranya:</p>
          <p className="m-0">1.Introduction to Mikrotik</p>
          <p className="m-0">2.DHCP</p>
          <p className="m-0">3.Bridge</p>
          <p className="m-0">4.Routing</p>
          <p className="m-0">5.Firewall</p>
          <p className="m-0">6.Quality of Service</p>
          <p className="m-0">7.Wireless</p>
          <p className="m-0">8.Tunnel</p>
        </div>
      </div>
      <div data-aos="fade-up" className="bg-sc shadow-hover box-mt-2 shadow-sm py-3 d-flex">
        <div className="container-fluid">
          <h1 data-aos="fade-up" data-aos-delay="500">{dataCms.find((item) => item.id === "mm3")?.content || "Loading.."}</h1>
          <div className="position-relative con-hr w-100">
            <div className="hr-ac position-absolute" />
            <hr className="w-100" />
          </div>
          <p data-aos="fade-up" data-aos-delay="800">{dataCms.find((item) => item.id === "mm4")?.content || "Loading.."}</p>
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

const TrainerSection = () => {
  const { dataCms } = GetCms()
  const { dataTrainer } = GetTrainer()
  return (
    <section className="w-100 h-auto shadow-hover bg-sc mb25 shadow-sm py-3 d-flex flex-wrap" id="trainer" data-aos="fade-up">
      <div className="container-fluid">
        <h1 data-aos="fade-up" data-aos-delay="500">
          {dataCms.find((item) => item.id === "t1")?.content || "Loading.."}
        </h1>
        <div className="position-relative con-hr w-100">
          <div className="hr-ac position-absolute" />
          <hr className="w-100" />
        </div>
        <div className="w-100 gap-3 mt-2 d-flex flex-wrap">
          {Array.isArray(dataTrainer) &&
            dataTrainer.map((tr, index) => tr.status && (
              <div className="box-trainer py-3 d-flex gap-3" key={index} data-aos="fade-up" data-aos-delay="800">
                <div
                  className="img-trainer text-light position-relative shadow-sm"
                  style={{
                    background: `linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0,.9)), url('${tr.image}') center center`,
                    backgroundSize: "cover",
                  }}
                >
                  <span>
                    {tr.name} - {tr.email}
                  </span>
                </div>

                {/* Render gambar sertifikat berdasarkan nilai */}
                {tr.sertifikat1 && (
                  <img
                    src={tr.sertifikat1}
                    className="shadow-sm img-trainer"
                    alt="Sertifikat 1"
                  />
                )}
                {tr.sertifikat2 && (
                  <img
                    src={tr.sertifikat2}
                    className="shadow-sm img-trainer"
                    alt="Sertifikat 2"
                  />
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

const GaleryKomentar = () => {
  return (
    <section className="w-100 section-galery py-3 gap25 d-grid" data-aos="fade-up">
      <div className="bg-sc shadow-hover box-gk-2 shadow-sm py-3 d-flex">
        <div className="container-fluid">
          <h1 data-aos="fade-up" data-aos-delay="500">Komentar</h1>
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

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])
  return (
    <div>
      <BackToTop />
      <Splash />
      <HeaderNavbarLarge />
      <Nav />
      <HeroHeader />
      <main className="mt-5 container">
        <HomeSection />
        <ProfileSekolah />
        <MateriManfaat />
        <TrainerSection />
        {/* <Partner /> */}
        <GaleryKomentar />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
