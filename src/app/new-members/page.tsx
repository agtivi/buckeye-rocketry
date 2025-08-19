import Link from "next/link";
import Image from "next/image";


export default function NewMembers(){

    return (
        <div className="mb-20 xl:px-30 md:pt-10">
            <h1 className="text-center text-7xl font-bebas-neue text-scarlet">
                Join the Club!
            </h1>
            <div className="pt-10">
                <p className="font-oswald text-center text-3xl bg-gray-d-8 rounded-md py-2 mx-10">
                    If you are interested in joining the team, please visit us at the <Link href="" className="underline">Autumn Involvement Fair</Link> this August on the 24th!
                </p>
                <div className="mt-10 py-5 px-5 bg-gray-d-8 rounded-md">
                    <h1 className="text-center font-bebas-neue text-4xl text-scarlet">
                        Alternatively you can join one of our servers/chatrooms or contact us!
                    </h1>
                    <div className="flex flex-row gap-10 xxl:gap-20">
                        <div className="flex flex-col pt-10 flex-1 md:px-15 pb-10">
                            <div className="flex-1 flex flex-row font-oswald text-xlgap-10 lg:gap-30">
                                <div className="flex-1">
                                    <h2 className="font-bebas-neue text-3xl text-scarlet">
                                        Contact:
                                    </h2>
                                    <ul className="flex flex-col gap-3">
                                        <li>
                                            • Steven Luo (President) <br/> &nbsp;&nbsp;  email: Steven.S.Luo123@gmail.com
                                        </li>
                                        <li>
                                            • Josh Kim (Vice-President) <br/> &nbsp;&nbsp; email: joshkim.514@gmail.com
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-2 font-oswald text-xl w-50">
                                    <h1 className="font-bebas-neue text-3xl text-scarlet">
                                        Links:
                                    </h1>
                                    <div className="flex flex-row gap-5">
                                        <div className="flex flex-col justify-center ">
                                            Join the Groupme:
                                        </div>
                                        <div className="min-w-10 flex-1 flex flex-row justify-end">
                                            <Link href="https://groupme.com/join_group/104509461/YFexRWoj">
                                                <Image className="rounded-md" src="/logos/groupme-logo.png" alt="Groupme Logo" height={50} width={50}>

                                                </Image>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-5">
                                        <div className="flex flex-col justify-center ">
                                            Join the LinkedIn:
                                        </div>
                                        <div className="min-w-10 flex-1 flex flex-row justify-end">
                                            <Link href="https://www.linkedin.com/company/buckeye-rocketry/">
                                                <Image className="rounded-md" src="/logos/linkedin-logo.png" alt="LinkedIn Logo" height={50} width={50}>

                                                </Image>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <iframe src="https://discord.com/widget?id=1335115098997653504&theme=dark" className="block lg:hidden w-full h-120 px-3 pt-10" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                            </div>
                            <div className="flex-1">
                                <div className="font-bebas-neue group pt-10 lg:pt-20">
                                    <h2 className="text-3xl text-scarlet">
                                        More Information: 
                                    </h2>
                                    <p className="text-base font-oswald">
                                        Membership Requirements <br/>
                                    </p>
                                    <p className="text-sm font-oswald">
                                        •	Membership in this organization is open to all Ohio State University undergraduate students interested in Rocketry.  <br/>
                                        •	Membership in this organization is enrolling on an open basis.  <br/>
                                        •	Non-members become members through signing up at a general meeting. <br/>
                                        •	Non-members will become members at the start of each semester. <br/>
                                        •	To be recognized as a general member, prospective students must actively participate in at least 3+ general body meetings, sub section meetings, and show a level of commitment towards the organization. Students will then be given the opportunity to partake in a official rocketry project overseen by the executive board members, a general indication of becoming a general member.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <iframe src="https://discord.com/widget?id=1335115098997653504&theme=dark" className="hidden lg:block flex-1 md:min-w-[30%] h-120 pt-10" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>    
                    </div>
                </div>
            </div>
        </div>
    )
}