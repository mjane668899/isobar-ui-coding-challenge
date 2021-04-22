import React from "react";
import "antd/dist/antd.css";
import "./page.css";
import { Layout, Menu } from "antd";
import { Avatar } from "antd";
import { Input, Space } from "antd";
import { ShoppingFilled } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Carousel } from "antd";

// This is a ant-design function
const { Header, Content, Footer } = Layout;
const { Search } = Input;
const onSearch = (value) => console.log(value);

// This is a layout
export default function Page({ children, ...restProps }) {
  return (
    <Layout className="Layout" {...restProps}>
      {children}
    </Layout>
  );
}

// This is a header
Page.Header = function PageHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

// This is a Header Menu
Page.Menu = function PageMenu({ children, ...restProps }) {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      {...restProps}
    >
      {children}
    </Menu>
  );
};

// This is a Menu Item
Page.MenuItem = function PageMenuItem({ children, ...restProps }) {
  return (
    <Menu.Item key="1" {...restProps}>
      {children}
    </Menu.Item>
  );
};

// This is a Content Container
Page.Content = function PageContent({ children, ...restProps }) {
  return (
    <Content className="container-container" {...restProps}>
      {children}
    </Content>
  );
};

// This is a User Icon
Page.User = function PageUser({ children, ...restProps }) {
  return (
    <Avatar
      shape="square"
      size="large"
      icon={<UserOutlined />}
      style={{ float: "inherit" }}
    />
  );
};

// This is a Shopping cart icon
Page.ShoppingCart = function PageShoppingCart({ children, ...restProps }) {
  return <ShoppingFilled />;
};

// This is a basic DIV
Page.Div = function PageDiv({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>;
};

// This is a Footer
Page.Footer = function PageFooter({ children, ...restProps }) {
  return (
    <Footer style={{ textAlign: "center" }} {...restProps}>
      {children}
    </Footer>
  );
};

// This is a Search Bar
Page.Search = function PageSearch({ children, ...restProps }) {
  return (
    <Search
      placeholder="Search Course"
      size="large"
      allowClear
      onSearch={onSearch}
      display="center"
      style={{ width: 400, margin: 15, height: 20 }}
    />
  );
};

Page.Space = function PageSpace({ children, ...restProps }) {
  return <Space {...restProps}>{children}</Space>;
};

// This is a Corousel Banner
Page.Carousel = function PageCarousel({ children, ...restProps }) {
  return (
    <Carousel autoplay className="content-style">
      <div>
        <h3 className="content-style">This is banner 1</h3>
      </div>
      <div>
        <h3 className="content-style">This is banner 2</h3>
      </div>
      <div>
        <h3 className="content-style">This is banner 3</h3>
      </div>
      <div>
        <h3 className="content-style">This is banner 4</h3>
      </div>
    </Carousel>
  );
};
