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
    <div>
      <div className="flex justify-center">
        <div className="w-[1224px]">
          <h2 className="mt-[88px] mb-8">در سقفینو دنبال چه نوع ملکی هستید</h2>
          <div className="flex justify-center gap-x-6">
            {itemWork.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-full max-w-[288px] h-full max-h-[340px] text-center border border-Gr4 bg-Gr2 rounded-lg"
                >
                  <div className="w-[288px] h-[239px]">
                    <img src={item.picItem} />
                  </div>

                  <div className="mb-8 mt-4 text-Gr10">
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
