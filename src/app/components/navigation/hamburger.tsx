'use client'
import Link from "next/link";
import React, { useState} from "react";

interface NavTab {
    id: number;
    title: string;
    items: {
        label: string;
        link: string;
    }[];
}

interface Props {
    NAV_TABS: NavTab[];
}

export const Hamburger = ({NAV_TABS}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = async (id: number) => {
    if(selected != id){
        setSelected(id);
    } else {
        setSelected(0);
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-screen w-50 transition-transform duration-500 bg-black/45 backdrop-blur z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-70'
        }`}
      >
        <div className="pt-15 px-3">
            <ul className="space-y-2 list-none flex flex-col items-start ">
                {
                    NAV_TABS.map( tab => ( 
                        <button key={tab.id} className="rounded-md bg-white/5 w-full font-bebas-neue text-2xl py-1 group flex flex-col items-start" onClick={() => handleTabClick(tab.id)}>
                            <div className="py-1 w-[90%] flex flex-row items-center">
                              <span className="pl-2 ">{tab.title}</span>
                              <span className="flex-1" /> {/* pushes the next element to the far right */}
                              <span>
                                {selected === tab.id ? <>•&nbsp;</> : "▼"}
                              </span>
                            </div>
                            {tab.items.map((item, idx) => (
                                <li key={tab.id+ "" + idx} className={`pl-2 font-oswald text-lg text-gray-l-4 transition-all translate-all ${selected === tab.id ? "duration-1500 max-h-200 opacity-100" : "duration-750 max-h-0 opacity-0"} `}>
                                    <Link className={`hover:text-gray-800 ${selected===tab.id ? "pointer-events-auto" : "pointer-events-none"}`} href={item.link} onClick={(e) => {if(selected === tab.id) {handleClick();} else {e.preventDefault();}}}>{item.label}</Link>
                                </li>
                            ))}
                        </button>
                    ))
                }
            </ul>
        </div>
      </div>
      <button
        onClick={handleClick}
        className={`fixed top-4 left-4 z-50 flex flex-col bg-gray-400/50 backdrop-blur rounded w-7 h-6.5 justify-center items-center`}
      >
        <span
          className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        />
        <span
          className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        />
      </button>
    </>
  );
};
