import { Link } from "react-router-dom";
import { ProductObject } from "../assets/types/products";

function ProductCard({
  key,
  product,
}: {
  readonly key: number;
  readonly product: ProductObject;
}) {
  return (
    <Link to={`/${product.id}`} className="group relative" key={key}>
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={`http://localhost:8080/api/v1/use/public/product/${product?.id}/image/${product?.images[0].id}`}
          alt="Front of men&#039;s Basic Tee in black."
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="absolute inset-0"></span>
            {product?.name}
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {product?.price} Azn
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
