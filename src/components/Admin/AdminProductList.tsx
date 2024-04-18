import {
  ChevronRightIcon,
  PencilIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import ProductDeleteAlert from "./ProductDeleteAlert";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];
function AdminProductList() {
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  function closeModal() {
    setIsOpenAlert(false);
  }

  function openModal() {
    setIsOpenAlert(true);
  }
  return (
    <div className="bg-white  overflow-hidden ">
      <ul className=" ">
        {products.map((product) => (
          <li key={product.name} className="my-2 border-2">
            <a href={product.href} className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={product.imageSrc}
                      alt={product.imageAlt}
                    />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {product.name}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="truncate">{product.price}</span>
                      </p>
                    </div>
                    <div className="hidden md:block"></div>
                  </div>
                </div>
                <div className="flex gap-x-3">
                  <div
                    className="delete_Icon p-2 z-10 hover:bg-slate-200 rounded-full"
                    onClick={openModal}
                  >
                    <TrashIcon
                      className="h-5 w-5 text-red-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="edit_icon p-2 z-10 hover:bg-slate-200 rounded-full">
                    <PencilSquareIcon
                      className="h-5 w-5 text-indigo-400"
                      aria-hidden="true"
                    />
                  </div>
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
