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

import facultyData from '../data/faculty'

export function FacultyTable() {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
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
            <TableFooter>
                <TableRow >
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
