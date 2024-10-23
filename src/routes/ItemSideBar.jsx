import React from "react";
import { Tooltip } from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";

function ItemSideBar({ icon: Icon, label, path }) {
  const navigate = useNavigate();

  return (
    <Tooltip
      className="bg-principais-green01 ml-2"
      content={label}
      placement="right"
      animate={{
        mount: { scale: 1, x: 0 },
        unmount: { scale: 0, x: -25 },
      }}
    >
      <NavLink
        to={path}
        className={({ isActive }) =>
          `relative flex flex-col items-center text-xl py-3 rounded-lg transition-all duration-300 cursor-pointer ${
            isActive ? "bg-principais-green02" : "hover:bg-principais-green03"
          }`
        }
      >
        {Icon && <Icon />}
      </NavLink>
    </Tooltip>
  );
}

export default ItemSideBar;
