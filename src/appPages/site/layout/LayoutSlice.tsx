"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import scss from "./LayoutSlice.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import LoginM14 from "@/login/LoginM14";

interface SiteLayoutProps {
  children: ReactNode;
}

const LayoutSlice: FC<SiteLayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <div className="" id={scss.LayoutSlice}>
      {loading ? (
        <>{/* <LoginM14 /> */}</>
      ) : (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default LayoutSlice;
