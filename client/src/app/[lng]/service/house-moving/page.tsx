import Cover from "@/components/website/layout/Cover";

export default function Moving() {
  return (
    <>
      <Cover
        noHeading={true}
        pageName="บริการของเรา"
        engName="Service"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container px-2 md:px-0  mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">ธุรกิจงานขนย้าย</h1>
        <div className="py-10">
          <div className="branchesTopic">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-8">
                <p>เราให้บริการงานขนย้ายทั่วไปซึ่งปรับเปลี่ยนไปตามสถานการณ์
                โดยใช้ประโยชน์จากบริการขนส่งครบวงจรทั้งทางบก ทะเล และอากาศ
                นับตั้งแต่การขนย้ายภายในประเทศไทยหรืองานย้ายสำนักงาน
                เราก็สามารถตอบสนองให้ท่านได้ ไม่ว่าจะมีขนาดเล็กหรือใหญ่
                เจ้าหน้าที่หญิงชาวญี่ปุ่นที่ดูแลเรื่องงานขนย้ายโดยเฉพาะพร้อมให้บริการด้วยความรับผิดชอบตั้งแต่ต้นจนจบกระบวนการ
                จึงขอเชิญให้ท่านมาสัมผัสประสบการณ์การขนย้ายของ Siam Nistrans <br />
                ท่านจะได้รับทราบถึงข้อดีที่แตกต่างไปจากบริษัทอื่นที่ประกอบธุรกิจ
                <br />
                เดียวกันไม่มากก็น้อย
                </p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <img
                  src="/img/service/house-moving/006.jpg"
                  className="w-full"
                  alt="House Moving"
                />

              </div>

            </div>
          </div>
        </div>
        <div className="pageTitle1">งานขนย้ายระหว่างประเทศและภายในประเทศ</div>
        <div className="pageTitle2" style={{ fontSize: "25px" }}>
          ระบบขนส่งแบบครบวงจรที่ใช้ประโยชน์จากเครือข่ายระดับสากล
          จะช่วยส่งมอบสัมภาระให้อย่างปลอดภัย แน่นอน และรวดเร็วทันใจ
          ซึ่งรวมไปถึงงานบรรจุภัณฑ์ การรับสัมภาระ พิธีการศุลกากร และการจัดส่ง
        </div>
        <div className="flex justify-center">
          <img
            src="/img/service/house-moving/001.jpg"
            className="img-responsive"
            alt="House Moving"
          />
        </div>

          <div className="picRow1">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-3">
                <img
                  src="/img/service/house-moving/002.jpg"
                  className="img-responsive"
                  alt="House Moving"
                />
              </div>
              <div className="col-span-3">
                <img
                  src="/img/service/house-moving/003.jpg"
                  className="img-responsive"
                  alt="House Moving"
                />
              </div>
              <div className="col-span-3">
                <img
                  src="/img/service/house-moving/004.jpg"
                  className="img-responsive"
                  alt="House Moving"
                />
              </div>
              <div className="col-span-3">
                <img
                  src="/img/service/house-moving/005.jpg"
                  className="img-responsive"
                  alt="House Moving"
                />
              </div>
            </div>
          </div>
          <div className="handlingBox">
            <div className="handlingTitle">สาขาที่ให้บริการ</div>
            <ul className="list-disc grid md:flex">
              <li className="ms-8 ps-0">กรุงเทพมหานคร</li>
              <li className="ms-8 ps-0">พระนครศรีอยุธยา</li>
              <li className="ms-8 ps-0">ปราจีนบุรี</li>
              <li className="ms-8 ps-0">เชียงใหม่</li>
            </ul>
          </div>
        </div>
      
    </>
  );
}
