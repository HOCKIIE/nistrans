import Link from "next/link";
import NavDropDown from "@/components/website/molecule/menu/NavDropDown";
import menuItem from "@/assets/menuItem.json";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="nav-menu h-full flex items-center d-none d-md-block" id="scrollable-content">
      {menuItem.map((item: any, key: number) => {
        if (item?.subMenu)
          return (
            <NavDropDown
              key={key}
              title={item.title}
              dropdownItems={item.subMenu}
              sectionKey={key}
            />
          );
        else
          return (
            <Link
              key={key}
              href={item.href}
              className={`${
                pathname == item?.href.toLowerCase()
                  ? "text-[#F67F18]"
                  : "text-[#0C2B4B]"
              } h-full flex items-center menu-item px-4 py-4 nav-button hover:text-[#F67F18] transition-all`}
            >
              {item.title}
            </Link>
          );
      })}
    </div>
  );
}
