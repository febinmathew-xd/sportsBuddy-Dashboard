import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AdminNavigation,
  DistributorNavigation,
  TurfNavigation,
} from "./Navigation";
import Login from "./components/layout/Login";
import { AuthenticationContext } from "./components/layout/AuthenticationContext";
import { useContext } from "react";

function App() {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        isAuthenticated == "admin" ? (
          <AdminNavigation />
        ) : isAuthenticated == "turf" ? (
          <TurfNavigation />
        ) : isAuthenticated == "distributor" ? (
          <DistributorNavigation />
        ) : (
          ""
        )
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
