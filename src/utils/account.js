export const getStoredUserData = () => {
  const userLoggedIn = getLocalUserLoggedIn("userLoggedIn");
  return userLoggedIn ? JSON.parse(userLoggedIn) : null;
};
export const getLocalUserLoggedIn = () => {
  const userLoggedIn = localStorage.getItem("userLoggedIn");
  return userLoggedIn ? userLoggedIn : null;
};
