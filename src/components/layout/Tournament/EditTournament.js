import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { Post } from "../../../service/Api";
function AddTournament() {
  const autoCompleteRef = useRef();
  const inputRef = useRef();

  const [name, setName] = useState();
  const [datefrom, setDateFrom] = useState();
  const [dateto, setDateTo] = useState();
  const [time, setTime] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();

  const location = useLocation();
  useEffect(() => {
    Post("getbyid", { tablename: "tournaments", id: location.state.id }).then(
      (data) => {
        setName(data.name);
        setDateFrom(data.datefrom);
        setDateTo(data.dateto);
        setTime(data.time);
        setDescription(data.description);
      }
    );
  }, []);

  const save = () => {
    let param = {
      tablename: "tournaments",
      name: name,
      description: description,
      datefrom: datefrom,
      dateto: dateto,
      time: time,
      id: location.state.id,
    };

    Post("update", param).then((data) => {
      navigate("/");
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
                <h6 class="mb-4">Basic Form</h6>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="floatingInput"
                    placeholder="enter name"
                  />
                  <label for="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => setDateFrom(e.target.value)}
                    type="date"
                    value={datefrom}
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Date To"
                  />
                  <label for="floatingPassword">Date From</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => setDateTo(e.target.value)}
                    type="date"
                    value={dateto}
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Date To"
                  />
                  <label for="floatingPassword">Date To</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Time"
                  />
                  <label for="floatingPassword">Time</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    value={description}
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <label for="floatingPassword">Description</label>
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
export default AddTournament;
