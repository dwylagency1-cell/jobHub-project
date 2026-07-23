import Navbar from './dash_navbar.jsx'
import Middle from './middle.jsx'
import Airbnb from './img/Airbnb_logo.jpg'
import Apple from './img/apple_logo.jpg'
import Atlassian from './img/Atlassian_logo.png'
import Cisco from './img/cisco.webp'
import Coinbase from './img/coinbase_logo.png'
import Figma from './img/figma_logo.png'
import Gitlab from './img/gitlab_logo.webp'
import Meta from './img/meta_logo.jpg'
import Netflix from './img/netflix_logo.jpg'
import Nvidia from './img/Nvidia_Logo.webp'
import Samsung from './img/samsung_logo.avif'
import Tasla from './img/Tesla_logo.png'
import Uber from './img/Uber_Logo.png'
import Microsoft from './img/microsoft.png'
import Adobe from './img/adobe.png'
import Google from './img/google.jpg'
import Chat from './img/chatgpt.png'
import Amazon from './img/amazon_logo.webp'
import Oracle from './img/oracle_logo.png'
import Spotify from './img/Spotify_logo.webp'
import Fuse from "fuse.js"
import { useState } from "react";


function Dashboard(props) {
  const [query, setQuery] = useState("");
  const first = localStorage.getItem("first")
  const last = localStorage.getItem("last")
  console.log(first)
    const jobs = [
  {
    id: 1,
    jobTitle: "Frontend React Developer",
    jobType: "Full Time",
    company: "Google",
    payRate: "$120/hr",
    logo: Google
  },
  {
    id: 2,
    jobTitle: "Backend Python Developer",
    jobType: "Full Time",
    company: "Microsoft",
    payRate: "$135/hr",
    logo: Microsoft
  },
  {
    id: 3,
    jobTitle: "UI/UX Designer",
    jobType: "Part Time",
    company: "Adobe",
    payRate: "$95/hr",
    logo: Adobe
  },
  {
    id: 4,
    jobTitle: "Machine Learning Engineer",
    jobType: "Full Time",
    company: "OpenAI",
    payRate: "$180/hr",
    logo: Chat
  },
  {
    id: 5,
    jobTitle: "Cloud Engineer",
    jobType: "Full Time",
    company: "Amazon",
    payRate: "$145/hr",
    logo: Amazon
  },
  {
    id: 6,
    jobTitle: "Android Developer",
    jobType: "Part Time",
    company: "Samsung",
    payRate: "$90/hr",
    logo: Samsung
  },
  {
    id: 7,
    jobTitle: "DevOps Engineer",
    jobType: "Full Time",
    company: "Netflix",
    payRate: "$170/hr",
    logo: Netflix
  },
  {
    id: 8,
    jobTitle: "Data Scientist",
    jobType: "Full Time",
    company: "Meta",
    payRate: "$160/hr",
    logo: Meta
  },
  {
    id: 9,
    jobTitle: "iOS Developer",
    jobType: "Part Time",
    company: "Apple",
    payRate: "$150/hr",
    logo: Apple
  },
  {
    id: 10,
    jobTitle: "Cyber Security Analyst",
    jobType: "Full Time",
    company: "Cisco",
    payRate: "$140/hr",
    logo: Cisco
  },
  {
    id: 11,
    jobTitle: "Software Engineer",
    jobType: "Full Time",
    company: "Tesla",
    payRate: "$165/hr",
    logo: Tasla
  },
  {
    id: 12,
    jobTitle: "Product Designer",
    jobType: "Part Time",
    company: "Figma",
    payRate: "$100/hr",
    logo: Figma
  },
  {
    id: 13,
    jobTitle: "Java Developer",
    jobType: "Full Time",
    company: "Oracle",
    payRate: "$125/hr",
    logo: Oracle
  },
  {
    id: 14,
    jobTitle: "Frontend Vue Developer",
    jobType: "Part Time",
    company: "GitLab",
    payRate: "$115/hr",
    logo: Gitlab
  },
  {
    id: 15,
    jobTitle: "Blockchain Developer",
    jobType: "Full Time",
    company: "Coinbase",
    payRate: "$190/hr",
    logo: Coinbase
  },
  {
    id: 16,
    jobTitle: "AI Research Engineer",
    jobType: "Full Time",
    company: "NVIDIA",
    payRate: "$210/hr",
    logo: Nvidia
  },
  {
    id: 17,
    jobTitle: "QA Engineer",
    jobType: "Part Time",
    company: "Atlassian",
    payRate: "$85/hr",
    logo: Atlassian
  },
  {
    id: 18,
    jobTitle: "Full Stack Developer",
    jobType: "Full Time",
    company: "Spotify",
    payRate: "$155/hr",
    logo: Spotify
  },
  {
    id: 19,
    jobTitle: "Mobile App Developer",
    jobType: "Part Time",
    company: "Airbnb",
    payRate: "$130/hr",
    logo: Airbnb
  },
  {
    id: 20,
    jobTitle: "Data Engineer",
    jobType: "Full Time",
    company: "Uber",
    payRate: "$150/hr",
    logo: Uber
  }
];
    return <div>
        <Navbar first = {first} last = {last} query={query} first={first} last={last} setQuery={setQuery}></Navbar>
        <Middle job={jobs} query={query}></Middle>
        
    </div>
}
export default Dashboard