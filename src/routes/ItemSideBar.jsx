import React from "react";
import { Tooltip } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function ItemSideBar({ icon: Icon, label, path }) {
  const navigate = useNavigate();

  return (
    <Tooltip
      className="bg-green-800 ml-2"
      content={label}
      placement="right"
      animate={{
        mount: { scale: 1, x: 0 },
        unmount: { scale: 0, x: -25 },
      }}
    >
      <li
        onClick={() => navigate(path)}
        className="relative flex flex-col items-center text-xl py-3 hover:bg-green-800 rounded-lg transition-all duration-300"
      >
        {Icon && <Icon />}
      </li>
    </Tooltip>
  );
}

export default ItemSideBar;
