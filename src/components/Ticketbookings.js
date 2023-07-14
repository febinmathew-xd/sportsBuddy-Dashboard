import React from 'react';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import { useState } from 'react';
import { useEffect } from 'react';
import { Post } from '../service/Api';

function Ticketbookings() {

    const [ticketBookings, setTicketBookings] = useState([]);
    const [refresh, setRefresh] = useState(0);

    useEffect(()=> {
        const userdata = JSON.parse(localStorage.getItem('userdata'));

        Post('getTournamentBookingsforTurf', {id:userdata.id}).then((data)=>{
            setTicketBookings(data);
            console.log("t",data);
        })

    }, []);

  return (
    <>
    <Sidebar />
      <div className="content">
        <Header />

        <div class="container-fluid pt-4 px-4">
          <div class="col-12">
            <div class="bg-secondary rounded h-100 p-4">
              <div className="d-flex justify-content-between">
                <h6 class="mb-4">Ticket Booking Details </h6>
               {/*  <Link to="/addproducts">Add new</Link> */}
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Tournament</th>
                      <th scope="col">Username</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Tickets</th>
                      <th scope="col">Total Amount</th>
                      <th scope="col">Booked At</th>
                      <th scope="col">Status</th>
                      {/* <th scope="col">Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {ticketBookings.map((value, index) => {
                      return (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{value.name}</td>
                          <td>{value.username}</td>
                          <td>{value.contact}</td>
                          <td>{value.ticketcount}</td>
                          <td>₹ {value.amount}</td>
                          <td>{value.bookeddate}</td>
                          <td style={{color:"green", fontWeight:"700"}}>
                            Confirmed
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
  )
}

export default Ticketbookings