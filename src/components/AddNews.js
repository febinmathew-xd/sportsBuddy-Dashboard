import React from 'react';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import { useState } from 'react';
import { Post, handlefileupload } from '../service/Api';
import { Navigate, useNavigate } from 'react-router-dom';

function AddNews() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState();

    const navigate = useNavigate();

    const fileupload = (e) => {
        handlefileupload(e).then((data) => {
          setFile(data);
        });
      };

    const save = () => {

        let param = {
            title :title,
            content:content,
            image:file,
            tablename:'news'
        };

        Post("save", param).then((date) =>{
            navigate("/news")
        })



    };



  return (
    <>
    <Sidebar />
    <div className="content">
      <Header />

      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="col-sm-12 col-xl-12">
            <div className="bg-secondary rounded h-100 p-4">
              <h6 className="mb-4">Add News</h6>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                  id="floatingInput"
                  placeholder="Enter Title"
                />
                <label for="floatingInput">Title</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => setContent(e.target.value)}
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Enter Content"
                />
                <label for="floatingPassword">Content</label>
              </div>
              
              
             
              <div className="form-floating mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Upload Image"
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
  )
}

export default AddNews