import Character from "../assets/images/moshavere/Character.svg"
import Photo from "../assets/images/moshavere/Photo.svg"
import Worktimepana from "../assets/images/moshavere/Worktime-pana.svg"

const itemWork = [
  {
    id: 1,
    picItem: Character,
    Title: "امکان خرید و اجاره ملک در اکثر نقاط کشور",
  },
  {
    id: 2,
    picItem: Photo,
    Title: "مقایسه و بررسی صدها ملک، به‌راحتی و در کمترین زمان",
  },
  {
    id: 3,
    picItem: Worktimepana,
    Title: "ارتباط آسان با برترین املاک و مشاورین کشور",
  },
]

function Moshavere() {
  return (
    <div>
      <h2 className="lg:mt-[88px] mt-12 text-center">
        همه به شما مشاوره می دهدند!
      </h2>
      <p className="mb-5 text-center">
        اما در سقفینو مشاورین املاک کنار شما می‌مانند
      </p>

      <div className="flex flex-col items-center">
        <div className="overflow-x-auto">
          <div className="flex flex-row md:justify-evenly gap-x-4 lg:gap-x-6 h-[240px] w-[330px] lg:h-auto md:w-[720px] lg:w-[1224px]">
            {itemWork.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-[156px] lg:w-[288px] text-center border border-Gr5 bg-white rounded-lg"
                >
                  <div className="flex justify-center">
                    <img className="rounded-t-lg" src={item.picItem} />
                  </div>

                  <div className="lg:mb-8 mt-4 text-Gr10">
                    <p className="font-bold">{item.meter}</p>
                    <p className="text-base">{item.Title}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Moshavere
