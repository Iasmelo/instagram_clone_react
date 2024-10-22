import React, { useState } from "react";
import { Link } from "react-router-dom"
import Settings from "../../components/Icons/Settings/Settings";
import LinkIcon from "../../components/Icons/LinkIcon/LinkIcon";
import HighlightsData from "./HighlightsData";
import Tab from "./Tab/Tab";
import PostIcon from "../../components/Icons/Post/post.png";
import ReelIcon from "../../components/Icons/Reel/reel.png";
import TagIcon from "../../components/Icons/Tag/tag.png";
import Reels from "./Reels/Reels";
import Posts from "./Posts/Posts";
import Tags from "./Tags/Tags";


const Profile = () => {
    const [activeTab, setActiveTab] = useState("posts");
    const [isContentVisible, setContentVisible] = useState(true);

    const handleTabClick = (tab) => {
        setContentVisible(false);

        //delay animation
    setTimeout(() => {
        setActiveTab(tab);
        setContentVisible(true);
    }, 300);
    };
    return (
        <>
        <div className="lg:w-[88%] md:w-[88%] sm:w-full w-full h-auto lg:block md:block sm:hidden hidden">
            {/* Your info section */}
            <div className="w-full h-auto flex items-cente lg:gap-x-20 md:gap-x-16 sm:gap-x-12 gap-x-8 justify-center mb-10">
                <img
                src="https://i.pinimg.com/enabled/564x/91/ca/a7/91caa7bf342c4438fd99fb898c033c1c.jpg"
                alt="profile img"
                className="rounded-full lg:w-44 md:w-44 sm:w-44 sm:w-36 w-32 lg:h-44 md:h-44 sm:h-36 h-36 object-cover"
                />
                <div className="flex items-start flex-col">
                    <div className="flex items-center gap-x-5 mb-4">
                        <Link to="/profile" className="text-lg text-gray-200 font-normal">
                        seraphine.vibes
                        </Link>
                <div className="flex items-center gap-x-2">
                    <button className="bg-[#363636] rounded-lg px-4 py-1.5 text-base text-white font-semibold hover:bg-[#262626] ease-out duration-150">
                        Edit profile
                    </button>
                    <button className="bg-[#363636] rounded-lg px-4 py-1.5 text-base text-white font-semibold hover:bg-[#262626] ease-out duration-150">
                        View archive
                    </button>
                    </div>
                    <Settings />
                 </div>
                 {/* post, follower, following */}
                 <div className="flex items-center gap-x-6 mb-4">
                    <h6 className="text-base text-gray-100 font-normal">10 posts</h6>
                    <Link to="/" className="text-base text-gray-100 font-normal">
                    2,2024 followers
                    </Link>
                    <Link to="/" className="text-base text-gray-100 font-normal">
                    30 following
                    </Link>
                 </div>
                 {/* fullname */}
                 <p className="text-base text-gray-100 font-normal">Seraphine - Dream Songstress</p>
                 {/* Bio */}
                 <p className="text-base text-gray-100 font-normal">
                 🎤 Dreamer, singer, believer in harmony. <br />
                 🌈 Melodies unite us. <br />
                 🎶 "Together, we can change the world!" <br />
                 📍Piltover / Zaun <br />
                 #TeamSeraphine #MusicIsMagic <br />
                 </p>
                 {/* Link */}
                 <p className="text-base text-gray-100 font-normal flex items-center gap-x-2">
                    <LinkIcon />
                    <Link to="/" 
                    className="text-[#CAEAFF] hover:underline font-medium">
                    www.seraphineshow.com
                    </Link>
                 </p>
                </div>
              </div>
            {/* Highlights section */}
            <div className="w-full h-autp flex items-center gap-x-9 mb-10">
                <div className="max-w-[61vw] w-full h-auto flex items-center gap-x-3 overflow-x-scroll scrollbar-hide">
                {HighlightsData.map((data) => (
                    <Link 
                    to="/" 
                    key={data.id}
                    className="flex items-center justify-between flex-col flex-shrink-0"
                    >
                    <div className="w-28 h-28 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#1d1d1d] to-[#1d1d1d]">
                        <img
                        src={data.img}
                        alt={data.name}
                        className="rounded-full h-full w-full object-cover p-[2.5px] bg-black"
                        />
                        </div>
                        <p className="text-white text-sm mt-1">
                            {data.name}
                        </p>
                    </Link>
                ))}
                </div>
            </div>
            {/* Posts, Reels,Tagged section */}
            <div className="w-full h-auto">
                {/* Tab section */}
                <div className="w-full h-auto flex items-center justify-center gap-x-6 mb-4 border-t border-[#313131]">
                    <Tab label="POSTS" 
                    icon={PostIcon} 
                    isActive={activeTab === "posts"}
                    onclick={() => handleTabClick("posts")}
                    />
                     <Tab label="REELS" 
                    icon={ReelIcon} 
                    isActive={activeTab === "reels"}
                    onclick={() => handleTabClick("reels")}
                    />
                     <Tab label="TAGGED" 
                    icon={TagIcon} 
                    isActive={activeTab === "tagged"}
                    onclick={() => handleTabClick("tagged")}
                    />
                </div>
                {/* Tab Content section */}
                <div className={`mt-4 transition-opacity duration-300 ease-out $ {isContentVisible ? "opacity-100" : "opacity-0" }`}
                >
                {activeTab === "posts" && <Posts />}
                {activeTab === "reels" && <Reels />}
                {activeTab === "tagged" && <Tags />}
                </div>
            </div>
          </div>
        </>
    );
};

export default Profile;