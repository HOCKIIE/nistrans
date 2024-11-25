import Cover from "@/components/website/layout/Cover";

export default function SeaFreight() {
  return (
    <>
      <Cover
        noHeading={true}
        pageName="บริการของเรา"
        engName="Service"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container px-2 md:px-0 mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">การขนส่งทางทะเล</h1>
        <div className="py-10">
          <div>
            <div
              className="branchesTopic no-padding-r"
              style={{ paddingLeft: "15px" }}
            >
              บริษัทให้บริการขนส่งแบบไร้รอยต่อทั่วทุกมุมโลกในฐานะ International
              Freight Forwarder เช่น การลดค่าขนส่งทางทะเลและต้นทุนการขนส่ง
              การส่งมอบสินค้าและการขนส่งอย่างฉับไว เป็นต้น
              โดยอาศัยการประสานความร่วมมือกับ NISSIN Corporation
              ซึ่งมีเครือข่ายอยู่ 150 ประเทศทั่วโลก รวมถึงบริษัทต่างๆ ในเครือ
              และเอเยนต์รายใหญ่
            </div>

            <div className="pageTitle1">การขนส่งทางทะเลของ Siam Nistrans</div>

            <div className="pageTitle2">
              ขนส่งต่อเนื่องหลายรูปแบบด้วยเครือข่ายที่กระจายอยู่ทั่วโลก (Door to
              Door)!
              <br />
              วางใจได้และปลอดภัยด้วยบริการการขนส่งแบบรวมตู้ (Consolidation)
            </div>

            <ul className="textNum">
              <li className="nNum">
                <div className="nNumText">จุดเด่น</div>
                <div className="nNumNum">01</div>
              </li>
              <li className="tText">
                นับตั้งแต่เปิดทำการในปี 2530 เป็นต้นมา
                เราใช้ประสบการณ์และองค์ความรู้ด้านการขนส่งต่อเนื่องหลากหลายรูปแบบเพื่อส่งมอบสินค้าสำคัญของลูกค้าไปยังทุกที่ทั่วโลกอย่าง
                "วางใจได้และปลอดภัย" โดยถือคติ <br />
                "เชื่อมั่นและจริงใจ"
              </li>
            </ul>

            <ul className="textNum">
              <li className="nNum">
                <div className="nNumText">จุดเด่น</div>
                <div className="nNumNum">02</div>
              </li>
              <li className="tText">
                พนักงานขายของเราซึ่งสั่งสมประสบการณ์จากการไปประจำการในต่างประเทศมามากมายและมีความรู้เกี่ยวกับท้องถิ่นเป็นอย่างดี
                จะเป็นผู้ออกแบบและนำเสนอแผนการขนส่งอย่างพิถีพิถัน
                เพื่อเพิ่มประสิทธิภาพและประสิทธิผลให้ดียิ่งขึ้น
              </li>
            </ul>

            <ul className="textNum">
              <li className="nNum">
                <div className="nNumText">จุดเด่น</div>
                <div className="nNumNum">03</div>
              </li>
              <li
                className="tText"
                style={{ fontSize: "17px", paddingRight: "0" }}
              >
                ไม่ว่าจะเป็น "การบริการขนส่งต่อเนื่องหลายรูปแบบ" แบบ Door to
                Door (รับสัมภาระในประเทศ-ขนส่งทางทะเล-ขนส่งทางบกที่ต่างประเทศ)
                ให้แก่ลูกค้า, การขนส่งแบบจัดสรรตู้สินค้าร่วมกัน (LCL),
                การขนส่งแบบ FCL หรือ Buyer Consolidation ฯลฯ
                เราก็สามารถให้บริการได้ด้วยการติดต่อบริษัทเรือรายใหญ่ระดับโลกหรือผ่านเครือข่ายในต่างประเทศ
              </li>
            </ul>

            <div className="picRow1">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <img
                    src="/img/sea-freight-forwarding/002.jpg"
                    className="img-responsive"
                    alt="Sea Freight Forwarding"
                  />
                </div>
                <div className="col-span-6">
                  <img
                    src="/img/sea-freight-forwarding/003.jpg"
                    className="img-responsive"
                    alt="Sea Freight Forwarding"
                  />
                </div>
                <div className="col-span-6">
                  <img
                    src="/img/sea-freight-forwarding/004.jpg"
                    className="img-responsive"
                    alt="Sea Freight Forwarding"
                  />
                </div>
                <div className="col-span-6">
                  <img
                    src="/img/sea-freight-forwarding/005.jpg"
                    className="img-responsive"
                    alt="Sea Freight Forwarding"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="bg-blue-950 p-1">
                <div className="text-2xl text-white fw-bold text-center py-2">นำเสนอเส้นทางขนส่งและวิธีการขนส่งที่สอดคล้องตามความต้องการของลูกค้า</div>
                <div className="grid grid-cols-12 bg-white transportation-routes">
                    <div className="col-span-6 md:col-span-2 grid justify-center item">
                      <img src="/img/service/service-1.png" alt="ต้นทางจัดส่ง" />
                      <p className="text-center">ต้นทางจัดส่ง</p>
                    </div>
                    <div className="col-span-6 md:col-span-2 grid justify-center item">
                      <img src="/img/service/service-2.png" alt="รับสินค้า" />
                      <p className="text-center">รับสินค้า</p>
                    </div>
                    <div className="col-span-6 md:col-span-2 grid justify-center item">
                      <img src="/img/service/service-5.png" alt="คลังสินค้า" />
                      <p className="text-center">คลังสินค้า</p>
                    </div>
                    <div className="col-span-6 md:col-span-2 grid justify-center item">
                      <img src="/img/service/service-4.png" alt="ขนส่งทางทะเล" />
                      <p className="text-center">ขนส่งทางทะเล</p>
                    </div>
                    <div className="col-span-6 md:col-span-2 grid justify-center item">
                      <img src="/img/service/service-5.png" alt="คลังสินค้า" />
                      <p className="text-center">คลังสินค้า</p>
                    </div>
                    <div className="col-span-6 md:col-span-2 grid justify-center item">
                      <img src="/img/service/service-6.png" alt="ปลายทางจัดส่ง" />
                      <p className="text-center">ปลายทางจัดส่ง</p>
                    </div>
                </div>

              </div>
            </div>

            {/* <div className="ssfBox1">
              <div className="relative flex justify-center">
                <img
                  src="/img/sea-freight-forwarding/process.jpg"
                  className=""
                  alt="Sea Freight Forwarding"
                />
                <div className="ssfBox1Text1">
                  นำเสนอเส้นทางขนส่งและวิธีการขนส่งที่สอดคล้องตามความต้องการของลูกค้า
                </div>
                <ul className="absolute flex justify-center bottom-4">
                  <li className="text-center" style={{width:'9.7rem'}}>ต้นทางจัดส่ง</li>
                  <li className="text-center" style={{width:'9.7rem'}}>รับสินค้า</li>
                  <li className="text-center" style={{width:'9.7rem'}}>คลังสินค้า</li>
                  <li className="text-center" style={{width:'9.7rem'}}>ขนส่งทางทะเล</li>
                  <li className="text-center" style={{width:'9.7rem'}}>คลังสินค้า</li>
                  <li className="text-center" style={{width:'9.7rem'}}>ปลายทางจัดส่ง</li>
                </ul>
              </div>
            </div> */}
            <div>
              <div className="handlingBox">
                <div className="handlingTitle">สาขาที่ให้บริการ</div>
                <ul className="list-disc grid md:flex">
                  <li className="ms-8 ps-0">กรุงเทพมหานคร</li>
                  <li className="ms-8 ps-0">พระนครศรีอยุธยา</li>
                  <li className="ms-8 ps-0">แหลมฉบัง</li>
                  <li className="ms-8 ps-0">ปราจีนบุรี</li>
                  <li className="ms-8 ps-0">เชียงใหม่</li>
                  <li className="ms-8 ps-0">บางปะกง</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
