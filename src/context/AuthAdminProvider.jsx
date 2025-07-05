import { createContext, useContext, useState, useEffect } from "react";
const AdminAuthContext = createContext();

const ADMIN_CREDENTIALS = {
  username: import.meta.env.VITE_ADMIN,
  password: import.meta.env.VITE_PASSWORD, // You can make this env-based
};

export const AdminAuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("isAdmin");
    if (stored === "true") {
      setIsAdmin(true);
    }
  }, []);

  const login = (username, password) => {
    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin");
  };

  return (
    <AdminAuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
