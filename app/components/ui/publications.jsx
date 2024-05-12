"use client";
import { useEffect } from "react";
import Link from "next/link";
import {
  Table,
  TableCaption,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "./table";

const publications = [
  {
    title: "Multi-method approach for new vehicle purchasing problem through MCGDM technique under cylindrical neutrosophic environment",
    authors: "B. Banik, A. Chakraborty, A. Barman, et al.",
    journal: "Soft Computing",
    year: 2024,
    doi: "https://doi.org/10.1007/s00500-023-09520-y",
  },
  {
    title: "A complex network analysis approach to compare the performance of batsmen across different formats",
    authors: "N.R. Das, A. Konar, I. Mukherjee, and G. Paul",
    journal: "Knowledge-Based Systems",
    volume: "284",
    pages: "111269",
    date: "25 January",
    year: 2024,
  },
  {
    title: "A Neighborhood Impact Driven K-Medoid Clustering and Fuzzy Logic Blended Approach for High Density Impulse Noise Detection and Removal",
    authors: "A. Banerjee, K. Mondal, A. Chakraborty, A. Das, R. Bag",
    journal: "Traitement du Signal",
    volume: "39",
    issue: "6",
    pages: "1737-1749",
    year: 2023,
    if: "2.32",
  },
  {
    title: "Deep Learning Based Document Clustering and Classification using Hadoop",
    authors: "K. Shreedhar, S. Maheshwari, R. Kanchan",
    journal: "International Journal of Information Technology Convergence and Services",
    volume: "9",
    issue: "1",
    pages: "1-16",
    year: 2020,
    doi: "https://doi.org/10.4018/IJITCS.2020010101",
  },
  {
    title: "An Integrated Approach for Identifying, Extracting and Categorizing Information from Business Documents",
    authors: "S. Gupta, S. Mehrotra, S. Sarawagi",
    journal: "Proceedings of the 22nd International Conference on Data Engineering",
    pages: "1106-1117",
    year: 2006,
  },
  {
    title: "A Survey on Opinion Mining and Sentiment Analysis: Tasks, Approaches and Applications",
    authors: "S. Manjunath, K. A. Naina, P. J. Geetha",
    journal: "International Journal of Computer Applications",
    volume: "78",
    issue: "10",
    year: 2013,
    doi: "https://doi.org/10.5120/13690-6719",
  },
  // Add more publications here...
];


function PublicationList() {
  useEffect(() => {
    // This function is called after the component mounts.
  }, []);

  return (
    <div className="overflow-x-auto mx-2 md:mx-10">
      <table className="min-w-full divide-y divide-gray-200">
        <caption className="text-lg font-bold mb-4 text-left md:text-center">
          List of Publications
        </caption>
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Authors
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Journal
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Pages
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Year
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              DOI
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {publications.map((publication, index) => (
            <tr key={index}  className="hover:bg-gray-200">
              <td className="px-6 py-4 whitespace-normal line-clamp-5">
                {publication.title}
              </td>
              <td className="px-6 py-4 whitespace-norwrap">
                {publication.authors}
              </td>
              <td className="px-6 py-4 whitespace-normal line-clamp-5">
                {publication.journal}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {publication.pages}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {publication.year}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {publication.doi && (
                  <Link
                    href={publication.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {publication.doi}
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PublicationList;
