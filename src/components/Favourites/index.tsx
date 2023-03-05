import { useEffect, useState } from "react";
import Aside from "../Aside";
import Cards from "../Cards";
import { useSelector } from "react-redux";
import featuredList from "../Playlists/data";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const index = () => {
  const list = useSelector((state: any) => state.addReducer);
  const [Liked, setLiked] = useState(false);
  const handleBtn = () => {
    setLiked(!Liked);
  };
  const dispatch = useDispatch();
  const handleFav = (id: any) => {
    dispatch({
      type: "addfav",
      payload: id,
    });
    toast.success("Song Added to Favourites successfully");
  };
  return (
    <>
      <div className="home container-fluid vh-100 d-flex p-0 ">
        <Aside />
        <div className="row col-10  d-flex " style={{ marginLeft: "12px" }}>
          <div className=" container-fluid home-header h-25  text-white d-flex ">
            <h2 className="mt-4 mx-3 ">Your Favourite Tunes</h2>
          </div>
          <div className="cards-main-div  d-flex  flex-column ">
            <h5>Favourites Songs </h5>
            <hr />
            <div className="d-flex">
              {list.map((links: any) => {
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
                      className="d-flex align-items-baseline card-body "
                      style={{ overflowX: "scroll" }}
                    >
                      <h6
                        className="card-title"
                        style={{ fontSize: "15px", marginTop: "-3px" }}
                      >
                        {links.title}
                        {/* {links.id} */}
                      </h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="cards-main-div mt-2">
              <h5>Recently Played</h5>
              <hr />
            </div>
            <div className="d-flex ">
              {featuredList.map((links: any) => {
                return (
                  <div
                    key={links.id}
                    className="card "
                    style={{ width: "8rem", border: "0", margin: "0 10px" }}
                    onClick={() => handleFav(links)}
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
                      className="card-body d-flex align-items-baseline justify-content-between "
                      style={{ marginTop: "-5px" }}
                    >
                      <h6
                        className="card-title"
                        style={{
                          fontSize: "15px",
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
