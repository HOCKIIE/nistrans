import type { Metadata, ResolvingMetadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/website/layout/Header";
import Footer from "@/components/website/layout/Footer";
import PageSettingProvider from "@/contexts/PageSettingContext";
import { Kanit, Roboto } from "next/font/google";
import { ConfigProvider } from "antd";
import "./../../css/all.scss"

import Favicon from "../icon.ico";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});

// export const metadata: Metadata = {
//   title: "YMC Translation",
//   description: "YMC Translation",
// };
const pageName = "home";
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lng = "TH";

  const seoRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/seo/page-name/${pageName}`;

  // fetch data
  const response = await fetch(seoRoute, { cache: "no-store" }).then((res) =>
    res.json()
  );

  return {
    metadataBase: new URL("https://siam-nistrans.com"),
    title: response[`seoTitle${lng}`],
    description: response[`seoDescription${lng}`],
    keywords: response[`seoKeyword${lng}`],
    alternates: {
      canonical: "./",
    },
    icons: [{ rel: "icon", url: Favicon.src }],
  };
}
const fetchContact = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/contactinfo`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
export default async function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  const contact = await fetchContact();
  return (
    <html lang={lng} dir={dir(lng)}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: kanit.style.fontFamily,
          },
          components: {
            Pagination: {
              colorPrimary: "red",
              colorPrimaryHover: "red",
              borderRadius: 60,
              colorBgTextHover: "white",
            },
          },
        }}
      >
        <PageSettingProvider>
          <body className={kanit.className}>
            <Header contact={contact} lng={lng}/>
            {children}
            <Footer contact={contact} lng={lng}/>
          </body>
        </PageSettingProvider>
      </ConfigProvider>
    </html>
  );
}
