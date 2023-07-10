import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { Post } from "../../../service/Api";
function EditDistributor() {
  const autoCompleteRef = useRef();
  const inputRef = useRef();

  const [username, setUsername] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();

  const location = useLocation();

  const options = {
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"],
  };
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      setAddress(place.name);
      setLat(lat);
      setLng(lng);
    });

    let param = {
      tablename: "distributor",
      loginid: location.state.id,
    };

    Post("getuserbyid", param).then((data) => {
      setUsername(data.username);
      setContact(data.contact);
      setEmail(data.email);
      setDescription(data.description);
      setAddress(data.address);
      setLat(data.lat);
      setLng(data.lng);
    });
  }, []);

  const save = () => {
    let param = {
      tablename: "distributor",
      username: username,
      contact: contact,
      email: email,
      address: address,
      description: description,
      lat: lat,
      lng: lng,
      id: location.state.id,
    };

    Post("updateuser", param).then((data) => {
      navigate("/viewdistributor");
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    id="floatingInput"
                    placeholder="enter name"
                  />
                  <label for="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    value={email}
                    className="form-control"
                    id="floatingPassword"
                    placeholder="name@example.com"
                  />
                  <label for="floatingPassword">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={contact}
                    type="text"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="enter contact"
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <label for="floatingPassword">Contact</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    value={description}
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <label for="floatingPassword">Description</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    defaultValue={address}
                    ref={inputRef}
                  />
                  <label for="floatingPassword">Location</label>
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
export default EditDistributor;
