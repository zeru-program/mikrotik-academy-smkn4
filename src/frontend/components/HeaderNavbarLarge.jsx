import GetCmsImg from "../../backend/GetCmsImg";

const HeaderNavbarLarge = () => {
  const { dataCmsImg } = GetCmsImg();
  return (
    <header className="w-100 align-items-center header-nav-lg">
      <button
        className="d-flex gap-2 align-items-center border-0 bg-transparent container-fluid mt-3 mx-3"
        onClick={() => window.location.href = "/"}
      >
        <img
          src={dataCmsImg.find((item) => item.name === "logo_navbar" && item.status == true)?.img  || ""}
          alt="SMKN 4 BOGOR Logo"
        />
      </button>
    </header>
  );
};

export default HeaderNavbarLarge
