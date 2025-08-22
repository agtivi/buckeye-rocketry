import { useEffect, useState, useRef } from "react";

const vids = ["videos/rocketinspace.webm", "videos/rocketlaunch.webm", "videos/spacelady.webm"];
interface Props {
    showIntro: boolean;
}

export default function VideoLoop({showIntro}: Props){
  
    const [vidIndex, setVidIndex] = useState(0);

    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setVidIndex((prev) => (prev + 1) % vids.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [])


    return(
        <div className={`relative z-0 transition-all duration-1500`}>
            
            <video
                key={vidIndex}
                className="h-[58vh] md:h-[75vh]"
                ref={(el) => { videoRefs.current[vidIndex] = el; }}
                style={{ objectFit:'cover', objectPosition:'top', width:'100vw', top:0, position: 'relative' }}
                src={vids[vidIndex]}
                muted
                playsInline
                autoPlay
                loop={false}
                preload="none"
            />
            <div className="homescreen-gradient"/>
        </div>
    )
}
