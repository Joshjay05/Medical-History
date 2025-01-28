import { useState } from "react";
import logo from "../assets/TestLogo.png";
import home from "../assets/home.png";
import settings from "../assets/settings.png";
import vertical from "../assets/vertical.png";
import credit from "../assets/credit.png";
import group from "../assets/group.png";
import chat from "../assets/message.png";
import calendar from "../assets/calendar.png";
import woman from "../assets/seniorwoman.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#patient");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="flex justify-between bg-white rounded-full shadow mt-4 py-6 px-8 mx-4">
      <div>
        <img src={logo} alt="" />
      </div>
      <ul className="flex justify-between gap-6">
        <a
          href="#home"
          onClick={() => handleLinkClick("#home")}
          className={
            activeLink === "#home"
              ? "bg-green-500 flex gap-2 items-center text-white p-4 rounded-full"
              : "flex gap-2 items-center"
          }
        >
          <img src={home} alt="" className="h-5 w-5" />
          <li className="flex gap-2 items-center">Overview</li>
        </a>
        <a
          href="#patient"
          onClick={() => handleLinkClick("#patient")}
          className={
            activeLink === "#patient"
              ? "bg-green-500 text-white flex gap-2 items-center p-4 rounded-full"
              : "flex gap-2 items-center"
          }
        >
          <img src={group} alt="" className="h-5 w-5" />

          <li className="">Patient</li>
        </a>
        <a
          href="#contact"
          onClick={() => handleLinkClick("#contact")}
          className={
            activeLink === "#contact"
              ? "bg-green-500 text-white p-4 flex gap-2 items-center rounded-full"
              : "p-2 flex gap-2 items-center"
          }
        >
          <li className="">Schedule</li>
          <img src={calendar} alt="" className="h-5 w-5" />
        </a>
        <a
          href="#message"
          onClick={() => handleLinkClick("#message")}
          className={
            activeLink === "#message"
              ? "bg-green-500 text-white p-4 flex gap-2 items-center rounded-full"
              : "flex gap-2 items-center"
          }
        >
          <img src={chat} alt="" className="h-5 w-5" />
          <li>Message</li>
        </a>
        <a
          href="#transactions"
          onClick={() => handleLinkClick("#transactions")}
          className={
            activeLink === "#transactions"
              ? "bg-green-500 text-white p-4 flex gap-2 items-center rounded-full"
              : "flex gap-2 items-center"
          }
        >
          <img src={credit} alt="" className="h-5 w-5" />
          <li className="">Transactions</li>
        </a>
      </ul>
      <div>
        <article className="flex items-center gap-4 ">
          <div className="flex gap-2 items-center border-r-2 border-[#f5f5f5] px-4">
            <img src={woman} alt="" className="w-8 h-8" />
            <p className="flex flex-col">
              <span>Dr. Jose Simmons</span>
              <span>General Practitioner</span>
            </p>
          </div>
          <button className="flex gap-2">
            <img src={settings} alt="" className="w-5 h-5" />
            <img src={vertical} alt="" className="w-1 h-5" />
          </button>
        </article>
      </div>
    </nav>
  );
};

export default Navbar;
