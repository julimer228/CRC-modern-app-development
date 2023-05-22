import axios from "axios";
import { createContext, useEffect, useState } from "react";
import * as endpoints from "../endpoints"

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {

    let config = {headers: {
      'Access-Control-Allow-Origin': 'https://crc-front.vercel.app',
      'Access-Control-Allow-Credentials': true
    }}
    const res = await axios.post(endpoints.LOGIN, inputs, config);
    setCurrentUser(res.data)
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};