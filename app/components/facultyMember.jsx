import { Courgette } from "next/font/google"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "./ui/tabs"
import facultyData from '../data/faculty'
import { BadgeCheck } from "lucide-react"
import { ScrollArea } from "./ui/scroll-area"
const courgette = Courgette({ subsets: ['latin'], weight: ['400'] });
export function FacultyTable() {
    return (
        <div className="grid grid-cols-1">
            <div className="">
            </div>
            <div className="md:px-5 p-2">
                <Tabs defaultValue="faculty">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="faculty">Faculty</TabsTrigger>
                        <TabsTrigger value="publication">Publications</TabsTrigger>
                        <TabsTrigger value="faculty_data" className="">Faculty Profile</TabsTrigger>
                    </TabsList>
                    <TabsContent value="faculty_data">
                        <ScrollArea className="h-screen">
                            <h2 class="section__title-1">
                                <span>Faculty Members</span>
                            </h2>
                            <section class="projects section " id="projects">
                                <div class="projects__container container grid">
                                    {facultyData.map((faculty) => (
                                        <article className="projects__card" key={faculty.Name}>
                                            <div className="projects__image">
                                                <img
                                                    src={`https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                                                    alt="image"
                                                    className="projects__img"
                                                />
                                                <a href="#" className="projects__button button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(255,255,255,1)"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                                                </a>
                                            </div>
                                            <div className="projects__content">
                                                <h3 className="projects__subtitle">{faculty.Designation}</h3>
                                                <h2 className="projects__title">{faculty.Name}</h2>
                                                <p className="projects__description">
                                                    {faculty.Qualification} with {faculty.Experience} of experience.
                                                </p>
                                            </div>
                                            <div className="projects__buttons">
                                                <a href="https://linkedin.com/" target="_blank" className="projects__link">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(70,146,221,1)"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>
                                                    Visit Profile
                                                </a>
                                            </div>
                                        </article>
                                    ))}
                                </div >
                            </section>
                        </ScrollArea>
                    </TabsContent>
                    <TabsContent value="faculty">
                        <p className={`${courgette.className} text-xl font-bold my-5 text-wisteria-300`}>Quality education starts with its educators...</p>
                        <p className="my-5 text-lg">AOT believes in creating an environment that helps the students to enhance their intellectual, emotional and physical development.</p>
                        <p className="text-lg">Prof. (Dr.) <span className={courgette.className}>Dilip Bhattacharya</span>, renowned Professor of Electronics & Electrical Communication Engineering from IIT Kharagpur and the Director of Academy of Technology, leads a team of 111 qualified and experienced faculty members conforming to AICTE stipulated teacher-student ratio.</p>
                        <ul className="space-y-4 mt-5 ">
                            <li className="flex font-semibold"> <BadgeCheck className="mr-2" /> 81 regular faculty members are having specialization in Industry 4.0 Technologies.</li>
                            <li className="flex font-semibold"> <BadgeCheck className="mr-2" /> Average teaching experience of faculty members is 11 years 8 months.</li>
                            <li className="flex font-semibold"> <BadgeCheck className="mr-2" />  Faculty members of AOT have published 84 papers in various International & National Journals.</li>
                            <li className="flex font-semibold"> <BadgeCheck className="mr-2" /> Existing faculty members of AOT have authored 11 books.</li>
                        </ul>
                    </TabsContent>
                    <TabsContent value="publication">
                        <section className="content">
                            <div className="jhu-block brand-message publication brand" role="region">
                                {/* <div className="dot-matrix" aria-hidden="true"></div> */}
                                <div className="center force">
                                    <div className="">

                                        {/* <p>
                At Johns Hopkins, you can explore ideas that interest you, find
                people who inspire and challenge you, and make discoveries that
                change your life—and the world.
              </p> */}
                                    </div>
                                </div>
                            </div>
                            {/* <div className="bg-yellow-500 w-full ">Rest of the Homepage UI</div> */}
                        </section>
                    </TabsContent>
                </Tabs>

            </div>
        </div>
    )
}
