import React from "react";

function Home() {
  return (
    <>
      {/* //HERO START */}
      <div className="flex md:flex-row flex-col gap-5 mb-6 pt-10 justify-between">
        <div className="max-w-lg">
          <p className="text-[#f3b017] font-black md:text-6xl text-4xl pt-6 mb-10">
            "Road to Nobel" bilan farzandingizni "Nobel" sari yetaklang!
          </p>
        </div>
        <div className="carousel carousel-center md:mx-0 mx-auto max-w-sm p-4 mb-9 space-x-4 bg-[#f3b017] rounded-box">
          <div className="carousel-item ">
            <img
              src="/7.jpg"
              className="rounded-box object-cover "
              width={"250px"}
              height={"150px"}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/4.jpg"
              className="rounded-box object-cover "
              width={"250px"}
              height={"150px"}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/15.jpg"
              className="rounded-box object-cover "
              width={"250px"}
              height={"150px"}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/16.jpg"
              className="rounded-box object-cover "
              width={"250px"}
              height={"150px"}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/18.jpg"
              className="rounded-box object-cover "
              width={"250px"}
              height={"150px"}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/19.jpg"
              className="rounded-box object-cover "
              width={"250px"}
              height={"150px"}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/21.jpg"
              className="rounded-box object-cover "
              width={"250px"}
              height={"150px"}
            />
          </div>
        </div>
      </div>
      {/* //HERO END  */}

      {/* //DIFF START */}
      <div className="diff rounded-2xl aspect-[16/9] mb-10">
        <div className="diff-item-1">
          <div className="bg-[#f3b017] text-[#113c58]  md:text-8xl text-4xl sm:text-5xl font-black grid place-content-center">
            Road to Nobel
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-[#fff] text-[#f3b017] md:text-8xl text-4xl sm:text-5xl font-black grid place-content-center">
            Road to Nobel
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
      {/* //DIFF END   */}

      {/* HERO BG IMAGE START */}
      <div
        className="hero min-h-screen mb-10"
        style={{
          backgroundImage: "url(/nobel-logo.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="flex flex-col gap-5">
          <p className="text-4xl max-w-xl text-center font-bold text-[#fff]">
            "Road to Nobel" jamoasi ushbu reja asosida ishlaydi!🫡
          </p>
          <div className="hero-content text-center  text-neutral-content">
            <button
              className="btn  text-xl font-bold text-black h-16  btn-info  w-80"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              TARBIYA
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box bg-[#f3b017]">
                <form method="dialog">
                  <button className="btn btn-sm  absolute right-2 top-2">
                    ✕
                  </button>
                </form>

                <p className="py-4 text-xl font-bold text-[#113c58]">
                  Tarbiya ta'limdan ustun turadi. Insonni tarbiya voyaga
                  yetkazadi. <br /> (G.Spenser)
                </p>
              </div>
            </dialog>
          </div>
          <div className="hero-content text-center  text-neutral-content">
            <button
              className="btn  text-xl font-bold text-black h-16  btn-error w-80"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              INTIZOM
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box bg-[#f3b017]">
                <form method="dialog">
                  <button className="btn btn-sm  absolute right-2 top-2">
                    ✕
                  </button>
                </form>

                <p className="py-4 text-xl font-bold text-[#113c58]">
                  Hayotda muvaffaqiyatga erishish uchun uch narsa kerak:diqqat,
                  intizom va harakat. <br />
                  (Jaloliddin Rumiy)
                </p>
              </div>
            </dialog>
          </div>
          <div className="hero-content text-center  text-neutral-content">
            <button
              className="btn   text-xl font-bold text-black h-16  btn-warning w-80"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              TA'LIM
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box bg-[#f3b017]">
                <form method="dialog">
                  <button className="btn btn-sm  absolute right-2 top-2">
                    ✕
                  </button>
                </form>

                <p className="py-4 text-xl font-bold text-[#113c58]">
                  Haqiqiy ta'lim odamni odamiylikka tayyorlashdir <br />{" "}
                  (N.I.pirogov)
                </p>
              </div>
            </dialog>
          </div>
          <div className="hero-content text-center  text-neutral-content">
            <button
              className="btn text-xl font-bold text-black h-16  btn-success w-80"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              MUVAFFAQIYAT
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box bg-[#f3b017]">
                <form method="dialog">
                  <button className="btn btn-sm  absolute right-2 top-2">
                    ✕
                  </button>
                </form>

                <p className="py-4 text-xl font-bold text-[#113c58]">
                  Bu dunyoda muvaffaqiyatga erishgan odamlar - zarur narsalarni
                  qidiradilar, agar topa olmasalar o'zlari uni yaratadilar.{" "}
                  <br /> (Bernard Shou)
                </p>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      {/* HERO BG IMAGE END */}
    </>
  );
}

export default Home;
