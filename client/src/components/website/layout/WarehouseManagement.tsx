import Link from "next/link";

export default function () {
  return (
    <div className="">
      <div className="container mx-auto px-2 lg:px-0">
        <section className="md:w-[80%] w-full md:mx-auto">
          <div className="flex items-center text-slate-700">
            <div className="bg-slate-100 p-4 md:p-10 rounded-lg">
              <div className="py-10 flex justify-center items-center flex-col text-blue-950 gap-3">
                <h2 className="text-2xl">
                  คลังสินค้าและการจัดการคลังสินค้าของ Siam Nistrans
                </h2>
                <div className="h-1 w-20 bg-orange-400"></div>
              </div>

              <div className="pb-4">
                คลังสินค้าของเราจะเพิ่มมูลค่าให้สอดคล้องตามความต้องการของลูกค้า
                นับตั้งแต่การจัดการสินค้าคงคลัง การออกแบบบรรจุภัณฑ์
                ไปจนถึงการดำเนินการบรรจุ
              </div>

              <section className="bg-white my-1">
                <ul className="grid grid-cols-12">
                  <li className="col-span-2 flex flex-col items-center gap-1 bg-blue-950 text-white py-2">
                    <div className="nNumText">ข้อดี</div>
                    <div className="nNumNum">01</div>
                  </li>
                  <li className="col-span-10 px-4 py-2">
                    ระบบการขนส่งที่ครอบคลุมทั่วไทย
                    ซึ่งรวมถึงฐานบริการในภาคกลางจำนวน 5 แห่ง
                    และยังมีคลังสินค้าในภาคเหนือที่จังหวัดเชียงใหม่อีกด้วย
                  </li>
                </ul>
              </section>

              <section className="bg-white my-1">
                <ul className="grid grid-cols-12">
                  <li className="col-span-2 flex flex-col items-center gap-1 bg-blue-950 text-white py-2">
                    <div className="nNumText">ข้อดี</div>
                    <div className="nNumNum">02</div>
                  </li>
                  <li className="col-span-10 px-4 py-2">
                    เรียงลำดับการจ่ายออกได้อย่างราบรื่นโดยจัดระบบปริมาณการจัดเก็บภายในคลังสินค้าและปริมาณการกระจายสินค้าเป็นแบบออนไลน์
                  </li>
                </ul>
              </section>

              <section className="my-1 bg-white">
                <ul className="grid grid-cols-12">
                  <li className="col-span-2 flex flex-col items-center gap-1 bg-blue-950 text-white py-2">
                    <div className="nNumText">ข้อดี</div>
                    <div className="nNumNum">03</div>
                  </li>
                  <li className="col-span-10 px-4 py-2">
                    เราพร้อมรองรับสินค้าและปริมาณสินค้าคงคลังของลูกค้า
                    ด้วยความจุของคลังสินค้าแต่ละแห่งซึ่งมีพื้นที่กว้างขวาง
                  </li>
                </ul>
              </section>

              <section
                className="my-1 bg-white"
                data-wow-offset="50"
                data-wow-delay="1.4s"
              >
                <ul className="grid grid-cols-12">
                  <li className="col-span-2 flex flex-col items-center gap-1 bg-blue-950 text-white py-2">
                    <div className="nNumText">ข้อดี</div>
                    <div className="nNumNum">04</div>
                  </li>
                  <li className="col-span-10 px-4 py-2">
                    สภาพแวดล้อมในคลังสินค้ามีการปฏิบัติตามหลัก 5ส
                    โดยพนักงานทุกคน
                  </li>
                </ul>
              </section>
            </div>

            <img src="../img/004.jpg" className="rounded-lg xl:block hidden" />

            {/* <a className="pageBtnMore pageBtnMore_1" href="warehouse.php">
              <div className="pageBtnMoreBg"></div>
              <div className="pageBtnMoreHover"></div>
              <div className="pageBtnMoreText">รายละเอียดเพิ่มเติม</div>
            </a> */}
          </div>
          <div className="flex justify-center pt-10">
            <Link
              href={`/service`}
              // href={`/${lang.toLowerCase()}/news-activity`}
              className="  rounded-md border border-orange-400 px-4 py-2 flex items-center bg-white text-orange-400 hover:text-white hover:bg-orange-400 transition-all duration-500"
            >
              รายละเอียดเพิ่มเติม
              {/* {t("button.see-all")} */}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
