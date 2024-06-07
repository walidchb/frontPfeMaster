"use client";
import React, { useState, useEffect, Fragment } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const MenuProject = ({ activePageIndex }) => {
  const pages = [
    { name: "Project Board", lien: "Board" },
    { name: "Kanban", lien: "Kanban" },
    { name: "Scheduler", lien: "Scheduler" },
    { name: "Gantt", lien: "Gantt" },
  ];
  const [navbarState, setNavbarState] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const locale = useLocale();
  const router = useRouter();

  const handlClick = (index, lien) => {
    setNavbarState(index);
    setShowDropdown(false);
    router.push(`/${locale}/Employee/Project/${lien}`);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650); // Ajustez la valeur selon vos besoins
    };

    handleResize(); // Vérifier la taille de l'écran au chargement initial

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Fragment >
      {isMobile ? (
        <div className="sticky top-0 z-10 cursor-pointer text-black flex h-14 rounded-t-lg bg-white">
          <div className="font-semibold w-full border-r-2 border-b-2 flex justify-between items-center bg-blue-300 text-white relative">
            <p className="px-4">{pages[activePageIndex].name}</p>
            <button
              className="px-4 flex items-center"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {!showDropdown ? <ChevronDownIcon className="h-5 w-5" /> : <ChevronUpIcon className="h-5 w-5" />}
            </button>
            {showDropdown && (
              <div className="absolute top-full left-0 w-full bg-white text-black rounded-b-lg shadow-lg">
                {pages.map(
                  (page, index) =>
                    index !== activePageIndex && (
                      <p
                        key={index}
                        onClick={() => handlClick(index, page.lien)}
                        className="px-4 py-2 hover:bg-gray-200"
                      >
                        {page.name}
                      </p>
                    )
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        
        <div className="sticky top-0 z-10 text-black flex h-14 rounded-t-lg bg-white w-full">
        {pages.map((page, index) => (
          <p
            key={index}
            onClick={() => handlClick(index, page.lien)}
            className={`font-semibold cursor-pointer flex-1 border-r-2 border-b-2 flex justify-center items-center ${
              index === activePageIndex ? "bg-blue-300 text-white" : ""
            }`}
          >
            {page.name}
          </p>
        ))}
      </div>
        
      )}
    </Fragment>
  );
};

export default MenuProject;