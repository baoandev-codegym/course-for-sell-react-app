/*
 * @param {React Component}
 * @param {Array} list of roles that are allowed to access the component
 */
import { Navigate } from "react-router-dom";

function AuthenticationHOC({ children, allowedRoles }) {
	// TODO: getStoredUserData from browser
	//   function getStoredUserData() {
	//     return {
	//       roles: ["ADMIN", "STUDENT", "TEACHER"],
	//     };
	//   }

	//   const role = getStoredUserData()?.roles;
	//   const allowed = allowedRoles?.filter((e) => role?.includes(e));
	//   if (role === null) {
	//     return <Navigate to={`/forbidden`} replace={true} />;
	//   } else {
	//     if (role === undefined || role.length === 0) {
	//       return <Navigate to={`/forbidden`} replace={true} />;
	//     } else {
	//       if (allowed.length !== 0) {
	return children;
	//       } else {
	//         return <Navigate to={`/forbidden`} replace={true} />;
	//       }
	//     }
	//   }
}

export default AuthenticationHOC;
