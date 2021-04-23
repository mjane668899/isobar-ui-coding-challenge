import React, { useState } from "react";
import "antd/dist/antd.css";
import "./content.css";
import lessons from "../fixtures/course.json";
import { Card, Avatar, Col, Row, Button, Modal } from "antd";
import {
  EditOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

// This is a Card Container
// Used map to manipulate json string object (img, name, description) into the card
export default function Content({ children, ...restProps }) {
  const [cart, setCart] = useState([]);
  // Console.log to check the addToCart Button is working
  const addToCart = (item) => {
    console.log("we are a addToCart");
    setCart([...cart, { ...item }]);
  };
  // Remove item from cart
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((item) => item !== productToRemove));
  };
  // Pop-up cart item
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Col span={6} className="column">
      {lessons.map((item, idx) => (
        <Card
          className="card"
          key={idx}
          cover={<img alt="example" src={item.image} />}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <ShoppingCartOutlined
              key="addToCart"
              onClick={() => addToCart(item)}
            />,
          ]}
        >
          <Button
            onClick={showModal}
            style={{ float: "top", marginBottom: 20 }}
          >
            View Cart ({cart.length})
          </Button>
          <Modal
            title="Item in your cart"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            {cart.map((product, idx) => (
              <Card
                style={{ wordWrap: "break-word" }}
                type="inner"
                title={product.name}
                key={idx}
              >
                <Meta
                  className="meta"
                  style={{
                    marginTop: 16,
                    textAlign: "left",
                    wordWrap: "break-word",
                  }}
                  title={product.author}
                  description={product.description}
                  avatar={
                    <Avatar
                      shape="square"
                      size={90}
                      style={{ marginRight: 20 }}
                      icon={<UserOutlined />}
                      src={product.image}
                    />
                  }
                />
                <Button
                  style={{ float: "right" }}
                  onClick={() => removeFromCart(product)}
                >
                  Remove
                </Button>
              </Card>
            ))}
          </Modal>
          <Meta
            className="meta"
            avatar={<Avatar src={item.image} />}
            title={item.name}
            description={item.description}
          />
        </Card>
      ))}
    </Col>
  );
}

Content.Row = function ContentRow({ children, ...restProps }) {
  return (
    <Row gutter={[8, 8]} {...restProps}>
      {children}
    </Row>
  );
};
