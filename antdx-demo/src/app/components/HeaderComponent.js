"use client";
import React from "react";
import { Button, Layout, Menu, Typography } from "antd";
import { useRouter } from "next/navigation";

const { Header } = Layout;
const { Title } = Typography;

const HeaderComponent = () => {
  const router = useRouter();

  const menuItems = [
    { key: "1", label: "Home", onClick: () => router.push("/") },
    { key: "2", label: "Model", onClick: () => router.push("/model") },
  ];

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        type="link"
        onClick={() => router.push("/")}
        style={{ padding: 0, color: "white" }}
      >
        <Title level={3} style={{ color: "white", margin: 0 }}>
          Conscious Connect
        </Title>
      </Button>

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={menuItems.map((item) => ({
          ...item,
          onClick: item.onClick,
        }))}
      />
    </Header>
  );
};

export default HeaderComponent;
