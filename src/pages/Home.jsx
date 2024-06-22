import React from "react";
import heroImage from '../assets/heroImage.webp';

export const Home = () => {
    return(

        <div className="w-full mx-[20px] text-white">

                {/* Hero Section */}

                <div className="md:flex justify-between mt-[70px] ">

                    <div className="block mt-[50px] pr-[80px]">

                        <p className="text-[purple] uppercase font-bold text-[20px] mb-5">Lifestyle Agency</p>

                        <h1 className="font-black text-white md:text-[70px] font-sans leading-none text-[60px] ">Full Service AI-Focused Lifestyle Agency</h1>

                        <p className="font-sans  my-10">The importance of Lifestyle services for companies seeking to attract new 
                            customers and increase traffic cannot be overstated.</p>

                        <button className="bg-[purple] px-16 py-[15px] rounded-xl">  Watch Video </button>

                    </div>


                    <div className="mt-[40px] md:mt-0 ">

                        <img src={heroImage} alt="Hero Image " className="w-[270px] h-[300px]" />

                    </div>

                </div>

        </div>
    );
};


