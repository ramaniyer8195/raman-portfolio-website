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
  frontend: [
    {
      logo: <i className="devicon-html5-plain-wordmark skill__logo-icon"></i>,
      title: "HTML",
    },
    {
      logo: <i className="devicon-css3-plain-wordmark skill__logo-icon"></i>,
      title: "CSS",
    },
    {
      logo: <i className="devicon-javascript-plain skill__logo-icon"></i>,
      title: "Javascript",
    },
    {
      logo: <i className="devicon-typescript-plain skill__logo-icon"></i>,
      title: "Typescript",
    },
    {
      logo: <i className="devicon-react-original skill__logo-icon"></i>,
      title: "React",
    },
    {
      logo: <i className="devicon-redux-original skill__logo-icon"></i>,
      title: "Redux",
    },
    {
      logo: <i className="devicon-reactrouter-plain skill__logo-icon"></i>,
      title: "React Router",
    },
    {
      logo: (
        <i className="devicon-nextjs-original-wordmark skill__logo-icon"></i>
      ),
      title: "NextJs",
    },
    {
      logo: <i className="devicon-graphql-plain skill__logo-icon"></i>,
      title: "GraphQL",
    },
    {
      logo: <i className="devicon-axios-plain skill__logo-icon"></i>,
      title: "Axios",
    },
  ],
  backend: [
    {
      logo: <i className="devicon-nodejs-plain-wordmark skill__logo-icon"></i>,
      title: "NodeJs",
    },
    {
      logo: (
        <i className="devicon-express-original-wordmark skill__logo-icon"></i>
      ),
      title: "Express",
    },
    {
      logo: <i className="devicon-oauth-plain skill__logo-icon"></i>,
      title: "oAuth",
    },
  ],
  database: [
    {
      logo: <i className="devicon-mysql-plain-wordmark skill__logo-icon"></i>,
      title: "MySQL",
    },
    {
      logo: <i className="devicon-mongodb-plain-wordmark skill__logo-icon"></i>,
      title: "MongoDb",
    },
    {
      logo: <i className="devicon-firebase-plain skill__logo-icon"></i>,
      title: "Firebase",
    },
  ],
  devops: [
    {
      logo: <i className="devicon-git-plain skill__logo-icon"></i>,
      title: "Git",
    },
    {
      logo: <i className="devicon-github-original skill__logo-icon"></i>,
      title: "Github",
    },
    {
      logo: <i className="devicon-gitlab-plain skill__logo-icon"></i>,
      title: "Gitlab",
    },
    {
      logo: <i className="devicon-githubactions-plain skill__logo-icon"></i>,
      title: "Github Actions",
    },
    {
      logo: <i className="devicon-docker-plain skill__logo-icon"></i>,
      title: "Docker",
    },
  ],
  testing: [
    {
      logo: <i className="devicon-jest-plain skill__logo-icon"></i>,
      title: "Jest",
    },
    {
      logo: <i className="devicon-cypressio-plain skill__logo-icon"></i>,
      title: "Cypress",
    },
    {
      logo: <i className="devicon-playwright-plain skill__logo-icon"></i>,
      title: "Playwright",
    },
  ],
  frameworks: [
    {
      logo: <i className="devicon-materialui-plain skill__logo-icon"></i>,
      title: "Material UI",
    },
    {
      logo: <i className="devicon-antdesign-plain skill__logo-icon"></i>,
      title: "Ant Design",
    },
    {
      logo: <i className="devicon-bootstrap-plain skill__logo-icon"></i>,
      title: "Bootstrap",
    },
    {
      logo: <i className="devicon-tailwindcss-original skill__logo-icon"></i>,
      title: "Tailwind",
    },
  ],
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
