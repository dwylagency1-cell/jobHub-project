import Navbar from './dash_navbar.jsx'
import Middle from './middle.jsx'
import Airbnb from './img/airbnb.png'
import Apple from './img/apple.png'
import Atlassian from './img/atlassian.png'
import Cisco from './img/cisco.png'
import Coinbase from './img/coinbase.png'
import Figma from './img/figma.png'
import Gitlab from './img/gitlab.png'
import Meta from './img/meta.png'
import Netflix from './img/netflix.png'
import Nvidia from './img/nvidia.png'
import Samsung from './img/samsung.png'
import Tasla from './img/tasla.png'
import Uber from './img/uber.png'
import Microsoft from './img/microsoft.png'
import Adobe from './img/adobe.png'
import Google from './img/google.jpg'
import Chat from './img/chatgpt.png'

function Dashboard(props) {

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
    logo: "https://logo.clearbit.com/amazon.com"
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
    logo: "https://logo.clearbit.com/oracle.com"
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
    logo: "https://logo.clearbit.com/spotify.com"
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
        <Navbar first = {first} last = {last}></Navbar>
        <Middle job={jobs}> </Middle>
        
    </div>
}
export default Dashboard