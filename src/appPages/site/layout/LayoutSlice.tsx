"use client";
import React, { FC, ReactNode } from "react";
import scss from "./LayoutSlice.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface SiteLayoutProps {
  children: ReactNode;
}

const LayoutSlice: FC<SiteLayoutProps> = ({ children }) => {
  return (
    <div id={scss.LayoutSlice}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSlice;
