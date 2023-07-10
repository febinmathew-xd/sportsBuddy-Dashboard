import { BrowserRouter, Routes, Route } from "react-router-dom";
import Message from "./components/layout/Message";
import AddDept from "./components/layout/AddDept";
import AddDepthead from "./components/layout/AddDepthead";
import ChangePassword from "./components/layout/ChangePassword";
import Home from "./components/layout/Home";
import Feedback from "./components/layout/Feedback";
import AddUser from "./components/layout/User/AddUser";
import ViewDistributor from "./components/layout/Distributor/ViewDistributor";
import AddDistributor from "./components/layout/Distributor/AddDistributor";
import EditDistributor from "./components/layout/Distributor/EditDistributor";
import ViewTurf from "./components/layout/Turf/ViewTurf";
import AddTurf from "./components/layout/Turf/AddTurf";
import EditTurf from "./components/layout/Turf/EditTurf";
import ViewUser from "./components/layout/User/ViewUser";
import EditUser from "./components/layout/User/EditUser";
import ViewTournament from "./components/layout/Tournament/ViewTournament";
import AddTournament from "./components/layout/Tournament/AddTournament";
import EditTournament from "./components/layout/Tournament/EditTournament";
import ViewProducts from "./components/layout/Products/ViewProducts";
import AddProducts from "./components/layout/Products/AddProducts";
import EditProducts from "./components/layout/Products/EditProducts";
import Orders from "./components/layout/Orders";
import TurfBooking from "./components/layout/TurfBooking";
import ViewFeedback from "./components/Feedbacks/ViewFeedback";

export const AdminNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<ViewUser />}></Route>
      <Route path="/viewdistributor" element={<ViewDistributor />}></Route>
      <Route path="/adddistributor" element={<AddDistributor />}></Route>
      <Route path="/editdistributor" element={<EditDistributor />}></Route>
      <Route path="/viewturf" element={<ViewTurf />}></Route>
      <Route path="/addturf" element={<AddTurf />}></Route>
      <Route path="/editturf" element={<EditTurf />}></Route>
      <Route path="/adduser" element={<AddUser />}></Route>
      <Route path="/edituser" element={<EditUser />}></Route>

      <Route path="/viewtournament" element={<ViewTournament />}></Route>
      <Route path="/addtournament" element={<AddTournament />}></Route>
      <Route path="/edittournament" element={<EditTournament />}></Route>
      <Route path="/viewfeedback" element={<ViewFeedback/>}></Route>
    </Routes>
  );
};

export const TurfNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<ViewTournament />}></Route>
      <Route path="/addtournament" element={<AddTournament />}></Route>
      <Route path="/edittournament" element={<EditTournament />}></Route>
      <Route path="/booking" element={<TurfBooking />}></Route>
    </Routes>
  );
};
export const DistributorNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<ViewProducts />}></Route>
      <Route path="/addproducts" element={<AddProducts />}></Route>
      <Route path="/editproducts" element={<EditProducts />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
    </Routes>
  );
};
