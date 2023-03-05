import { useState } from "react";
import Aside from "../Aside";
import Allsongs from "../../services/allSongs";
import data from "../Playlists/data";
import songs from "../../services/songs";

const index = () => {
  const [srch, setSrch] = useState("");
  const [song, setSong] = useState<any>([]);

  const handleSearch = () => {
    let songkey = Allsongs.filter(
      (data: any) => data.title.toLowerCase() === srch.toLowerCase()
    );
    setSong(songkey);
  };
  return (
    <>
      <div className="home container-fluid vh-100 d-flex  p-0 ">
        <Aside />
        <div
          className="row col-10  d-flex flex-column"
          style={{ marginLeft: "12px" }}
        >
          <div
            className="home-header h-25 vw-100 text-white d-flex justify-content-between"
            role="search"
          >
            <h2 className="mt-4 mx-3 ">Explore Songs</h2>
            <div className="d-flex h-20 w-50 mt-4 mx-5" role="search">
              <input
                className="form-control me-2"
                placeholder="Search any music"
                aria-label="Search"
                value={srch}
                onChange={(e) => setSrch(e.target.value)}
                style={{ height: "45px" }}
              />
              <button
                className="btn btn-outline-light search-btn"
                style={{
                  color: "#fff",
                  border: "1px solid #fff",
                  height: "45px",
                }}
                onClick={() => handleSearch()}
              >
                Search
              </button>
            </div>
          </div>

          <div className="cards-main-div mt-5 ">
            <h5>Search related songs here </h5>
            <hr />
            <div className="d-flex">
              {song &&
                song.map((links: any) => {
                  return (
                    <div
                      key={links.id}
                      className="card"
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
                        className="card-body d-flex align-items-baseline justify-content-between"
                        style={{ marginTop: "-5px" }}
                      >
                        <h6
                          className="card-title "
                          style={{
                            fontSize: "14px",
                          }}
                        >
                          {links.title}
                        </h6>
                        <div
                          className="liked-btn"
                          style={{ marginLeft: "10px" }}
                        ></div>
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
