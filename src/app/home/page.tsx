'use client'
import Image from "next/image";
import VideoLoop from "../components/videoloop";
import RollingGallery from "../components/rollinggallery";
import { Bebas_Neue } from "next/font/google";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});

export default function Home(){

  const [isTitleFull, setIsTitleFull] = useState(true);
  const [isSwitched1H, setIsSwitched1H] = useState(false);
  const [isSwitched2H, setIsSwitched2H] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    setIsFlying(true);

    setTimeout(() => {
      setIsSwitched1H(true);
    }, 1500);
    setTimeout(() => {
      setIsSwitched2H(true);
    }, 1700);

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
          
            <motion.div
              initial={{ x: "-100vw" }}
              animate={isFlying ? { x: "100vw" } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ width: "100vw" }}
              className="absolute z-20"
            >
              <Image
                className="rotate-90 "
                src="/rocket-with-flame.png"
                alt="Flying Rocket"
                height={100}
                width={100}
              />
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 100%)" }}
              transition={{ delay: 0.75, duration: 0.4, ease: "easeInOut" }}
              style={{ width: "100vw", overflow: "hidden" }}
              className="flex items-center content-center justify-center h-[100vh] absolute left-0 right-0 z-10 bg-gray"
            >
              <p className="">{"Buckeye Rocketry"}</p>
            </motion.div>
            <p className="absolute left-0 right-0 z-5">From the Shoe to the stratosphere</p>
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
          We started Buckeye Rocketry to give every Ohio State student a clear way into rocketry. All majors can find a spot in our club. Whether you want to learn design, fabrication, propulsion, or even media. We have the tools and people to help you pick it up. Our goals are big, from a two‑stage launch to future high‑altitude projects, and we want anyone who’s excited to jump in and push with us. Grow your skills, add your ideas, and let’s reach higher together.
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
