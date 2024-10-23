import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import HomeSreen from "./routes/Home.jsx";
import ChatScreen from "./routes/chat.jsx";
import PageNotFound from "./routes/PageNotFound.jsx";
import LoginScreen from "./routes/LoginScreen.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/home", element: <HomeSreen /> },
      { path: "/chat", element: <ChatScreen /> },
    ],
  },
  {
    path: "/login",
    element: <LoginScreen />,
    errorElement: <PageNotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
