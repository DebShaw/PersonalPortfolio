import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { BsFillLaptopFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiBook2Line } from "react-icons/ri";
import { GiAchievement } from "react-icons/gi";
import { AiFillMessage } from "react-icons/ai";
import { MdShopTwo } from "react-icons/md";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  console.log(activeNav);
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <RiBook2Line />
      </a>
      <a
        href="#intern"
        onClick={() => setActiveNav("#intern")}
        className={activeNav === "#intern" ? "active" : ""}
      >
        <BsFillLaptopFill />
      </a>
      <a
        href="#achievement"
        onClick={() => setActiveNav("#achievement")}
        className={activeNav === "#achievement" ? "active" : ""}
      >
        <GiAchievement />
      </a>
      <a
        href="#workshop"
        onClick={() => setActiveNav("#workshop")}
        className={activeNav === "#workshop" ? "active" : ""}
      >
        <MdShopTwo />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Navbar;
