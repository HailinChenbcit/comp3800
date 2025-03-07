"use client";
import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

const { Content } = Layout;

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Layout
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <HeaderComponent />

          <Content style={{ flex: 1, padding: "20px" }}>
            {children} {/* Render children components */}
          </Content>

          <FooterComponent />
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
