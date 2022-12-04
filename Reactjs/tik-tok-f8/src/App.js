import { Fragment } from "react";
import { Route, Router, Routes } from "react-router-dom";
import DefaultLayout from "./component/Layout/DefaughtLayout";
import HeaderOnly from "./component/Layout/HeaderOnly";
import Following from "./pages/Following";
import Home from "./pages/Home";

import { publicRoutes } from "./routes/index";

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          const Page = route.component;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}

        {/* <Route path="/" element={<Home />}></Route>
          <Route path="/following" element={<Following />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
