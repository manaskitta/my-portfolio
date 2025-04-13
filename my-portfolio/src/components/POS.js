import { useState } from "react";
import { motion } from "framer-motion";

const posData = [
    {
        id: 1,
        title: "Event Coordinator",
        logo: "/logos/hackathon.png",
        org: "Aparoksha 2024 Hackathon",
        period: "March 2024",
        description:
            "Managed 200+ participants, coordinated between tech and logistics teams, ensured smooth event execution.",
        skills: "Team Management, Event Planning, Communication",
    },
    {
        id: 2,
        title: "Public Relations Head",
        logo: "/logos/design.png",
        org: "IIITA Cultural Fest",
        period: "Jan 2024",
        description:
            "Led the PR team for the cultural fest. Managed media outreach, coordinated with sponsors, and handled public interactions.",
        skills: "Public Speaking, Negotiation, Media Outreach",
    },
    {
        id: 3,
        title: "Coding Club Member",
        logo: "/logos/codeclub.png",
        org: "CodeIIITA",
        period: "2023 - Present",
        description:
            "Organized weekly coding sessions, mentored juniors, and hosted competitive programming contests.",
        skills: "DSA, Mentorship, Competitive Programming",
    },
    {
        id: 4,
        title: "Mentorship Coordinator",
        logo: "/logos/mentor.png",
        org: "Institute Mentorship Program",
        period: "2024 - Present",
        description:
            "Mentored first-year students academically and personally, resolving their issues and guiding them through their initial college journey.",
        skills: "Mentorship, Communication, Leadership",
    },
    {
        id: 5,
        title: "Web Team Member",
        logo: "/logos/web.png",
        org: "Aparoksha 2024",
        period: "2024",
        description:
            "Contributed to the development and maintenance of the official Aparoksha website and registration portal.",
        skills: "Web Development, Git, Collaboration",
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
                    {/* Vertical Line */}
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
                                <div className="relative z-10">
                                    <img
                                        src={pos.logo}
                                        alt={pos.title}
                                        className="w-10 h-10 rounded-full border border-gray-600"
                                    />
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
                        <img
                            src={selected.logo}
                            alt={selected.title}
                            className="w-12 h-12 rounded-full border border-gray-600"
                        />
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
