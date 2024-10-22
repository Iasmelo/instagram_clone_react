import React, { useState } from "react";
import { Link } from "react-router-dom";
import Settings from "../../../components/Icons/Settings/Settings";
import LinkIcon from "../../../components/Icons/LinkIcon/LinkIcon";
import HighlightsData from "../HighlightsData";
import Tab from "../../Profile/Tab/Tab";
import Posts from "../../Profile/Posts/Posts";
import Reels from "../../Profile/Reels/Reels";
import Tags from "../../Profile/Tags/Tags";
import PostIcon from "../../../components/Icons/Post/post.png";
import ReelIcon from "../../../components/Icons/Reel/reel.png";
import TagIcon from "../../../components/Icons/Tag/tag.png";


const MobileProfile = () => {
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
        <div className="w-full h-auto lg:hidden md:hidden sm:block block text-white">
              {/* Your info section */}
              <div className="w-full h-auto flex items-cente gap-x-8 justify-center mb-3">
                <img
                src="https://i.pinimg.com/enabled/564x/91/ca/a7/91caa7bf342c4438fd99fb898c033c1c.jpg"
                alt="profile img"
                className="rounded-full w-20 h-20 object-cover"
                />
                <div className="flex items-start flex-col gap-y-3">
              {/* usename */}
              <Link to="/profile" className="text-lg text-gray-200 font-semibold">
                        seraphine.vibes
                        </Link>
              {/* Buttons */}
              <div className="flex items-center gap-x-2">
                    <button className="bg-[#363636] rounded-lg px-4 py-1.5 text-base text-white font-semibold hover:bg-[#262626] ease-out duration-150">
                        Edit profile
                    </button>
                    <button className="bg-[#363636] rounded-lg px-4 py-1.5 text-base text-white font-semibold hover:bg-[#262626] ease-out duration-150">
                        View archive
                    </button>
                </div>
                </div>
              </div>
              {/* Bio */}
            <p className="text-sm text-gray-100 font-normal">
                 🎤 Dreamer, singer, believer in harmony. <br />
                 🌈 Melodies unite us. <br />
                 🎶 "Together, we can change the world!" <br />
                 📍Piltover / Zaun <br />
                 #TeamSeraphine #MusicIsMagic <br />
                 </p>
               {/* Link Section */}
               <p className="text-base text-gray-100 font-normal flex items-center gap-x-2 mb-5">
                    <LinkIcon />
                    <Link to="/" 
                    className="text-[1f1f1f] hover:underline font-semibold">
                    www.seraphineshow.com
                    </Link>
                 </p>
               {/* Highlights Section */}
               <div className="w-full h-auto flex items-center gap-x-9 mb-10">
                <div className="w-full h-auto flex items-center gap-x-3 overflow-x-scroll scrollbar-hide">
                {HighlightsData.map((data) => (
                    <Link 
                    to="/" 
                    key={data.id}
                    className="flex items-center justify-between flex-col flex-shrink-0"
                    >
                    <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#1d1d1d] to-[#1d1d1d]">
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
            {/* Posts, Followers, Following */}
            <div className="w-full h-auto flex items-center justify-around border-t border-t-[#1d1d1d]">
                <div className="flex items-center flex-col py-3">
                    <h6 className="text-base text-white font-semibold mb-0">10</h6>
                    <p className="text-sm text-white font-normal">posts</p>
                </div>
                <div className="flex items-center flex-col py-3">
                    <h6 className="text-base text-white font-semibold mb-0">2.024</h6>
                    <p className="text-sm text-white font-normal">followers</p>
                </div>
                <div className="flex items-center flex-col py-3">
                    <h6 className="text-base text-white font-semibold mb-0">30</h6>
                    <p className="text-sm text-white font-normal">following</p>
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
                    className="text-sm"
                    />
                     <Tab label="REELS" 
                    icon={ReelIcon} 
                    isActive={activeTab === "reels"}
                    onclick={() => handleTabClick("reels")}
                    className="text-sm"
                    />
                     <Tab label="TAGGED" 
                    icon={TagIcon} 
                    isActive={activeTab === "tagged"}
                    onclick={() => handleTabClick("tagged")}
                    className="text-sm"
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

export default MobileProfile;