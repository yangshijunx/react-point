import React from "react";
import { Layout, Menu, theme } from "antd";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pages = [
    {
      path: "/",
      name: "Home",
      component: () => <div>home</div>,
    },
    {
      path: "/list",
      name: "List",
      component: () => <div>list</div>,
    },
  ];
  const createRoute = () => {
    return pages.map((page, index) => {
      return {
        key: index + 1,
        label: <Link to={page.path}>{page.name}</Link>,
      };
    });
  };

  return (
    <Router>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={createRoute()}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content style={{ padding: "0 48px" }}>
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              {pages.map((item) => (
                <Route
                  key={item.name}
                  path={`${item.path}`}
                  element={<item.component />}
                />
              ))}
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
