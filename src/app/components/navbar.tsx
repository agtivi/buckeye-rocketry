export default function Navbar() {
    return(
        <nav className={`bg-gray-500/30 w-full fixed top-0 left-0 h-[100px] z-50 font-oswald`}>
            <div className="relative flex flex-row">
                <div className="transition-all duration-500 ease-in-out min-w-0 lg:min-w-40">
                </div>
                <div className="flex-col w-full">
                    <div className="w-full flex justify-center items-center font-bebas-neue text-xl">
                        <p className="text-center text-scarlet bg-gray/50 px-[75px] rounded-t-[100] w-max px-[20px]">
                            Buckeye Rocketry
                        </p>
                    </div>
                    <div className="min-w-100 relative flex flex-1 items-center">
                        <ul className="rounded-full w-full flex flex-row bg-gray-d-2 z-10 ">
                            <li className="rounded-l-full navbutton">
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
                            <li className="rounded-r-full navbutton">
                                Donate
                            </li>
                        </ul>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <p className="text-center text-scarlet bg-gray/50 rounded-b-[100] w-max px-[20px] font-bebas-neue text-xl">
                            From the Shoe to the stratosphere
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center transition-all duration-500 ease-in-out min-w-0 lg:min-w-40">
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
