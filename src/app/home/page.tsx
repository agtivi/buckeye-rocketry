'use client'
import VideoLoop from "../components/videoloop";
import RollingGallery from "../components/rollinggallery";
import IntroScreen from "../components/introscreen";

export default function Home(){

  return (
    <div className="transition-all duration-500 ease-in-out md:-mt-30 mx-10 text-center">
      <IntroScreen/>
      <div className={`relative pb-10 flex items-center justify-center`}>
        <VideoLoop/>
      </div>
      <h1 className={`py-5 text-5xl font-bebas-neue`}>
        About / Mission
      </h1>
      <div className="py-5">
        <p className="px-[10vw]">
          We started Buckeye Rocketry to give every Ohio State student a clear way into rocketry. All majors can find a spot in our club. Whether you want to learn design, fabrication, propulsion, or even media. We have the tools and people to help you pick it up. Our goals are big, from a two‑stage launch to future high‑altitude projects, and we want anyone who’s excited to jump in and push with us. Grow your skills, add your ideas, and let’s reach higher together.
        </p>
      </div>
      <h1 className={`py-5 text-5xl font-bebas-neue`}>
        Our Sponsors
      </h1>
      <div className="py-5">
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </div>
  );
}
