import React from "react";
import Sidebar from "./routes/Sidebar";
// import LoginScreen from "./routes/LoginScreen";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
export default App;
