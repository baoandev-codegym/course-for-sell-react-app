import { Navigate } from "react-router-dom";
import { getStoredUserData } from "../utils/account";

function AuthenticationHOC({ children, allowedRoles }) {
  const role = getStoredUserData()?.roles;
  const allowed = allowedRoles?.filter((e) => role?.includes(e));

  if (role === null) {
    return <Navigate to={`/forbidden`} replace={true} />;
  } else {
    if (role === undefined || role.length === 0) {
      return <Navigate to={`/forbidden`} replace={true} />;
    } else {
      if (allowed.length !== 0) {
        return children;
      } else {
        return <Navigate to={`/forbidden`} replace={true} />;
      }
    }
  }
}

export default AuthenticationHOC;
