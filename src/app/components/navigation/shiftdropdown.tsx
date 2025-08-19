'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavTab {
    id: number;
    title: string;
    items:{
        label: string;
        link: string;
    }[];
}

interface Props {
    NAV_TABS: NavTab[];
}

export default function ShiftingDropDown({ NAV_TABS}: Props){
    const [activeTab, setActiveTab] = useState<number | null>(null);
    const [tabCenter, setTabCenter] = useState(0);

    const handleHover = (tabId: number) => {
        const tabEl = document.getElementById(`nav-tab-${tabId}`);
        const parentEl = tabEl?.parentElement; // the relative container

        if(!tabEl || !parentEl) return;
        const tabRect = tabEl.getBoundingClientRect();
        const parentRect = parentEl.getBoundingClientRect();

        setTabCenter(tabRect.left + tabRect.width / 2 - parentRect.left );
        setActiveTab(tabId);
    };

    const handleLeave = () => {
        // setTimeout(() => {
            setActiveTab(null);
        // }, 500)
    };

    return (
        <div className="relative w-full h-full flex gap-4 bg-gray-d-2 rounded-full" onMouseLeave={handleLeave}>
            {NAV_TABS.map(tab => (
                <button
                    key={tab.id}
                    id={`nav-tab-${tab.id}`}
                    onMouseEnter={() => handleHover(tab.id)}
                    className="px-3 py-1 flex-1 hover:bg-gray-d-4 hover:text-scarlet rounded-full text-xl transition-colors"
                >
                    {tab.title}
                </button>
            ))}
            <AnimatePresence>
                {activeTab && (
                    <motion.div
                        key={activeTab}
                        style={{ left: tabCenter-65}}
                        className="absolute top-full w-[130px] bg-gray-d-4 rounded-md shadow-lg z-50"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25 }}
                    >
                        {NAV_TABS.find(t => t.id === activeTab)?.items.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.link}
                                className="w-full h-full bg-white"
                            >
                                <div
                                    className="px-3 py-2 text-scarlet-d-6 hover:text-scarlet hover:bg-gray-d-2/75 rounded-md cursor-pointer"
                                >
                                        {item.label}
                                </div>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}