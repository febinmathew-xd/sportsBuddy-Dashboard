import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Post } from '../../../service/Api';
import Sidebar from '../Sidebar';
import Header from '../Header';

function ReplyComplaint() {
   
    const [title, setTitle] = useState('');
    const [reply, setReply] = useState('');
    const [complaint, setComplaint] = useState([]);
    
    


    const location = useLocation();
    const navigate = useNavigate();

    
    

    useEffect(()=> {
      const complaintid = location.state.complaintid;

      console.log('id', complaint.id)

        Post('getcomplaintbyid', { id:complaintid}).then((data)=> {
            setComplaint(data);
            
            console.log('byid',data);
            
        })

        

    }, []);

    const sentReply = () => {
      const complaintid = location.state.complaintid;

     let param = {
      id: complaintid,
      tablename:'complaints',
      replytitle:title,
      reply:reply

     };

     Post('update', param).then((data) => {
         navigate('/viewcomplaints')
     })

    };
  
  return (

    <>
    <Sidebar />
      <div className="content">
        <Header />

        <div class="container-fluid pt-4 px-4">
          <div class="col-12">
            <div  class="bg-secondary rounded h-100 p-4 align-items-center">
              <div  className="d-flex ">
                <h5 style={heading}  class="">Complaint : </h5>

                <h5 style={{marginLeft:'70px', color:'red'}}>
                 " {complaint.title} ""
                </h5>
                <h5 style={{marginLeft:'70px', fontWeight:'300'}}>" {complaint.complaint} "</h5>


                
              </div>
             
            </div>
            <div class="bg-secondary rounded h-100 p-4 mt-4">
              <div className="d-flex justify-content-between">
                <h5  class=""><span style={heading}>Report Against :</span>  <span >{complaint.turfname}</span> </h5>
                <h5 ><span style={heading}>Location : </span>  <span>{complaint.turflocation}</span></h5>
                <h5 ><span style={heading}>Contact : </span> <span>{complaint.turfcontact}</span></h5>
                <h5 ></h5>


                
              </div>
             
            </div>
            <div class="bg-secondary rounded h-100 p-4 mt-4">
              <div className="d-flex justify-content-between">
                <h5  class=""><span style={heading}>Reported by : </span><span>{complaint.userdisplayname}</span> </h5>
                <h5 ><span style={heading}>Location : </span><span>{complaint.userlocation}</span></h5>
                <h5 ><span style={heading}>Contact : </span><span>{complaint.usercontact}</span></h5>
                <h5 ></h5>


                
              </div>
             
            </div>
            <div class="bg-secondary rounded h-100 p-4 mt-4">
              <div className="d-flex justify-content-between">
               
               <input onChange={(e) => {setTitle(e.target.value)}} type="text" placeholder='Title' style={titleInput} />


                
              </div>
             
            </div>
            <div class="bg-secondary rounded h-100 p-4 mt-4">
              <div className="d-flex justify-content-between">
               
              <textarea onChange={(e)=> {setReply(e.target.value)}} placeholder='Reply' style={replyInput} name="postContent" rows={4} cols={40} />
                
              </div>
              <button onClick={sentReply} style={button}>Send Reply</button>
             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const titleInput ={
outline:"none",
borderRadius:"6px",
padding:"5px 15px"
};

const replyInput ={
  padding:"5px 5px",
  borderRadius:"6px",
  outline:'none'
};

const button = {
  backgroundColor:"#1e293b",
  marginTop:"17px",
  padding:'5px 30px',
  borderRadius:'7px',
  color:'white',
  fontWeight:'600'
};

const heading ={
  color:"#1f2937"
}



export default ReplyComplaint