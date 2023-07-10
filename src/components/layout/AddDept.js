import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import { Form } from "react-router-dom";

function AddDept() {
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
                            <h6 className="mb-4">Basic Form</h6>
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-secondary rounded h-100 p-4">
                            <h6 className="mb-4">Horizontal Form</h6>
                            <form>
                                <div className="row mb-3">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="inputEmail3"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="inputPassword3"/>
                                    </div>
                                </div>
                                <fieldset className="row mb-3">
                                    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios"
                                                id="gridRadios1" value="option1" checked/>
                                            <label className="form-check-label" for="gridRadios1">
                                                First radio
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios"
                                                id="gridRadios2" value="option2"/>
                                            <label className="form-check-label" for="gridRadios2">
                                                Second radio
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="row mb-3">
                                    <legend className="col-form-label col-sm-2 pt-0">Checkbox</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                            <label className="form-check-label" for="gridCheck1">
                                                Check me out
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-secondary rounded h-100 p-4">
                            <h6 className="mb-4">Floating Label</h6>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput"
                                    placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword"
                                    placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select className="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <label for="floatingSelect">Works with selects</label>
                            </div>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here"
                                    id="floatingTextarea" style={{height: '150px'}}></textarea>
                                <label for="floatingTextarea">Comments</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-secondary rounded h-100 p-4">
                            <h6 className="mb-4">File Input</h6>
                            <div className="mb-3">
                                <label for="formFile" className="form-label">Default file input example</label>
                                <input className="form-control bg-dark" type="file" id="formFile"/>
                            </div>
                            <div className="mb-3">
                                <label for="formFileMultiple" className="form-label">Multiple files input example</label>
                                <input className="form-control bg-dark" type="file" id="formFileMultiple" multiple/>
                            </div>
                            <div className="mb-3">
                                <label for="formFileSm" className="form-label">Small file input example</label>
                                <input className="form-control form-control-sm bg-dark" id="formFileSm" type="file"/>
                            </div>
                            <div>
                                <label for="formFileLg" className="form-label">Large file input example</label>
                                <input className="form-control form-control-lg bg-dark" id="formFileLg" type="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-secondary rounded h-100 p-4">
                            <h6 className="mb-4">Select</h6>
                            <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select className="form-select mb-3" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select className="form-select" multiple aria-label="multiple select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default AddDept;