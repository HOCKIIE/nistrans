import Link from "next/link";
import Image from "next/image";
import {
  FaPlus,
  FaFacebookF,
  FaLine,
  FaInstagram,
} from "react-icons/fa";
import menuItem from "@/assets/menuItem.json";
import { RiCloseLargeLine } from "react-icons/ri";

export default function SideBar({ contact, lng, sideBar, language }: any) {
  return (
    <div className="flex bg-slate-100">
      <div
        className="sidebar-wraper w-full max-h-screen "
        style={{ height: `calc(100vh - 68px)` }}
      >
        <ul className="sidebar-menu px-4 py-10">
          <button
            className="w-full flex justify-end"
            onClick={() => sideBar?.closeSideBar()}
          >
            <RiCloseLargeLine size={40} color={"#ED2022"} />
          </button>
          {menuItem.map((item, index) => (
            <li key={index} className="menu-item rounded-lg">
              <Link
                href={item.href}
                title={item.title}
                onClick={(e) => sideBar.toggleSubMenu(e)}
                className="p-2 hover:text-red-600 flex items-center justify-between"
              >
                {item.title}
                {/* @ts-ignore */}
                {item?.subMenu && (
                  <FaPlus className="plus-icon transition-all duration-200" />
                )}
              </Link>
              {/* @ts-ignore */}
              {item?.subMenu && (
                <ul className={`sub-menu`}>
                  {/* @ts-ignore */}
                  {item?.subMenu.map((sub, i) => (
                    <li key={index + i}>
                      <Link
                        href={`/${lng}${sub.href}`}
                        title={sub.title}
                        onClick={sideBar.closeSideBar}
                        className="submenu-item"
                      >
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed bottom-0 flex justify-between w-full max-w-90 p-4 bg-slate-50">
        {/* <LanguageSwitcher position="top" language={language} /> */}
        {/* <div className="relative inline-block">
                {language.openLang && (
                <div className="absolute mt-1 w-25 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5" style={{top:'-78px'}}>
                    <ul>
                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={language.setLanguage}>TH</li>
                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={language.setLanguage}>EN</li>
                    </ul>
                </div>
                )}
                <button
                    className="px-3 py-2 bg-slate-300 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-300 font-medium rounded-lg text-sm flex justify-between items-center w-25"
                    onClick={language.toggleLanguage}
                >
                    <span className="flex items-center font-bold"><FaGlobe className="mr-1 font-bold"/> {language.lng.toUpperCase()}</span> <FaChevronDown />
                </button>
            </div> */}
        <div className="flex items-center justify-between w-full">
          <div className="flex social-icon">
            <a
              href={contact?.facebook}
              target="_blank"
              className="rounded-full p-2 bg-blue-600"
            >
              <FaFacebookF fontSize="1.2em" color="white" />
            </a>
            <a
              href={contact?.line}
              target="_blank"
              className="rounded-full p-2 bg-green-500 ml-1"
            >
              <FaLine fontSize="1.2em" color="white" />
            </a>
            <a
              href={contact?.instagram}
              target="_blank"
              className="rounded-full p-2 bg-red ml-1"
            >
              <FaInstagram
                fontSize="1.2em"
                color="white"
                className="bg-red-500"
              />
            </a>
          </div>
          <div className="text-black notranslate flex gap-1">
            <button onClick={(e: any) => language?.switchLanguage("th")}>
              <Image src="/img/th_flag.png" alt="th" width={25} height={25} />
            </button>
            <button onClick={(e: any) => language?.switchLanguage("en")}>
              {" "}
              <Image src="/img/uk_flag.png" alt="th" width={25} height={25} />
            </button>
            <button onClick={(e: any) => language?.switchLanguage("ja")}>
              {" "}
              <Image src="/img/jp_flag.png" alt="th" width={26} height={26} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
