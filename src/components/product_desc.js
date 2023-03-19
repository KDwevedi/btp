import { Link } from "react-router-dom";

function KeyFeatures () {
    return (
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h2 class="text-xs text-green-500 tracking-widest font-medium title-font mb-1">Bionic Revolution</h2>
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Uplevel your consumption of digital information.</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
            </div>
            <div class="flex flex-wrap">
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Faster Text Comprehension</h2>
                    <p class="leading-relaxed text-base mb-4">Our API can help users process text up to 50% faster and improve their comprehension and retention of information.</p>
                    <a class="text-green-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Personalized Reading Experience</h2>
                    <p class="leading-relaxed text-base mb-4">Our API can adapt to the individual user's reading level and style, providing a customized experience optimized for their needs.</p>
                    <a class="text-green-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Enhanced Annotation</h2>
                    <p class="leading-relaxed text-base mb-4">Our API performs text summarization and sentiment analysis on the reading material, making it faster to analyze the sentiment of the text and provide more meaningful summaries for users.</p>
                    <a class="text-green-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <           path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Scalable and Easy to Use</h2>
        <p class="leading-relaxed text-base mb-4">Our API is designed to be scalable and flexible, so it can easily adapt to the needs of your application, website, or platform.</p>
        <a class="text-green-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      </div>
    {/* <button class="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button> */}
  </div>
</section>

    );
}

function Overview () {

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
                    Transform the way you consume written content digitally
                </h2>
                <div class="md:w-3/5 md:pl-6">
                    <p class="leading-relaxed text-base">
                        Our mission is to transform the way people read by leveraging the science of Bionic Reading and bring it to consumers through the latest technological advancements.
                    </p>
                    <div class="flex md:mt-4 mt-6">
                        <button class="inline-flex text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded">
                            <Link to="/demo">Demo</Link>
                        </button>
                        <a href="https://hackernoon.com/what-is-bionic-reading-and-how-is-it-possible" target="_blank" class="text-green-500 inline-flex items-center ml-4">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default function ProdDescription () {
    return (
        <div>
            <Overview/>
            <KeyFeatures/>
        </div>
    )
    
}