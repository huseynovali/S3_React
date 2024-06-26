import { useMutation, useQueryClient } from "react-query";
import { HomeService } from "../../services/api/HomeService";

function ProductDeleteAlert({
  closeModal,
  id,
}: {
  readonly closeModal: () => void;
  readonly id: number;
}) {
  const queryClient = useQueryClient();
  const userId = JSON.parse(localStorage.getItem("user") ?? "{}").userId;
  const deleteProduct = async () => {
    await HomeService.deleteProduct(id);
  };

  const mutation = useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(["Userproducts", userId]);
      closeModal();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className=" min-h-screen  w-full flex fixed justify-center items-center inset-0 bg-slate-300 bg-opacity-20 z-10">
      <div className="rounded-md bg-white  p-4 ">
        <div className="flex">
          <div className="ml-3">
            <h3 className="text-lg font-medium text-green-800">
              Delete Product
            </h3>
            <div className="mt-2 text-md text-green-700">
              <p>Are you sure? You can't undo this action afterwards.</p>
            </div>
            <div className="mt-5">
              <div className="-mx-2 -my-1.5 flex">
                <button
                  onClick={closeModal}
                  type="button"
                  className="bg-green-500 px-2 py-1.5 rounded-md text-sm font-medium text-white  hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
                >
                  Cancle
                </button>
                <button
                  onClick={(
                    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => {
                    event.preventDefault();
                    mutation.mutate();
                  }}
                  type="button"
                  className="ml-3 bg-red-500 px-2 py-1.5 rounded-md text-sm font-medium text-white   hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDeleteAlert;
