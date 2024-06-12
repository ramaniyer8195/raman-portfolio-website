import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaBloggerB,
  FaEnvelopeOpen,
} from "react-icons/fa";
import { Link } from "../components/navbar/navbar.interfaces";
import { PersonalInfo } from "../pages/about/info/info.interfaces";
import { Stats } from "../pages/about/stats/stats.interfaces";
import { Skills } from "../pages/about/skills/skills.interfaces";
import {
  ResumeItem,
  ResumeCategory,
} from "../pages/about/resume-item/resume-item.interfaces";

export const LINKS: Link[] = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },
  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },
  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },
  {
    id: 4,
    name: "Blog",
    icon: <FaBloggerB className="nav__icon" />,
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const PERSONAL_INFO: PersonalInfo[] = [
  {
    id: 1,
    title: "First Name",
    description: "Raman",
  },
  {
    id: 2,
    title: "Last Name",
    description: "Iyer",
  },
  {
    id: 3,
    title: "Age",
    description: "29 Years",
  },
  {
    id: 4,
    title: "Nationality",
    description: "Indian",
  },
  {
    id: 5,
    title: "Phone",
    description: "+919819289445",
  },
  {
    id: 6,
    title: "Email",
    description: "ramaniyer8195@gmail.com",
  },
  {
    id: 7,
    title: "Languages",
    description: "English, Hindi, Marathi, Tamil",
  },
];

export const STATS: Stats[] = [
  {
    id: 1,
    no: 8,
    titleOne: "Years of",
    titleTwo: "Experience",
  },
  {
    id: 2,
    no: 10,
    titleOne: "Completed",
    titleTwo: "Projects",
  },
  {
    id: 3,
    no: 25,
    titleOne: "Tech Stack",
    titleTwo: "Technologies",
  },
  {
    id: 4,
    no: 15,
    titleOne: "Blogs",
    titleTwo: "Written",
  },
];

export const SKILLS: Skills = {
  frontend: ["html", "javascript", "react", "redux", "reactRouter", "next"],
  backend: ["node", "express", "jwt", "oauth"],
  database: ["mysql", "mongo"],
  devOps: ["git", "github", "gitlab", "githubActions", "docker"],
  fullStack: ["rest", "graphQl", "axios", "webSockets", "typescript"],
  componentLibraries: ["materialUi", "antDesign"],
  testing: ["jest", "reactTestingLibrary", "cypress", "playwright"],
  cssFramework: ["css", "bootstrap", "tailwind"],
};

export const EDUCATION: ResumeItem[] = [
  {
    id: 1,
    category: ResumeCategory.EDUCATION,
    year: "2016",
    title: "Bachelors Degree",
    name: "Mumbai University",
    description:
      "Graduated with a Bachelor's degree in IT, achieving a 7 CGPA. Developed strong technical skills and comprehensive knowledge in information technology, demonstrating consistent performance and a solid understanding of the field.",
  },

  {
    id: 2,
    category: ResumeCategory.EDUCATION,
    year: "2012",
    title: "Higher Secondary",
    name: "Model College",
    description:
      "Secured 77% in HSC, reflecting a solid grasp of advanced subjects and strong analytical skills. This achievement showcases my dedication and ability to perform well in a challenging academic environment.",
  },
  {
    id: 3,
    category: ResumeCategory.EDUCATION,
    year: "2010",
    title: "Secondary School",
    name: "SIA High School",
    description:
      "Achieved 90.18% in SSC, showcasing strong academic performance and a solid foundation in core subjects. This result reflects my dedication, hard work, and consistent excellence in a rigorous academic environment.",
  },
];

export const EXPERIENCE: ResumeItem[] = [
  {
    id: 1,
    category: ResumeCategory.EXPERIENCE,
    year: "2020-Present",
    title: "Senior Software Developer",
    name: "Deuex Solutions",
    description:
      "Led development projects focusing on ReactJS, Typescript, MaterialUI, and NextJS. Streamlined workflow processes, supervised API migrations, and contributed to POCs, emphasizing code quality and seamless experiences.",
  },

  {
    id: 2,
    category: ResumeCategory.EXPERIENCE,
    year: "2018-2020",
    title: "Full Stack Developer",
    name: "Avendata Technologies",
    description:
      "Worked on bug fixes, hotfixes, and showstoppers. Revamped modules, programmed macros in C#, and ensured seamless post-deployment maintenance. Optimized API handling and compiled reports for efficient data extraction and client satisfaction.",
  },
  {
    id: 3,
    category: ResumeCategory.EXPERIENCE,
    year: "2016-2018",
    title: "Software Developer",
    name: "Zeus Learning",
    description:
      "Enhanced educational programs with responsive designs, fixed bugs, and developed multiple modules using Javascript, BackboneJS and C#. Created tools and automation that significantly reduced manhours, leading to successful client outcomes.",
  },
];
