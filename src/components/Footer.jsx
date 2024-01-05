import { FaLocationDot } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { MdOutlineQrCode2 } from "react-icons/md";
function Footer() {
  return (
    <div className="bg-[#f3b017]">
      <div className="align-element sm:flex-row flex-col flex sm:items-start items-center justify-between py-4">
        <div className="font-bold max-w-96 mb-8 text-[#113c58] text-lg">
          <p className="text-2xl text-center mb-7">Bizning manzillar:</p>
          <ul className="mb-5">
            <li className="flex items-center gap-3">
              <FaLocationDot /> Qumtepa M.F.Y , B.Marg'iloniy ko'chasi 66-uy
            </li>
            <li className="flex items-center gap-3">
              <TbTargetArrow />
              2-IDUMI
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt /> 91 125-99-77
            </li>
          </ul>
          <ul>
            <li className="flex items-center gap-3">
              <FaLocationDot /> Beshkapa M.F.Y ,Ravnaq ko'chasi 76-uy
            </li>
            <li className="flex items-center gap-3">
              <TbTargetArrow />
              46-maktab
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt /> 93 397-44-94
            </li>
          </ul>
        </div>
        <div className="font-bold h-full max-w-96 text-[#113c58] text-xl">
          <p className="text-2xl  mb-7 ">Ijtimoiy tarmoq uchun</p>
          <ul className="flex flex-col gap-9">
            <li className="flex items-center gap-3">
              <FaTelegram /> https://t.me/Nobeleducenter
            </li>
            <li className="flex items-center gap-3">
              <MdOutlineQrCode2 />
              <img
                src="./public/nobel_qr.jpg"
                alt=""
                width={"100px"}
                height={"100px"}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
