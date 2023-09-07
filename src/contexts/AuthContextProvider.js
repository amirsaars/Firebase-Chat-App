import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [User, setUser] = useState(false);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      console.log(user);
      if (user) history.push("/chats");
    });
  }, [history, User]);

  return (
    <AuthContext.Provider value={User}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
