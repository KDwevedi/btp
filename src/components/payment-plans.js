export default function PayPlans(props) {
    return (
    <section class="text-gray-600 body-font overflow-hidden">
        <div id="payment-plans" class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">The best things aren't for free</p>
                <div class="flex mx-auto border-2 border-green-500 rounded overflow-hidden mt-6">
                    <button class="py-1 px-4 bg-green-500 text-white focus:outline-none">Monthly</button>
                    <button class="py-1 px-4 focus:outline-none">Annually</button>
                </div>
            </div>
            <div class="flex flex-wrap -m-4">
                <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                    <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                        <h2 class="text-sm tracking-widest title-font mb-1 font-medium">BASIC</h2>
                        <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
                        <p class="flex items-center text-gray-600 mb-2">
                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Generate 10000 characters of Bionic Text per day
                        </p>
                        <p class="flex items-center text-gray-600 mb-2">
                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Personalised access to API
                        </p>
                        <p class="flex items-center text-gray-600 mb-6">
                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Access to our proprietory extension
                        </p>
                        <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                            Subscribe Now
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </button>
                        <p class="text-xs text-gray-500 mt-3">Try our tool for free!</p>
                    </div>
                </div>
                <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                    <div class="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden">
                        <span class="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                        <h2 class="text-sm tracking-widest title-font mb-1 font-medium">PERSONAL</h2>
                        <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>₹49</span>
                            <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                        </h1>
                        <p class="flex items-center text-gray-600 mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </span>Unlimited access to Bionic Text API for a single user
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Seemless integrations with your favourite note-taking applications
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Cross-device sync for extension
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>AI enhanced annotation tools
          </p>
          <button class="flex items-center mt-auto text-white bg-green-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-600 rounded">Subscribe Now
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-500 mt-3">The perfect online reading companion</p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">PROFESSIONAL</h2>
          <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>₹499</span>
            <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
          </h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>All perks of a Personal subscription for upto 16 accounts.
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>A shared collaboration space for teams. Instantly share Bionic Text.
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span> Access to analytics tools for your reading history.
          </p>
          <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Subscribe Now
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-500 mt-3">The modern reading tool for your team.</p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">ENTERPRISE</h2>
          <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>₹4999</span>
            <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
          </h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>All perks of a Personal account for 200+ accounts
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Employee activity tracking for admin users
          </p>
          
          <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Subscribe Now
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-500 mt-3">*price and perks negotiable</p>
        </div>
      </div>
    </div>
  </div>
</section>

    //     <div class="grid lg:grid-cols-4 gap-6 xl:gap-x-12">
    //   <div class="mb-6 lg:mb-0">
    //     <div class="block rounded-lg shadow-lg bg-white h-full">
    //       <div class="p-6 border-b border-gray-300 text-center">
    //         <p class="uppercase mb-4 text-sm">
    //           <strong>Hobby</strong>
    //         </p>
    //         <h3 class="text-2xl mb-6">
    //           <strong>Free</strong>
    //         </h3>

    //         <button type="button"
    //           class="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
    //           style={{"background-color": "hsl(0, 0%, 95%)"}} data-mdb-ripple="true"
    //           data-ripple-color="primary">
    //           Buy
    //         </button>
    //       </div>
    //       <div class="p-6">
    //         <ol class="list-inside">
    //           <li class="mb-4 flex items-center">
    //             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
    //               class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512">
    //               <path fill="currentColor"
    //                 d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
    //               </path>
    //             </svg>Unlimited updates
    //           </li>
    //         </ol>
    //       </div>
    //     </div>
    //   </div>

    //   <div class="mb-6 lg:mb-0">
    //     <div class="block rounded-lg shadow-lg bg-white h-full">
    //       <div class="p-6 border-b border-gray-300 text-center">
    //         <p class="uppercase mb-4 text-sm">
    //           <strong>Basic</strong>
    //         </p>
    //         <h3 class="text-2xl mb-6">
    //           <strong>₹ 129</strong>
    //           <small class="text-gray-500 text-sm">/year</small>
    //         </h3>

    //         <button type="button"
    //           class="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
    //           style={{"background-color": "hsl(0, 0%, 95%)"}} data-mdb-ripple="true" data-ripple-color="primary">
    //           Buy
    //         </button>
    //       </div>
    //       <div class="p-6">
    //         <ol class="list-inside">
    //           <li class="mb-4 flex items-center">
    //             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
    //               class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512">
    //               <path fill="currentColor"
    //                 d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
    //               </path>
    //             </svg>Unlimited updates
    //           </li>
    //           <li class="mb-4 flex items-center">
    //             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
    //               class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512">
    //               <path fill="currentColor"
    //                 d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
    //               </path>
    //             </svg>Git repository
    //           </li>
    //           <li class="mb-4 flex items-center">
    //             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
    //               class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512">
    //               <path fill="currentColor"
    //                 d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
    //               </path>
    //             </svg>npm installation
    //           </li>
    //         </ol>
    //       </div>
    //     </div>
    //   </div>

    //   <div class="mb-6 lg:mb-0">
    //     <div class="block rounded-lg bg-white h-full border border-blue-600">
    //       <div class="p-6 border-b border-gray-300 text-center">
    //         <p class="uppercase mb-4 text-sm">
    //           <strong>Advanced</strong>
    //         </p>
    //         <h3 class="text-2xl mb-6">
    //           <strong>₹ 299</strong>
    //           <small class="text-gray-500 text-sm">/year</small>
    //         </h3>

    //         <button type="button"
    //           class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
    //           data-mdb-ripple="true" data-ripple-color="light">
    //           Buy
    //         </button>
    //       </div>
    //       <div class="p-6">
    //         <ol class="list-inside">
    //           <li class="mb-4 flex items-center">
    //             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
    //               class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512">
    //               <path fill="currentColor"
    //                 d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
    //               </path>
    //             </svg>Unlimited updates
    //           </li>
    //           <li class="mb-4 flex items-center">
    //             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
    //               class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512">
    //               <path fill="currentColor"
    //                 d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
    //               </path>
    //             </svg>Git repository
    //           </li>
    //           <li class="mb-4 flex items-center">
    //             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
    //               class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512">
    //               <path fill="currentColor"
    //                 d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
    //               </path>
    //             </svg>npm installation
    //           </li>
    //           <li class="mb-4 flex items-center">
    //             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
    //               class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512">
    //               <path fill="currentColor"
    //                 d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
    //               </path>
    //             </svg>Code examples
    //           </li>
    //           <li class="mb-4 flex items-center">
    //             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
    //               class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512">
    //               <path fill="currentColor"
    //                 d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
    //               </path>
    //             </svg>Premium snippets
    //           </li>
    //         </ol>
    //       </div>
    //     </div>
    //   </div>

    //   <div class="mb-6 lg:mb-0">
    //     <div class="block rounded-lg shadow-lg bg-white h-full">
    //       <div class="p-6 border-b border-gray-300 text-center">
    //         <p class="uppercase mb-4 text-sm">
    //           <strong>Enterprise</strong>
    //         </p>
    //         <h3 class="text-2xl mb-6">
    //           <strong>₹ 499</strong>
    //           <small class="text-gray-500 text-sm">/year</small>
    //         </h3>

    //         <button type="button"
    //           class="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
    //           style={{"background-color": "hsl(0, 0%, 95%)"}} data-mdb-ripple="true" data-ripple-color="primary">
    //           Buy
    //         </button>
    //       </div>
    //       <div class="p-6">
    //         <ol class="list-inside">
    //           <li class="mb-4 flex items-center">
    //             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
    //               class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512">
    //               <path fill="currentColor"
    //                 d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
    //               </path>
    //             </svg>Unlimited updates
    //           </li>
    //           <li class="mb-4 flex items-center">
    //             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
    //               class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512">
    //               <path fill="currentColor"
    //                 d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
    //               </path>
    //             </svg>Git repository
    //           </li>
    //           <li class="mb-4 flex items-center">
    //             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
    //               class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512">
    //               <path fill="currentColor"
    //                 d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
    //               </path>
    //             </svg>npm installation
    //           </li>
    //           <li class="mb-4 flex items-center">
    //             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
    //               class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512">
    //               <path fill="currentColor"
    //                 d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
    //               </path>
    //             </svg>Code examples
    //           </li>
    //           <li class="mb-4 flex items-center">
    //             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
    //               class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512">
    //               <path fill="currentColor"
    //                 d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
    //               </path>
    //             </svg>Premium snippets
    //           </li>
    //           <li class="mb-4 flex items-center">
    //             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
    //               class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512">
    //               <path fill="currentColor"
    //                 d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
    //               </path>
    //             </svg>Premium support
    //           </li>
    //           <li class="mb-4 flex items-center">
    //             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
    //               class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512">
    //               <path fill="currentColor"
    //                 d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
    //               </path>
    //             </svg>Drag&amp;Drop builder
    //           </li>
    //         </ol>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    );
}

function Plan() {
    return (
        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                    <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                        <h2 class="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
                        <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
                        <p class="flex items-center text-gray-600 mb-2">
                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Vexillologist pitchfork
                        </p>
                        <p class="flex items-center text-gray-600 mb-2">
                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Tumeric plaid portland
                        </p>
                        <p class="flex items-center text-gray-600 mb-6">
                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Mixtape chillwave tumeric
                        </p>
                        <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                            Subscribe Now
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </button>
                        <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                    </div>
                </div>
    )
}