

export default function Footer(){

    return(
        <footer className="bg-gray-d-8 h-fit py-[10px] px-[50px]">
            <div className="flex text-center items-start justify-center h-fit ">
                <div className="relative flex justify-center flex-1 h-fit">
                    <div className="w-[15vw] flex flex-col items-start">
                        <h2 className="text-gray-l-2 font-bebas-neue text-xl">
                            Technical Projects
                        </h2>
                        <p className="font-oswald">
                            R2 Two-Stage
                        </p>
                        <p className="font-oswald">
                            Prometheus
                        </p>
                        <p className="font-oswald">
                            Avionics
                        </p>
                        <p className="font-oswald">
                            Structures
                        </p>
                    </div>
                </div>
                <div className="relative flex justify-center flex-1 h-fit">
                    <div className="w-[15vw] flex flex-col items-start">
                        <h2 className="text-gray-l-2 font-bebas-neue text-xl">
                            Outreach
                        </h2>
                        <p className="font-oswald">
                            Media
                        </p>
                        <p className="font-oswald">
                            Our Sponsors
                        </p>
                    </div>
                </div>
                <div className="relative flex justify-center flex-1 h-fit">
                    <div className="w-[15vw] flex flex-col items-start">
                        <h2 className="text-gray-l-2 font-bebas-neue text-xl">
                            Leadership
                        </h2>
                        <p className="font-oswald">
                            Current Leads
                        </p>
                    </div>
                </div>
                <div className="relative flex justify-center flex-1 h-fit">
                    <div className="w-[15vw] flex flex-col items-start">
                        <h2 className="text-gray-l-2 font-bebas-neue text-xl">
                            New Members
                        </h2>
                        <p className="font-oswald">
                            How to join
                        </p>
                        <p className="font-oswald">
                            Calendar
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
