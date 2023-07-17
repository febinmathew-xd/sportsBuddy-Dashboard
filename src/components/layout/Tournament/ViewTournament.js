import React, { useEffect, useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { Post } from "../../../service/Api";
import { useContext } from "react";
import { AuthenticationContext } from "../AuthenticationContext";

function ViewTournament() {
  const [tournament, setTournament] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const { isAuthenticated } = useContext(AuthenticationContext);
  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    console.log(userdata);
    if (isAuthenticated == "turf") {
      Post("getbydata", {
        tablename: "tournaments",
        turfid: userdata.loginid,
      }).then((data) => {
        setTournament(data);
      });
    } else {
      Post("getall", {
        tablename: "tournaments",
      }).then((data) => {
        setTournament(data);
      });
    }
  }, [refresh]);

  const deletetournament = (id) => {
    Post("delete", { tablename: "tournaments", id: id }).then((data) => {
      setRefresh((prev) => prev + 1);
    });
  };
  return (
    <>
      <Sidebar />
      <div className="content">
        <Header />

        <div class="container-fluid pt-4 px-4">
          <div class="col-12">
            <div class="bg-secondary rounded h-100 p-4">
              <div className="d-flex justify-content-between">
                <h6 class="mb-4">Tournaments</h6>
                {isAuthenticated == "turf" ? (
                  <div style={{display:'flex', alignItems:'center'}}>
                    <Link style={addButton} to="/addtournament" className="text-white">Add Tournament</Link>

                  </div>
                ) : (
                  ""
                )}
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">From</th>
                      <th scope="col">To</th>
                      <th scope="col">Time</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tournament.map((value, index) => {
                      return (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{value.name}</td>
                          <td>{value.datefrom}</td>
                          <td>{value.dateto}</td>
                          <td>{value.time}</td>
                          <td>
                            {isAuthenticated == "turf" ? (
                              <Link
                                state={{ id: value.id }}
                                className="btn btn-success"
                                to="/edittournament"
                              >
                                Edit
                              </Link>
                            ) : (
                              ""
                            )}
                            &nbsp;&nbsp;
                            <button
                              onClick={() => deletetournament(value.id)}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const addButton = {
  color:'white',
   backgroundColor:'#dc2626',
   borderRadius: '8px',
   padding: '8px 20px',
   fontSize: '14px',
   fontWeight: '700'
};
export default ViewTournament;
