'use client'
// import IntroScreen from "../components/introscreen";
import VideoLoop from "../components/videoloop";
import RollingGallery from "../components/rollinggallery";
import { useEffect, useState } from "react";

export default function Home(){

  const [showIntro, setShowIntro] = useState(false);

  // useEffect(() => {
  // const hasVisited = localStorage.getItem("hasVisited");

  // if (!hasVisited) {
  //   setShowIntro(true);
  //   localStorage.setItem("hasVisited", "true");
  // }
  // }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    scrollTo(0,0);
  })

  {/* Adjust introscreen lengths, first part too long and the second part after the rocket is too short, video too big */}
  return (
    <div className="transition-all duration-500 ease-in-out -mt-30 text-center">
      {/* {showIntro && <IntroScreen/>} */}
      <div className={`relative pb-[30px] lg:pb-[0px] flex items-center justify-center -mx-10`}>
        <VideoLoop showIntro={showIntro}/>
      </div>
      <div className="py-[30px]">
        <h1 className={`text-5xl text-scarlet font-bebas-neue`}>
          About / Mission
        </h1>
        <p className="px-[10vw] pt-[20px] lg:text-xl font-oswald">
          We started Buckeye Rocketry to give every Ohio State student a clear way into rocketry. All majors can find a spot in our club. Whether you want to learn design, fabrication, propulsion, or even media. We have the tools and people to help you pick it up. Our goals are big, from a two‑stage launch to future high‑altitude projects, and we want anyone who’s excited to jump in and push with us. Grow your skills, add your ideas, and let’s reach higher together.
        </p>
      </div>
      <h1 className={`py-5 text-5xl text-scarlet font-bebas-neue`}>
        Our Sponsors
      </h1>
      {/* RollingGallery messes with page size as it rotates (around indices 1-2) when window size is less than large */}
      <div className="py-5 ">
        <RollingGallery autoplay={true} pauseOnHover={false} />
      </div>
      {/* <div className="py-5 block lg:hidden">
        <SponsorDisplay/>
      </div> */}
    </div>
  );
}
