import React, { useState, createContext, useContext } from "react";

import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Post } from "../../service/Api";

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(false);
  const [user, setUser] = useState("");
  const [userid, setUserId] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    let info = JSON.parse(localStorage.getItem("userdata"));

    if (localStorage.getItem("userdata") == "undefined") {
      localStorage.clear();
      window.location.reload();
    }

    if (info?.usertype == 0) {
      setUser("admin");
    } else if (info?.usertype == 2) {
      setUser("distributor");
    } else if (info?.usertype == 3) {
      setUser("turf");
    }
  }, []);

  const onLogin = (email, password) => {
    let param = {
      email: email,
      password: password,
    };

    Post("login", param).then((data) => {
      if (data == "invalid") {
        toast.error("Invalid User!");
        return false;
      }
      // console.log(data);
      localStorage.setItem("userdata", JSON.stringify(data));
      setUserId(data?.loginid);
      if (data?.usertype == 0) {
        setUser("admin");
      } else if (data?.usertype == 2) {
        setUser("distributor");
      } else if (data?.usertype == 3) {
        setUser("turf");
      }
    });
    setisLoading(true);
  };

  const onLogout = () => {
    localStorage.clear();
    setUser(false);
    window.location.href = "/";
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: user,
        userid,
        onLogin,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
