'use client'
import Link from "next/link"
import ShiftingDropDown from "./shiftdropdown"
import { Hamburger } from "./hamburger"

export default function Navbar() {

    const NAV_TABS = [
        { id: 1, title: "Projects", items: [
            {label: "Prometheus", link: "/#"}, 
            {label: "R2 Two-Stage", link: "/#"}, 
            {label: "Avionics", link: "/#"}, 
            {label: "Structures", link: "/#"}, 
        ] },
        { id: 2, title: "Outreach", items: [
            {label: "Media", link: "/#"}, 
            {label: "Our sponsors", link: "/#"},
        ] },
        { id: 3, title: "Leadership", items: [
            {label: "Current leadership", link: "/#"}
        ] },
        { id: 4, title: "Members", items: [
            {label: "How to join", link: "/new-members"}, 
            {label: "Calendar", link: "/#"}
        ] },
        { id: 5, title: "Resources", items: [
            {label: "Jobs", link: "/#"}, 
            {label: "Models", link: "/#"}, 
            {label: "Code", link: "/#"}, 
            {label: "Equipment", link: "/#"}, 
        ] },
        { id: 6, title: "Sponsors", items: [
            {label: "Become a sponsor", link: "/#"}
        ] }
    ]

    return(
        <div>
            <div className="relative flex sm:hidden h-full items-center">
                <Hamburger NAV_TABS={NAV_TABS}/>
            </div>
            <nav className={`hidden sm:block bg-gray-d-2/30 w-full fixed top-0 left-0 h-[100px] z-20 font-oswald rounded-b-[50] drop-shadow-md`}>
                <div className="h-full w-full relative flex flex-row">
                    <div className="min-w-5 md:min-w-20">
                    </div>
                    <div className="flex flex-col w-full h-full">
                        <div className="flex flex-1 justify-center items-center font-bebas-neue text-xl drop-shadow-lg">
                            <p className="ease-in-out text-center text-scarlet w-[230px] py-1 text-3xl bg-gray rounded-t-[50] ">
                                Buckeye Rocketry
                            </p>
                        </div>
                        <div className="relative flex h-full items-center">
                            <ShiftingDropDown NAV_TABS={NAV_TABS} />
                        </div>
                    </div>
                    <div className="min-w-5 md:min-w-20">
                    </div>
                </div>
            </nav>
        </div>

    )
}
