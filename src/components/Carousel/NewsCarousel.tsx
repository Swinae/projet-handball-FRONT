export function NewsCarousel() {
    return (
        <div id="indicators-carousel" className="relative w-full mt-4 mb-8" data-carousel="static">
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-48 md:h-[600px] max-w-[800px] overflow-x-hidden m-auto">
                {/* <!-- Item 1 --> */}
                <div className="hidden duration-700 ease-in-out max-w-[800px]" data-carousel-item="active">
                    <img src="../../../news_handball_player.jpg" className="block " alt="..." />
                    <h2 className="text-4xl">test</h2>
                    <p>test 2</p>
                </div>
                {/* <!-- Item 2 --> */}
                <div className="hidden duration-700 ease-in-out max-w-[800px]" data-carousel-item>
                    <img src="../../../news_handball_player.jpg" className="block " alt="..." />
                    <h2 className="text-4xl">test</h2>
                    <p>test 2</p>
                </div>
                {/* <!-- Item 3 --> */}
                <div className="hidden duration-700 ease-in-out max-w-[800px]" data-carousel-item>
                    <img src="../../../news_handball_player.jpg" className="block " alt="..." />
                    <h2 className="text-4xl">test</h2>
                    <p>test 2</p>
                </div>
                {/* <!-- Item 4 --> */}
                <div className="hidden duration-700 ease-in-out max-w-[800px]" data-carousel-item>
                    <img src="../../../news_handball_player.jpg" className="block " alt="..." />
                    <h2 className="text-4xl">test</h2>
                    <p>test 2</p>
                </div>
                {/* <!-- Item 5 --> */}
                <div className="hidden duration-700 ease-in-out max-w-[800px]" data-carousel-item>
                    <img src="../../../news_handball_player.jpg" className="block " alt="..." />
                    <h2 className="text-4xl">test</h2>
                    <p>test 2</p>
                </div>
            </div>
            {/* <!-- Slider indicators --> */}
            <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom--5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full bg-slate-300" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-slate-300" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-slate-300" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-slate-300" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-slate-300" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" className="absolute top-0 start-[10%] z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 group-hover:bg-gray-400  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-[10%] z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 group-hover:bg-gray-400 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>

    );
}
