import { useState } from "react";
import songs from "../../services/songs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const index = () => {
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
      {songs.map((links: any) => {
        return (
          <div
            key={links.id}
            className="card"
            style={{ width: "8rem", border: "0", margin: "0 10px" }}
            onClick={() => handleFav(links)}
          >
            <img
              src={links.img}
              className="card-img-top"
              alt="..."
              style={{ borderRadius: "10px", height: "110px ", width: "120px" }}
            />
            <div className="card-body d-flex text-center ">
              <h6
                className="card-title "
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
    </>
  );
};

export default index;
