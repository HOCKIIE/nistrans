"use client";
import { Logo } from "../atom/logo/Logo";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavBar from "../organism/menu/NavBar";
import SideBar from "./SideBar";
import { GiHamburgerMenu } from "react-icons/gi";
import Script from "next/script";
import { hasCookie, setCookie } from "cookies-next";
import { IoPersonSharp } from "react-icons/io5";
import { ignore } from "antd/es/theme/useToken";

export default function Header({ logo, contact, lng }: any) {
  const [currentLanguage, setCurrentLanguage] = useState<string>(lng);
  const [openLang, setOpenLang] = useState<Boolean>(false);
  const [openID, setOpenID] = useState<String>("");
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<Boolean>(false);

  const languages = [
    { label: "Thai", value: "th" },
    { label: `English`, value: "en" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.querySelector("html")?.classList.toggle("nav-open");
  };
  const closeSideBar = (e:any) => {
    let subMenuItem = e?.target.closest('.submenu-item')
    if(subMenuItem){
      subMenuItem.closest('.sidebar-menu').querySelectorAll('.active').map((e:any)=>e.target.classList.remove('active'))
      subMenuItem.classList.add('active')
    }
    setIsOpen(false);
    document.querySelector("html")?.classList.remove("nav-open");
  };
  const toggleSubMenu = (e: any) => {
    const subMenu = e.currentTarget.parentElement?.querySelector(".sub-menu");
    if (subMenu) {
      e.preventDefault();
      setOpenSubMenu(!openSubMenu);
      setTimeout;
      e.currentTarget.closest(".menu-item").classList.toggle("active");
      const icon = e.currentTarget.parentElement?.querySelector(".plus-icon");
      // icon?.classList.toggle("rotate-135");
      subMenu?.classList.toggle("open");
    } else {
      // @ts-ignore
      closeSideBar();
    }
  };

  return (
    <div className="shadow-md bg-white ">
      <div className="header  container mx-auto">
        <div className="mx-auto h-full px-2 lg:px-0">
          <div className="logo">
            <div className="py-4 flex justify-between">
              <Logo img={logo} />
              <div className="flex lg:hidden ">
                <div
                  className="cursor-pointer flex flex-col items-center justify-around w-8 h-8 burger"
                  onClick={toggleSidebar}
                >
                  <GiHamburgerMenu size={35} color="#ED1F23" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between h-full items-center gap-30 ">
            <div className="hidden xl:flex items-center gap-10 ">
              <NavBar lng={lng}/>
              <div className="border px-4 rounded-lg text-slate-700 items-center gap-2 flex py-1 ">
                <IoPersonSharp />
                <span>สมัครงาน</span>
              </div>
            </div>
            <div className="hidden xl:flex text-black notranslate gap-1">change Lang</div>
          </div>

          
        </div>
      </div>
      <div className="flex">
        <div
          className={`fixed block lg:none top-0 right-0 h-full w-80 text-black bg-white transition-transform duration-300 z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="grid content-stretch">
            <SideBar
              contact={contact}
              lng={lng}
              sideBar={{ toggleSubMenu, closeSideBar }}
              language={{
                currentLanguage,
                setCurrentLanguage,
                openID,
                setOpenID,
                openLang,
                setOpenLang,
                languages,
                // switchLanguage,
              }}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}
