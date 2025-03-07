"use client";
import React, { useState } from "react";
import { Layout, Button, Typography, Card, Spin, message } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const ModelPage = () => {
  const [modelType, setModelType] = useState("free");
  const [modelData, setModelData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch model data based on the selected type
  const fetchModelData = async (type) => {
    setLoading(true);
    setModelType(type);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/${type}_model`
      );
      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();
      setModelData({
        name: data.name || `${type === "free" ? "Free" : "Pro"} Model`,
        accuracy: data.accuracy || "N/A",
        description: data.description || "No description available.",
      });

      message.success(
        `${type === "free" ? "Free" : "Pro"} Model data loaded successfully!`
      );
    } catch (error) {
      message.error(
        `Error fetching ${type === "free" ? "Free" : "Pro"} Model data`
      );
      console.error("API Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Content style={{ padding: "50px", textAlign: "center" }}>
        <Title level={2}>Choose a Model</Title>
        <Paragraph>Select a model type to see its details.</Paragraph>

        {/* Buttons for Model Selection */}
        <Button
          type={modelType === "free" ? "primary" : "default"}
          onClick={() => fetchModelData("free")}
          style={{ marginRight: "10px" }}
        >
          Free Model
        </Button>
        <Button
          type={modelType === "pro" ? "primary" : "default"}
          onClick={() => fetchModelData("pro")}
        >
          Pro Model
        </Button>

        <Card
          style={{
            marginTop: "20px",
            maxWidth: "400px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          {loading ? (
            <Spin size="large" />
          ) : modelData ? (
            <>
              <Title level={3}>{modelData.name}</Title>
              <Paragraph>
                <strong>Accuracy:</strong> {modelData.accuracy}
              </Paragraph>
              <Paragraph>{modelData.description}</Paragraph>
            </>
          ) : (
            <Paragraph>Select a model to load details</Paragraph>
          )}
        </Card>
      </Content>
    </Layout>
  );
};

export default ModelPage;
