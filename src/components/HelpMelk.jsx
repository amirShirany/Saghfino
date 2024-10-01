import Rectangle_51 from "../assets/images/noemelk/Rectangle_51.svg"
import Rectangle_52 from "../assets/images/noemelk/Rectangle_52.svg"
import Rectangle_53 from "../assets/images/noemelk/Rectangle_53.svg"
import Rectangle_54 from "../assets/images/noemelk/Rectangle_54.svg"

const itemWork = [
  {
    id: 1,
    picItem: Rectangle_51,
    meter: 28.9,
    Title: "خانه مسکونی",
  },
  {
    id: 2,
    picItem: Rectangle_52,
    meter: 309.798,
    Title: "آپارتمان و برج",
  },
  {
    id: 3,
    picItem: Rectangle_53,
    meter: 946,
    Title: "ویلا",
  },
  {
    id: 3,
    picItem: Rectangle_54,
    meter: 27.339,
    Title: "تجاری و اداری",
  },
]

function HelpMelk() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1224px]">
        <h2 className="mb-8 mt-[48px] lg:mt-[88px]">
          در سقفینو دنبال چه نوع ملکی هستید
        </h2>
        <div className="overflow-x-auto">
          <div className="flex justify-center gap-x-4 lg:gap-x-6 h-[214px] w-[350px] lg:h-[340px] md:w-[720px] lg:w-[1224px]">
            {itemWork.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-[156px] lg:w-[288px] text-center border border-Gr5 bg-Gr2 rounded-lg"
                >
                  <div className="w-[156px] h-[145px] lg:w-[287px] lg:h-[239px]">
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

export default HelpMelk
