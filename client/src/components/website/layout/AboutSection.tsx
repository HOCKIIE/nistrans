import Link from "next/link";
import Image from "next/image";

export default function AboutSection({ description }: any) {
  return (
    <div className="mt-6 sm:mt-14 pt-6 sm:pb-14 sm:pt-20 relative project shadow-md">
      <div className="absolute top-0 right-0 bottom-0 left-0 ">
        <Image
          src={`/img/about_bg.png`}
          alt="banner"
          width={2000}
          height={500}
          quality={100}
          className="h-full w-full object-cover"
        />
        {/* <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/90"></div> */}
      </div>
      <div className="container mx-auto px-2 lg:px-0 flex flex-col items-center gap-4 sm:gap-10 relative">
        <div className="flex flex-col items-center gap-4">
          <h1
            className="text-base sm:text-xl font-semibold text-white text-center"
            style={{ textShadow: "black 1px 1px 1px" }}
          >
            Siam Nistrans เป็นบริษัทในเครือของ "NISSIN CORPORATION"
          </h1>
          <p className="text-white text-sm sm:text-base text-center">
            ที่มีความเชี่ยวชาญด้านโลจิสติกส์แบบครบวงจร ทั้งการขนส่งทางบก ทางทะเล
            และทางอากาศ
            ผ่านเครือข่ายที่กว้างขวางและมีคลังสินค้าในหลายพื้นที่ของประเทศไทย
            ใช้ IT Solution เพื่อตอบสนองความต้องการของลูกค้า
            รวมถึงบริการขนย้ายสำหรับลูกค้าบุคคลทั่วไป
            โดยทีมงานคนไทยและญี่ปุ่นที่พร้อมให้บริการอย่างใส่ใจ
          </p>
        </div>
      </div>
      ;
    </div>
  );
}
