import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import { Form } from "react-router-dom";

function ChangePassword() {
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <Sidebar />
        <div className="content">
          <Header />
          <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-secondary rounded h-100 p-4">
                            <h6 className="mb-4"> Reset Password</h6>
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Current Password</label>
                                    <input type="password" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp"/>
                                    
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label"> New Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label"> Confirm Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                {/* <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div> */}
                                <button type="submit" className="btn btn-primary">Change Password</button>
                            </form>
                        </div>
                    </div>
                    
                    
                    
                    
                    
                    
                    
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;