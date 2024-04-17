import React, { useState } from "react";

function ProductDetailsComp() {
  const [selectedPhoto, setSelectedSize] = useState('https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg')
  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="grid grid-cols-2">
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-1 lg:gap-x-8 gap-y-3">
            <div className="hidden max-h-[500px] rounded-lg overflow-hidden lg:block">
              <img
                src={selectedPhoto}
                alt="Two each of gray, white, and black shirts laying flat."
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className=" aspect-h-2 rounded-lg overflow-hidden">
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
              
                <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="S" className="sr-only" aria-labelledby="photo-1"/>
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
                    alt="Model wearing plain gray basic tee."
                    className="w-full h-full object-center object-cover"
                    id="photo-1"
                  />

                  {/* <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
                  <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                </label>

                </div>
                <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
                    alt="Model wearing plain gray basic tee."
                    className="w-full h-full object-center object-cover"
                  />
                </div>

                <div className="aspect-w-3 aspect-h-2 sm:rounded-lg sm:overflow-hidden ">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
                    alt="Model wearing plain white basic tee."
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  Basic Tee 6-Pack
                </h1>
              </div>

              <div className="mt-4 lg:mt-0 lg:row-span-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">$192</p>

                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <svg
                        className="text-gray-900 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="text-gray-900 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="text-gray-900 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="text-gray-900 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="text-gray-200 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p className="sr-only">4 out of 5 stars</p>
                    <a
                      href="#"
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      117 reviews
                    </a>
                  </div>
                </div>

                <form className="mt-10">
                  <div>
                    <h3 className="text-sm text-gray-900 font-medium">Color</h3>

                    <fieldset className="mt-4">
                      <legend className="sr-only">Choose a color</legend>
                      <div className="flex items-center space-x-3">
                        <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                          <input
                            type="radio"
                            name="color-choice"
                            value="White"
                            className="sr-only"
                            aria-labelledby="color-choice-0-label"
                          />
                          <p id="color-choice-0-label" className="sr-only">
                            White
                          </p>
                          <span
                            aria-hidden="true"
                            className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"
                          ></span>
                        </label>

                        <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                          <input
                            type="radio"
                            name="color-choice"
                            value="Gray"
                            className="sr-only"
                            aria-labelledby="color-choice-1-label"
                          />
                          <p id="color-choice-1-label" className="sr-only">
                            Gray
                          </p>
                          <span
                            aria-hidden="true"
                            className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"
                          ></span>
                        </label>

                        <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                          <input
                            type="radio"
                            name="color-choice"
                            value="Black"
                            className="sr-only"
                            aria-labelledby="color-choice-2-label"
                          />
                          <p id="color-choice-2-label" className="sr-only">
                            Black
                          </p>
                          <span
                            aria-hidden="true"
                            className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"
                          ></span>
                        </label>
                      </div>
                    </fieldset>
                  </div>

                  <button
                    type="submit"
                    className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add to bag
                  </button>
                </form>
              </div>

              <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      The Basic Tee 6-Pack allows you to fully express your
                      vibrant personality with three grayscale options. Feeling
                      adventurous? Put on a heather gray tee. Want to be a
                      trendsetter? Try our exclusive colorway:
                      &quot;Black&quot;. Need to add an extra pop of color to
                      your outfit? Our white tee has you covered.
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">
                    Highlights
                  </h3>

                  <div className="mt-4">
                    <ul
                      role="list"
                      className="pl-4 list-disc text-sm space-y-2"
                    >
                      <li className="text-gray-400">
                        <span className="text-gray-600">
                          Hand cut and sewn locally
                        </span>
                      </li>

                      <li className="text-gray-400">
                        <span className="text-gray-600">
                          Dyed with our propietary colors
                        </span>
                      </li>

                      <li className="text-gray-400">
                        <span className="text-gray-600">
                          Pre-washed &amp; pre-shrunk
                        </span>
                      </li>

                      <li className="text-gray-400">
                        <span className="text-gray-600">
                          Ultra-soft 100% cotton
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">Details</h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">
                      The 6-Pack includes two black, two white, and two heather
                      gray Basic Tees. Sign up for our subscription service and
                      be the first to get new, exciting colors, like our
                      upcoming &quot;Charcoal Gray&quot; limited release.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsComp;
