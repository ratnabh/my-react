import { createContext, useContext, useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(Cookies.get("access_token"));

  const setToken = (newToken) => {
    setToken_(newToken);
  };
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
