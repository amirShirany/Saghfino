import Rectangle50 from "../assets/images/news/Rectangle50.svg"
import Rectangle51 from "../assets/images/news/Rectangle51.svg"
import Rectangle52 from "../assets/images/news/Rectangle52.svg"
import Rectangle53 from "../assets/images/news/Rectangle53.svg"
import ArrowSizes from "../assets/images/news/ArrowSizes.svg"
import { Card, CardBody, Image } from "@nextui-org/react"

const itemWork = [
  {
    id: 1,
    picItem: Rectangle50,
    Title:
      "رکود بازار مسکن؛فروشندگان در انتظار خریداران و خریداران در انتظار شکست نرخ فروشندگان",
  },
  {
    id: 2,
    picItem: Rectangle51,
    Title:
      "خطر ویرانی زلزله در آسمان‌خراش‌ها بیشتر است یا در آپارتمان‌های کم‌ارتفاع و یا خانه‌های",
  },
  {
    id: 3,
    picItem: Rectangle52,
    Title:
      "بازار کساد کسب و کار معماران داخلی در پی بالا رفتن قیمت مواد و متریال اولیه و مصالح خارجی",
  },
  {
    id: 3,
    picItem: Rectangle53,
    Title:
      "شهرک ساحلی زمزم در منطقه نور استان مازندران از سوم شهریور وارد بازار مزایده شده است. ",
  },
]

function News() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1224px]">
        <h2 className="mb-8 mt-[48px] lg:mt-[88px]">
          آخرین اخبار املاک را از سقفینو دنبال کنید
        </h2>
        <div className="flex items-center">
          <div className="overflow-x-auto">
            <div className="flex justify-center gap-x-4 lg:gap-x-6 w-[350px] md:w-[720px] lg:w-[1194px]">
              {itemWork.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-[242px] lg:w-[287px] border border-Gr5 bg-Gr2 rounded-xl"
                  >
                    <Card>
                      <CardBody className="overflow-visible">
                        <Image
                          radius="lg"
                          width="100%"
                          className="w-full object-cover h-[140px] rounded-t-xl"
                          src={item.picItem}
                        />
                      </CardBody>
                    </Card>
                    <div>
                      <p className="w-[194px] h-[32px] text-xs lg:text-xl font-bold overflow-hidden mx-6 mt-3 mb-6 text-Gr10 whitespace-nowrap overflow-ellipsis">
                        {item.Title}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="w-[62px] -mr-8 z-10">
            <img src={ArrowSizes} alt="Arrow-Left" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default News

{
  /* <div className="overflow-x-auto">
          <div className="flex justify-center gap-x-4 lg:gap-x-6 h-[214px] w-[350px] lg:h-[340px] md:w-[720px] lg:w-[1224px]">
            {itemWork.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-[242px] h-[213px] lg:w-[287px] border border-Gr5 bg-Gr2 rounded-xl"
                >
                  <card>
                    <img className="rounded-t-xl " src={item.picItem} />
                    <h2 className=" text-xs lg:text-xl overflow-hidden mx-6 mt-3 mb-6 text-Gr10 text-center w-[288px] h-[66px] overflow-ellipsis">
                      {item.Title}
                    </h2>
                  </card>
                </div>
              )
            })}
          </div>
        </div> */
}
