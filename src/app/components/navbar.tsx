import Image from "next/image"
import { Oswald } from 'next/font/google'

const oswald = Oswald({
    subsets: ['latin'],
})

export default function Navbar() {
    return(
        <nav className="bg-black/30 w-full fixed top-0 left-0 h-[120px] flex flex-row z-50">
            {/* <div className="z-0 bg-gray-200 absolute right-0 w-36 h-full">

            </div> */}
            {/* <div className="min-w-20 bg-black/0 z-10 ml-10">

            </div> */}
            <div className="bg-gray-400 z-10 min-w-15"
                style={{
                    WebkitMaskImage:
                    'radial-gradient(ellipse 100% 60% at 0% center, transparent 3rem, black 3.1rem)',
                    maskImage:
                    'radial-gradient(ellipse 100% 60% at 0% center, transparent 3rem, black 3.1rem)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                }}
            >

            </div>
            {/* <div className="bg-red-300 z-10 h-full w-15 absolute top-0 left-0 rounded-r-[100]">

            </div> */}
            <div className="z-5 min-w-40 rounded-r-[45] py-3 pr-3 content-center text-center justify-center flex bg-gray-400 text-2xl">
                <Image
                    className="dark:invert"
                    src="/freepik-rocket-4.png"
                    alt="Buckeye Rocketry Logo"
                    unoptimized
                    height={30}
                    width={35}
                >
                </Image>
                <div className={`mr-3 h-25 w-25 flex justify-center items-center text-3xl text-red-600 ${oswald.className}`}>
                    Buckeye Rocketry
                </div>
            </div>
            <div className="pt-[34] min-w-180 relative flex-1 overflow-auto">
                <ul className="flex flex-row flex-grow h-fit bg-gray-400 z-10">
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
        </nav>
    )
}
