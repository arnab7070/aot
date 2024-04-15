import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table"
import { Pacifico } from "next/font/google";
const pacifico = Pacifico({
    weight: "400",
    subsets: ["latin"],
  });
import { Courgette } from "next/font/google"

import { Button } from "./ui/button"

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
        <div className="grid grid-cols-1 md:grid-cols-1">
            <div className="">

            </div>
            <div className="md:px-5 p-2">
                <Tabs defaultValue="faculty">
                    <TabsList className="grid w-full grid-cols-3 gap-4">
                        <TabsTrigger value="faculty">Faculty</TabsTrigger>
                        <TabsTrigger value="publication">Publications</TabsTrigger>
                        <TabsTrigger value="faculty_data" className="">Faculty Profile</TabsTrigger>
                    </TabsList>
                    <TabsContent value="faculty_data">
                        <ScrollArea className="h-screen">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Faculty Name</TableHead>
                                        <TableHead>Designation</TableHead>
                                        <TableHead>Qualification</TableHead>
                                        <TableHead className="text-right">Experience</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {facultyData.map((faculty) => (
                                        <TableRow key={faculty.Name}>
                                            <TableCell className="font-medium">{faculty.Name}</TableCell>
                                            <TableCell>{faculty.Designation}</TableCell>
                                            <TableCell>{faculty.Qualification}</TableCell>
                                            <TableCell className="text-right">{faculty.Experience}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
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
                            <div className="jhu-block brand-message section brand" role="region">
                                <div className="dot-matrix" aria-hidden="true"></div>
                                <div className="center force">
                                    <div className="">
                                        <h2 className="relative top-12 ">
                                            <span
                                                className={`${pacifico.className} block text-4xl md:text-8xl ml-2 mr-auto md:ml-6 md:mr-auto`}
                                            >
                                                When vision
                                            </span>
                                            <br />
                                            <span
                                                className={`${pacifico.className} block text-4xl md:text-8xl ml-8 mr-auto md:ml-56`}
                                            >
                                                meets guidance,
                                            </span>
                                            <br />
                                            <strong className="">
                                                <span className="block text-4xl md:text-8xl ml-40 mr-auto md:ml-[50rem] md:mr-auto">
                                                    <h1 className="close">anything</h1>
                                                </span>
                                                <br />
                                                <span className="block text-4xl md:text-8xl ml-20 mr-auto md:ml-96 md:mr-auto">
                                                    <h1 className="close">is possible.</h1>
                                                </span>
                                            </strong>
                                        </h2>

                                        {/* <p>
                At Johns Hopkins, you can explore ideas that interest you, find
                people who inspire and challenge you, and make discoveries that
                change your life—and the world.
              </p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-yellow-500 w-full ">Rest of the Homepage UI</div>
                        </section>
                    </TabsContent>
                </Tabs>

            </div>
        </div>
    )
}
