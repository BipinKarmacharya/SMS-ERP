import { Link } from "react-router-dom";
import { useState } from "react";

import { SidebarData } from "../assets/JSON/SidebarData";

import "/src/assets/CSS/Components/Sidebar.css";

export const Sidebar = ({ setPageTitle }) => {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (id) => {
        setOpenMenu(openMenu === id ? null : id);
    };

    return (
        <aside className="sidebar">
            {SidebarData.map((menu) => (
                <div key={menu.id} className="menu-item">
                    {/* Check if the menu has a submenu */}
                    {menu.subMenu.length > 0 ? (
                        <div className="menu-item-title" onClick={() => toggleMenu(menu.id)}>
                            <i className="bx bx-book-content allIcons"></i>
                            <span className="drop">{menu.menuTitle}</span>
                            <i className="bx bx-plus dropdownPlus"></i>
                        </div>
                    ) : (
                        <Link to={menu.menuLink[0]} className="menu-item-title" onClick={() => setPageTitle(menu.menuTitle)}>
                            <i className="bx bx-book-content allIcons"></i>
                            <span className="drop">{menu.menuTitle}</span>
                        </Link>
                    )}
                    {openMenu === menu.id && menu.subMenu.length > 0 && (
                        <SubMenu subMenu={menu.subMenu} menuLink={menu.menuLink} setPageTitle={setPageTitle} />
                    )}
                </div>
            ))}
        </aside>
    );
};

const SubMenu = ({ subMenu, menuLink, setPageTitle }) => {
    return (
        <div className="sub-menu">
            {subMenu.map((item, index) => (
                <div key={index} className="sub-item">
                    <Link to={menuLink[index] || "#"} onClick={() => setPageTitle(item)}>
                        {item}
                    </Link>
                </div>
            ))}
        </div>
    );
};