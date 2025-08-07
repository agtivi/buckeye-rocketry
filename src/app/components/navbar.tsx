import Image from "next/image"
import { Oswald } from 'next/font/google'

const oswald = Oswald({
    subsets: ['latin'],
})

export default function Navbar() {
    return(
        <nav className={`bg-gray-500/30 w-full fixed top-0 left-0 h-[100px] z-50 ${oswald.className}`}>
            <div className="relative flex flex-row ">
                <div className="z-5 min-w-40 py-3 px-3 content-center text-center justify-center flex text-2xl">
                    <div className={`mx-3 h-full w-25 flex justify-center items-center text-3xl text-red-600 `}>
                        Buckeye Rocketry
                    </div>
                </div>
                <div className="min-w-140 relative flex flex-1 items-center">
                    <ul className="w-full flex flex-row bg-gray-400 z-10">
                        <li className="navbutton">
                            Projects
                        </li>
                        <li className="navbutton">
                            Outreach
                        </li>
                        <li className="navbutton">
                            Leadership
                        </li>
                        <li className="navbutton">
                            New Members
                        </li>
                        <li className="navbutton">
                            Donate
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center items-center min-w-40">
                    {/* Maybe have an image here? */}
                    {/* <Image
                        className="rotate-270 p-[8px]"
                        src="/rocketship.png"
                        alt="rocketship"
                        width={65}
                        height={65}
                    /> */}
                </div>
            </div>
        </nav>
    )
}
