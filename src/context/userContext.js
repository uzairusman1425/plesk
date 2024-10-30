// UserContext.js
"use client";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(""); // Initialize as empty string

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if window is available
      const storedUserId = localStorage.getItem("user_id");
      if (storedUserId) setUserId(storedUserId);
    }
  }, []);

  const setUser = (id) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user_id", id);
    }
    setUserId(id);
  };

  return (
    <UserContext.Provider value={{ userId, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for using the context
export const useUser = () => useContext(UserContext);
