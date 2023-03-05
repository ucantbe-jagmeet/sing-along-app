import { useEffect, useState } from "react";
import Aside from "../Aside";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";
import playlistData from "./data";
import { useNavigate } from "react-router-dom";

const index = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const options = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/shazam-events/list",
    params: {
      artistId: "73406786",
      l: "en-US",
      from: "2022-12-31",
      limit: "50",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "42915b2946mshf3217fe9d14aa78p107b56jsn73208d751a08",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const alertMsg = () => {
    if (!token) {
      setShow(!show);
    }
  };

  return (
    <>
      <div className="home container-fluid vh-100 d-flex  p-0 ">
        <Aside />

        <div
          className="row col-10  d-flex flex-column "
          style={{ marginLeft: "12px" }}
        >
          <div className=" container-fluid home-header h-25  text-white d-flex ">
            <h2 className="mt-4 mx-3 ">Playlists</h2>
          </div>

          {show ? (
            <div
              className=""
              style={{
                position: "absolute",
                marginLeft: "-10%",
                marginTop: "15%",
                zIndex: "999",
              }}
            >
              <section
                className="  mx-auto mt-2"
                style={{
                  height: "200px",
                  width: "500px",
                  borderRadius: " 10px",
                  border: "2px solid gray",
                  background: "#fff",
                }}
              >
                <div
                  className="d-flex h-100 justify-content-around flex-column  "
                  style={{ margin: "0 auto" }}
                >
                  <h3 className="text-center color-dark ">Alert !!</h3>
                  <h5 className=" mx-3 " style={{ color: "#5e46ad" }}>
                    Please login for more features
                  </h5>

                  <div className="d-flex justify-content-end mx-3">
                    <button
                      type="button"
                      className="btn btn-outline-dark px-3"
                      onClick={() => setShow(!show)}
                    >
                      Exit
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success mx-3 px-4"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </section>
            </div>
          ) : null}

          <h2 className=" mt-5">Your Playlists Are</h2>

          <div className="cards-main-div mt-4 ">
            <h5>
              Create Playlist
              <IoMdAdd
                onClick={() => alertMsg()}
                className="mx-2 mb-1"
                style={{
                  borderRadius: "50%",
                  background: "#5e46ad",
                  color: "#fff",
                }}
                size={20}
              />
              <span
                className="badge "
                style={{ scale: "0.75", backgroundColor: "#5e46ad" }}
              >
                Premium
              </span>
            </h5>
            <hr />
          </div>
          <div className="cards-main-div mt-4 ">
            <h5>My Rock Music</h5>
            <hr />
            <div className="d-flex">
              {playlistData.map((links: any) => {
                return (
                  <div
                    key={links.id}
                    className="card "
                    style={{ width: "8rem", border: "0", margin: "0 10px" }}
                  >
                    <img
                      src={links.img}
                      className="card-img-top"
                      alt="..."
                      style={{
                        borderRadius: "10px",
                        height: "110px ",
                        width: "120px",
                      }}
                    />
                    <div
                      className="card-body text-center d-flex justify-content-center "
                      style={{ marginTop: "-5px" }}
                    >
                      <h6
                        className="card-title"
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        {links.title}
                      </h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
