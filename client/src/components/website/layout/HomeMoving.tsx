import Link from "next/link";

export default function HomeMoving() {
  return (
    <div className="py-20">
      <div className="container mx-auto text-slate-700 px-2 lg:px-0">
        <div className="pb-20 flex justify-center items-center flex-col text-blue-950 gap-3">
          <h2 className="text-3xl">งานขนย้ายโดย Siam Nistrans</h2>
          <div className="h-1 w-20 bg-orange-400"></div>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
          <div className="col-span-4">
            <section className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center p-6 rounded-full border-2 border-black text-center gap-2 w-[200px] h-[200px]">
                <div className="text-xs ">
                  งานขนย้ายเข้า/ออก
                  <br />
                  ระหว่างประเทศ
                </div>
                <div className="text-orange-500">
                  งานขนย้าย
                  <br />
                  ไปต่างประเทศ
                </div>
                <img className="w-[50px] rounded-full" src="../img/001.jpg" />
              </div>
              <div className="">
                ขนส่งสัมภาระที่มีความสำคัญต่อลูกค้าไปยังประเทศต่างๆ
                ทั่วโลกอย่างปลอดภัย แน่นอน
                และรวดเร็วทันใจนับตั้งแต่การบรรจุสัมภาระ การรับสัมภาระ
                พิธีการศุลกากร และการจัดส่ง ทั้งในกรณีย้ายที่ทำงานกะหันหัน
                หรือย้ายกลับประเทศ
              </div>
            </section>
          </div>

          <div className="col-span-4">
            <section
              className="flex flex-col items-center gap-4"
             
            >
              <div className=" flex flex-col items-center p-6 rounded-full border-2 border-black text-center gap-2 w-[200px] h-[200px]">
                <div className="text-xs">
                  ให้บริการภายใน
                  <br />
                  ประเทศไทย
                </div>
                <div className=" text-orange-500">
                  งานขนย้าย
                  <br />
                  ภายในประเทศไทย
                </div>
                <img className="w-[50px] " src="../img/002.jpg" />
              </div>
              <div className="">
                ไม่ว่าจะเป็นการขนย้ายในปริมาณมากหรือการขนย้ายในปริมาณน้อย
                เราก็ให้บริการอย่างพิถีพิถันและมั่นใจได้
                โดยใช้เครือข่ายที่มีอยู่ทั่วประเทศไทย
                ซึ่งไม่จำกัดเฉพาะในกรุงเทพฯ เท่านั้น
              </div>
            </section>
          </div>

          <div className="col-span-4">
            <section
              className=" flex flex-col items-center gap-4"
            
            >
              <div className=" flex flex-col items-center p-6 rounded-full border-2 border-black text-center gap-2 w-[200px] h-[200px]">
                <div className="text-xs">
                  ตั้งแต่ปริมาณมาก
                  <br />
                  ไปจนถึงปริมาณน้อย
                </div>
                <div className=" text-orange-500">
                  งานขนย้าย
                  <br />
                  สำนักงาน
                </div>
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src="../img/003.jpg"
                />
              </div>
              <div className="">
                Siam Nistrans
                จะนำส่งสัมภาระของลูกค้าไปยังจุดหมายที่ต้องการโดยที่งานของลูกค้าไม่ต้องสะดุด
                เริ่มตั้งแต่การบรรจุสัมภาระ การขนส่ง การติดตั้งเครื่องจักร
                ไม่ว่าจะมีปริมาณเท่าใดก็ตาม
              </div>
            </section>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href={`/service`}
            // href={`/${lang.toLowerCase()}/news-activity`}
            className="  rounded-md border border-orange-400 px-4 py-2 flex items-center bg-white text-orange-400 hover:text-white hover:bg-orange-400 transition-all duration-500"
          >
            รายละเอียดเพิ่มเติม
            {/* {t("button.see-all")} */}
          </Link>
        </div>
      </div>
    </div>
  );
}
