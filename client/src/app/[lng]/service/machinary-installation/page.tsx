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
      <div className="container mx-auto pb-10 text-black py-10">
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

          <div className="macInsTextRotate">
            <ul>
              <li>
                <span>ขนย้ายเครื่องจักรออกจากพื้นที่</span>
              </li>
              <li>
                <img
                  src="../images/arrowR-5.jpg"
                  alt="Machinery Installation"
                />
              </li>
              <li>
                <span>บรรจุ</span>
              </li>
              <li>
                <img
                  src="../images/arrowR-5.jpg"
                  alt="Machinery Installation"
                />
              </li>
              <li>
                <span>พิธีการศุลกากร</span>
              </li>
              <li>
                <img
                  src="../images/arrowR-5.jpg"
                  alt="Machinery Installation"
                />
              </li>
              <li>
                <span>ขนส่งระหว่างประเทศ</span>
              </li>
              <li>
                <img
                  src="../images/arrowR-5.jpg"
                  alt="Machinery Installation"
                />
              </li>
              <li>
                <span>พิธีการศุลกากร</span>
              </li>
              <li>
                <img
                  src="../images/arrowR-5.jpg"
                  alt="Machinery Installation"
                />
              </li>
              <li>
                <span>จัดส่ง</span>
              </li>
              <li>
                <img
                  src="../images/arrowR-5.jpg"
                  alt="Machinery Installation"
                />
              </li>
              <li>
                <span>บรรจุและขนย้ายเข้าพื้นที่</span>
              </li>
              <li>
                <img
                  src="../images/arrowR-5.jpg"
                  alt="Machinery Installation"
                />
              </li>
              <li>
                <span>ติดตั้ง</span>
              </li>
            </ul>
          </div>

          <img
            src="../images/machinery-installation/007.jpg"
            className="img-responsive"
            style={{ marginBottom: "100px" }}
            alt="Machinery Installation"
          />

          <div className="picRow1">
            <div className="row">
              <div className="col-xs-4">
                <img
                  src="../images/machinery-installation/001.jpg"
                  className="img-responsive"
                  alt="Machinery Installation"
                />
                <div className="macInsText1">
                  สภาพการดำเนินงานบรรจุภัณฑ์
                  <br />
                  โดยพนักงาน
                </div>
              </div>
              <div className="col-xs-4">
                <img
                  src="../images/machinery-installation/002.jpg"
                  className="img-responsive"
                  alt="Machinery Installation"
                />
                <div className="macInsText1">
                  ดำเนินงานบรรจุภัณฑ์ให้เหมาะสม
                  <br />
                  ตามประเภทของเครื่องจักร
                </div>
              </div>
              <div className="col-xs-4">
                <img
                  src="../images/machinery-installation/003.jpg"
                  className="img-responsive"
                  alt="Machinery Installation"
                />
                <div className="macInsText1" style={{ padding: "18px 0" }}>
                  งานบรรจุเข้าตู้คอนเทนเนอร์
                </div>
              </div>
              <div className="col-xs-4">
                <img
                  src="../images/machinery-installation/004.jpg"
                  className="img-responsive"
                  alt="Machinery Installation"
                />
                <div className="macInsText1">ขนส่งเครื่องจักรขนาดใหญ่</div>
              </div>
              <div className="col-xs-4">
                <img
                  src="../images/machinery-installation/005.jpg"
                  className="img-responsive"
                  alt="Machinery Installation"
                />
                <div className="macInsText1">ขนย้ายเครื่องจักรเข้าพื้นที่</div>
              </div>
              <div className="col-xs-4">
                <img
                  src="../images/machinery-installation/006.jpg"
                  className="img-responsive"
                  alt="Machinery Installation"
                />
                <div className="macInsText1">งานติดตั้ง</div>
              </div>
            </div>
          </div>

          <div className="handlingBox">
            <div className="handlingTitle">สาขาที่ให้บริการ</div>
            <div className="handlingList">
              <table>
                <tbody>
                  <tr>
                    <td>・พระนครศรีอยุธยา</td>
                    <td>・บางปะกง</td>
                    <td>・แหลมฉบัง</td>
                    <td>・ปราจีนบุรี</td>
                    <td>・เชียงใหม่</td>
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
