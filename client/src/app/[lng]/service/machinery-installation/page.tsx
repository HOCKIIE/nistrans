import Cover from "@/components/website/layout/Cover";

export default function MachineInstallation() {
  return (
    <>
      <Cover
        noHeading={true}
        pageName="บริการของเรา"
        engName="Service"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container px-2 xl:px-0 mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">ธุรกิจคลังสินค้า</h1>
        <div className="py-10">
          <div className="branchesTopic text-center no-padding-l no-padding-r">
            <div
              style={{
                width: "auto",
                display: "table",
                margin: "0 auto",
                textAlign: "left",
              }}
            >
              Siam Nistrans ให้บริการขนส่งเครื่องจักร
              (ตั้งแต่ขนย้ายออกจากโรงงานไปจนถึงงานติดตั้งที่หน้างาน)
              <br />
              แบบ One-Stop-Service โดยถือคติความปลอดภัยต้องมาเป็นอันดับหนึ่ง
            </div>
          </div>

          <div className="pageTitle1">ลำดับการขนส่งเครื่องจักร</div>

          <div className="mt-10 mb-20">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-2 hidden xl:block"></div>
              <div className="col-span-3 md:col-span-2 xl:col-span-1">
                <div className="relative flex">
                  <div className="bg-orange-50 h-40">
                    <p className="[writing-mode:vertical-lr] h-full text-center p-3">ขนย้ายเครื่องจักรออกจากพื้นที่</p>
                  </div>
                  <div className="arrow-right"></div>
                </div>
                <img src="/img/service/service-7.png" alt="ขนย้ายเครื่องจักรออกจากพื้นที่" />
              </div>
              <div className="col-span-3 md:col-span-2 xl:col-span-1">
                <div className="relative flex">
                  <div className="bg-orange-50 h-40 min-w-16">
                      <p className="[writing-mode:vertical-lr] h-full text-center p-3">บรรจุ</p>
                  </div>
                  <div className="arrow-right"></div>
                </div>
                <img src="/img/service/service-8.png" alt="พิธีการศุลกากร" />
              </div>
              <div className="col-span-3 md:col-span-2 xl:col-span-1">
                <div className="relative flex">
                  <div className="bg-orange-50 h-40  min-w-18">
                    <p className="[writing-mode:vertical-lr] h-full text-center p-3">พิธีการศุลกากร</p>
                  </div>
                  <div className="arrow-right"></div>
                </div>
                <img src="/img/service/service-9.png" alt="พิธีการศุลกากร" />
              </div>
              <div className="col-span-3 md:col-span-2 xl:col-span-1">
                <div className="relative flex">
                  <div className="bg-orange-50 h-40  min-w-18">
                    <p className="[writing-mode:vertical-lr] h-full text-center p-3">ขนส่งระหว่างประเทศ</p>
                  </div>
                  <div className="arrow-right"></div>
                </div>
                <img src="/img/service/service-10.png" alt="ขนส่งระหว่างประเทศ" />
              </div>
              <div className="col-span-3 md:col-span-2 xl:col-span-1">
                <div className="relative flex">
                  <div className="bg-orange-50 h-40  min-w-18">
                    <p className="[writing-mode:vertical-lr] h-full text-center p-3">พิธีการศุลกากร</p>
                  </div>
                  <div className="arrow-right"></div>
                </div>
                <img src="/img/service/service-9.png" alt="พิธีการศุลกากร" />
              </div>
              <div className="col-span-3 md:col-span-2 xl:col-span-1">
                <div className="relative flex">
                  <div className="bg-orange-50 h-40  min-w-18">
                    <p className="[writing-mode:vertical-lr] h-full text-center p-3">จัดส่ง</p>
                  </div>
                  <div className="arrow-right"></div>
                </div>
                <img src="/img/service/service-2.png" alt="จัดส่ง" />
              </div>
              <div className="col-span-3 md:col-span-2 xl:col-span-1">
                <div className="relative flex">
                  <div className="bg-orange-50 h-40  min-w-18">
                    <p className="[writing-mode:vertical-lr] h-full text-center p-3">บรรจุและขนย้ายเข้าพื้นที่</p>
                  </div>
                  <div className="arrow-right"></div>
                </div>
                <img src="/img/service/service-1.png" alt="บรรจุและขนย้ายเข้าพื้นที่" />
              </div>
              <div className="col-span-3 md:col-span-2 xl:col-span-1">
                <div className="relative flex">
                  <div className="bg-orange-50 h-40  min-w-18">
                    <p className="[writing-mode:vertical-lr] h-full text-center p-3">ติดตั้ง</p>
                  </div>
                </div>
                <img src="/img/service/service-7.png" alt="ติดตั้ง" />
              </div>
            </div>
          </div>

          <div className="picRow1">
            <div className="grid grid-cols-12 md:grid-cols-11 gap-4">
              <div className="col-span-1 hidden md:block"></div>
              <div className="col-span-6 md:col-span-3">
                <img
                  src="/img/service/machinery-installation/001.jpg"
                  className="img-responsive"
                  alt="สภาพการดำเนินงานบรรจุภัณฑ์โดยพนักงาน"
                />
                <div className="macInsText1">
                  สภาพการดำเนินงานบรรจุภัณฑ์
                  <br />
                  โดยพนักงาน
                </div>
              </div>
              <div className="col-span-6 md:col-span-3">
                <img
                  src="/img/service/machinery-installation/002.jpg"
                  className="img-responsive"
                  alt="ดำเนินงานบรรจุภัณฑ์ให้เหมาะสมตามประเภทของเครื่องจักร"
                />
                <div className="macInsText1">
                  ดำเนินงานบรรจุภัณฑ์ให้เหมาะสม
                  <br />
                  ตามประเภทของเครื่องจักร
                </div>
              </div>
              <div className="col-span-6 md:col-span-3">
                <img
                  src="/img/service/machinery-installation/003.jpg"
                  className="img-responsive"
                  alt="งานบรรจุเข้าตู้คอนเทนเนอร์"
                />
                <div className="macInsText1" style={{ padding: "18px 0" }}>
                  งานบรรจุเข้าตู้คอนเทนเนอร์
                </div>
              </div>
              <div className="hidden md:block col-span-1"></div>
              <div className="hidden md:block col-span-1"></div>
              <div className="col-span-6 md:col-span-3">
                <img
                  src="/img/service/machinery-installation/004.jpg"
                  className="img-responsive"
                  alt="ขนส่งเครื่องจักรขนาดใหญ่"
                />
                <div className="macInsText1">ขนส่งเครื่องจักรขนาดใหญ่</div>
              </div>
              <div className="col-span-6 md:col-span-3">
                <img
                  src="/img/service/machinery-installation/005.jpg"
                  className="img-responsive"
                  alt="ขนย้ายเครื่องจักรเข้าพื้นที่"
                />
                <div className="macInsText1">ขนย้ายเครื่องจักรเข้าพื้นที่</div>
              </div>
              <div className="col-span-6 md:col-span-3">
                <img
                  src="/img/service/machinery-installation/006.jpg"
                  className="img-responsive"
                  alt="งานติดตั้ง"
                />
                <div className="macInsText1">งานติดตั้ง</div>
              </div>
            </div>
          </div>
          <div className="handlingBox">
            <div className="handlingTitle">สาขาที่ให้บริการ</div>
            <ul className="list-disc grid md:flex">
              <li className="ms-8 ps-0">พระนครศรีอยุธยา</li>
              <li className="ms-8 ps-0">บางปะกง</li>
              <li className="ms-8 ps-0">แหลมฉบัง</li>
              <li className="ms-8 ps-0">ปราจีนบุรี</li>
              <li className="ms-8 ps-0">เชียงใหม่</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
