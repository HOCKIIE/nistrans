import Link from "next/link";
import Image from "next/image";

export function Logo({ color, img }: any) {
  return (
    <div className="logo">
      <Link href="/" className="_links">
        {/* {img && ( */}
        <Image
          src={
            img
              ? `${process.env.NEXT_PUBLIC_BASE_URL}${img}`
              : "/img/logo-top.jpg"
          }
          alt="Siam nistrans"
          width={200}
          height={200}
        />
        {/* )} */}
      </Link>
    </div>
  );
}
