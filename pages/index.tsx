import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Rachel's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/koko.jpg">
                      <a>
                        <span className="sr-only">Photo of cat</span>

                        <img className="h-8 w-auto sm:h-10" src="/koko.jpg" />
                      </a>
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Open main menu</span>
                        {/* Heroicon name: outline/menu */}
                        <svg
                          className="h-6 w-6"
                          xmlns=""
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <Link href="/about">
                    <a className="font-medium text-gray-500 hover:text-gray-900">
                      About
                    </a>
                  </Link>
                  <a
                    href="#"
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Works
                  </a>
                  <a
                    href="#"
                    className="font-medium text-gray-500
                    hover:text-gray-900"
                  >
                    {" "}
                    Testimonials
                  </a>
                  <a
                    href="#"
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Contact Me
                  </a>
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Log in
                  </a>
                </div>
              </nav>
            </div>
            {/*
  Mobile menu, show/hide based on menu open state.

  Entering: "duration-150 ease-out"
    From: "opacity-0 scale-95"
    To: "opacity-100 scale-100"
  Leaving: "duration-100 ease-in"
    From: "opacity-100 scale-100"
    To: "opacity-0 scale-95"
*/}
            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span className="sr-only">Close main menu</span>
                      {/* Heroicon name: outline/x */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Product
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <a
                  href="#"
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                >
                  Log in
                </a>
              </div>
            </div>
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-black text-gray-900 sm:text-5xl md:text-7xl">
                  <span className="block xl:inline">Portfolio of </span>
                  <span className="block text-primary-400 xl:inline">
                    Rachel Tang
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Hello! I'm a penultimate Sociology major, I aim to inspire
                  people to commitment, encourage the heart and empower for
                  sustainability.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"></div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/first.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="bg-white overflow-hidden" id="about">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                How am I
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg
                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <Link href="/mekoko.jpg">
                      <a>
                        <img
                          className="rounded-lg shadow-lg object-cover object-center"
                          src="/mekoko.jpg"
                          alt="Rachel holding Koko!"
                          width={1184}
                          height={1376}
                        />
                      </a>
                    </Link>
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    {/* Heroicon name: solid/camera */}
                    <svg
                      className="flex-none w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Photograph by self</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">Very good!</p>
              </div>
              <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                  Alma mater:
                  <ul>
                    <li>Yew Tee Primary School</li>
                    <li>River Valley High</li>
                    <li>Nanyang Technological University</li>
                  </ul>
                </p>

                <p>
                  Secondary school life: <br />
                  More joy as I dragon boated to bliss!
                </p>
                <p>
                  Dictum magnis risus phasellus vitae quam morbi. Quis lorem
                  lorem arcu, metus, egestas netus cursus. In.
                </p>
                <ul>
                  <li>Quis elit egestas venenatis mattis dignissim.</li>
                  <li>
                    Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                  </li>
                  <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                </ul>
                <p>
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis
                  tincidunt vel ultricies. Vulputate aliquet velit faucibus
                  semper. Pellentesque in venenatis vestibulum consectetur nibh
                  id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi
                  enim fermentum lacus in. Viverra.
                </p>
                <h3>How we helped</h3>
                <p>
                  Tincidunt integer commodo, cursus etiam aliquam neque, et.
                  Consectetur pretium in volutpat, diam. Montes, magna cursus
                  nulla feugiat dignissim id lobortis amet. Laoreet sem est
                  phasellus eu proin massa, lectus. Diam rutrum posuere donec
                  ultricies non morbi. Mi a platea auctor mi.
                </p>
                <p>
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              <div className="pt-6">
                <dt className="text-lg">
                  {/* Expand/collapse question button */}
                  <button
                    type="button"
                    className="text-left w-full flex justify-between items-start text-gray-400"
                    aria-controls="faq-0"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      What's the best thing about Switzerland?
                    </span>
                    <span className="ml-6 h-7 flex items-center">
                      {/*
            Expand/collapse icon, toggle classes based on question open state.

            Heroicon name: outline/chevron-down

            Open: "-rotate-180", Closed: "rotate-0"
          */}
                      <svg
                        className="rotate-0 h-6 w-6 transform"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd className="mt-2 pr-12" id="faq-0">
                  <p className="text-base text-gray-500">
                    I don't know, but the flag is a big plus. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quas cupiditate
                    laboriosam fugiat.
                  </p>
                </dd>
              </div>
              {/* More items... */}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
