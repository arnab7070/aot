const facultyData = [
    {
        "Name": "Prof. Dilip Bhattacharya",
        "Designation": "Professor & Director",
        "Qualification": "Ph.D",
        "Experience": "40 yrs 8 mts"
    },
    {
        "Name": "Prof.Sripati Mukhopadhyay",
        "Designation": "Professor",
        "Qualification": "Ph.D",
        "Experience": "40 yrs"
    },
    {
        "Name": "Prof.Dilip Kumar Maity",
        "Designation": "Professor & Principal",
        "Qualification": "Ph.D",
        "Experience": "20 yrs"
    },
    {
        "Name": "Prof.Partha Dey",
        "Designation": "Professor",
        "Qualification": "Ph.D",
        "Experience": "24 yrs"
    },
    {
        "Name": "Prof.Abhijit Banerjee",
        "Designation": "Professor",
        "Qualification": "Ph.D",
        "Experience": "18 yrs 9 mts"
    },
    {
        "Name": "Krishna Bhowal",
        "Designation": "Associate Professor & Registrar",
        "Qualification": "Ph.D",
        "Experience": "17 yrs 8 mts"
    },
    {
        "Name": "Arindrajit Pal",
        "Designation": "Associate Professor",
        "Qualification": "Ph.D",
        "Experience": "18 yrs 7 mts"
    },
    {
        "Name": "Basab Chatterjee",
        "Designation": "Associate Professor",
        "Qualification": "Ph.D",
        "Experience": "19 yrs 1 mts"
    },
    {
        "Name": "Sirshendu Saha",
        "Designation": "Associate Professor",
        "Qualification": "Ph.D",
        "Experience": "16 yrs"
    },
    {
        "Name": "Sandip Saha Chowdhury",
        "Designation": "Associate Professor",
        "Qualification": "Ph.D",
        "Experience": "22 yrs"
    },
    {
        "Name": "Hiranmoy Mondal",
        "Designation": "Associate Professor",
        "Qualification": "Ph.D",
        "Experience": "17 yrs 2 mts"
    },
    {
        "Name": "Srinjoy Bid",
        "Designation": "Associate Professor",
        "Qualification": "Ph.D",
        "Experience": "20 yrs"
    },
    {
        "Name": "Abhijit Mallick",
        "Designation": "Associate Professor",
        "Qualification": "Ph.D",
        "Experience": "21 yrs 5 mts"
    },
    {
        "Name": "Biswaranjan Das",
        "Designation": "Associate Professor",
        "Qualification": "Ph.D",
        "Experience": "18 yrs 8 mts"
    },
    {
        "Name": "Baishakhi Bhattacharya",
        "Designation": "Associate Professor",
        "Qualification": "Ph.D",
        "Experience": "14 yrs 8 mts"
    },
    {
        "Name": "Subhra Chatterjee",
        "Designation": "Associate Professor",
        "Qualification": "Ph.D",
        "Experience": "14 yrs 8 mts"
    },
    {
        "Name": "Poulomi Deb Roy Chowdhury",
        "Designation": "Associate Professor",
        "Qualification": "Ph.D",
        "Experience": "17 yrs 6 mts"
    },
    {
        "Name": "Sourav Kayal",
        "Designation": "Associate Professor",
        "Qualification": "Ph.D",
        "Experience": "10 yrs 8 mts"
    },
    {
        "Name": "Asish Mohan",
        "Designation": "Associate Professor",
        "Qualification": "Ph.D",
        "Experience": "14 yrs"
    },
    {
        "Name": "Jhumpa De",
        "Designation": "Associate Professor",
        "Qualification": "Ph.D",
        "Experience": "15 yrs 8 mts"
    },
    {
        "Name": "Bappaditya Mondal",
        "Designation": "Associate Professor",
        "Qualification": "Ph.D",
        "Experience": "16 yrs"
    },
    {
        "Name": "Paulomi Chattopadhyay",
        "Designation": "Associate Professor",
        "Qualification": "Ph.D",
        "Experience": "15 yrs 6 mts"
    },
    {
        "Name": "Subir Panja",
        "Designation": "Associate Professor",
        "Qualification": "Ph.D",
        "Experience": "14 yrs"
    },
    {
        "Name": "Abhinaba Dutta",
        "Designation": "Associate Professor",
        "Qualification": "Ph.D",
        "Experience": "16 yrs 8 mts"
    },
    {
        "Name": "Jayati Mukherjee",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "3 yrs"
    },
    {
        "Name": "Oendrila Samanta",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "2 yrs"
    },
    {
        "Name": "Kanishka Majumder",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "9 yrs 8 mts"
    },
    {
        "Name": "Sukanta Bose",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "13 yrs"
    },
    {
        "Name": "Nabanita Das",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "1 yr"
    },
    {
        "Name": "Soumya Chatterjee",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "15 yrs 10 mts"
    },
    {
        "Name": "Ramnayan Mukherjee",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "8 yrs"
    },
    {
        "Name": "Somnath Mukherjee",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "8 yrs 9 mts"
    },
    {
        "Name": "Anshupriya Shome",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "3 yrs 2 mts"
    },
    {
        "Name": "Dhrubajyoti Mondal",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "3 yrs 3 mts"
    },
    {
        "Name": "Vikram Bhagat",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "13 yrs"
    },
    {
        "Name": "Sreetama Sinha",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "2 yrs"
    },
    {
        "Name": "Shalini Misra",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "4 yrs"
    },
    {
        "Name": "Rituparna Pakhira",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "2 yr 3 mts"
    },
    {
        "Name": "Avishek Chakraborty",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "2 yr 3 mts"
    },
    {
        "Name": "Nisantika Biswas",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "10 yrs 2 mts"
    },
    {
        "Name": "Sanjib Kundu",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "12 yrs 8 mts"
    },
    {
        "Name": "Partha Ghosh",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "10 yrs"
    },
    {
        "Name": "Smarajit Maity",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "18 yrs 8 mts"
    },
    {
        "Name": "Tapas Tewary",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "14 yrs 7 mts"
    },
    {
        "Name": "Nayan Ranjan Das",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "2 yrs"
    },
    {
        "Name": "Soumendu Banerjee",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "10 yrs"
    },
    {
        "Name": "Snehasish Saha",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "6 yrs"
    },
    {
        "Name": "Debamalya Ghosh",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "2 yrs"
    },
    {
        "Name": "Sunanda Sinha",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "2 yrs"
    },
    {
        "Name": "Moupikta Mukherjee",
        "Designation": "Assistant Professor",
        "Qualification": "Ph.D",
        "Experience": "2 yrs"
    },
    {
        "Name": "Pinak Pani Mukherjee",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "13 yrs 1 mts"
    },
    {
        "Name": "Niloy Ghosh",
        "Designation": "Assistant Professor",
        "Qualification": "M.E",
        "Experience": "7 yrs 8 mts"
    },
    {
        "Name": "Nibedita Saha",
        "Designation": "Assistant Professor",
        "Qualification": "M.E",
        "Experience": "9 yrs 8 mts"
    },
    {
        "Name": "Jayjeet Sarkar",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "15 yrs 1 mts"
    },
    {
        "Name": "Supantha Das",
        "Designation": "Assistant Professor",
        "Qualification": "M.E",
        "Experience": "10 yrs 8 mts"
    },
    {
        "Name": "Swarup Sarkar",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "14 yrs 6 mts"
    },
    {
        "Name": "Nupur Chhaule",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "12 yrs 7 mts"
    },
    {
        "Name": "Rakhi Neogi",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "12 yrs 8 mts"
    },
    {
        "Name": "Suman Bhattacharya",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "14 yrs 8 mts"
    },
    {
        "Name": "Kaushik Roy Chowdhury",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "18 yrs"
    },
    {
        "Name": "Biswajit Patra",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "3 yrs 4 mts"
    },
    {
        "Name": "Priyanka Bhattacharya",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "7 yrs"
    },
    {
        "Name": "Chiranjit Guchait",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "9 yrs 11 mts"
    },
    {
        "Name": "Subhasish Das",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "1 yrs"
    },
    {
        "Name": "Prasenjit Das",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "20 yrs"
    },
    {
        "Name": "Somen Kumar Hati",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "19 yrs 8 mts"
    },
    {
        "Name": "Jyotirmoy Panja",
        "Designation": "Assistant Professor",
        "Qualification": "M.BA",
        "Experience": "1 yr"
    },
    {
        "Name": "Sailik Sen",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "3 yrs 1mts"
    },
    {
        "Name": "Kaushik Bose",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "3 yrs 2 mts"
    },
    {
        "Name": "Garima Rani",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "4 yrs 1 mts"
    },
    {
        "Name": "Subhankar Roy",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "11 yrs 7 mts"
    },
    {
        "Name": "K.M.Priti",
        "Designation": "Assistant Professor",
        "Qualification": "MCA",
        "Experience": "4 yrs 4 mts"
    },
    {
        "Name": "Aaheli Sarkar",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "3 yrs"
    },
    {
        "Name": "Ashutosh Kumar",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "3 yrs 4 mts"
    },
    {
        "Name": "Firoj Ahamad",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "4 yrs 1 mts"
    },
    {
        "Name": "Srikrishna Awasthi",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "4 yrs 1 mts"
    },
    {
        "Name": "Jitendra Banerjee",
        "Designation": "Assistant Professor",
        "Qualification": "M.E",
        "Experience": "13 yrs"
    },
    {
        "Name": "Suman Mukherjee",
        "Designation": "Assistant Professor",
        "Qualification": "M.E",
        "Experience": "4 yrs 1 mts"
    },
    {
        "Name": "Buddhadeb Chatterjee",
        "Designation": "Assistant Professor",
        "Qualification": "M.E",
        "Experience": "11 yrs 2 mts"
    },
    {
        "Name": "Jyotirmoy Chakrabarti",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "14 yrs 2 mts"
    },
    {
        "Name": "Swarna Das",
        "Designation": "Assistant Professor",
        "Qualification": "M.E",
        "Experience": "9yrs"
    },
    {
        "Name": "Amit Kumar Nandi",
        "Designation": "Assistant Professor",
        "Qualification": "M.E",
        "Experience": "12 yrs 7 mts"
    },
    {
        "Name": "Md. Ehtesham",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "3 yrs"
    },
    {
        "Name": "Partha Banerjee",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "8 yrs"
    },
    {
        "Name": "Divyangna Sharma",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "4 yrs 1 mts"
    },
    {
        "Name": "Subham Pramanik",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "13 yrs 8 mts"
    },
    {
        "Name": "Netai Das",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "2 yrs 2 mts"
    },
    {
        "Name": "Manisha",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "3 yrs 4 mts"
    },
    {
        "Name": "Mintu Dey",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "2 yrs 1 mts"
    },
    {
        "Name": "Hiralal Kumar",
        "Designation": "Assistant Professor",
        "Qualification": "M.E",
        "Experience": "2 yrs 1 mts"
    },
    {
        "Name": "Manish Sharma",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "4 yrs"
    },
    {
        "Name": "Abhijit Patra",
        "Designation": "Assistant Professor",
        "Qualification": "M.E",
        "Experience": "14 yrs 5 mts"
    },
    {
        "Name": "Subhradeep Maitra",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "1 yr"
    },
    {
        "Name": "Bamdeb Banerjee",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "19 yrs 8 mts"
    },
    {
        "Name": "Debasish Sur",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "10 yrs 7 mts"
    },
    {
        "Name": "Debjani Bhattacharya",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "13 yrs 8 mts"
    },
    {
        "Name": "Kaustav Bhadar",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "9 yrs 8 mts"
    },
    {
        "Name": "Sayan Das",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "3 yrs 2 mts"
    },
    {
        "Name": "Suman Sengupta",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "28 yrs"
    },
    {
        "Name": "Gaurav Shalot",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "4 yrs 1 mts"
    },
    {
        "Name": "Soumitra Das",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "2 yrs 2 mts"
    },
    {
        "Name": "Sandipan Misra",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "13 yrs 8 mts"
    },
    {
        "Name": "Suman Kumar Das",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "13 yrs 7 mts"
    },
    {
        "Name": "Abhijit Basu",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "12 yrs 2 mts"
    },
    {
        "Name": "Aloke Kumar Ghoshal",
        "Designation": "Assistant Professor",
        "Qualification": "M.B.A",
        "Experience": "16 yrs 8 mts"
    },
    {
        "Name": "Anindya Saha",
        "Designation": "Assistant Professor",
        "Qualification": "M.Sc",
        "Experience": "20 yrs 2 mts"
    },
    {
        "Name": "Soma Banerjee",
        "Designation": "Assistant Professor",
        "Qualification": "MBA",
        "Experience": "10 yrs 1 mts"
    },
    {
        "Name": "Arindam Dey",
        "Designation": "Assistant Professor",
        "Qualification": "M.Sc",
        "Experience": "3 yrs"
    },
    {
        "Name": "Dwijen Biswas",
        "Designation": "Assistant Professor",
        "Qualification": "MBA",
        "Experience": "3 yrs 2 mts"
    },
    {
        "Name": "Shaoli Mukherjee",
        "Designation": "Assistant Professor",
        "Qualification": "MBA",
        "Experience": "3 yrs 2 mts"
    },
    {
        "Name": "Anil Kumar Sharma",
        "Designation": "Assistant Professor",
        "Qualification": "MBA",
        "Experience": "12 yrs2 mts"
    },
    {
        "Name": "Uday Kumar Mandal",
        "Designation": "Assistant Professor",
        "Qualification": "MCA, M.Tech",
        "Experience": "15 yrs 8 mts"
    },
    {
        "Name": "Venu Gopal",
        "Designation": "Assistant Professor",
        "Qualification": "MCA",
        "Experience": "4 yrs 2 mts"
    },
    {
        "Name": "Suman Goswami",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "2 yrs 2 mts"
    },
    {
        "Name": "Sarjita Soo",
        "Designation": "Assistant Professor",
        "Qualification": "MCA, M.Tech",
        "Experience": "4 yrs"
    },
    {
        "Name": "Suchibrata Dutta",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "14 yrs 3 mts"
    },
    {
        "Name": "Shamik Kumar Bose",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "5 yrs"
    },
    {
        "Name": "Poulomi Ganguly",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "10 yrs"
    },
    {
        "Name": "Dibyendu Kumar Ghosh",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "1 yrs"
    },
    {
        "Name": "Sajal Sasmal",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "9 yrs"
    },
    {
        "Name": "Dipanjan De",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "15 yrs"
    },
    {
        "Name": "Shiladitya Acharyya",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "1 yr"
    },
    {
        "Name": "Jayanta Digar",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "2 yrs"
    },
    {
        "Name": "Anumita Singha Roy",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "4 yrs"
    },
    {
        "Name": "Sruti Mondal",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "2 yrs"
    },
    {
        "Name": "Tanmoy Makar",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "2 yrs"
    },
    {
        "Name": "Arun Kumar Sadhu",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "19 yrs"
    },
    {
        "Name": "Priya Raj Chandra",
        "Designation": "Assistant Professor",
        "Qualification": "M.Tech",
        "Experience": "1 yrs"
    },
    {
        "Name": "Dipanwita Saha",
        "Designation": "Assistant Professor",
        "Qualification": "M..Tech",
        "Experience": "1 yrs"
    }
]

export default facultyData;