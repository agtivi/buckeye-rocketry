'use client'
import Image from "next/image";
import VideoLoop from "../components/videoloop";
import RollingGallery from "../components/rollinggallery";
import { Bebas_Neue } from "next/font/google";
import { useEffect, useState } from "react";

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});

export default function Home(){

  const [isTitleFull, setIsTitleFull] = useState(true);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    setTimeout(() => {
      setIsTitleFull(false);
      document.body.classList.remove('overflow-hidden');
    }, 5000);

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className="mx-10 text-center">
      <div className={`relative -mx-10 bg-gray rounded-b-[30] flex flex-col items-center justify-center transition-all duration-900 ease-in-out ${isTitleFull ? "-mt-30 z-40 rounded-t-[0]" : "-mt-0 z-0 rounded-t-[100]"} `}>
        <div className={`mx-10 flex flex-row text-scarlet text-center py-5 text-5xl ${bebasNeue.className}`}>
          {/* <div className="w-full flex items-center">
            <Image
              className=""
              src="/shoe-transparent.png"
              alt="The Shoe"
              width={200}
              height={50}
            />
          </div> */}
          <h1 className={`flex transition-all duration-900 items-center ${isTitleFull ? "min-h-screen" : "min-h-[10px]"}`}>
            {isTitleFull && "Buckeye Rocketry"}
            {!isTitleFull && "From the Shoe to the stratosphere"}
          </h1>
        </div>
        <div className={`pb-10 flex items-center justify-center ${isTitleFull ? "mt-300" : "mt-0"}`}>
          <VideoLoop/>
        </div>
      </div>
      <h1 className={`py-5 text-5xl ${bebasNeue.className}`}>
        About / Mission
      </h1>
      <div className="py-5">
        <p className="px-[10vw]">
          We started Buckeye Rocketry  to give every Ohio State student a clear way into rocketry. All majors can find a spot in our club. Whether you want to learn design, fabrication, propulsion, or even media. We have the tools and people to help you pick it up. Our goals are big, from a two‑stage launch to future high‑altitude projects, and we want anyone who’s excited to jump in and push with us. Grow your skills, add your ideas, and let’s reach higher together.
        </p>
      </div>
      <h1 className={`py-5 text-5xl ${bebasNeue.className}`}>
        Our Sponsors
      </h1>
      <div className="py-5">
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </div>
  );
}
