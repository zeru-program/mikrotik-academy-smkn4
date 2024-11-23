import { useLocation } from "react-router-dom";
import GetCmsImg from "../../backend/GetCmsImg";

const SideBar = ({ activeMenu, setActiveMenu, clickNav }) => {
  const { dataCmsImg } = GetCmsImg();
  const loc = useLocation()
  const sideActive = clickNav ? "" : "hide"; // Atur className berdasarkan clickNav
  const menuItems = [
    { name: "Dashboard", icon: "bxs-dashboard", href: "/dashboard" },
    { name: "Cms Management", icon: "bxs-shopping-bag-alt", href: "/dashboard/cms" },
    { name: "Trainer Management", icon: "bxs-doughnut-chart", href: "/dashboard/trainer" },
    { name: "Account management", icon: "bxs-group", href: "/dashboard/account" },
    { name: "Galery", icon: "bx-image", href: "/dashboard/galery" },
  ];
  return (
    <section id="sidebar" className={sideActive}>
      <a href="#" className="brand">
        <img src={dataCmsImg.find((item) => item.name === "logo_navbar" && item.status == true)?.img  || ""} className="mx-2" style={{width: "45px"}} />
        <span className="text-nowrap">Smkn4 bogor</span>
      </a>
      <ul className="side-menu top">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={item.href === loc.pathname ? "active" : ""}
            onClick={() => setActiveMenu(item.name)}
          >
            <a href={item.href}>
              <i className={`bx ${item.icon}`} />
              <span className="text text-sidebar">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="side-menu">
        <li>
          <a href="/">
            <i className="bx bxs-home" />
            <span className="text">Home</span>
          </a>
        </li>
        <li>
          <a href="/logout" className="logout">
            <i className="bx bxs-log-out-circle" />
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SideBar
