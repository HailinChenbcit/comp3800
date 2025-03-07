"use client";
import React from "react";
import { Layout, Typography, Button } from "antd";
import { useRouter } from "next/navigation";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const HomePage = () => {
  const router = useRouter();

  return (
    <Layout>
      <Content style={{ padding: "50px", textAlign: "center" }}>
        <Title>Conscious Connect</Title>
        <Paragraph>
          View our pretrained models for your recommendation
        </Paragraph>
        <Button
          type="primary"
          size="large"
          onClick={() => router.push("/model")}
        >
          View Model
        </Button>
      </Content>
    </Layout>
  );
};

export default HomePage;
