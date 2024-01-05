import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="py-2 bg-[#f3b017]">
      <div className="align-element flex justify-between">
        <Link to={"/"} className="btn  btn-ghost ">
          <p className="text-3xl  font-black text-[#113c58]">Nobel</p>
        </Link>

        <div className="dropdown md:hidden flex">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5  w-5 text-[#113c58] text-4xl"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-lg  right-0 top-14 dropdown-content mt-3 z-[1] font-bold text-[#113c58] p-2 shadow bg-[#f3b017] rounded-box w-52"
          >
            <Link to={"/"}>
              <a>Bosh sahifa</a>
            </Link>
            <Link to={"about"}>
              <a>Biz haqimizda</a>
            </Link>
            <Link to={"contact"}>
              <a>Mavjud kurslar</a>
            </Link>
          </ul>
        </div>
        <div className="navigation md:flex hidden  items-center">
          <ul className="flex  gap-5 items-center text-xl font-bold text-[#113c58] ">
            <Link
              className="duration-500 px-3 py-2 rounded-xl hover:text-white hover:bg-[#2f5c7a] "
              to={"/"}
            >
              <a>Bosh sahifa</a>
            </Link>
            <Link
              className="duration-500 px-3 py-2 rounded-xl hover:text-white hover:bg-[#2f5c7a] "
              to={"about"}
            >
              <a>Biz haqimizda</a>
            </Link>
            <Link
              className="duration-500 px-3 py-2 rounded-xl hover:text-white hover:bg-[#2f5c7a] "
              to={"contact"}
            >
              <a>Mavjud kurslar</a>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
