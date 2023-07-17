import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Post } from "../../service/Api";

function TurfBooking() {
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    Post("getturfbookingforturf", {
      id: userdata.loginid,
    }).then((data) => {
      setOrders(data);
    });
  }, [refresh]);

  const changeStatus = (id, status) => {
    let param = {
      tablename: "turfbooking",
      status: status,
      id: id,
    };

    Post("update", param).then((data) => {
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
                <h6 class="mb-4">Turf Booking Details</h6>
               {/*  <div style={{display:'flex', alignItems:'center'}}>
                <Link style={addButton}  to="/addproducts">Add new</Link>

                </div> */}
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">User Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Address</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((value, index) => {
                      return (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{value.username}</td>
                          <td>{value.price} ₹</td>
                          <td>{value.contact}</td>
                          <td>{value.address}</td>
                          <td>{value.bookingdate}</td>
                          <td>{value.time}</td>
                          <td>
                            {value.status == 0
                              ? "Order Placed"
                              : value.status == 1
                              ? "Order Accepted"
                              : value.status == 2
                              ? "Completed"
                              : value.status == 3
                              ? "Rejected"
                              : ""}
                          </td>

                          <td>
                            {value.status == 0 ? (
                              <button
                                onClick={() => changeStatus(value.bookingid, 1)}
                                className="btn btn-success"
                              >
                                Accept
                              </button>
                            ) : value.status == 1 ? (
                              <button
                                onClick={() => changeStatus(value.bookingid, 2)}
                                className="btn btn-danger"
                              >
                                Complete
                              </button>
                            ) : (
                              ""
                            )}
                          </td>
                          <td>
                            {value.status != 2 && value.status != 3 ? (
                              <button
                                onClick={() => changeStatus(value.bookingid, 3)}
                                className="btn btn-danger"
                              >
                                Reject
                              </button>
                            ) : (
                              ""
                            )}
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
export default TurfBooking;
