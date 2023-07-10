import { Link, NavLink } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";
import { useContext } from "react";

function Sidebar() {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <>
      <div className="sidebar pe-4 pb-3">
        <nav className="navbar bg-secondary navbar-dark">
          <a href="index.html" className="navbar-brand mx-4 mb-3">
            <h3 className="text-primary"> Sports Buddy</h3>
          </a>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img
                className="rounded-circle"
                src="img/user.jpg"
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Diya Ponnachan</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <div className="nav-item dropdown"></div>

            {isAuthenticated == "admin" ? (
              <>
                <NavLink
                  activeclassname="active"
                  to="/"
                  className="nav-item nav-link"
                >
                  <i className="fa fa-th me-2"></i>User
                </NavLink>
                <NavLink
                  activeclassname="active"
                  to="/viewdistributor"
                  className="nav-item nav-link"
                >
                  <i className="fa fa-th me-2"></i>Distributor
                </NavLink>
                <NavLink
                  to="/viewturf"
                  activeclassname="active"
                  className="nav-item nav-link"
                >
                  <i className="fa fa-th me-2"></i>Turf
                </NavLink>
                <NavLink
                  activeclassname="active"
                  to="/viewtournament"
                  className="nav-item nav-link"
                >
                  <i className="fa fa-th me-2"></i>Tournament
                </NavLink>
              </>
            ) : isAuthenticated == "turf" ? (
              <>
                <NavLink
                  activeclassname="active"
                  to="/"
                  className="nav-item nav-link"
                >
                  <i className="fa fa-th me-2"></i>Tournament
                </NavLink>
                <NavLink
                  activeclassname="active"
                  to="/booking"
                  className="nav-item nav-link"
                >
                  <i className="fa fa-th me-2"></i>Booking
                </NavLink>
              </>
            ) : isAuthenticated == "distributor" ? (
              <>
                <NavLink
                  activeclassname="active"
                  to="/"
                  className="nav-item nav-link"
                >
                  <i className="fa fa-th me-2"></i>Products
                </NavLink>
                <NavLink
                  activeclassname="active"
                  to="/orders"
                  className="nav-item nav-link"
                >
                  <i className="fa fa-th me-2"></i>Orders
                </NavLink>
              </>
            ) : (
              ""
            )}
            {/* <Link to="/order" className="nav-item nav-link"><i className="fa fa-th me-2"></i>order</Link>
                    <Link to="/payment" className="nav-item nav-link"><i className="fa fa-th me-2"></i>payment</Link>
                  
                    <Link to="/changepassword" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Alarm</Link>
                    <Link to="/complaints" className="nav-item nav-link"><i className="fa fa-th me-2"></i>complaints</Link>
                    <Link to="/approval" className="nav-item nav-link"><i className="fa fa-th me-2"></i>TicketAllo</Link>
                    <Link to="/feedback" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Feedback</Link>
                    
                     */}

            {/* <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="far fa-file-alt me-2"></i>Pages
              </a>
              <div className="dropdown-menu bg-transparent border-0">
                <a href="signin.html" className="dropdown-item">
                  Sign In
                </a>
                <a href="signup.html" className="dropdown-item">
                  Sign Up
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Error
                </a>
                <a href="blank.html" className="dropdown-item">
                  Blank Page
                </a>
              </div>
            </div> */}
          </div>
        </nav>
      </div>
    </>
  );
}
export default Sidebar;
