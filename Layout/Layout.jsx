import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Layout from "./components/Layout";
import Resources from "./components/Resources";

const Layout = () => { 
  return (
    <div>
      <Nav />
      <main>
        <Outlet />  
      </main>
    </div>
  );
};

export default Layout;