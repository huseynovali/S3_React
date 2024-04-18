import classNames from "classnames";
import  { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { HomeService } from "../services/api/HomeService";

function ProductDetailsComp() {
  const id = 2;
  const [selectedPhoto, setSelectedPhoto] = useState();

  const { isLoading, error, data } = useQuery(
    ["getPostId", id],
    () => HomeService.getProductById(id),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  useEffect(() => {
    if (data?.data?.images) {
      setSelectedPhoto(data?.data?.images[0]?.id);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="grid  md:grid-cols-2">
          <div className="mt-6 max-w-2xl mx-auto sm:px-6  px-8 grid lg:grid-cols-1 gap-x-8 gap-y-3">
            <div className=" w-full h-[500px] rounded-lg overflow-hidden block">
              {data?.data?.images.map((image: any) => (
                <img
                  src={`http://localhost:8080/api/v1/use/public/product/${data?.data?.id}/image/${image?.id}`}
                  alt="Two each of gray, white, and black shirts laying flat."
                  className={classNames(
                    image?.id == selectedPhoto ? "block" : "hidden",
                    "w-full h-full object-center object-cover"
                  )}
                />
              ))}
            </div>

            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
              {data?.data?.images?.map((image: any) => (
                <label
                  className={classNames(
                    selectedPhoto === image?.id
                      ? "border-indigo-500"
                      : "border-transparent",
                    "h-[100px] group  border-2 relative  rounded-md  flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1  bg-white shadow-sm text-gray-900 cursor-pointer"
                  )}
                >
                  <input
                    type="radio"
                    name="size-choice"
                    value={image?.id}
                    className="sr-only "
                    aria-labelledby="size-choice-2-label"
                    onClick={() => setSelectedPhoto(image?.id)}
                  />
                  <img
                    src={`http://localhost:8080/api/v1/use/public/product/${data?.data?.id}/image/${image?.id}`}
                    loading="lazy"
                    alt="Model wearing plain gray basic tee."
                    className="w-full h-full object-center object-cover rounded-md"
                  />

                  <div
                    className="absolute -inset-px rounded-md pointer-events-none"
                    aria-hidden="true"
                  ></div>
                </label>
              ))}
            </div>
          </div>

          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {data?.data?.name}
              </h1>
            </div>

            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-2xl text-gray-900">{data?.data?.price} Azn</p>

              <form className="mt-10">
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
                    {data?.data?.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul className="pl-4 list-disc text-sm space-y-2">
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
                    gray Basic Tees. Sign up for our subscription service and be
                    the first to get new, exciting colors, like our upcoming
                    &quot;Charcoal Gray&quot; limited release.
                  </p>
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
