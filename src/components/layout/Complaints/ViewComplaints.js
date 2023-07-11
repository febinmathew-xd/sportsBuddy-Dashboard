import React, {useState, useEffect} from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import { Post } from '../../../service/Api';
import { Link } from 'react-router-dom';


function ViewComplaints() {


    const [complaints, setComplaints] = useState([]);
    const [refresh, setRefresh] = useState(0);

    useEffect(()=> {

        Post('getcomplaints', {tablename:'complaints'}).then((data)=> {
            setComplaints(data);
            console.log(data);
            
        });

    }, [refresh]);

    const deleteComplaint = (id) => {
        Post("delete", { tablename: "complaints", id: id }).then((data) => {
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
                      <th scope="col">Turf Name</th>
                      <th scope="col">Title</th>
                      <th scope="col">Complaints</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                        complaints?.map((complaint, index) => {
                            return (
                          <tr key={index}>
                          <th scope="row">{index +1}</th>
                          <td>{complaint.username}</td>
                          <td>{complaint.contact}</td>
                          <td>{complaint.address}</td>
                          <td>{complaint.turfname}</td>
                          <td>{complaint.title}</td>
                          <td>{complaint.complaint}</td>
                          <td>
                            <Link 
                           state={{complaintid:complaint.complaintid}}
                            className="btn btn-success mx-2"
                            to='/replycomplaint'>
                                  Reply
                            </Link>
                           
                            <button
                              onClick={() => deleteComplaint(complaint.complaintid)}
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

export default ViewComplaints