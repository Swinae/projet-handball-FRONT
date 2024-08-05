
import { Carousel, CustomFlowbiteTheme, Flowbite } from "flowbite-react";
import { NewData } from "../../services/interfaces/NewData";
import { useEffect, useState } from "react";
import { getNewsList } from "../../services/api/News";

export function NewsCarousel() {
  const customTheme: CustomFlowbiteTheme = {
    carousel: {
      control: {
        base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 group-hover:bg-gray-200/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10",
        icon: "text-white"
      },
      indicators: {
        active: {
          off: "bg-gray-300 bg-gray-200/50",
          on: "bg-gray-300/50"
        }
      }
    }
  };

  const [news, setNews] = useState<NewData[]>([])

  useEffect(() => {
    async function loadNews() {
      const newsList: NewData[] = await getNewsList()
      setNews(newsList)
    }
    loadNews()
  }, [])

  const reversedNewsOrder = (news.slice(news.length - 4, news.length - 1).reverse())

  return (
    <div className="h-[300px] sm:h-[400px] xl:h-[500px] 2xl:h-[600px]">
      <Flowbite theme={{ theme: customTheme }}>
        <Carousel>
          {reversedNewsOrder.map((newsItem: NewData, index: number) =>
            <div className="flex flex-col py-4 h-full max-w-[900px]" key={index}>
              <div className="w-full h-4/5 overflow-hidden">
                <img src={newsItem.img? newsItem.img:"/news_handball_player.jpg"} className="m-auto w-full object-contain" alt={`Image for the article ${newsItem.title}`} />
              </div>
              <div className="content">
                <h2 className="text-4xl">{newsItem.title}</h2>
                <p className='line-clamp-2'>{newsItem.content}</p>
              </div>
            </div>
          )
          }
        </Carousel>
      </Flowbite>
    </div>
  );
}
