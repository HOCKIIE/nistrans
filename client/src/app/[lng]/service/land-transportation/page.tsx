import Cover from "@/components/website/layout/Cover";

export default function LandTransport() {
  return (
    <>
      <Cover
        noHeading={true}
        pageName="บริการของเรา"
        engName="Service"
        prevPage={{ pageName: "หน้าแรก", url: "/" }}
      />
      <div className="container px-2 md:px-0 mx-auto pb-10 text-black py-10">
        <h1 className="text-blue-950 text-2xl">การขนส่งทางบก</h1>
        <div className="py-10">
          <div>
            <div className="branchesTopic">
              เราใช้รถบรรทุกสินค้าของบริษัทที่มีมากกว่า 100
              คันในการขนส่งสินค้าสำคัญจนถึงท่าเรือหรือสนามบินอย่างปลอดภัยและฉับไว
              ไม่เฉพาะการขนส่งภายในประเทศไทยเท่านั้น
              แต่ยังรวมถึงบริการขนส่งข้ามพรมแดน เช่น ลาว กัมพูชา มาเลเซีย
              และประเทศต่างๆ ในอาเซียน
            </div>

            <div className="pageTitle1">
              ข้อดีของการขนส่งทางบกโดย Siam Nistrans
            </div>

            <div style={{ height: "40px" }}></div>

            <ul className="textNum mt-4 mb-0">
              <li className="nNum">
                <div className="nNumText">จุดเด่น</div>
                <div className="nNumNum">01</div>
              </li>
              <li className="tText">
                มีรถบรรทุกของบริษัทกว่า 100 คัน
                และพนักงานขับรถทุกคนเป็นพนักงานของบริษัทที่ได้รับการควบคุมให้ขับแบบเป็นมิตรต่อสิ่งแวดล้อมจึงใส่ใจต่อการขับขี่อย่างปลอดภัยอยู่เสมอ
              </li>
            </ul>


              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-1"></div>
                <div className="col-span-12 md:col-span-4">
                  <div className="bg-slate-200 p-6">
                      <h5 className="font-bold text-xl mb-2">รถบรรทุกสินค้าขนส่งที่ Siam Nistrans มีอยู่</h5>
                      <p className="text-lg mb-2">・รถบรรทุกหัวลาก 15 คัน</p>
                      <p className="text-lg mb-2">・รถบรรทุก 10 ล้อ 7 คัน</p>
                      <p className="text-lg mb-2">・รถบรรทุก 6 ล้อ 60 คัน</p>
                      <p className="text-lg mb-2">・รถปิกอัพ 4 ล้อ 29 คัน</p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <img
                    src="/img/service/land-transportation/001.jpg"
                    className="img-responsive"
                    alt="Land Transportation"
                    style={{height:'228px'}}
                  />
                </div>
              </div>
      

            <ul className="textNum">
              <li className="nNum">
                <div className="nNumText">จุดเด่น</div>
                <div className="nNumNum">02</div>
              </li>
              <li className="tText">
                ได้รับการยอมรับด้านการขนส่งสินค้าที่มีความปลอดภัยและมีเสถียรภาพ
                จนได้รับ Q-mark (Quality Mark)
                <br />
                ซึ่งรับรองโดยกรมการขนส่งทางบก กระทรวงคมนาคมของประเทศไทย
              </li>
            </ul>


            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-1 md:col-span-1"></div>
              <div className="col-span-12 md:col-span-4">
                <div className="flex justify-between">
                  <div>
                    <a
                      className="fancyBox"
                      href="/img/service/land-transportation/002.jpg"
                      rel="groupimg"
                      title=""
                    >
                      <img
                        src="/img/service/land-transportation/002.jpg"
                        className="img-responsive img-thumbnail max-h-80"
                        alt="Land Transportation"
                      />
                    </a>
                    <div className="imgText">Q Mark</div>
                  </div>
                  <div>
                    <img
                      src="/img/service/land-transportation/007.jpg"
                      className="pull-left max-h-80"
                      alt="Land Transportation"
                    />

                  </div>
                </div>
              </div>
              <div className="col-span-12 mt-4 md:col-span-4 md:mt-0 mb-8">
                <span>
                  ระบบ Q-Mark เป็นระบบรับรองบริษัทขนส่งทางรถบรรทุกที่ ดำเนินการโดยกรมการขนส่งทางบก กระทรวงคมนาคม และใช้เป็นเงื่อนไขสำหรับการสัญจรระหว่างกันตามความข้อตกลงว่าด้วยการขนส่งข้ามแดน
                  (CBTA) โดยบริษัทได้รับ Q-mark นี้ในเดือนตุลาคม 2561
                </span>
              </div>
            </div>
     

            <ul className="textNum">
              <li className="nNum">
                <div className="nNumText">จุดเด่น</div>
                <div className="nNumNum">03</div>
              </li>
              <li className="tText">
                ให้บริการการขนส่งข้ามแดนด้วยรถบรรทุกของบริษัทที่มีใบอนุญาตตามความตกลง
                <br />
                ว่าด้วยการขนส่งข้ามแดน (CBTA)
              </li>
            </ul>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-1"></div>
              <div className="col-span-12 md:col-span-3">
                <div className="grid">
                  <div className="flex" >
                    <a
                      className="fancyBox"
                      href="/img/service/land-transportation/004.jpg"
                      rel="groupimg"
                      title=""
                    >
                      <img
                        src="/img/service/land-transportation/004.jpg"
                        className="img-responsive img-thumbnail"
                        alt="Land Transportation"
                      />
                    </a>
                    <a
                      className="fancyBox"
                      href="/img/service/land-transportation/005.jpg"
                      rel="groupimg"
                      title=""
                    >
                      <img
                        src="/img/service/land-transportation/005.jpg"
                        className="img-responsive img-thumbnail"
                        alt="Land Transportation"
                      />
                    </a>
                  </div>
                  <div className="imgText">
                    ใบอนุญาตการขนส่งทางถนนในภูมิภาคลุ่มน้ำโขง
                  </div>
                </div>
                </div>
                <div className="col-span-12 md:col-span-5 mb-">
                  <p className="mb-2">
                    ความตกลงว่าด้วยการขนส่งข้ามแดน (Cross-Border Transport
                    Agreement)
                    เป็นหนึ่งในหลักสำคัญของขอบข่ายในการทำให้การค้าระหว่างประเทศเป็นไปอย่างราบรื่นตามโปรแกรมพัฒนาอนุภาคลุ่มน้ำโขง
                    (Greater Mekong Subregion) ประเทศใน GMS
                    นอกจากมีประเทศลุ่มน้ำโขง 5 ประเทศ (ไทย กัมพูชา ลาว
                    เมียนมาร์ เวียดนาม) แล้วยังมีจีน
                    (มณฑลยูนนานและเขตปกครองตนเองชนชาติจ้วงมณฑลกวางสี)
                    เข้าร่วมด้วย การใช้ยานพาหนะที่กำหนดไว้ตาม CBTA
                    ในการเคลื่อนย้ายถ่ายเทระหว่างกัน การตรวจสอบเพียงจุดเดียว
                    (Single Stop Inspection:SSI)
                    หรือการปฏิบัติตามระเบียบการขนย้ายวัตถุสิ่งของต่างๆ จะช่วยให้วางใจได้ว่าการขนส่งทางบกในภูมิภาคลุ่มน้ำโขงจะเกิดความราบรื่นขึ้น
                  </p>
                  <p className="mb-2">
                    ปัจจุบันสามารถขนส่งระหว่างกันได้แล้วระหว่างประเทศภาคีสมาชิกยกเว้นเมียนมาร์ อันเป็นผลมาจากมาตรการ Early Harvest ของ CBTA
                  </p>
                </div>
              </div>
              

            
            <div className="mb-10">
              <ul className="textNum no-margin-t">
                <li className="nNum">
                  <div className="nNumText">จุดเด่น</div>
                  <div className="nNumNum">04</div>
                </li>
                <li className="tText">
                  การให้บริการขนส่งในพื้นที่ระเบียงเศรษฐกิจพิเศษภาคตะวันออก (EEC)
                  และประเทศเพื่อนบ้านใกล้เคียง
                </li>
              </ul>
              <div className="grid grid-cols-12">
                <div className="col-span-1"></div>
                <div className="col-span-12 md:col-span-10">
                  <p>พัฒนาเส้นทางขนส่งทางบกทั้งขาออกและขาเข้าระหว่างประเทศไทยกับประเทศเพื่อนบ้าน เช่น ลาว กัมพูชา มาเลเซีย และประเทศต่างๆ ในอาเซียนให้ได้โดยเร็วเพื่อให้บริการในเส้นทางต่างๆ ซึ่งจะอำนวยประโยชน์ในด้านการลด Transit Time ของสินค้าและลดสินค้าคงคลังในการขนส่ง</p>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-8 md:cols-pan-6">
                  <img
                    src="/img/service/land-transportation/003.jpg"
                    className="img-responsive"
                    alt="Land Transportation"
                  />
                </div>
                <div className="col-span-12 md:cols-span-2">
                  <a
                    className="fancyBox"
                    href="/img/service/land-transportation/006.jpg"
                    rel="groupimg"
                    title=""
                  >
                    <img
                      src="/img/service/land-transportation/006.jpg"
                      className="img-responsive img-thumbnail"
                      alt="Land Transportation"
                    />
                  </a>
                  <div className="imgText">
                    <span>
                      ใบอนุญาตประกอบการขนส่งระหว่างประเทศด้วยรถบรรทุก
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="handlingBox">
                <div className="handlingTitle">สาขาที่ให้บริการ</div>
                <ul className="list-disc grid md:flex">
                  <li className="ms-8 ps-0">กรุงเทพมหานคร</li>
                  <li className="ms-8 ps-0">พระนครศรีอยุธยา</li>
                  <li className="ms-8 ps-0">บางปะกง</li>
                  <li className="ms-8 ps-0">แหลมฉบัง</li>
                  <li className="ms-8 ps-0">ปราจีนบุรี</li>
                  <li className="ms-8 ps-0">เชียงใหม่</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
