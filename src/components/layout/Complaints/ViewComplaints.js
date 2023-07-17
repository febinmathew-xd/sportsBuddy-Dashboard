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
                <h6 class="mb-4">Complaint Table</h6>
                
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
                      <th scope="col">Complaint</th>
                      <th scope="col">Reply</th>
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
                          <td> <p style={{fontWeight:'bold', fontSize:'14px'}}>{complaint.title}</p> <p style={{fontSize:'14px', opacity:'0.7'}}>{complaint.complaint}</p>  </td>
                          <td><p style={{fontWeight:'bold', fontSize:'14px'}}>{complaint?.replytitle}</p> <p style={{fontSize:'14px', opacity:'0.7'}}>{complaint?.reply}</p></td>
                          <td>

                            {!complaint.reply &&  <Link 
                           state={{complaintid:complaint.complaintid}}
                            className="btn btn-success mx-2"
                            to='/replycomplaint'>
                                  Reply
                            </Link>
                            }
                           
                           
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