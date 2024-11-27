import Cover from "@/components/website/layout/Cover";

export default function Warehouse() {
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
          <div>
            <div className="branchesTopic">
              คลังสินค้าของบริษัทมีบริการคลังสินค้าที่มีการเพิ่มมูลค่า เช่น
              งานบรรจุภัณฑ์ การจัดส่งโดยรถของบริษัท ฯลฯ
              ให้สอดคล้องตามความต้องการของลูกค้า
              รวมทั้งใส่ใจต่อการให้บริการอย่างพิถีพิถัน
              ด้วยการควบคุมสินค้าคงคลังและการนำเข้า-ออกคลังสินค้าโดยใช้ระบบ WMS
              ที่บริษัทพัฒนาขึ้น
            </div>
            <div className="pageTitle1">
              ลักษณะพิเศษของคลังสินค้าและ
              <br />
              การจัดเก็บของ Siam Nistrans
            </div>
            <div className="pageTitle2">
              <div
                style={{ width: "auto", display: "table", margin: "0 auto" }}
              >
                <div className="pull-right">
                  <a
                    className="fancyBox"
                    href="/img/service/warehouse/014.jpg"
                    rel="groupimg"
                    title=""
                  >
                    <img
                      src="/img/service/warehouse/014.jpg"
                      className="img-thumbnail"
                      style={{ width: "150px" }}
                      alt="Warehouse"
                    />
                  </a>
                  <div
                    className="imgText"
                    style={{
                      color: "#000000",
                      fontWeight: "normal",
                      fontSize: "14px",
                      lineHeight: "150%",
                    }}
                  >
                    ใบอนุญาตประกอบธุรกิจคลังสินค้า
                  </div>
                </div>
                <div
                  className="text-left"
                  style={{
                    display: "inline-block",
                    wordBreak: "keep-all",
                    padding: "10px 30px 0 0",
                  }}
                >
                  คลังสินค้าแต่ละแห่งมีความสามารถในการจัดหาพื้นที่ว่างที่มากพอ{" "}
                  <br />
                  รวมทั้งมีการจัดขั้นตอนการจ่ายสินค้าให้ราบรื่นกว่าเดิมด้วยการ
                  <br />
                  วางระบบปริมาณการจัดเก็บและปริมาณการกระจายสินค้า
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <ul className="textNum">
              <li className="nNum">
                <div className="nNumText">จุดเด่น</div>
                <div className="nNumNum">01</div>
              </li>
              <li className="tText">
                ให้บริการงาน Logistics Hub
                ที่มีประสิทธิภาพด้วยการใช้คลังสินค้าที่จัดสร้างขึ้นควบคู่ไปกับสาขาแต่ละแห่งเพื่อรองรับสินค้าทุกประเภท
                นอกจากนี้ยังมีการใช้ระบบคลังสินค้าและระบบควบคุมสินค้าคงคลังซึ่งพัฒนาขึ้นโดยเครือ
                Nissin ในประเทศญี่ปุ่นและประเทศต่างๆ
                เพื่อให้การรองรับด้านซอฟต์แวร์โดยมีทีมงาน
                ITภายในบริษัทดำเนินการควบคุม
              </li>
            </ul>
            <div style={{ width: "270px", margin: "0 auto" }}>
              <a className="pageBtnMore" href="scm-solutions.php">
                <div className="pageBtnMoreBg"></div>
                <div className="pageBtnMoreHover"></div>
                <div className="pageBtnMoreText">
                  IT Solution ของ Siam Nistrans
                </div>
              </a>
            </div>
            <div className="picRow1 picRow1-1">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-10 md:col-span-4">
                  <img
                    src="/img/service/warehouse/001.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-10 md:col-span-4">
                  <img
                    src="/img/service/warehouse/002.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-10 md:col-span-4">
                  <img
                    src="/img/service/warehouse/003.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
              </div>
            </div>

            <div className="pageTitle1">การควบคุมคลังสินค้า</div>
            <div className="mt-10 mb-20">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-10 md:col-span-3 relative flex justify-center">
                  <img
                    src="/img/service/warehouse/004.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                  <div className="absolute top-4 text-md p-2 m-0 text-white bg-[#1b304fcc]">นำเข้าคลังสินค้า</div>
                </div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-10 md:col-span-3 relative flex justify-center">
                  <img
                    src="/img/service/warehouse/005.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                  <div className="absolute top-4 text-md p-2 m-0 text-white bg-[#1b304fcc]">จัดเก็บ</div>
                </div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-10 md:col-span-3 relative flex justify-center">
                  <img
                    src="/img/service/warehouse/006.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                  <div className="absolute top-4 text-md p-2 m-0 text-white bg-[#1b304fcc]">
                    เตรียมกระจายสินค้าออกจากคลังสินค้า
                  </div>
                </div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-1 md:hidden"></div>
                <div className="col-span-10 md:col-span-3 relative flex justify-center">
                  <img
                    src="/img/service/warehouse/007.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                  <div className="absolute top-4 text-md p-2 m-0 text-white bg-[#1b304fcc]">ขนส่ง (นำเข้าออกคลังสินค้า)</div>
                </div>
              </div>
            </div>
            <div className="pageTitle1">คลังสินค้าอันตราย</div>
            <div className="dwhRow">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-2"></div>
                <div className="col-span-8 flex justify-center">
                  <a className="fancyBox" rel="groupimg" href="/img/service/warehouse/016.jpg">
                    <img src="/img/service/warehouse/016.jpg" className="img-responsive" alt="Warehouse" />
                  </a>
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-1"></div>
                <div className="col-span-10">
                  <div className="dwhText1 no-margin-t">ก่อตั้งคลังสินค้าอันตรายใน T-park บางนา กม.39 สามารถเก็บรักษา DIW type 1, 2, 3, UN Class 3, 6.1, 8, 9 ได้ กรุณาติดต่อสอบถามพร้อมแสดงเอกสารข้อมูลความปลอดภัยสารเคมี (SDS)</div>
                  <div className="dwhText2">
                    สถานที่
                    <a className="dwhMap" target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/7qDpaGqx3gKx26298"></a>
                    <a className="dwhMapPdf" target="_blank" rel="noopener noreferrer" href="../file/SIAM_NISTRANS_Map.pdf"></a>
                  </div>
                  <div className="dwhText1">คลังสินค้าใน T-park บางนา กม.39 อยู่ใกล้กับนิคมอุตสาหกรรมและเขตท่าเรือ จึงเป็นจุดที่เหมาะสมที่สุดในการกระจายสินค้า</div>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                      <a className="fancyBox" href="/img/service/warehouse/019.jpg" title="">
                        <img src="/img/service/warehouse/019.jpg" className="img-responsive" alt="" />
                      </a>
                    </div>
                    <div className="col-span-6">
                      <a className="fancyBox" href="/img/service/warehouse/020.jpg" title="">
                        <img src="/img/service/warehouse/020.jpg" className="img-responsive" alt=""/>
                      </a>
                    </div>
                
                  </div>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-12 md:col-span-5">
                  <a className="fancyBox" href="/img/service/warehouse/017.jpg" title="">
                    <img src="/img/service/warehouse/017.jpg" className="img-responsive" alt="" />
                  </a>
                  <div className="dwhText1"> มีพื้นที่เก็บรักษาถึง 1,000 ตารางเมตร เป็นไปตามมาตรฐาน DIW </div>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <a className="fancyBox" href="/img/service/warehouse/018.jpg" rel="groupimg" title="">
                    <img src="/img/service/warehouse/018.jpg" className="img-responsive" alt=""/>
                  </a>
                  <div className="dwhText1">เจ้าหน้าที่ผู้มีใบอนุญาตจัดการวัตถุอันตรายจะคอยให้บริการด้านการเก็บ</div>
                </div>
              </div>
            </div>

            <div className="pageTitle1">คลังสินค้าอันตราย</div>
            <div className="my-10">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                  เราเปิดให้บริการคลังสินค้าควบคุมอุณหภูมิไว้ภายในคลังสินค้า BPK41
                  ควบคุมอุณหภูมิไว้ที่ 18-25℃ ด้วยเครื่องปรับอากาศตลอด 24 ชั่วโมง
                  และรักษาความชื้นไว้ที่ประมาณ 60%
                  สำหรับสินค้าที่ต้องจัดเก็บด้วยความระมัดระวังเป็นพิเศษ
                  โปรดสอบถามเราโดยตรง การจัดเก็บในคลังสินค้าเดียวกับสินค้าทั่วไป
                  จะช่วยให้การขนส่งเป็นไปอย่างมีประสิทธิภาพมากขึ้น
                </div>
                <div className="col-span-4">
                  <img
                    src="/img/service/warehouse/022.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
                <div className="col-span-4">
                  <img
                    src="/img/service/warehouse/023.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
                <div className="col-span-4">
                  <img
                    src="/img/service/warehouse/024.jpg"
                    className="img-responsive"
                    alt="Warehouse"
                  />
                </div>
              </div>
            </div>
          

            <div className="pageTitle1 mt-20">คลังสินค้าทัณฑ์บน</div>
            <div className="grid grid-cols-12 gap-4 mt-10 mb-20">
              <div className="col-span-12">
                บริษัทฯ ได้ทำการเปิดคลังสินค้าทัณฑ์บนในนิคมอุตสาหกรรมลำพูน FTZ 3
                <br />
                ซึ่งสามารถให้บริการ จัดเก็บเอกสารสัญญา สินค้าติดทัณฑ์บน
                การบริหารจัดการคลังสินค้าทัณฑ์บน
                และการขนส่งสินค้าทัณฑ์บนระหว่างโรงงาน
              </div>
              <div className="col-span-4">
                <img
                  src="/img/service/warehouse/025.jpg"
                  className="img-responsive"
                  alt="Warehouse"
                />
              </div>
              <div className="col-span-4">
                <img
                  src="/img/service/warehouse/026.jpg"
                  className="img-responsive"
                  alt="Warehouse"
                />
              </div>
              <div className="col-span-4">
                <img
                  src="/img/service/warehouse/027.jpg"
                  className="img-responsive"
                  alt="Warehouse"
                />
              </div>
            </div>

            {/* Page Title 1 - SIAM NISTRANS Warehouses */}
            <div className="pageTitle1">คลังสินค้าของ SIAM NISTRANS</div>

            {/* Warehouse Map Row */}
            <div className="whMapRow">
              <div className="grid grid-cols-12 gap-4">
                {/* Warehouse Map */}
                <div className="col-span-1 hidden xl:block"></div>
                <div className="col-span-12 md:col-span-6 xl:col-span-5">
                  <div className="whMap">
                    <img
                      src="/img/service/warehouse/map.jpg"
                      className="img-responsive w-full"
                      alt="Warehouse"
                    />
                    <div className="whText3" style={{ marginTop: "5px" }}>
                      เมื่อคลิกที่ตำแหน่งพิกัดจะสามารถตรวจสอบข้อมูลสถานที่ตั้งคลังสินค้าแต่ละแห่งได้
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 xl:col-span-5">
                  <div className="whText1">
                    มีคลังสินค้าอยู่บนทำเลสำคัญในพื้นที่ใกล้กรุงเทพฯ
                    และเชียงใหม่
                    เพื่อรับจัดเก็บสินค้าในทำเลที่เหมาะสมกับความต้องการของลูกค้า
                  </div>
                  <div className="tab-content">
                    <div className=" active in" id="whMap1">
                      <div className="branchesTitle">
                        พระนครศรีอยุธยา
                        <a
                          className="absolute right-0 top-1 h-6 text-white bg-[#1c2e50] text-sm flex justify-center p-1 hover:bg-orange-400"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.co.th/maps/place/Siam+Nistrans+Co.Ltd./@14.3541586,100.6684489,15.75z/data=!4m5!3m4!1s0x311d8bb132ee5a35:0xa1e55acf84d66d4e!8m2!3d14.3528496!4d100.6723384?hl=en"
                        >
                          แผนที่
                          <svg xmlns="http://www.w3.org/2000/svg" className="ms-1" fill="#FFFFFF" width="14px" height="14px" viewBox="0 0 32 32" version="1.1">
                            <title>pin</title>
                            <path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"/>
                          </svg>
                        </a>
                      </div>
                      <div className="whText3">
                        45-46 ม.2 ต.อุทัย อ.อุทัย จ.พระนครศรีอยุธยา 13210
                        <br />
                        เนื้อที่คลังสินค้า: 11,340 ตร.ม.
                      </div>
                    </div>

                    <div className="" id="whMap2">
                      <div className="branchesTitle">
                        บางปะกง 38
                        <a
                          className="absolute right-0 top-1 h-6 text-white bg-[#1c2e50] text-sm flex justify-center p-1 hover:bg-orange-400"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.co.th/maps/place/13%C2%B033'55.4%22N+100%C2%B056'05.5%22E/@13.5659881,100.9367314,16z/data=!4m5!3m4!1s0x0:0x0!8m2!3d13.5653889!4d100.9348611?hl=en"
                        >
                          แผนที่
                          <svg xmlns="http://www.w3.org/2000/svg" className="ms-1" fill="#FFFFFF" width="14px" height="14px" viewBox="0 0 32 32" version="1.1">
                            <title>pin</title>
                            <path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"/>
                          </svg>
                        </a>
                      </div>
                      <div className="whText3">
                        68/8 ม.5 ถ.บางนา-ตราด กม.38 ต.บางสมัคร <br />
                        อ.บางปะกง จ.ฉะเชิงเทรา 24180
                        <br />
                        เนื้อที่คลังสินค้า : 14,700 ตร.ม.　
                      </div>
                    </div>

                    <div className="" id="whMap3">
                      <div className="branchesTitle">
                        บางปะกง 41
                        <a
                          className="absolute right-0 top-1 h-6 text-white bg-[#1c2e50] text-sm flex justify-center p-1 hover:bg-orange-400"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.co.th/maps/place/Siam+Nistrans+Company+Limited/@13.5535049,100.9557077,17z/data=!3m1!4b1!4m5!3m4!1s0x311d47152a59de19:0x42658e940b1f071c!8m2!3d13.5535049!4d100.9579017?hl=en"
                        >
                          แผนที่
                          <svg xmlns="http://www.w3.org/2000/svg" className="ms-1" fill="#FFFFFF" width="14px" height="14px" viewBox="0 0 32 32" version="1.1">
                            <title>pin</title>
                            <path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"/>
                          </svg>
                        </a>
                      </div>
                      <div className="whText3">
                        100/2 ม.6 ถ.บางนา-ตราด กม.41 ต.บางวัว <br />
                        อ.บางปะกง จ.ฉะเชิงเทรา 24130
                        <br />
                        เนื้อที่คลังสินค้า: 8,833 ต.รม.
                      </div>
                    </div>

                    <div className="" id="whMap4">
                      <div className="branchesTitle">
                        ปราจีนบุรี (โรจนะ)
                        <a
                          className="absolute right-0 top-1 h-6 text-white bg-[#1c2e50] text-sm flex justify-center p-1 hover:bg-orange-400"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.com/maps/place/Siam+Nistrans+Co.,+Ltd.+(Prachinburi+Branch)/@13.8418361,101.5166113,15z/data=!4m5!3m4!1s0x311cfbe140032eff:0xbf67690823fe6336!8m2!3d13.8399378!4d101.5227106?hl=en"
                        >
                          แผนที่
                          <svg xmlns="http://www.w3.org/2000/svg" className="ms-1" fill="#FFFFFF" width="14px" height="14px" viewBox="0 0 32 32" version="1.1">
                            <title>pin</title>
                            <path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"/>
                          </svg>
                        </a>
                      </div>
                      <div className="whText3">
                        82 ม.9 ต.หนองโพรง อ.ศรีมหาโพธิ จ.ปราจีนบุรี 25140
                        <br />
                        เนื้อที่คลังสินค้า : 9,072 ตร.ม.
                      </div>

                    </div>

                    {/* Warehouse 6 */}
                    <div className="" id="whMap6">
                      <div className="branchesTitle">
                        แหลมฉบัง
                        <a
                          className="absolute right-0 top-1 h-6 text-white bg-[#1c2e50] text-sm flex justify-center p-1 hover:bg-orange-400"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.co.th/maps/place/Siam+Nistrans+Co.,LTD.+(Branch+5)/@13.1242826,100.9806238,17z/data=!3m1!4b1!4m5!3m4!1s0x3102c80041147bab:0xab586e27f921ce73!8m2!3d13.1242826!4d100.9823652?hl=en"
                        >
                          แผนที่
                          <svg xmlns="http://www.w3.org/2000/svg" className="ms-1" fill="#FFFFFF" width="14px" height="14px" viewBox="0 0 32 32" version="1.1">
                            <title>pin</title>
                            <path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"/>
                          </svg>
                        </a>
                      </div>
                      <div className="whText3">
                        2/10 ม.1 ต.หนองขาม อ.ศรีราชา จ.ชลบุรี 20110
                        <br />
                        เนื้อที่คลังสินค้า : 12,800 ตรม.
                      </div>

                    </div>

                    {/* Warehouse 7 */}
                    <div className="" id="whMap7">
                      <div className="branchesTitle">
                        เชียงใหม่
                        <a
                          className="absolute right-0 top-1 h-6 text-white bg-[#1c2e50] text-sm flex justify-center p-1 hover:bg-orange-400"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.com/maps/place/Siam+Nistrans+Lamphun/@18.608326,99.0417674,19z/data=!3m1!4b1!4m12!1m6!3m5!1s0x30da2d3c679c6357:0xad3774ccf93dafd2!2sCTP+DC+Warehouse+Factory!8m2!3d18.6084051!4d99.0425365!3m4!1s0x30da2dd23428755d:0x6159f2cf1e7cd71c!8m2!3d18.608326!4d99.0423146?hl=en"
                        >
                          แผนที่
                          <svg xmlns="http://www.w3.org/2000/svg" className="ms-1" fill="#FFFFFF" width="14px" height="14px" viewBox="0 0 32 32" version="1.1">
                            <title>pin</title>
                            <path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"/>
                          </svg>
                        </a>
                      </div>
                      <div className="whText3">
                        177 หมู่ 13 ต.มะเขือแจ้ อ.เมือง จ.ลำพูน 51000
                        <br />
                        เนื้อที่คลังสินค้า : 5,650 ตรม.
                      </div>

                    </div>

                    {/* Warehouse 8 */}
                    <div>
                      <div className="branchesTitle">
                        คลังสินค้าอันตราย
                        <a
                          className="absolute right-0 top-1 h-6 text-white bg-[#1c2e50] text-sm flex justify-center p-1 hover:bg-orange-400"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://goo.gl/maps/qHAf9knNkXaEj95R6"
                        >
                          แผนที่
                          <svg xmlns="http://www.w3.org/2000/svg" className="ms-1" fill="#FFFFFF" width="14px" height="14px" viewBox="0 0 32 32" version="1.1">
                            <title>pin</title>
                            <path d="M4 12q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016q0 1.376-0.672 3.2t-1.696 3.68-2.336 3.776-2.56 3.584-2.336 2.944-1.728 2.080l-0.672 0.736q-0.256-0.256-0.672-0.768t-1.696-2.016-2.368-3.008-2.528-3.52-2.368-3.84-1.696-3.616-0.672-3.232zM8 12q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"/>
                          </svg>
                        </a>
                      </div>
                      <div className="whText3">
                        T-park บางนา WH DG 6/2 70/2 หมู่ที่ 5 ตำบลบางสมัคร
                        <br />
                        อำเภอบางปะกง จังหวัดฉะเชิงเทรา 24180
                        <br />
                        เนื้อที่คลังสินค้า: 1,000 ตร.ม.
                      </div>
                      <img src="/img/service/warehouse/021.jpg" title="" alt="" />
                      
                    </div>

                  </div>
                </div>
              </div>

              
            </div>

            {/* Handling Box - Branches */}
            <div className="handlingBox">
              <div className="handlingTitle">สาขาที่ให้บริการ</div>
              <ul className="list-disc grid md:flex">
                <li className="ms-8 ps-0">พระนครศรีอยุธยา</li>
                <li className="ms-8 ps-0">บางปะกง</li>
                <li className="ms-8 ps-0">แหลมฉบัง</li>
                <li className="ms-8 ps-0">ปราจีนบุรี</li>
                <li className="ms-8 ps-0">เชียงใหม่</li>
                <li className="ms-8 ps-0">บางนา กม.39 DG</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>);
}
