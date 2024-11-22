import { FaRegFilePdf } from "react-icons/fa";

export default function NewsCard() {
  return (
    <div className="bg-white p-4 rounded-md text-sm text-slate-700">
      <div className="grid grid-cols-12">
        <div className="col-span-2">2023.09.05</div>
        <div className="col-span-8 border-l border-slate-200 px-2">
          <span className="bg-slate-700 rounded-xl px-1 py-1 text-xs text-white me-1">
            ประกาศ
          </span>
          ข่าวสารใหม่ล่าสุด อยคห้่ก่าหด้
        </div>
        <div className="col-span-1">
          <FaRegFilePdf size={25} />
        </div>
      </div>
    </div>
  );
}
