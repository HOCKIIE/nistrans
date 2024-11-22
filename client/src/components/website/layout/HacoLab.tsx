"use client";

import { ignore } from "antd/es/theme/useToken";
import Link from "next/link";
import { useEffect } from "react";

export default function HacoLab() {
  const bgImage = "/img/005.jpg";
  useEffect(()=>{
    // window.addEventListener("orientationchange", (event) => {
    //   if(screen.width >= 1280){
    //     //@ts-ignore
    //     document.querySelector('.bg-img').style.backgroundImage = `url(${bgImage})`;
    //   }else{
    //     document.querySelector('.bg-img')?.removeAttribute('style');
    //   }
    // });
    window.addEventListener("resize", (event) => {
      if(screen.width >= 1280){
        //@ts-ignore
        document.querySelector('.bg-img').style.backgroundImage = `url(${bgImage})`;
      }else{
        document.querySelector('.bg-img')?.removeAttribute('style');
      }
    })
  })
  return (
    <>
      <div className="homeWarehouse py-20">
        <div className="container mx-auto px-0 md:px-0 xl:px-40">
          <section
            className="wow fadeInUp"
            data-wow-offset="50"
            data-wow-delay="0.2s"
          >
            <div
              className="p-6 md:bg-no-repeat md:bg-contain bg-img"
              style={{
                backgroundImage: 'url("/img/005.jpg")'
              }}
            >
              <div className="grid grid-cols-12">
                <div className="col-span-12 xl:col-span-8">
                  <div className="text-white">
                    <div className="pb-10 flex justify-center items-center flex-col text-white gap-3">
                      <h2 className="text-2xl text-start border-bottom">
                        การควบคุมภาชนะบรรจุเพื่อขนส่งของ Siam Nistrans
                        <div className="mt-3 h-1 bg-orange-600 border-white-orange"></div>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-span-4"></div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-12 xl:col-span-8">
                  <div className="grid md:flex justify-center items-center" style={{height:'100%'}}>
                    <div>
                      <div className="text-orange-600 text-4xl mb-2 md:mb-0"> HACO Lab.</div>
                    </div>
                    <div className="flex">
                      <div className="text-white md:ms-4">
                        <div className="text-xl mb-2">
                          แก้ไขปัญหาการควบคุมภาชนะบรรจุเพื่อขนส่ง
                        </div>
                        HACO Lab. เป็นการผสาน "เทคโนโลยี" ใหม่" เข้ากับ "ภาชนะบรรจุ
                        <br className="hidden md:block"/>
                        เพื่อขนส่ง" เพื่อมุ่งแก้ไขปัญหาการขนส่งและกระจายสินค้า
                        ตลอดจน
                        <br className="hidden md:block"/>
                        เพื่อสร้างการบริการขนส่งและกระจายสินค้าแห่งอนาคต
                      </div>
                    </div>
                  </div>
                  </div>
                
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-12 xl:col-span-8">
                  <div className="grid md:grid-flow-col md:auto-cols-max md:justify-center">
                    <div className="p-4 text-whiteb mt-6 text-white">
                      <section className="flex flex-col items-center">
                        <img
                          src="/img/006.jpg"
                          alt="Control with smartphone"
                          className="img-responsive img-center"
                        />
                        <div className="homeWarehouseRowText">
                          เพียงดาวน์โหลดแอปพลิเคชัน
                          <br />
                          ก็ควบคุมได้ง่ายด้วย
                          <br />
                          สมาร์ทโฟนเครื่องเดียว
                        </div>
                      </section>
                    </div>

                    <div className="p-4 text-whiteb mt-6 text-white">
                      <section className="flex flex-col items-center">
                        <img
                          src="/img/007.jpg"
                          alt="Labeling containers for easy management"
                          className="img-responsive img-center"
                        />
                        <div className="homeWarehouseRowText">
                          ติดฉลากไว้ที่ภาชนะบรรจุเพื่อ
                          <br />
                          ขนส่งเพียงใช้สมาร์ทโฟนสแกน
                          <br />
                          ก็จัดการได้ง่ายดาย
                        </div>
                      </section>
                    </div>

                    <div className="p-4 text-whiteb mt-6 text-white">
                      <section className="flex flex-col items-center">
                        <img
                          src="/img/008.jpg"
                          alt="Cloud-based information control"
                          className="img-responsive img-center"
                        />
                        <div className="homeWarehouseRowText">
                          ควบคุมข้อมูลด้วยคลาวด์
                          <br />
                          ถ้ามีอินเทอร์เน็ตก็สามารถ
                          <br />
                          ดูข้อมูลจากที่ใดก็ได้
                        </div>
                      </section>
                    </div>
                  </div>

                </div>
              </div>
            
            </div>
          </section>
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
        </div>
      </div>
    </>
  );
}
