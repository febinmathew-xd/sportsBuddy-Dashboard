import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import { Form } from "react-router-dom";

function AddDepthead() {
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
                            <h6 className="mb-4">Department Heads</h6>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Department</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Rohima</td>
                                        <td>R Sudarsan</td>
                                        <td>Panchayat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Athira</td>
                                        <td>C</td>
                                        <td>KSEB</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Libi</td>
                                        <td>Baby</td>
                                        <td>kWA</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    
                    
                    
                    
                    
                    
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default AddDepthead;