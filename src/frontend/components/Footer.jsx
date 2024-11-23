import GetCms from "../../backend/GetCms";

const Footer = () => {
  const { dataCms } = GetCms()
  return (
    <footer className="mt-5 pt-4 d-flex flex-column">
      <div className="d-flex gap-3 justify-content-center flex-wrap">
        <div className="d-flex container-fluid fc-1 flex-column">
          <h1 className="fw-bold">
          {dataCms.find((item) => item.id === "f1")?.content  || "Smkn 4 Bogor"}
          </h1>
          <p>
           {dataCms.find((item) => item.id === "f2")?.content  || "Loading.."}
          </p>
        </div>
        <div className="d-flex container-fluid fc-2 flex-column">
          <h1 className="fw-bold">
            {dataCms.find((item) => item.id === "f3")?.content  || "Loading.."}
          </h1>
          <a href={dataCms.find((item) => item.id === "f4")?.content  || "Loading.."} className="text-black">
            <i className="bi bi-youtube" style={{paddingRight: "5px"}} />
            Youtube
          </a>
          <a href={dataCms.find((item) => item.id === "f5")?.content  || "Loading.."} className="text-black">
            <i className="bi bi-instagram" style={{paddingRight: "5px"}} />
            Instagram
          </a>
          <a href={dataCms.find((item) => item.id === "f6")?.content  || "Loading.."} className="text-black">
            <i className="bi bi-twitter" style={{paddingRight: "5px"}} />
            Twitter
          </a>
          <a href={dataCms.find((item) => item.id === "f7")?.content  || "Loading.."} className="text-black">
            <i className="bi bi-facebook" style={{paddingRight: "5px"}} />
            Facebook
          </a>
          <a href={dataCms.find((item) => item.id === "f8")?.content  || "Loading.."} className="text-black">
            <i className="bi bi-tiktok" style={{paddingRight: "5px"}} />
            TikTok
          </a>
          <a href={dataCms.find((item) => item.id === "f9")?.content  || "Loading.."} className="text-black">
            <i className="bi bi-globe-americas" style={{paddingRight: "5px"}} />
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
        <p>
        {dataCms.find((item) => item.id === "f10")?.content  || "Loading.."}
        </p>
      </div>
    </footer>
  );
};

export default Footer