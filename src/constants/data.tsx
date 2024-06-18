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
import Work1 from "../assets/project-1.jpeg";
import Work2 from "../assets/project-2.jpg";
import Work3 from "../assets/project-3.jpeg";
import Work4 from "../assets/project-4.jpeg";
import Work5 from "../assets/project-5.jpg";
import Work6 from "../assets/project-6.jpg";
import { PortfolioItem } from "../pages/portfolio/portfolio.interfaces";

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

const PORTFOLIO_CONTENT = (
  <>
    <h1>Test Blog</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <p>
      <b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non
        euismod diam, vitae feugiat orci
      </b>
      . <i>Donec malesuada aliquet lobortis</i>.
      <u>Sed ut justo vel diam pretium egestas</u>.
    </p>
    <p>
      <sup>Superscript </sup>and <sub>subscript </sub>support is also available,
      <s>strikethrough </s>is available too
    </p>
    <div className="img__container">
      <img
        src="//images.ctfassets.net/6ov6xrm0hpns/1IF2otbXVhZloYXM6YI1b3/53025bd75f85cdb3d1c49c9e9384a2c4/image.png"
        alt=""
      />
    </div>
    <p>
      <a href="https://www.google.com">
        Phasellus vel velit non velit lacinia tincidunt
      </a>
      .
    </p>
    <ul>
      <li>
        <p>Phasellus porta turpis elit, et pretium felis aliquet vitae.</p>
      </li>
      <li>
        <p>Sed commodo lobortis magna, ultricies suscipit libero.</p>
      </li>
      <li>
        <p>
          Nullam fringilla pretium urna, at imperdiet elit viverra sit amet.
        </p>
      </li>
      <li>
        <p>
          Quisque laoreet, magna ut porttitor egestas, dui turpis convallis
          massa, a auctor odio massa eget leo.
        </p>
      </li>
    </ul>
    <ol>
      <li>
        <p>Quisque consectetur pulvinar leo, et feugiat magna varius non.</p>
      </li>
      <li>
        <p>
          Proin suscipit, massa sed consectetur mollis, tortor neque fringilla
          dolor, sed consectetur nisi nunc id eros.
        </p>
      </li>
      <li>
        <p>Quisque viverra velit sit amet felis pulvinar ornare.</p>
      </li>
    </ol>
    <hr />
    <blockquote>
      <p>
        Curabitur porttitor ex vitae erat mattis, quis scelerisque nisl
        lobortis.
      </p>
    </blockquote>
    <p>
      Sed tincidunt mattis arcu, nec elementum purus. Duis felis risus, dictum
      nec dolor blandit, laoreet laoreet sem. Etiam feugiat porta faucibus.
      Vivamus sed turpis porta, aliquam urna ut, fringilla dolor. Suspendisse
      elementum dui vel lectus euismod, non tristique dui eleifend. Etiam ac
      nibh id ligula consequat fermentum lacinia id nisl. Nunc congue vel odio
      vel placerat.
    </p>
    <p>
      Phasellus ut arcu felis. Integer sit amet finibus metus, at venenatis
      metus. Nulla at cursus ipsum. Aliquam auctor viverra diam vitae viverra.
      Pellentesque et mi non dui accumsan semper. Aenean maximus risus nulla, ac
      posuere ante euismod sed. Duis metus leo, mollis vitae malesuada a,
      hendrerit eget ligula. Morbi dapibus quam et nulla rhoncus posuere.
      Pellentesque accumsan tellus quis urna consectetur fringilla.
    </p>
    <p>
      Sed turpis nisi, varius ut ligula vel, euismod interdum justo. Aenean
      tempus justo ac semper feugiat. Aliquam eu laoreet turpis. Quisque et
      efficitur urna. Maecenas diam libero, suscipit non cursus nec, varius ut
      sem. Praesent malesuada feugiat erat, ac dignissim libero aliquet ut. Duis
      purus risus, viverra nec luctus nec, pharetra id felis. Fusce ac velit
      rhoncus, eleifend purus et, faucibus turpis. Suspendisse in lacus
      vulputate diam volutpat cursus a et mauris. Fusce ut leo eget lacus
      sodales iaculis id sed dui. Sed ultrices dui est. Cras lacinia, ligula vel
      imperdiet volutpat, lorem tellus convallis augue, in laoreet felis lorem
      vitae nunc. Class aptent taciti sociosqu ad litora torquent per conubia
      nostra, per inceptos himenaeos.
    </p>
    <table>
      <tbody>
        <tr>
          <th>
            <p>Column 1</p>
          </th>
          <th>
            <p>Column 2</p>
          </th>
        </tr>
        <tr>
          <td>
            <p>Row 1</p>
          </td>
          <td>
            <p>Row 1</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Row 2</p>
          </td>
          <td>
            <p>Row 2</p>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      Praesent mattis varius fringilla. Donec ac elementum dui, quis sagittis
      ante. Mauris at congue nisl. Quisque sed tincidunt purus. Duis euismod,
      quam at viverra placerat, nunc tortor dapibus sapien, sagittis faucibus
      urna nisi eu augue. Aliquam non pulvinar neque. Integer semper congue
      ligula, cursus congue purus rutrum vel. Quisque ac hendrerit tellus. Donec
      vel sagittis libero. Suspendisse orci odio, facilisis sit amet semper sit
      amet, rutrum a augue. Morbi sed scelerisque odio. Pellentesque habitant
      morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    </p>
  </>
);

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "1",
    img: Work1,
    title: "Contact Book",
    details: {
      language: ["React", "Typescript", "NodeJs", "Express", "MongoDb"],
      preview: "http://www.google.com",
      blogLink: "http://www.google.com",
    },
  },
  {
    id: "2",
    img: Work2,
    title: "Contact Book",
    details: {
      language: ["React", "Typescript", "NodeJs", "Express", "MongoDb"],
      preview: "http://www.google.com",
      blogLink: "http://www.google.com",
    },
  },
  {
    id: "3",
    img: Work3,
    title: "Contact Book",
    details: {
      language: ["React", "Typescript", "NodeJs", "Express", "MongoDb"],
      preview: "http://www.google.com",
      blogLink: "http://www.google.com",
    },
  },
  {
    id: "4",
    img: Work4,
    title: "Contact Book",
    details: {
      language: ["React", "Typescript", "NodeJs", "Express", "MongoDb"],
      preview: "http://www.google.com",
      blogLink: "http://www.google.com",
    },
  },
  {
    id: "5",
    img: Work5,
    title: "Contact Book",
    details: {
      language: ["React", "Typescript", "NodeJs", "Express", "MongoDb"],
      preview: "http://www.google.com",
      blogLink: "http://www.google.com",
    },
  },
  {
    id: "6",
    img: Work6,
    title: "Contact Book",
    details: {
      language: ["React", "Typescript", "NodeJs", "Express", "MongoDb"],
      preview: "http://www.google.com",
      blogLink: "http://www.google.com",
    },
  },
];
