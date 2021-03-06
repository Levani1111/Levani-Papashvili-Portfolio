import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Headre() {
  const [showMenu, setShowMenu] = React.useState("md:hidden");

  const menuItems = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Projects",
      key: "/projects",
    },
    {
      title: "Courses",
      key: "/courses",
    },
    {
      title: "Contact",
      key: "/contact",
    },
  ];

  const pathname = window.location.pathname;

  return (
    <div className="text-white font-mont fixed inset-0">
      <div
        className={`flex bg-theme justify-between items-center p-2 shadow-lg ${
          showMenu === "" && "md:flex-col"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <h1 className="text-4xl font-semibold">L P</h1>
          <FaBars
            onClick={() => {
              if (showMenu === "md:hidden") {
                setShowMenu("");
              } else {
                setShowMenu("md:hidden");
              }
            }}
            className="lg:hidden xl:hidden 2xl:hidden md:flex sm:flex cursor-pointer"
          />
        </div>
        <div className="flex md:hidden">
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none mx-5 p-1 ${
                  item.key === pathname && "bg-white text-black rounded-md"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>

        <div
          className={`mt-5 md:flex items-start w-full flex-col lg:hidden 2xl:hidden xl:hidden ${showMenu}`}
        >
          {menuItems.map((item) => {
            return (
              <li
                className={`list-none py-1 ${
                  item.key === pathname && "bg-white text-black rounded-md px-5"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Headre;
