import { GoDotFill } from "react-icons/go";
function Contact() {
  return (
    <div>
      {/* KURSLAR START */}
      <p className="text-2xl text-center sm:text-3xl mt-10 mb-5 font-extrabold text-[#f3b017]">
        Bizning "Road to Nobel" o'quv markazimizda hozirda quyidagi fanlarga
        qabul jarayonlari amalda(Kurs davomiyligi yozilgan fanlar test
        holatidagi fanlar hisoblanadi.Jarayon davomida qolgan fanlar ham shunday
        holatga keltiriladi!)
      </p>
      {/* KURSLAR END */}

      {/* KURSLAR FANLAR START */}
      <div className="flex-row justify-between md:flex mb-5">
        <div className="mb-10">
          <ul className="flex flex-col gap-5 font-bold text-2xl text-white">
            <li className="flex items-center gap-5 ">
              <GoDotFill />
              <p> Matematika(6 oy)</p>
            </li>
            <li className="flex items-center gap-5 ">
              <GoDotFill />
              <p> Arab tili</p>
            </li>
            <li className="flex items-center gap-5 ">
              <GoDotFill />
              <p> Nemis tili</p>
            </li>
            <li className="flex items-center gap-5 ">
              <GoDotFill />
              <p> Ingliz tili (KIDS,6 oy)</p>
            </li>
            <li className="flex items-center gap-5 ">
              <GoDotFill />
              <p> Front-end dasturlash(6 oy)</p>
            </li>
            <li className="flex items-center gap-5 ">
              <GoDotFill />
              <p> Kompyuter savodxonligi(3 oy)</p>
            </li>
            <li className="flex items-center gap-5 ">
              <GoDotFill />
              <p> Mental arifmetika </p>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-5 font-bold text-2xl text-white">
            <li className="flex items-center gap-5 ">
              <GoDotFill />
              <p> Biologiya</p>
            </li>
            <li className="flex items-center gap-5 ">
              <GoDotFill />
              <p> Kimyo</p>
            </li>
            <li className="flex items-center gap-5 ">
              <GoDotFill />
              <p>Fizika</p>
            </li>
            <li className="flex items-center gap-5 ">
              <GoDotFill />
              <p> Geografiya</p>
            </li>
            <li className="flex items-center gap-5 ">
              <GoDotFill />
              <p> Ona tili adabiyot</p>
            </li>
            <li className="flex items-center gap-5 ">
              <GoDotFill />
              <p> Tarix-huquq</p>
            </li>
            <li className="flex items-center gap-5 ">
              <GoDotFill />
              <p> Ingliz tili (IELTS) </p>
            </li>
          </ul>
        </div>
      </div>
      {/* KURSLAR FANLAR END */}
      {/* KURSLAR CARUSEL START */}
      <div className="carousel bg-[#f3b017] mb-10 carousel-center rounded-box">
        <div className="carousel-item">
          <img
            src="./public/1.jpg"
            className="rounded-box object-cover "
            width={"300px"}
            height={"200px"}
          />
        </div>
        <div className="carousel-item">
          <img
            src="./public/3.jpg"
            className="rounded-box object-cover "
            width={"300px"}
            height={"200px"}
          />
        </div>
        <div className="carousel-item">
          <img
            src="./public/5.jpg"
            className="rounded-box object-cover "
            width={"300px"}
            height={"200px"}
          />
        </div>
        <div className="carousel-item">
          <img
            src="./public/6.jpg"
            className="rounded-box object-cover "
            width={"300px"}
            height={"200px"}
          />
        </div>
        <div className="carousel-item">
          <img
            src="./public/10.jpg"
            className="rounded-box object-cover "
            width={"300px"}
            height={"200px"}
          />
        </div>
        <div className="carousel-item">
          <img
            src="./public/11.jpg"
            className="rounded-box object-cover "
            width={"300px"}
            height={"200px"}
          />
        </div>
        <div className="carousel-item">
          <img
            src="./public/12.jpg"
            className="rounded-box object-cover "
            width={"300px"}
            height={"200px"}
          />
        </div>
        <div className="carousel-item">
          <img
            src="./public/15.jpg"
            className="rounded-box object-cover "
            width={"300px"}
            height={"200px"}
          />
        </div>
        <div className="carousel-item">
          <img
            src="./public/16.jpg"
            className="rounded-box object-cover "
            width={"300px"}
            height={"200px"}
          />
        </div>
        <div className="carousel-item">
          <img
            src="./public/17.jpg"
            className="rounded-box object-cover "
            width={"300px"}
            height={"200px"}
          />
          <div className="carousel-item">
            <img
              src="./public/19.jpg"
              className="rounded-box object-cover "
              width={"300px"}
              height={"200px"}
            />
          </div>
          <div className="carousel-item">
            <img
              src="./public/21.jpg"
              className="rounded-box object-cover "
              width={"300px"}
              height={"200px"}
            />
          </div>
          <div className="carousel-item">
            <img
              src="./public/22.jpg"
              className="rounded-box object-cover "
              width={"300px"}
              height={"200px"}
            />
          </div>
        </div>
      </div>
      {/* KURSLAR CARUSEL END */}
    </div>
  );
}

export default Contact;
