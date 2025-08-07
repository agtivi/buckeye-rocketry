import { useEffect, useState, useRef } from "react";

const rocketInSpace = "rocketinspace.mp4";
const rocketLaunch = "rocketlaunch.mp4";
const spaceLady = "spacelady.mp4";

export default function VideoLoop(){
  
    const [vidIndex, setVidIndex] = useState(0);

    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const handleVideoEnd = (nextIndex: number) => {
    if (videoRefs.current[vidIndex]) {
        // Reset to the beginning
        videoRefs.current[vidIndex]!.currentTime = 0;
    }
        setVidIndex(nextIndex);
    };

    useEffect(() => {
        const currentVideo = videoRefs.current[vidIndex];
        if(currentVideo) {
            currentVideo.currentTime = 0;
            currentVideo.play().catch((e) => {
                console.warn("Autoplay prevented: ", e);
            });
        }
    }, [vidIndex]);


    return(
        <div>
            <video
                ref={(el) => { videoRefs.current[0] = el; }}
                style={{ display: vidIndex === 0 ? "block" : "none"}}
                src={spaceLady}
                muted
                onEnded={() => handleVideoEnd(1)}
            />
            <video
                ref={(el) => { videoRefs.current[1] = el; }}
                style={{ display: vidIndex === 1 ? "block" : "none"}}
                src={rocketLaunch}
                muted
                onEnded={() => handleVideoEnd(2)}
            />
            <video
                ref={(el) => { videoRefs.current[2] = el; }}
                style={{ display: vidIndex === 2 ? "block" : "none"}}
                src={rocketInSpace}
                muted
                onEnded={() => handleVideoEnd(0)}
            />
        </div>
    )
}
