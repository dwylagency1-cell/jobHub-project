import Navbar from './dash_navbar.jsx'
import Middle from './middle.jsx'
function Dashboard() {
    const jobs = [
  {
    id: 1,
    jobTitle: "Frontend React Developer",
    jobType: "Full Time",
    company: "Google",
    payRate: "$120/hr",
    logo: "https://cdn.simpleicons.org/google"
  },
  {
    id: 2,
    jobTitle: "Backend Python Developer",
    jobType: "Full Time",
    company: "Microsoft",
    payRate: "$135/hr",
    logo: "https://cdn.simpleicons.org/microsoft"
  },
  {
    id: 3,
    jobTitle: "UI/UX Designer",
    jobType: "Part Time",
    company: "Adobe",
    payRate: "$95/hr",
    logo: "https://logo.clearbit.com/adobe.com"
  },
  {
    id: 4,
    jobTitle: "Machine Learning Engineer",
    jobType: "Full Time",
    company: "OpenAI",
    payRate: "$180/hr",
    logo: "https://logo.clearbit.com/openai.com"
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
    logo: "https://logo.clearbit.com/samsung.com"
  },
  {
    id: 7,
    jobTitle: "DevOps Engineer",
    jobType: "Full Time",
    company: "Netflix",
    payRate: "$170/hr",
    logo: "https://logo.clearbit.com/netflix.com"
  },
  {
    id: 8,
    jobTitle: "Data Scientist",
    jobType: "Full Time",
    company: "Meta",
    payRate: "$160/hr",
    logo: "https://logo.clearbit.com/meta.com"
  },
  {
    id: 9,
    jobTitle: "iOS Developer",
    jobType: "Part Time",
    company: "Apple",
    payRate: "$150/hr",
    logo: "https://logo.clearbit.com/apple.com"
  },
  {
    id: 10,
    jobTitle: "Cyber Security Analyst",
    jobType: "Full Time",
    company: "Cisco",
    payRate: "$140/hr",
    logo: "https://logo.clearbit.com/cisco.com"
  },
  {
    id: 11,
    jobTitle: "Software Engineer",
    jobType: "Full Time",
    company: "Tesla",
    payRate: "$165/hr",
    logo: "https://logo.clearbit.com/tesla.com"
  },
  {
    id: 12,
    jobTitle: "Product Designer",
    jobType: "Part Time",
    company: "Figma",
    payRate: "$100/hr",
    logo: "https://logo.clearbit.com/figma.com"
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
    logo: "https://logo.clearbit.com/gitlab.com"
  },
  {
    id: 15,
    jobTitle: "Blockchain Developer",
    jobType: "Full Time",
    company: "Coinbase",
    payRate: "$190/hr",
    logo: "https://logo.clearbit.com/coinbase.com"
  },
  {
    id: 16,
    jobTitle: "AI Research Engineer",
    jobType: "Full Time",
    company: "NVIDIA",
    payRate: "$210/hr",
    logo: "https://logo.clearbit.com/nvidia.com"
  },
  {
    id: 17,
    jobTitle: "QA Engineer",
    jobType: "Part Time",
    company: "Atlassian",
    payRate: "$85/hr",
    logo: "https://logo.clearbit.com/atlassian.com"
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
    logo: "https://logo.clearbit.com/airbnb.com"
  },
  {
    id: 20,
    jobTitle: "Data Engineer",
    jobType: "Full Time",
    company: "Uber",
    payRate: "$150/hr",
    logo: "https://logo.clearbit.com/uber.com"
  }
];
    return <div>
        <Navbar></Navbar>
        <Middle job={jobs}> </Middle>
        
    </div>
}
export default Dashboard