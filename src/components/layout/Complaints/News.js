import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { Post, fileurl } from '../../../service/Api';

function News() {


  const [news, setNews] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(()=> {
  
    Post("getall", {tablename:"news"}).then((data)=> {
      setNews(data);
    });


  }, [refresh]);


  function deleteNews(id){

    let param = {
      tablename:"news",
      id: id
    }
  

    Post("delete",param).then((data)=> {
      setRefresh(refresh+1);
    })


  }


  return (
    <>
   <Sidebar />
      <div className="content">
        <Header />

        <div className="container-fluid pt-4 px-4">
          <div className="col-12">
            <div className="bg-secondary rounded h-100 p-4">
              <div className="d-flex justify-content-between">
                <h6 className="mb-4">News</h6>
                <Link className="mb-4" style={{color:"white"}}  to="/addnews">Add new</Link>
                
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Content</th>
                      <th scope="col">Image</th>
                      <th scope="col">Actions</th>
                      
                    </tr>
                  </thead>
                 { <tbody>

                    {
                       news?.map((data, index) => {
                            return (
                          <tr key={index}>
                          <th scope="row">{index +1}</th>
                          <td>{data.title}</td>
                          <td>{data.content}</td>
                          <td><img style={{width:"60px", height:"60px", borderRadius:"10px"}} src={fileurl+data.image} /></td>
                      
                          
                          
                          <td>
                            
                           
                            <button
                              onClick={() => deleteNews(data.id)}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                            )
                        })
                    }
                    
                       
                      
                  </tbody>}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default News