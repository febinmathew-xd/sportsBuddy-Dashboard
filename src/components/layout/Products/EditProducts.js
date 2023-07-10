import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { Post, handlefileupload } from "../../../service/Api";
function AddProducts() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [filename, setFile] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    Post("getbyid", { tablename: "products", id: location.state.id }).then(
      (data) => {
        setName(data.productname);
        setPrice(data.price);
        setDescription(data.description);
        setFile(data.file);
      }
    );
  }, []);

  const save = () => {
    let param = {
      tablename: "products",
      productname: name,
      description: description,
      price: price,
      file: filename,
      id: location.state.id,
    };

    Post("update", param).then((data) => {
      navigate("/");
    });
  };

  const fileupload = (e) => {
    handlefileupload(e).then((data) => {
      setFile(data);
    });
  };

  return (
    <>
      <Sidebar />
      <div className="content">
        <Header />

        <div class="container-fluid pt-4 px-4">
          <div class="row g-4">
            <div class="col-sm-12 col-xl-12">
              <div class="bg-secondary rounded h-100 p-4">
                <h6 class="mb-4">Product Form</h6>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="floatingInput"
                    value={name}
                    placeholder="enter name"
                  />
                  <label for="floatingInput">Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword"
                    value={price}
                    placeholder="enter contact"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <label for="floatingPassword">Price</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <label for="floatingPassword">Description</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    type="file"
                    onChange={(e) => fileupload(e.target.files[0])}
                  />
                  <label for="floatingPassword">Image</label>
                </div>

                <button onClick={() => save()} class="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddProducts;
