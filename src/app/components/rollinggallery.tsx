import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
  ResolvedValues,
} from "framer-motion";

const IMGS: string[] = [
  "/sponsors/boeing.png",
  "/logos/linkedin-logo.png",
  "/logos/rocketship.png",
  "/logos/discord-logo.png",
  "/sponsors/boeing.png",
  "/sponsors/boeing.png",
  "/sponsors/boeing.png",
  // "/sponsors/boeing.png",
  // "/sponsors/boeing.png",
  // "/sponsors/boeing.png",
  // "/sponsors/boeing.png",
];

const NAMES: string[] = [
    "sponsor 1",
    "sponsor 2",
    "sponsor 3",
    "sponsor 4",
    "sponsor 5",
    "sponsor 6",
    "sponsor 7",
    // "sponsor 8",
    // "sponsor 9",
    // "sponsor 10",
    // "sponsor 11",
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
  names?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
  names = [],
}) => {
  const galleryImages = images.length > 0 ? images : IMGS;
  const galleryNames = images.length > 0 ? names : NAMES;

  const [screenSize, setScreenSize] = useState<number | 0>(0);
  
  useEffect(() => {
    setScreenSize(window.innerWidth);

    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth: number = screenSize * 0.5;
  const faceCount: number = galleryImages.length;
  const faceWidth: number = (cylinderWidth / faceCount) * 1.5;
  const radius: number = (cylinderWidth + faceCount * 50) / (1.3 * Math.PI);

  const dragFactor: number = 0.001;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val: number) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest: ResolvedValues) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="flex justify-center py-20 lg:pb-20 min-h-[60px] md:min-h-[200px] lg:min-h-[400px] ">
        <div className="relative w-[200px] md:w-[500px]">
            
        {// Just shadows on either side of the display box... not needed 
        }
        {/* <div
            className="absolute top-0 left-0 h-full w-[48px] z-10"
            style={{
            background:
                "linear-gradient(to left, rgba(0,0,0,0) 0%, #060010 100%)",
            }}
        />
        <div
            className="absolute top-0 right-0 h-full w-[48px] z-10"
            style={{
            background:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, #060010 100%)",
            }}
        /> */}
        <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
            <motion.div
            drag="x"
            dragElastic={0}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={controls}
            onUpdate={handleUpdate}
            style={{
                transform: transform,
                rotateY: rotation,
                width: cylinderWidth,
                transformStyle: "preserve-3d",
            }}
            className="flex cursor-grab items-center justify-center [transform-style:preserve-3d]"
            >
            {galleryImages.map((url, i) => (
                <div
                key={i}
                className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
                style={{
                    width: `${faceWidth}px`,
                    transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
                }}
                >
                <div className="flex-cols-2">
                    <Image
                        unoptimized
                        src={url}
                        alt="gallery"
                        height={100}
                        width={100}
                        className="pointer-events-none md:scale-130 rounded-[15px] border-[3px] border-white object-cover transition-transform duration-300 ease-out group-hover:scale-105 md:group-hover:scale-140 "
                    />
                    <p className="md:pt-5">
                        {`${galleryNames[i]}`}
                    </p>
                </div>
                </div>
            ))}
            </motion.div>
        </div>
        </div>
    </div>
  );
};

export default RollingGallery;
