import React from "react";
import { Link } from "react-router-dom";

const Tags = () => {
    return (
        <>
        <div className="w-full h-auto flex items-center gap-1 flex-wrap">
        <Link 
            to="/" 
            className="lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
            style={{
                backgroundImage: `url(https://i.pinimg.com/enabled/564x/fa/00/ee/fa00eef4e6388f767b8f2556bb3340d7.jpg)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            />         <Link 
            to="/" 
            className="lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
            style={{
                backgroundImage: `url(https://i.pinimg.com/564x/64/db/91/64db9170ed0e3d8791e38ae9bd685275.jpg)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            />         <Link 
            to="/" 
            className="lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
            style={{
                backgroundImage: `url(https://i.pinimg.com/enabled/564x/81/36/80/813680bbbb3686936b4fa8c4e7f501a2.jpg)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            />         <Link 
            to="/" 
            className="lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
            style={{
                backgroundImage: `url(https://i.pinimg.com/564x/33/ba/c7/33bac773e71f1738d30a431f811a26fe.jpg)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            />
        </div>
        </>
    )
}

export default Tags;