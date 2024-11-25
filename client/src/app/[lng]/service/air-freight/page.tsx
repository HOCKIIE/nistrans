import Cover from "@/components/website/layout/Cover";

export default function AirFreight() {
  return (
    <>
      <Cover
        noHeading={true}
        pageName="บริการของเรา"
        engName="Service"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container px-2 md:px-0 mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">การขนส่งทางอากาศ</h1>
        <div className="py-10">
          <div className="branchesTopic">
            <span>
              เราให้บริการขนส่งที่วางใจได้และฉับไวด้วยเส้นทางที่เหมาะสมที่สุดตามความประสงค์ของลูกค้า
              ในฐานะ Global Logistics Service Provider แม้ในช่วงเร่งรีบ เช่น
              วันหยุดยาว หรือก่อนวันหยุดยาว
              เราก็สามารถจัดหาพื้นที่ว่างสำหรับสินค้าที่จำเป็นให้ได้โดยใช้เครือข่ายร่วมกับบริษัทสายการบิน
              อีกทั้งสามารถตอบสนองได้อย่างยืดหยุ่นต่อความต้องการเร่งด่วนด้วยรายการสินค้าที่
              Siam Nistrans ดำเนินการมีอยู่มากมายหลายสาขาทั้งขาเข้าและขาออก
              เราจึงขอนำเสนอการขนส่งแบบต่อเนื่องระหว่างประเทศซึ่งดำเนินการโดยอาศัยประสบการณ์จริงมากมาย
              ซึ่งรวมถึงความต้องการแบบ Door to Door
            </span>
          </div>

          <div className="pageTitle1">ลำดับการขนส่ง</div>

          <div className="pageTitle2">
            รวบรวมสินค้า{" "}
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            ยื่นเรื่องขอส่งออก{" "}
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            ดำเนินการพิธีการศุลกากร{" "}
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            ขนส่งทางอากาศ{" "}
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            <br />
            NISSIN ในประเทศปลายทางยื่นเรื่องขอนำเข้า{" "}
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            จัดส่ง
            <br />
            ขนส่งออกนอกประเทศแบบ Door to Door
          </div>

          <ul className="textNum">
            <li className="nNum">
              <div className="nNumText">จุดเด่น</div>
              <div className="nNumNum">01</div>
            </li>
            <li className="tText">
              ขนส่งสินค้าของลูกค้าไปต่างประเทศด้วยบริการขนส่งแบบต่อเนื่องที่ใช้ประโยชน์จากเครือข่ายระดับสากล
              ซึ่งรวมไปถึงงานพิธีการศุลกากรที่วุ่นวาย
              เราดำเนินการด้านสินค้าส่งออกและนำเข้าโดยมีการจัดวางระบบที่สามารถรองรับความต้องการของลูกค้าได้โดยอาศัยประสบการณ์ที่สั่งสมมานานหลายปีในฐานะผู้ให้บริการขนส่งสินค้าทางอากาศที่ได้รับการรับรองโดย
              IATA
            </li>
          </ul>

          <div className="airSer">
            <div className="grid grid-cols-12">
              <div className="col-span-3">
                <a
                  className="fancyBox"
                  href="/img/air-freight-forwarding/006.jpg"
                  rel="groupimg"
                  title=""
                >
                  <img
                    src="/img/air-freight-forwarding/006.jpg"
                    className="img-responsive img-thumbnail"
                    alt="Air Freight Forwarding"
                  />
                </a>
              </div>
              <div className="col-span-3">
                <div className="airSerText">
                  TAFA
                  <br />
                  member certificate
                </div>
              </div>
              <div className="col-span-3">
                <a
                  className="fancyBox"
                  href="/img/air-freight-forwarding/007.jpg"
                  rel="groupimg"
                  title=""
                >
                  <img
                    src="/img/air-freight-forwarding/007.jpg"
                    className="img-responsive img-thumbnail"
                    alt="Air Freight Forwarding"
                  />
                </a>
              </div>
              <div className="col-span-3">
                <div className="airSerText">
                  IATA
                  <br />
                  Certificate of Registration
                </div>
              </div>
            </div>
          </div>

          <img
            src="/img/air-freight-forwarding/001.jpg"
            className="mx-auto"
            style={{ marginTop: "60px" }}
            alt="Air Freight Forwarding"
          />

          <div className="picRow1">
            <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-6">
                <img
                  src="/img/air-freight-forwarding/004.jpg"
                  className="img-responsive"
                  alt="Air Freight Forwarding"
                />
              </div>
              <div className="col-span-6">
                <div className="picTextBox">
                  <img
                    src="/img/air-freight-forwarding/003.jpg"
                    className="img-responsive"
                    alt="Air Freight Forwarding"
                  />
                  <div className="picText">写真提供：ANA CARGO</div>
                </div>
              </div>
              <div className="col-span-6">
                <img
                  src="/img/air-freight-forwarding/005.jpg"
                  className="img-responsive"
                  alt="Air Freight Forwarding"
                />
              </div>
              <div className="col-span-6">
                <img
                  src="/img/air-freight-forwarding/008.jpg"
                  className="img-responsive"
                  alt="Air Freight Forwarding"
                />
              </div>
            </div>
          </div>

          <div className="">
            <div className="grid grid-cols-12">
              <div className="col-span-2"></div>
              <div className="col-span-12 md:col-span-8 boxPhone1">
                <div>ช่องทางให้คำปรึกษาเรื่องการส่งออก/การนำเข้าของสาขาสนามบิน</div>
                <div className="grid grid-cols-12">
                  <div className="col-span-12 md:col-span-6 pt-4">
                    <div className="boxPhone1Label">ให้คำปรึกษาในการส่งออก</div>
                    <a className="ms-2" href="tel:+66-2-134-7112">+66-2-134-7112</a>
                  </div>
                  <div className="col-span-12 md:col-span-6 pt-4">
                    <div className="boxPhone1Label">ให้คำปรึกษาในการนำเข้า</div>
                    <a className="ms-2" href="tel:+66-2-134-7003">+66-2-134-7003~5</a>
                  </div>
                </div>
              </div>
              <div className="col-span-2"></div>
            </div>
            
          </div>

          <div className="handlingBox">
            <div className="handlingTitle">สาขาที่ให้บริการ</div>
            <ul className="list-disc grid md:flex">
              <li className="ms-8 ps-0">กรุงเทพมหานคร</li>
              <li className="ms-8 ps-0">สนามบินสุวรรณภูมิ</li>
              <li className="ms-8 ps-0">พระนครศรีอยุธยา</li>
              <li className="ms-8 ps-0">แหลมฉบัง</li>
              <li className="ms-8 ps-0">ปราจีนบุรี</li>
              <li className="ms-8 ps-0">เชียงใหม่</li>
            </ul>
            {/* <div className="handlingList">
              <table>
                <tbody>
                  <tr>
                    <td>・กรุงเทพมหานคร</td>
                    <td>・สนามบินสุวรรณภูมิ</td>
                    <td>・พระนครศรีอยุธยา</td>
                    <td>・แหลมฉบัง</td>
                    <td>・ปราจีนบุรี</td>
                    <td>・เชียงใหม่</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
