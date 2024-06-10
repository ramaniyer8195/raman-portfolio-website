import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaBloggerB,
  FaEnvelopeOpen,
} from "react-icons/fa";
import { Link } from "../components/navbar/navbar.interfaces";

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
