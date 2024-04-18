import React from "react";
import ProductCard from "./ProductCard";
import { HomeService } from "../services/api/HomeService";
import { useQuery } from "react-query";

function AllProducts() {
  const { isLoading, error, data } = useQuery(
    "allproducts",
    () => HomeService.getAllProducts(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;
 
  console.log(data);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {
            data?.data.map((product: any) => {
              return <ProductCard key={product.id} product={product} />;
            })
          }
        
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
