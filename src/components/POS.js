import { useState } from "react";
import { motion } from "framer-motion";

// Bootstrap Icons used instead of image logos
const posData = [
    {
        id: 1,
        title: "Public Relations Executive",
        icon: "bi-megaphone",
        org: "IIITA Cultural Fest",
        period: "August 2024 - October 2024",
        description:
            "Led the PR team for the cultural fest. Managed media outreach, coordinated with sponsors, and handled public interactions.",
        skills: "Public Speaking, Negotiation, Media Outreach",
    },
    {
        id: 2,
        title: "Drama Club Member",
        icon: "bi-theater",
        org: "Rangtarangini",
        period: "2024 - Present",
        description:
            "Organized various Drama Nights, Nukkad Natak and many more ",
        skills: "Acting, Team Leading, Scripting",
    },
    {
        id: 3,
        title: "Fashion Show Lead",
        icon: "bi-person-bounding-box",
        org: "Ala-Mode",
        period: "August 2024 - October 2024",
        description:
            "Led the fashion show team for the cultural fest. Coordinated with designers, models, and choreographers to ensure a successful event.",
        skills: "Event Management, Team Coordination, Creativity",
    },
    {
        id: 4,
        title: "Inter IIIT Registration Volunteer",
        icon: "bi-clipboard-check",
        org: "Asmita 2024",
        period: "2024",
        description:
            "Assisted in the registration process for the Inter IIIT event. Managed participant queries and ensured smooth registration flow.",
        skills: "Communication, Organization, Problem Solving",
    }
];

const POS = () => {
    const [selected, setSelected] = useState(posData[0]);

    return (
        <div
            id="pos"
            className="pt-32 pb-20 px-6 md:px-20 bg-black text-white min-h-[80vh]"
        >
            <h2 className="text-5xl font-bold text-center mb-16 text-white">
                Positions of Responsibility
            </h2>
            <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
                {/* Timeline */}
                <div className="relative md:w-1/3">
                    <div className="absolute left-5 top-0 bottom-0 w-1 bg-gray-700 rounded-full"></div>
                    <ul className="space-y-6 pl-12">
                        {posData.map((pos) => (
                            <li
                                key={pos.id}
                                onClick={() => setSelected(pos)}
                                className={`cursor-pointer relative z-10 flex items-center gap-4 p-3 rounded-xl transition-all duration-200 
                  ${selected.id === pos.id
                                        ? "bg-gray-800 border border-gray-600"
                                        : "hover:bg-gray-800"
                                    }`}
                            >
                                <div className="relative z-10 text-white text-xl">
                                    <i className={`bi ${pos.icon}`}></i>
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-lg text-white">{pos.title}</p>
                                    <p className="text-sm text-gray-400">{pos.org}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Detail Card */}
                <motion.div
                    key={selected.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:w-2/3 bg-[#111] border border-gray-800 rounded-2xl p-6 shadow-lg"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="text-white text-3xl">
                            <i className={`bi ${selected.icon}`}></i>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-blue-400">
                                {selected.title}
                            </h3>
                            <p className="text-sm text-gray-400">
                                {selected.period} — {selected.org}
                            </p>
                        </div>
                    </div>
                    <p className="text-white mb-4">{selected.description}</p>
                    <p className="text-sm text-cyan-300 font-medium">
                        Skills: {selected.skills}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default POS;
