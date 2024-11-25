// export default function Footer() {
//   return (
//     <footer className="bg-[#ED1F23] py-20 sm:py-24">
//       <div className="mx-auto container flex justify-between">
//         <div className="flex flex-col gap-4">
//           <div className="border-b border-white pb-4 w-[50%] font-bold">
//             <p className=" leading-5 text-white ">Blue Assistance Co., Ltd.</p>
//             <p className=" leading-5 text-white ">
//               ブルーアシスタンス　株式会社
//             </p>
//           </div>
//           <div className="">
//             <p className=" leading-5 text-white w-[50%] ">
//               No.D 9th Floor, PRIME BUILDING, 24 Sukhumvit Soi 21(Asoke),
//               Sukhumvit Road, Klongtoey-Nua, Wattana, Bangkok 10110, Thailand.
//             </p>
//           </div>
//         </div>
//         <div className="flex gap-4 text-white">
//           <div>
//             <div className="flex flex-col gap-2">
//               <p className=" leading-5 ">TEL : +66 (0)2-661-7687～88</p>
//               <p className=" leading-5 ">FAX : +66 (0)2-661-7689</p>
//             </div>
//           </div>
//           <div className="flex flex-col gap-2">
//             <p className=" leading-5 ">医療アシスタンス業務</p>
//             <p className=" leading-5 ">medical@blue-assistance.co.th</p>
//             <p className=" leading-5 ">ビザ&労働許可証コンサルタント業務</p>
//             <p className=" leading-5 ">visa@blue-assistance.co.th</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";
import { useContext } from "react";
import { Logo } from "@/components/website/atom/logo/Logo";
import { PageSettingContext } from "@/contexts/PageSettingContext";

import Link from "next/link";

import { FaPhone } from "react-icons/fa6";

import Image from "next/image";

import { MdEmail, MdOutlineMailOutline } from "react-icons/md";

import menuItem from "@/assets/menuItem.json";

export default function Footer({ logo, contact }: any) {
  const { primaryColor }: any = useContext(PageSettingContext);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="text-black bg-slate-200 ">
      <div className="">
        <div className="container mx-auto pt-4">
          <div className="grid md:flex justify-between">
            <div className="px-2 md:px-0 py-5 flex items-center justify-between">
              <div className="flex items-start gap-4 flex-col">
                <Logo img={logo} />
                <span className="text-base ">{contact?.addressTH}</span>
                <div className="flex gap-4">
                  <FaPhone size={20} />
                  <span>โทรศัพท์ {contact?.telephone}</span>
                </div>
              </div>
            </div>
            <div className="px-2 pb-5 md:px-0 md:pb-0">
              <div className="flex flex-col gap-2">
                <div className="text-center">Certificate</div>
                <div className="flex justify-center">
                  <Image
                    src="/img/footerCertificate.png"
                    width={300}
                    height={300}
                    alt="cert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-950 text-white">
        <div className="container mx-auto py-4 flex justify-start text-xs">
          <div className="px-2 md:px-0">
            <span className="">©Siam Nistrans Co., Ltd.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
