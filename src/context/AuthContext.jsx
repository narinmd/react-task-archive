import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(userName, password) {
    if (userName === "admin" && password === "123") {
      setUser({ userName });
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export { AuthContext, AuthProvider };
