import React from "react";
import Profile from "./Profile";
import MobileProfile from "./MobileProfile/MobileProfile";

const Main = () => {
    return (
        <>
            <div className="lg:w-full md:w-full sm:w-full w-full min-h-screen lg:py-10 md:py-6 sm:py-4 py-4 lg:px-14 md:px-12 sm:px-7 px-2">
                {/* profile for large screen */}
                <Profile />
                {/* profile for small screen */}
                <MobileProfile />
            </div>
        </>
    );
};

export default Main;
