import React from "react";
import LateralAtendimentos from "./LateralAtendimentos";

function AtendimentosScreen() {
  return (
    <>
      <div className="flex h-screen overflow-x-auto">
        <LateralAtendimentos />
        <div className="w-full min-w-[500px] bg-gray-300"></div>
      </div>
    </>
  );
}

export default AtendimentosScreen;
