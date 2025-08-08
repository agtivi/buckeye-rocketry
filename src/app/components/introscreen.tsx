'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function IntroScreen() {

    const [isTitleFull, setIsTitleFull] = useState(true);
    const [isTitleFull2, setIsTitleFull2] = useState(true);
    const [isFlying, setIsFlying] = useState(false);

    useEffect(() => {
        scrollTo(0,0);
        document.body.classList.add('overflow-hidden');

        setIsFlying(true);

        //for some reason need 2 timeouts for z-value changes to be lined up with the block/hidden changes
        setTimeout(() => {
            setIsTitleFull2(false);
            document.body.classList.remove('overflow-hidden');
        }, 6500);

        setTimeout(() => {
            setIsTitleFull(false);
        }, 5500);

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <div className={`absolute min-h-screen -mt-30 md:-mt-0 -mx-10 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${isTitleFull ? "opacity-100" : "opacity-0"}`}>
            <div className={`mx-10 flex flex-row text-scarlet text-center py-5 text-5xl font-bebas-neue z-40 ${isTitleFull2 ? "block" : "hidden"}`}>
                <h1 className={`flex items-center content-center justify-center h-[100vh] absolute left-0 top-0 right-0 z-0 bg-gray transition-all duration-900 items-center `}>
                    <motion.div
                        initial={{ x: "-150vw" }}
                        animate={isFlying ? { x: "150vw" } : {}}
                        transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
                        style={{ width: "150vw" }}
                        className="absolute left-0 right-0 z-15"
                    >
                    <Image
                        className="rotate-90"
                        src="/rocket-with-flame.png"
                        alt="Flying Rocket"
                        height={100}
                        width={100}
                    />
                    </motion.div>
                    <motion.div
                        initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
                        animate={{ clipPath: "inset(0% 0% 0% 100%)" }}
                        transition={{ delay: 1.6, duration: 0.4, ease: "easeInOut" }}
                        style={{ width: "100vw", overflow: "hidden" }}
                        className={`flex items-center justify-center h-[100vh] absolute left-0 right-0 z-10 bg-gray `}
                    >
                        <p className="">{"Buckeye Rocketry"}</p>
                    </motion.div>
                    <div className="absolute flex items-center justify-center min-w-screen min-h-screen left-0 right-0 bg-gray z-8">
                        <p className="">From the Shoe to the stratosphere</p>
                    </div>
                </h1>
            </div>
        </div>
    )
}