import React from "react";
import { Layout, Menu, theme } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import SetState from "@/pages/setStates/index";
import SuspenseComponent from "@/pages/suspense";
import ComponentsCommunication from "./pages/componentCommunication";
import UseSyncExternalStore from "@/pages/useSyncExternalStore";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pages = [
    {
      path: "/",
      name: "setState",
      component: () => <SetState />,
    },
    {
      path: "/suspense",
      name: "suspense",
      component: () => <SuspenseComponent />,
    },
    {
      path: "/component-communication",
      name: "组件通讯",
      component: () => <ComponentsCommunication />,
    },
    {
      path: "/useSyncExternalStore",
      name: "订阅外部变更",
      component: () => <UseSyncExternalStore />,
    },
  ];

  const createRoute = () => {
    return pages.map((page) => {
      return {
        key: page.path,
        label: <Link to={page.path}>{page.name}</Link>,
      };
    });
  };

  const location = useLocation();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
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
                path={item.path}
                element={<item.component />}
              />
            ))}
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        {new Date().getFullYear()} Created by Bit
      </Footer>
    </Layout>
  );
};

const MainApp: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
