"use client";
import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer
      style={{ textAlign: "center", background: "#f0f2f5", padding: "20px" }}
    >
      © COMP3800
    </Footer>
  );
};

export default FooterComponent;
