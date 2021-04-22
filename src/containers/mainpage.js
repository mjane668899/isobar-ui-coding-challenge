import React from "react";
import * as ROUTES from "../constants/routes";
import { Page, Content, SearchBar } from "../components";

export function PageContainer() {
  return (
    <>
      {/* Container for homepage */}
      <Page>
        {/* Header */}
        <Page.Header>
          <Page.Div className="user-icon">
            <Page.User />
          </Page.Div>
          {/* Relocator to home page */}
          <Page.Menu>
            <Page.MenuItem key="1" to={ROUTES.HOME}>
              HOME
            </Page.MenuItem>
          </Page.Menu>
        </Page.Header>
        {/* Carousel  */}
        <Page.Carousel></Page.Carousel>
        <Page.Content>
          {/* Search Bar */}
          <SearchBar />
          {/* Card for Course Content */}
          <Content.Row>
            <Content></Content>
            <Content></Content>
            <Content></Content>
            <Content></Content>
            <Content></Content>
            <Content></Content>
          </Content.Row>
        </Page.Content>
        {/* Footer */}
        <Page.Footer>©2021 Created by Michelle Teoh</Page.Footer>
      </Page>
    </>
  );
}
