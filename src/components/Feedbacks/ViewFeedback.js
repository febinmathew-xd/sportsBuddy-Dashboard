import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../layout/Sidebar'
import Header from '../layout/Header'
import { Post } from '../../service/Api';


function ViewFeedback() {

    const [feedback, setFeedback] = useState([]);
    const [refresh, setRefresh] = useState(0);

    useEffect( ( )=> {
       
        Post("getfeedbacks", {tablename:"feedback"}).then((data) => {
            setFeedback(data);
            console.log(data);
        })
       
    }, [refresh]);

    const deleteFeedback = (id) => {
        Post("delete", { tablename: "feedback", id: id }).then((data) => {
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
                
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Address</th>
                      <th scope="col">Feedback</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                        feedback?.map((value, index) => {
                            return (
                          <tr key={index}>
                          <th scope="row">{index +1}</th>
                          <td>{value.username}</td>
                          <td>{value.contact}</td>
                          <td>{value.address}</td>
                          <td>{value.feedback}</td>
                          <td>
                            
                           
                            <button
                              onClick={() => deleteFeedback(value.fid)}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                            )
                        })
                    }
                    
                       
                      
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