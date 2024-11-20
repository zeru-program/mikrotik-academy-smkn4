import { useLocation } from "react-router-dom";

const SideBar = ({ activeMenu, setActiveMenu, clickNav }) => {
  const loc = useLocation()
  const sideActive = clickNav ? "" : "hide"; // Atur className berdasarkan clickNav
  const menuItems = [
    { name: "Dashboard", icon: "bxs-dashboard", href: "/dashboard" },
    { name: "Cms", icon: "bxs-shopping-bag-alt", href: "/dashboard/cms" },
    { name: "Analytics", icon: "bxs-doughnut-chart", href: "/dashboard/a" },
    { name: "Message", icon: "bxs-message-dots", href: "/dashboard/b" },
    { name: "Team", icon: "bxs-group", href: "/dashboard/c" },
  ];
  return (
    <section id="sidebar" className={sideActive}>
      <a href="#" className="brand">
        <img src="/images/logo-mikrotik1.jpg" className="mx-2" style={{width: "45px"}} />
        <span className="text-nowrap">smkn4 bogor</span>
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
          <a href="#">
            <i className="bx bxs-cog" />
            <span className="text">Settings</span>
          </a>
        </li>
        <li>
          <a href="#" className="logout">
            <i className="bx bxs-log-out-circle" />
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SideBar
