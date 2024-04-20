import { PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid";
import ProductDeleteAlert from "./ProductDeleteAlert";
import { useState } from "react";
import { useQuery } from "react-query";
import { HomeService } from "../../services/api/HomeService";
import { ProductObject } from "../../assets/types/products";
import classNames from "classnames";
function AdminProductList() {
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const userId = JSON.parse(localStorage.getItem("user") ?? "{}").userId;
  const [imageLoaded, setImageLoaded] = useState(true);
  const { isLoading, error, data } = useQuery(
    ["Userproducts", userId],
    () => HomeService.getProductsByUserId(userId),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  function closeModal() {
    setIsOpenAlert(false);
  }

  function openModal() {
    setIsOpenAlert(true);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="bg-white  overflow-hidden ">
      <ul className=" ">
        {data?.data?.map((product: ProductObject) => (
          <li key={product.name} className="my-2 border-2">
            <a href={`/${product.id}`} className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0 ">
                    <img
                      className={classNames(
                        imageLoaded
                          ? `salam h-12 w-12 rounded-full`
                          : "h-12 w-12 rounded-full"
                      )}
                      src={`http://localhost:8080/api/v1/use/public/product/${product?.id}/image/${product?.images[0].id}`}
                      alt={product.name}
                      loading="lazy"
                      onLoad={() => {
                        setImageLoaded(true);
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {product.name}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="truncate">{product.price} Azn</span>
                      </p>
                    </div>
                    <div className="hidden md:block"></div>
                  </div>
                </div>
                <button
                  className="delete_Icon p-2 z-10 hover:bg-slate-200 rounded-full"
                  onClick={openModal}
                >
                  <TrashIcon
                    className="h-5 w-5 text-red-400"
                    aria-hidden="true"
                  />
                </button>
                <div className="edit_icon p-2 z-10 hover:bg-slate-200 rounded-full">
                  <PencilSquareIcon
                    className="h-5 w-5 text-indigo-400"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
      {isOpenAlert && <ProductDeleteAlert closeModal={closeModal} />}
    </div>
  );
}

export default AdminProductList;
