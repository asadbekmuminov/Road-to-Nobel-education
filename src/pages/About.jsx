import { FaCheck } from "react-icons/fa";

function About() {
  return (
    <div>
      {/* ABOUT IMG SART */}
      <div className="diff mt-10 mb-16 rounded-3xl aspect-[16/9]">
        <div className="diff-item-1">
          <img alt="" src="/9.jpg" />
        </div>
        <div className="diff-item-2">
          <img alt="" src="/14.jpg" />
        </div>
        <div className="diff-resizer"></div>
      </div>
      {/* ABOUT IMG END */}
      {/* ABOUT INFO LIST SATART */}
      <div className=" mb-8">
        <p className="text-3xl sm:text-4xl mb-5 font-extrabold text-[#f3b017]">
          Farzandingiz kelajagi borasida biz bilan hamkorlik qilishingiz uchun 5
          ta sababni keltirib o'tamiz:{" "}
        </p>
        <ul className="flex flex-col gap-5">
          <li className="text-lg sm:text-3xl flex  items-center gap-5 font-bold ">
            <FaCheck className="text-xl" />
            <p className=" text-[#fff]">Bilim kafolati📈</p>
          </li>
          <li className="text-lg sm:text-3xl flex  items-center gap-5 font-bold ">
            <FaCheck className="text-xl" />
            <p className=" text-[#fff]">Intelektual musobaqalar📚</p>
          </li>
          <li className="text-lg sm:text-3xl flex  items-center gap-5 font-bold ">
            <FaCheck className="text-xl" />
            <p className=" text-[#fff]">
              Taklif-shikoyatlarni bilidirish imkoniyati🤝
            </p>
          </li>
          <li className="text-lg sm:text-3xl flex  items-center gap-5 font-bold ">
            <FaCheck className="text-xl" />
            <p className=" text-[#fff]">
              Intiluvchanlik evaziga pul tejash imkoniyati🎗️
            </p>
          </li>
          <li className="text-lg sm:text-3xl flex  items-center gap-5 font-bold ">
            <FaCheck className="text-xl" />
            <p className=" text-[#fff]">Albatta,shijoatli ustozlar📌</p>
          </li>
        </ul>
      </div>
      {/* ABOUT INFO LIST END */}
      {/* ABOUT INFO START */}
      <div className="flex flex-col gap-5 mb-10">
        <p className="text-3xl sm:text-4xl mb-5 font-extrabold text-[#f3b017]">
          Quyida sizga bunday afzalliklarni nima uchun ishonch bilan
          aytayotganimizni qisqacha tushintirib o'tamiz:
        </p>
        <div
          tabIndex={0}
          className="collapse bg-[#f3b017]  text-white focus:bg-white focus:text-black"
        >
          <div className="collapse-title font-extrabold text-2xl">
            Bilim uchun beriladigan kafolat!
          </div>
          <div className="collapse-content">
            <p>
              "Road to Nobel" o'quv markazi jamoasi kuzatishlar natijasidan
              kelib chiqqan holda yangi yil uchun yangi o'quv dasturini sizlarga
              taqdim qilmoqchi.Endi o'quvchilar ma'lum vaqt davomida bilim
              olishadi.Ya'ni biz fanlarni mavzulashtirilgan kurs shakliga
              keltirdik.Bu dastur test shaklida boʻlganligi sababli, hozircha
              matematika,ingliz tili fanlariga hamda FRONT-END dasturlash
              yoʻnalishiga tadbiq qildik.Kurs davomida o'quvchilarga bir oy
              hisobida 12 ta dars mashg'uloti o'tish rejalashtirilgan.12-darsda
              esa o'tilganlar yuzasidan imtihon jarayoni amalga
              oshiriladi.(Imtihon shaklini ustozning o'zi belgilaydi).Imtihondan
              o'ta olgan o'quvchi keyingi oyni o'zlashtirish uchun tavsiya
              qilinadi.Aks holda,imtiyoz asosida yaxshi o'zlashtira olmagan
              oyini qaytadan o'qishi mumkin bo'ladi.Bu bilan biz,
              oʻquvchilarnining har oylik oʻquv dasturini yuqori darajada
              o'zlashtirishlariga erishamiz.Natijada kurs ohiriga borib,bizda
              o'zlashtirishi past bo'lgan o'quvchining o'zi bo'lmaydi:)
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse bg-[#f3b017]  text-white focus:bg-white focus:text-black"
        >
          <div className="collapse-title font-extrabold text-2xl">
            O'quvchilar o'rtasida(ba'zida barcha uchun ochiq bo'lgan)
            musobaqalar
          </div>
          <div className="collapse-content">
            <p>
              O'quv markaz jamoasi va homiylar tomonidan turli xil
              musobaqalar,zakovat o'yinlari,kitobxonlik tanlovlari,quvnoq
              startlar musobaqalari o'tkazilishi rejalashtirilgan."Kitobxonlik"
              musobaqasini misol tariqasida oladigan bo'lsak,bunda dastlab
              o'uvchilar biz taqdim etgan kitoblardan birini so'rovnoma
              ko'rinishida tanlashadi.Shundan so'ng,bir oy(kitob
              hajmiga,saviyasiga qarab vaqt o'zgarishi mumkin) davomida kitobni
              o'qish jarayoni ketadi.Muddat tugagach,o'quvchilar chaqiriladi
              hamda davra suhbati tashkil etiladi.O'quvchilar o'zaro kitob
              yuzasidan fikrlarini aytishadi,bahs-munozara qilishadi hamda
              o'zlari uchun xulosalar chiqarishadi.Yakunda eng yaxshi fikrlar
              bildirgan o'quvchi taqdirlanadi.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse bg-[#f3b017]  text-white focus:bg-white focus:text-black"
        >
          <div className="collapse-title font-extrabold text-2xl">
            Har oyda anonim so'rovnomalar tashkil qilish
          </div>
          <div className="collapse-content">
            <p>
              Markaz faoliyatini yaxshilash hamda o'quvchilar va ularning
              ota-onalari bilan doimiy hamkorlik qilish maqsadida har oyda
              anonim so'rovnomalar tashkil qilish ham maqsad qilib olingan.Bunda
              o'quv jarayoni,tashkiliy jarayonlar,taklif-shikoyatlar va
              fikr-mulohazalarni bildirish mumkin bo'ladi.Bundan tashqari har
              bir shakllangan guruhga Telegram ijimoiy tarmog'ida ham guruh
              shakllantiriladi.Bu guruhga ustoz va oʻquvchilardan tashqari,
              oʻquv hamda imtihon jarayonlari uchun masʼul boʻlgan shaxslar ham
              biriktiriladi.Bu esa, muammo yuzaga chiqqan taqdirda
              toʻgʻridan-toʻgʻri masʼullarga bogʻlanish imkonini yaratadi
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse bg-[#f3b017]  text-white focus:bg-white focus:text-black"
        >
          <div className="collapse-title font-extrabold text-2xl">
            Bilimdan kelgan dastlabki foyda
          </div>
          <div className="collapse-content">
            <p>
              Biz bilamiz,ba'zi o'quvchilar tabiatan aqlli,uddaburon
              bo'lishadi.Bunday o'quvchilar tengdoshlariga qaraganda bilimlarni
              ancha tez o'zlashtirishadi.Maktabda bunday bolalar tengdoshlari
              bilan bir holatda o'qishga majbur.Bizning yangi dasturimizda esa
              bunday emas.Agar o'quvchi darslarni vaqtida
              o'zlashtirib,imtihonlarni a'lo baholarga topshirsa,keyingi
              bosqichga o'tish imkoni bo'ladi.Bu esa siz aziz ota-onalar uchun
              ham mablag'ingizning tejalishiga olib keladi.Farzandingiz 6 oylik
              kursni muvaffaqiyat bilan tamomlasa,tabiiyyki siz bir qancha
              xarajatlardan holi bo'lgan bo'lasiz
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse bg-[#f3b017]  text-white focus:bg-white focus:text-black"
        >
          <div className="collapse-title font-extrabold text-2xl">
            Tajriba hamda chanqoqlik uyg'unligi
          </div>
          <div className="collapse-content">
            <p>
              Markaz ustozlarining aksariyat qismini talabalar yokida endigina
              oliygohni tamomlagan ustozlar tashkil etadi.Bu bilan jamoada
              o'ziga xos turfa hillik vujudga keladi.Yangicha qarashlar,yangi
              tashabbuslar aynan yosh o'qituvchilardan ko'proq
              chiqadi.Albatta,biz uzoq yillik ustozlarimizni hurmat
              qilamiz.Tajriba doim muhim bo'lgan.Ammo,ko'nglimiz
              to'qki,ustozlarimizning ortlarida tog'dek ustozlari tirgaklar :)
            </p>
          </div>
        </div>
      </div>
      {/* ABOUT INFO END */}
    </div>
  );
}

export default About;
