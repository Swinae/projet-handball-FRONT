import { useEffect, useState } from 'react';
import { getNewsList } from '../../services/api/getNewsList';
import { NewData } from '../../services/interfaces/NewData';
import './NewsCarousel.css'

export function NewsCarousel(): JSX.Element  {

    const [news, setNews] = useState<NewData[]>([])

    useEffect(() => {
        async function loadNews() {
            const newsList: NewData[] = await getNewsList()
            setNews(newsList)
        }

        loadNews()
    }, [])

    const lastNews: NewData[]= news.slice(news.length - 5, news.length - 1).reverse()
    const lastNewsItem: NewData | undefined = news[news.length - 1]
    console.log(lastNewsItem);


    return (
        <div id="indicators-carousel" className="relative w-full mt-4 mb-8" data-carousel="static">
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-48 md:h-[600px] max-w-[800px] overflow-x-hidden m-auto">
                {/* <!-- Lastest piece of news : data-carousel-item="active"--> */}
                <div className="hidden duration-700 ease-in-out max-w-[800px]" data-carousel-item="active">
                    
                    {/* !!!! width de l'image harcodé pour que ça fonctionne avec le faker, A CHANGER AVEC LA DB !!! */}
                    <img src={lastNewsItem?.img} className="block w-[800px]" alt="..." />
                    <h2 className="text-4xl">{lastNewsItem?.title}</h2>
                    <p>{lastNewsItem?.description}</p>
                </div>

                {/* <!-- Other 4 last news --> */}
                {lastNews.map((newsItem: NewData, index: number) =>
                (
                    <div className="hidden duration-700 ease-in-out max-w-[800px]" data-carousel-item key={index}>
                        
                        {/* !!!! width de l'image harcodé pour que ça fonctionne avec le faker, A CHANGER AVEC LA DB !!! */}
                        <img src={newsItem.img} className="block w-[800px]" alt="..." />
                        <h2 className="text-4xl">{newsItem.title}</h2>
                        <p className='line-clamp-2'>{newsItem.description}</p>
                    </div>
                ))
                }

                <button type="button" className="absolute top-0 start-[10%] z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-[10%] z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            {/* <!-- Slider indicators --> */}
            <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom--5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full indicator" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full indicator" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full indicator" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full indicator" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full indicator" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            {/* <!-- Slider controls --> */}

        </div>

    );
}
