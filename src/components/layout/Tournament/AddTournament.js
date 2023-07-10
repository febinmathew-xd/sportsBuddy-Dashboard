import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { Post } from "../../../service/Api";
function AddTournament() {
  const autoCompleteRef = useRef();
  const inputRef = useRef();

  const [name, setName] = useState();
  const [venue, setVenue] = useState();
  const [datefrom, setDateFrom] = useState();
  const [dateto, setDateTo] = useState();
  const [time, setTime] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();

  // const options = {
  //   fields: ["address_components", "geometry", "icon", "name"],
  //   types: ["establishment"],
  // };
  // useEffect(() => {
  //   autoCompleteRef.current = new window.google.maps.places.Autocomplete(
  //     inputRef.current,
  //     options
  //   );
  //   autoCompleteRef.current.addListener("place_changed", async function () {
  //     const place = await autoCompleteRef.current.getPlace();
  //     const lat = place.geometry.location.lat();
  //     const lng = place.geometry.location.lng();

  //     setAddress(place.name);
  //     setLat(lat);
  //     setLng(lng);
  //   });
  // }, []);

  const save = () => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    let param = {
      tablename: "tournaments",
      name: name,
      description: description,
      datefrom: datefrom,
      dateto: dateto,
      time: time,
      turfid: userdata.loginid,
    };

    Post("save", param).then((data) => {
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
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Date To"
                  />
                  <label for="floatingPassword">Date To</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="time"
                    onChange={(e) => setTime(e.target.value)}
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Time"
                  />
                  <label for="floatingPassword">Time</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea
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
