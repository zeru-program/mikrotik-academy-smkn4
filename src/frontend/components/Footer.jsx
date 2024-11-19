const Footer = () => {
  return (
    <footer className="mt-5 pt-4 d-flex flex-column">
      <div className="d-flex gap-3 justify-content-center flex-wrap">
        <div className="d-flex container-fluid fc-1 flex-column">
          <h1 className="fw-bold">Smkn 4 Bogor</h1>
          <p>
            Jl. Raya Tajur, Kp. Buntar RT.02/RW.08, Kel. Muara sari, Kec. Bogor
            Selatan, RT.03/RW.08, Muarasari, Kec. Bogor Sel., Kota Bogor, Jawa
            Barat 16137
          </p>
        </div>
        <div className="d-flex container-fluid fc-2 flex-column">
          <h1 className="fw-bold">Sosial Media</h1>
          <a href="#" className="text-black">
            Youtube
          </a>
          <a href="#" className="text-black">
            Instagram
          </a>
          <a href="#" className="text-black">
            Twitter
          </a>
          <a href="#" className="text-black">
            Facebook
          </a>
          <a href="#" className="text-black">
            TikTok
          </a>
          <a href="#" className="text-black">
            Website
          </a>
        </div>
        <div className="d-flex fc-3 justify-content-start container-fluid map-footer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15852.109308197809!2d106.8256507!3d-6.6435284!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c8b16ee07ef5%3A0x14ab253dd267de49!2sSMK%20Negeri%204%20Bogor%20(Nebrazka)!5e0!3m2!1sid!2sid!4v1731850520421!5m2!1sid!2sid"
            width="100%"
            height={200}
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="w-100 container-fluid mt-3 pb-2 text-secondary d-flex flex-column justify-content-center align-items-center">
        <hr className="container-fluid" />
        <p>© COPYRIGHT 2024 - 2025 SMKN4 BOGOR</p>
      </div>
    </footer>
  );
};

export default Footer