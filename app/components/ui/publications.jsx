'use client'
import { useEffect } from 'react';

const publications = [
  {
    title: "Multi-method approach for new vehicle purchasing problem through MCGDM technique under cylindrical neutrosophic environment",
    authors: "B. Banik, A. Chakraborty, A. Barman, et al.",
    journal: "Soft Computing",
    year: 2024,
    doi: "https://doi.org/10.1007/s00500-023-09520-y"
  },
  {
    title: "A complex network analysis approach to compare the performance of batsmen across different formats",
    authors: "N.R. Das, A. Konar, I. Mukherjee, and G. Paul",
    journal: "Knowledge-Based Systems",
    volume: "284",
    pages: "111269",
    date: "25 January",
    year: 2024
  },
  {
    title: "A Neighborhood Impact Driven K-Medoid Clustering and Fuzzy Logic Blended Approach for High Density Impulse Noise Detection and Removal",
    authors: "A. Banerjee, K. Mondal, A. Chakraborty, A. Das, R. Bag",
    journal: "Traitement du Signal",
    volume: "39",
    issue: "6",
    pages: "1737-1749",
    year: 2023,
    if: "2.32"
  },
  // Add other publications here...
];

function PublicationList() {
  useEffect(() => {
    const publicationTable = document.getElementById("publication-table");

    publications.forEach((publication, index) => {
      const row = publicationTable.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      const cell5 = row.insertCell(4);
      
      cell1.innerHTML = publication.title;
      cell2.innerHTML = publication.authors;
      cell3.innerHTML = publication.journal;
      cell4.innerHTML = publication.year;
      cell5.innerHTML = publication.doi ? `<a href="${publication.doi}" target="_blank">${publication.doi}</a>` : '';
    });
  }, []);

  return (
    <table id="publication-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Authors</th>
          <th>Journal</th>
          <th>Year</th>
          <th>DOI</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}

export default PublicationList;
