import Image from "next/image"

export default function R2TwoStage() {

    return (
        <div className="my-10">
            <div className="flex flex-col gap-10">
                <div className="flex-1 mt-5">
                    <h1 className="font-bebas-neue text-center text-7xl md:text-8xl text-scarlet">R2 Two-Stage</h1>
                </div>
                <hr className=""/>
                <div className="flex flex-row gap-10">
                    <div className="flex-1 flex flex-col gap-5 items-center justify-center">
                        <h1 className="font-bebas-neue text-center text-6xl text-scarlet">Mission Statement</h1>
                        <p className="font-oswald text-2xl flex flex-col items-start gap-7 rounded-md bg-gray-d-8 py-3 px-3 w-fit">
                            {/* <span>•</span>  */}
                            <span>
                                Our R2 Two-Stage will be Buckeye Rocketry's first project with the intention to design, build, and safely fly a two-stage vehicle to achieve a flight of 10,000 ft.
                            </span>
                            <span>
                                As our club's maiden voyage, the intention of the project is to give members an opportunity to experience and create a working culture among eachother.
                            </span>
                        </p>
                    </div>
                </div>
                <hr className=""/>
                <div className="flex-1">
                    <h1 className="font-bebas-neue text-center text-6xl text-scarlet">Vehicle & Mission Specs</h1>
                </div>
                <div className="flex flex-row gap-20 items-center">
                    <div className="group relative font-oswald items-center h-fit w-fit">
                        <div className="translate-all duration-200 group-hover:scale-105 h-fit w-fit top-0 left-0">
                            <Image
                                className="min-w-[460px] lg:w-[960px] rounded-md transition-color duration-200 brightness-95 group-hover:brightness-100"
                                unoptimized
                                src="/r2-rocket-specs.png"
                                alt="R2 Rocket Specs"
                                height={1000}
                                width={100}
                            />
                        </div>
                        <ul className="translate-all duration-200 group-hover:scale-125 absolute bottom-2 right-25 text-xs w-fit h-fit bg-gray-d-8/80 rounded-md py-3 px-3">
                            <li className="text-scarlet text-sm bg-gray-l-2/30 w-fit px-1 rounded-md">Vehicle:</li>
                            <li>•&nbsp;Total Impulse: 554 Ns</li>
                            <li>•&nbsp;Estimated Mass: 1.1-1.4 kg</li>
                            <li>•&nbsp;Cost: $600-$1,000</li>
                            <li>•&nbsp;Two H Class motors: H45 and H100</li>
                        </ul>
                    </div>
                    <div className="group relative font-oswald items-center w-fit">
                        <div className="translate-all duration-200 group-hover:scale-105 h-fit w-fit top-0 left-0">
                            <Image
                                className="min-w-[460px] lg:w-[960px] rounded-md transition-color duration-200 brightness-95 group-hover:brightness-100"
                                unoptimized
                                src="/r2-mission-specs.png"
                                alt="R2 Mission Specs"
                                height={1000}
                                width={100}
                            />
                        </div>
                        <ul className="translate-all duration-200 group-hover:scale-125 absolute top-12 right-17 text-xs w-fit h-fit bg-gray-d-8/80 rounded-md py-3 px-3">
                            <li className="text-scarlet text-sm bg-gray-l-2/30 w-fit px-1 rounded-md">Mission:</li>
                            <li>•&nbsp;Simulated Apogee: 11,837 ft</li>
                            <li>•&nbsp;Target Apogee: 10,000 ft</li>
                        </ul>
                    </div>
                </div>
                <hr className=""/>
                <div className="flex-1">
                    <h1 className="font-bebas-neue text-center text-6xl text-scarlet">Goals</h1>
                </div>
            </div>
        </div>
    )
}