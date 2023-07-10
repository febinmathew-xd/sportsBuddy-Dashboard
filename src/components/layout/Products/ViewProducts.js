import React, { useEffect, useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { Post } from "../../../service/Api";

function ViewProducts() {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    Post("getbydata", {
      tablename: "products",
      distributorid: userdata.loginid,
    }).then((data) => {
      setProducts(data);
    });
  }, [refresh]);

  const deleteProducts = (id) => {
    Post("delete", { tablename: "products", id: id }).then((data) => {
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
                <h6 class="mb-4">Products Table</h6>
                <Link to="/addproducts">Add new</Link>
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Description</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((value, index) => {
                      return (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{value.productname}</td>
                          <td>{value.price} ₹</td>
                          <td>{value.description}</td>
                          <td>
                            <Link
                              state={{ id: value.id }}
                              className="btn btn-success"
                              to="/editproducts"
                            >
                              Edit
                            </Link>
                            &nbsp;&nbsp;
                            <button
                              onClick={() => deleteProducts(value.id)}
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
export default ViewProducts;
