import { Route, Routes } from "react-router-dom";
import AuthenticationHOC from "../hoc/AuthenticationHOC";
import { ROUT_DATA } from "./appRouter";

function AppRoutes() {
	return (
		<>
			{/*Page Wrapper Start */}
			<Routes>
				{ROUT_DATA.map((route, index) => {
					const Layout = route.layout;
					const Page = route.element;
					return route.roles.length !== 0 && route.layout !== null ? ( // TODO: Authorization
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
						/>
					) : (
						<Route
							key={index}
							path={route.path}
							element={<Page />}
						/>
					);
				})}
				{/*<Route path="*" element={<NotFoundPage/>}/> TODO: Navigate to Not Found Page*/}
			</Routes>
			{/* Page Wrapper End */}
		</>
	);
}

export default AppRoutes;
