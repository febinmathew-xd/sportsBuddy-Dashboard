import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../layout/Sidebar'
import Header from '../layout/Header'


function ViewFeedback() {

    const [feedback, setFeedback] = useState([]);



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
                <Link to="/adddistributor" className=" border text-black font-extrabold text-center px-2 py-2 rounded text-sm bg-lime-400 z-10 ">Add new</Link>
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
                      {/* <th scope="col">Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    
                        <tr>
                          <th scope="row">1</th>
                          <td>username</td>
                          <td>contact</td>
                          <td>address</td>
                          <td>description</td>
                          {/* <td>
                            <Link
                              state={{ id: value.loginid }}
                              className="btn btn-success"
                              to="/editdistributor"
                            >
                              Edit
                            </Link>
                            &nbsp;&nbsp;
                            <button
                              
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </td> */}
                        </tr>
                      
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ViewFeedback