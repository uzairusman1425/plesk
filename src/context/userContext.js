"use client";
// UserContext.js
import { createContext, useContext, useState } from "react";

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem("user_id") || "");

  const setUser = (id) => {
    localStorage.setItem("user_id", id); // Optionally sync with localStorage
    setUserId(id);
  };

  return (
    <UserContext.Provider value={{ userId, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook for easy access
export const useUser = () => useContext(UserContext);
