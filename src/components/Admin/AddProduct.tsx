import AddProductImage from "./AddProductImage";
import AddIcon from "../../assets/Ecommerce checkout laptop-cuate.svg";
function AddProduct() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <AddProductImage />

        <div className="mt-2 ">
          <input
            type="text"
            name="title"
            id="title"
            className=" p-3 outline-none resize-none  shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
            placeholder="Title"
          />
        </div>

        <div className="mt-2 ">
          <textarea
            id="about"
            name="about"
            rows={3}
            className=" p-3 outline-none resize-none  shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
            defaultValue={""}
            placeholder="Add a description"
          />
        </div>

        <div className="mt-2 flex justify-between">
          <div className="relative rounded-md shadow-sm">
            <input
              type="text"
              name="price"
              id="price"
              className=" p-3 outline-none resize-none  shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
              placeholder="0.00"
              aria-describedby="price-currency"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm" id="price-currency">
                AZN
              </span>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center px-8 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add
          </button>
        </div>
      </div>
      <div className="px-10">
        <img src={AddIcon} alt="" />
      </div>
    </div>
  );
}

export default AddProduct;
