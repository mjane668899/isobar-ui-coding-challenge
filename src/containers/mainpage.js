import React from "react";
import * as ROUTES from "../constants/routes";
import { Page, Content, SearchBar } from "../components";

export function PageContainer() {
  return (
    <>
      <Page>
        <Page.Header>
          <Page.Div className="logo">
            <Page.User />
          </Page.Div>
          <Page.Menu>
            <Page.MenuItem key="1" to={ROUTES.HOME}>
              HOME
            </Page.MenuItem>
          </Page.Menu>
        </Page.Header>
        <Page.Carousel></Page.Carousel>
        <Page.Content>
          <SearchBar />
          <Content.Row>
            <Content></Content>
            <Content></Content>
            <Content></Content>
            <Content></Content>
            <Content></Content>
            <Content></Content>
          </Content.Row>
        </Page.Content>
        <Page.Footer>Ant Design ©2018 Created by Ant UED</Page.Footer>
      </Page>
    </>
  );
}
