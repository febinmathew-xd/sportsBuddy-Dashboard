import React, { useEffect, useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { Post } from "../../../service/Api";

function ViewDistributor() {
  const [distributor, setDistributor] = useState([]);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    Post("getall", { tablename: "distributor" }).then((data) => {
      setDistributor(data);
    });
  }, [refresh]);

  const deleteDistributor = (id) => {
    Post("deleteuser", { tablename: "distributor", id: id }).then((data) => {
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
                <h6 class="mb-4">Distributor Table</h6>
                <div style={{display:'flex', alignItems:'center'}}>
                <Link style={addButton} to="/adddistributor" className="  ">Add Distributor</Link>

                </div>
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Address</th>
                      <th scope="col">Description</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {distributor.map((value, index) => {
                      return (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{value.username}</td>
                          <td>{value.contact}</td>
                          <td>{value.address}</td>
                          <td>{value.description}</td>
                          <td>
                            <Link
                              state={{ id: value.loginid }}
                              className="btn btn-success"
                              to="/editdistributor"
                            >
                              Edit
                            </Link>
                            &nbsp;&nbsp;
                            <button
                              onClick={() => deleteDistributor(value.loginid)}
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
export default ViewDistributor;
