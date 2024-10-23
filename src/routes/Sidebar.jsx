import React from "react";
import logoIcon from "../img/icon-longchat.svg";
import ItemSideBar from "./ItemSideBar";

import { MdOutlineSpaceDashboard, MdSpaceDashboard } from "react-icons/md";
import {
  HiOutlineChatBubbleLeftRight,
  HiChatBubbleLeftRight,
} from "react-icons/hi2";
import { PiTagSimpleBold, PiTagSimpleFill } from "react-icons/pi";
import { PiUsersBold, PiUsersFill } from "react-icons/pi";
import { RiSettings3Line, RiSettings3Fill } from "react-icons/ri";

const Sidebar = () => {
  const itensSideBar = [
    { id: 1, label: "Dashboard", icon: MdOutlineSpaceDashboard, path: "/home" },
    {
      id: 2,
      label: "Atendimentos",
      icon: HiOutlineChatBubbleLeftRight,
      path: "/chat",
    },
    { id: 3, label: "Etiquetas", icon: PiTagSimpleBold, path: "/chat" },
    { id: 4, label: "Usuários", icon: PiUsersBold, path: "/chat" },
    { id: 5, label: "Configuração", icon: RiSettings3Line, path: "/chat" },
  ];

  return (
    <aside className="flex">
      <div className="flex flex-col h-screen bg-green-900 text-white transition-all duration-300 relative">
        <img className="p-5" src={logoIcon} alt="icone longchat" />
        <nav className="m-2">
          <ul className="flex flex-col gap-4">
            {itensSideBar.map((itensSideBar) => (
              <ItemSideBar
                key={itensSideBar.id}
                label={itensSideBar.label}
                icon={itensSideBar.icon}
                path={itensSideBar.path}
              />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
