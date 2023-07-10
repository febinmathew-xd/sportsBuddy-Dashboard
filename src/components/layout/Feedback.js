import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import { Form } from "react-router-dom";

function Feedback() {
  return (
    <>
      <div className="container-fluid pt-4 px-4"> 
        <Sidebar />
        <div className="content">
          <Header />
          <div className="col-sm-12 col-xl-6">
                        <div className="bg-secondary rounded h-100 p-4">
                            <h6 className="mb-4">Feedback</h6>
                                <textarea className="form-control" placeholder="Leave a Feedback here"
                                    id="floatingTextarea" style={{height: '150px'}}></textarea>
                                
                        </div>
                    </div>
                    
        </div>
      </div>
    </>
  );
}

export default Feedback;