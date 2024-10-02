import { Route, Routes } from "react-router-dom";
import AuthenticationHOC from "../hoc/AuthenticationHOC";
import { ROUT_DATA } from "./RouterConstant";

function AppRoutes() {
  return (
    <>
      {/*Page Wrapper Start */}
      <div className="page-wrapper">
        <Routes>
          {ROUT_DATA.map((route, index) => {
            const Layout = route.layout;
            const Page = route.element;
            return route.role.length !== 0 && route.layout !== null ? (
              <Route
                key={index}
                path={route.path}
                element={
                  <AuthenticationHOC allowedRoles={route.role}>
                    <Layout>
                      <Page />
                    </Layout>
                  </AuthenticationHOC>
                }
                allowedRoles={route.role}
              />
            ) : (
              <Route key={index} path={route.path} element={<Page />} />
            );
          })}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </div>
      {/* Page Wrapper End */}
    </>
  );
}

export default AppRoutes;
