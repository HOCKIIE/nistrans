import Cover from "@/components/website/layout/Cover";

export default function Packing() {
  return (
    <>
      <Cover
        noHeading={true}
        pageName="บริการของเรา"
        engName="Service"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container px-2 md:px-0 mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">งานพิธีการศุลกากร</h1>
        <div className="py-10">
          <div
            className="branchesTopic"
            style={{ marginBottom: "70px", paddingRight: "0" }}
          >
            เราดำเนินพิธีการศุลกากรตั้งแต่เริ่มแรกก่อตั้งบริษัทเมื่อวันที่ 30
            กันยายน 2530 ไม่เพียงแต่การยื่นเรื่องต่อด่านศุลกากรเท่านั้น
            แต่ยังให้บริการดำเนินขั้นตอนก่อนหรือหลังพิธีการศุลกากรด้วย เช่น
            การยื่นคำร้องตามกฎหมายอื่น ๆ ไปยังกระทรวงทบวงกรมต่างๆ
            การยื่นขอคืนอากร เป็นต้น นอกจากนี้ยังให้บริการพิธีการศุลกากรพิเศษ
            เช่นพิธีการศุลกากร Hand Carry,
            พิธีการศุลกากรสัมภาระแยกส่งเพื่อย้ายสถานที่
            พิธีการศุลกากรสำหรับสินค้าทั่วไป รวมถึงวัตถุอันตราย เครื่องจักร
            ผลิตภัณฑ์อาหาร และเวชภัณฑ์
            เรามีพนักงานผู้มากประสบการณ์ในด้านพิธีการศุลกากรจำนวนมาก
            อีกทั้งยังได้รับการรับรอง
            "ผู้ได้รับอนุญาตให้ประกอบกิจการพิธีการศุลกากร" ตามระบบ AEO
            และมีพนักงานผู้เชี่ยวชาญรวม 75
            คนที่จะรองรับงานพิธีการศุลกากรและดำเนินการที่ด่านศุลกากรอยู่ที่แหลมฉบังและกรุงเทพฯ
            ซึ่งเป็น Gateway ของการขนส่งทางทะเล สนามบินสุวรรณภูมิซึ่งเป็น
            Gateway ของการขนส่งทางอากาศ และยังมีที่เชียงใหม่และพระนครศรีอยุธยา
            เพื่อตอบสนองความต้องการของลูกค้า
          </div>

          <ul className="textNum">
            <li className="nNum">
              <div className="nNumText">จุดเด่น</div>
              <div className="nNumNum">01</div>
            </li>
            <li className="tText">ได้รับใบรับรองมาตรฐาน AEO</li>
          </ul>

          <div className="cusCleRow4">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-9">
                <span>
                  AEO เป็นระบบที่กำหนดขึ้นเป็นเกณฑ์โดย WCO (องค์การศุลกากรโลก)
                  โดยมีวัตถุประสงค์เพื่อสร้างหลักประกันความปลอดภัยและเพื่อให้การขนส่งและกระจายสินค้ามีความราบรื่นไปพร้อมกันในการขนส่งและกระจายสินค้าระหว่างประเทศ
                  ซึ่ง Siam Nistrans
                  ได้รับการรับรองโดยด่านศุลกากรของประเทศไทยเมื่อเดือนเมษายน 2557
                  (AEO Reference No.THC570019)
                </span>
                <div className="hidden md:block">ผู้ประกอบการระดับมาตรฐานเออีโอ</div>
              </div>
              <div className="col-span-3 md:hidden"></div>
              <div className="col-span-6 md:col-span-2 mt-6 md:mt-0">
                <a
                  className="fancyBox"
                  href="/img/service/customs-clearance/003.jpg"
                  rel="groupimg"
                  title=""
                >
                  <img
                    src="/img/service/customs-clearance/003.jpg"
                    className="img-responsive img-thumbnail"
                    alt="Customs Clearance"
                  />
                </a>
                <div className="md:hidden text-center text-sm">ผู้ประกอบการระดับมาตรฐานเออีโอ</div>
              </div>
            </div>
          </div>

          <div className="pageTitle1">ข้อสงสัยและคำถามที่พบบ่อยจากลูกค้า</div>
          <div className="grid grid-cols-12 gap-4 ">
            <div className="col-span-12 " >
              
              <div className="relative z-20">
                <img
                  src="/img/service/customs-clearance/001.jpg"
                  className=""
                  alt="Customs Clearance"
                />
                <div className="absolute top-1 ms-34 z-100">
                  <h5 className="text-[#1c2f50]">● ของมาถึงท่าเรือแล้วแต่รับของไม่ได้</h5>
                  <h5 className="text-[#1c2f50]">● ต้องการส่งออกเร่งด่วนแต่ทำไม่ได้</h5>
                  <h5 className="text-[#1c2f50]">● มีวิธีลดหย่อนภาษีศุลกากรบ้างหรือไม่</h5>
                </div>
              </div>
            </div>
            
          </div>

          <div className="cusCleRow2">
            <img
              src="/img/service/customs-clearance/002.jpg"
              className="img-responsive"
              alt="Customs Clearance"
            />
            <div className="text-md top-0 ms-12 absolute text-white">
              Siam nistrans จะช่วยคลี่คลายปัญหาพิธีการศุลกากรและข้อสงสัยของลูกค้า
            </div>
          </div>

          <div className="cusCleRow3">
            <div className="row">
              <div className="col-xs-6">
                <div className="cusCleRow3Title">ส่งออก</div>
                <div className="cusCleRow3Label">
                  <span>รถยนต์</span>
                  <span>ชิ้นส่วนรถยนต์</span>
                  <span>เครื่องจักรกล</span>
                  <span>เครื่องใช้ไฟฟ้าในครัวเรือน</span>
                  <span>ชิ้นส่วนอิเล็กทรอนิกส์</span>
                  <span>เคมีภัณฑ์</span>
                  <span>ผลิตภัณฑ์เส้นใย</span>
                  ฯลฯ
                </div>
                <div className="cusCleRow3Text">
                  สำหรับรายการสินค้าที่มีหลายหมื่นรายการ เราใช้ระบบ EDI
                  ของบริษัทเพื่อให้พิธีการศุลกากรดำเนินไปอย่างถูกต้องแม่นยำและฉับไว
                </div>
              </div>

              <div className="col-xs-6">
                <div className="cusCleRow3Title">นำเข้า</div>
                <div className="cusCleRow3Label">
                  <span>เสื้อผ้า</span>
                  <span>ผลิตภัณฑ์อาหาร</span>
                  <span>เครื่องดื่มแอลกอฮอล์</span>
                  <span>เคมีภัณฑ์</span>
                  <span>ของเด็กเล่น</span>
                  <span>ของใช้ประจำวัน</span>
                  <span>วัสดุไม้</span>
                  ฯลฯ
                </div>
                <div className="cusCleRow3Text">
                  เราให้บริการงานศุลกากรโดยผู้ชำนาญการที่มีความเชี่ยวชาญในเรื่องการลดหย่อน,
                  ยกเว้นภาษีนำเข้าสินค้าแต่ละประเภท
                </div>
              </div>
            </div>
          </div>

          <div className="handlingBox">
            <div className="handlingTitle">สาขาที่ให้บริการ</div>
            <div className="handlingList">
              <table>
                <tbody>
                  <tr>
                    <td>・บางปะกง</td>
                    <td>・แหลมฉบัง</td>
                    <td>・สนามบินสุวรรณภูมิ</td>
                    <td>・เชียงใหม่</td>
                    <td>・พระนครศรีอยุธยา</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
