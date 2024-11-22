import Link from "next/link";
import ProductCard from "../molecule/ProductCard";

export default async function ServiceSection({ data }: any) {
  const mocks = [
    {
      serviceNameTH: "ตัวแทนจัดหางาน",
      serviceNameEN: "Recruitment Agency",
      id: "6723623a3bfe8293c45a61e7",
      image: "ser_icon_1.png",
    },
    {
      serviceNameTH: "ล่าม และแปลภาษา",
      serviceNameEN: "Interpreter and Translator",
      id: "672362703bfe8293c45a6204",
      image: "ser_icon_2.png",
    },
    {
      serviceNameTH: "จัดหางาน",
      serviceNameEN: "Recruitment Service Outsourcing",
      id: "6725f68bba81c2130216fe4e",
      image: "ser_icon_3.png",
    },
    {
      serviceNameTH: "จัดหางาน",
      serviceNameEN: "Recruitment Service Outsourcing",
      id: "6725f68bba81c2130216fe4e",
      image: "ser_icon_3.png",
    },
  ];
  return (
    <div className="container mx-auto py-20">
      <div className="pb-20 flex justify-center items-center flex-col text-blue-950 gap-3">
        <h2 className="text-3xl">บริการของ Siam Nistrans</h2>
        <div className="h-1 w-20 bg-orange-400"></div>
      </div>
      <div className="grid grid-cols-12 gap-6 px-4 md:px-6 lg:px-20 ">
        {mocks?.map((i: any, k: any) => (
          <ProductCard item={i} key={k} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          href={`/service`}
          // href={`/${lang.toLowerCase()}/news-activity`}
          className="  rounded-md border border-orange-400 px-4 py-2 flex items-center bg-white text-orange-400 hover:text-white hover:bg-orange-400 transition-all duration-500"
        >
          บริการทั้งหมดของเรา
          {/* {t("button.see-all")} */}
        </Link>
      </div>
    </div>
  );
}

// "use client";
// import ProductCard from "../ProductCard/ProductCard";
// import { useTranslation } from "next-i18next";
// export default function ServiceSection({ lang, services, page }: any) {
//   const { t } = useTranslation(lang);
//   return (
//     <div className="">
//       {page && (
//         <h2 className="text-2xl font-semibold text-slate-800 text-start mb-4">
//           {t("page.service")}
//         </h2>
//       )}

//       <div className="grid grid-cols-12 gap-4">
//         {services?.map((i: any, k: any) => (
//           <ProductCard item={i} key={k} lang={lang} />
//         ))}
//       </div>
//     </div>
//   );
// }
