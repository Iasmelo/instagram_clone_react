import React from "react";
import { Link } from "react-router-dom";
import ReelData from "../ReelData/ReelData";
import Liked from "../../../../components/Icons/Like/liked.png";
import Comment from "../../../../components/Icons/Comment/commented.png";

const ReelCard = () => {
  return (
    <>
      {ReelData.map((reel) => (
        <Link
          to="/"
          key={reel.id}
          className="lg:w-[24.675%] md:w-[24.675%] sm:w-[32.5%] w-[32.5%] lg:h-[48vh] md:h-[40vh] sm:h-[35vh] h-[30vh] relative group"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <video
            src={reel.video}
            title="reel video"
            loop
            muted
            autoPlay
            className="w-full h-full object-cover"
          />
          {/* Overlay with icons */}
          <div className="absolute bottom-0 left-0 w-full h-auto bg-gradient-to-t from-black/60 to-transparent flex items-center justify-between px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <div className="flex items-center gap-x-2">
              <img src={Liked} alt="liked icon" className="w-5 h-5" />
              <p className="text-white text-sm">{reel.likes}</p>
            </div>
            <div className="flex items-center gap-x-2">
              <img src={Comment} alt="comment icon" className="w-5 h-5" />
              <p className="text-white text-sm">{reel.comments}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ReelCard;
