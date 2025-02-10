/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ props, children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
