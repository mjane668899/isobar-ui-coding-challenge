import React from "react";
import "antd/dist/antd.css";
import "./content.css";
import lessons from "../fixtures/course.json";
import { Card, Avatar, Col, Row } from "antd";
import {
  EditOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

export default function Content({ children, ...restProps }) {
  return (
    <Row gutter={[8, 8]}>
      <Col span={1} style={{ float: "inherit" }}>
        {lessons.map((item) => (
          <Card
            className="card"
            key={item.name}
            cover={<img alt="example" src={item.image} />}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <ShoppingCartOutlined key="addToCart" />,
            ]}
          >
            <Meta
              className="meta"
              avatar={<Avatar src={item.image} />}
              title={item.name}
              description={item.description}
            />
          </Card>
        ))}
      </Col>
    </Row>
  );
}

Content.Row = function ContentRow({ children, ...restProps }) {
  return (
    <Row gutter={[8, 8]} style={{ display: "flex" }} {...restProps}>
      {children}
    </Row>
  );
};
