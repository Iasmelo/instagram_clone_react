import React from 'react';
import TopNav from '../../../components/Header/TopNav/TopNav';
import Stories from '../Stories/Stories';
import FeedCard from './FeedCard/FeedCard';
import RecommendedUser from '../RecommendedUser/RecommendedUser'


const Feed = () => {
    return (
        <>
            <div className="lg:w-[83%] md:w-[83%] sm:w-full w-full min-h-screen lg:py-7 md:py-7 sm:py-7 py-3 px-3 flex items-start gap-x-20">
                {/*Seção do feed e dos stories */}
                <div className="lg:w-[55%] md:w-full sm:w-full w-full h-auto relative">
                    {/* Barra de navegação superior (para dispositivos menores) */}
                    <TopNav />
                    {/* Seção dos Stories */}
                    <Stories />
                    {/* Seção do Feed */}

                    <div className="w-full h-auto flex items-center justify-center mt-6">
                        <div className="lg:w-[73%] md:w-[73%] sm:w-[80%] w-[80%] h-auto">
                            <FeedCard/>
                        </div>
                    </div>
                </div>
                {/*Seção dos usuários recomendados */}
                <div className="w-[25%] h-auto lg:block md:hidden sm:hidden hidden">
                    {/* */}
                    <RecommendedUser />
                </div>
            </div>
        </>
    )
}

export default Feed;