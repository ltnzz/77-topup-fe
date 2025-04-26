import React from "react";
import { Navbar } from "../components/navigation-bar/navigation-container";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
    </>
  );
};
