import React from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillHeart,
  AiFillPlayCircle,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="aside row col-2  text-white ">
        <div className="logo text-center pt-5">
          <h3 className="text-uppercase d-inline border-bottom pb-3">
            Sing Along
          </h3>
        </div>

        <ul className="aside-ul h-50 w-50 list-unstyled  d-flex flex-column justify-content-around mx-5  ">
          <li className="" onClick={() => navigate("/home")}>
            <AiOutlineMenu className="mx-2 mb-1" size={20} />
            Home
          </li>
          <li className="" onClick={() => navigate("/search")}>
            <AiOutlineSearch className="mx-2 mb-1" size={20} />
            Search
          </li>
          <li className="d-flex" onClick={() => navigate("/favourites")}>
            <div>
              <AiFillHeart className="mx-2 mb-1" size={20} />
            </div>
            <div>Favourite</div>
          </li>
          <li className="" onClick={() => navigate("/playlists")}>
            <AiFillPlayCircle className="mx-2 mb-1" size={20} />
            Playlist
          </li>
        </ul>
      </div>
    </>
  );
};

export default index;
