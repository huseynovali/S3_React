import AddProductImage from "./AddProductImage";
import AddIcon from "../../assets/Ecommerce checkout laptop-cuate.svg";
import { useState } from "react";
import * as Yup from "yup";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useMutation, useQueryClient } from "react-query";
import { HomeService } from "../../services/api/HomeService";
import { AddProductValues } from "../../assets/types/products";
import { useNavigate } from "react-router";

function AddProduct() {
  const [files, setFiles] = useState<File[]>([]);
  const queryClient = useQueryClient();
  const userId = JSON.parse(localStorage.getItem("user") ?? "{}").userId;
  const initialValues = {
    title: "",
    about: "",
    price: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    about: Yup.string().required("Description is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive")
      .nullable(),
  });
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: FormData) => {
      return HomeService.addProduct(userId, data);
    },
    onSuccess: () => {
      queryClient.refetchQueries(["Userproducts", userId]);
      queryClient.refetchQueries("allproducts");
      setFiles([]);
      navigate("/admin/products");
    },
    onSettled: () => {},
    onError: (error: any) => {
      console.log(error);
    },
  });

  const handleSubmit = (
    values: AddProductValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const formData: FormData = new FormData();
    files.forEach((file) => {
      formData.append("images", file);
    });
    formData.append("name", values.title);
    formData.append("description", values.about);
    formData.append("price", values.price);

    mutation.mutate(formData);

    setSubmitting(false);
  };

  return (
    <div className="grid lg:grid-cols-2">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-6">
          <AddProductImage files={files} setFiles={setFiles} />

          <div className="mt-2 ">
            <Field
              type="text"
              name="title"
              id="title"
              className=" p-3 outline-none resize-none  shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
              placeholder="Title"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mt-2 ">
            <Field
              as="textarea"
              id="about"
              name="about"
              rows={3}
              className=" p-3 outline-none resize-none  shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
              placeholder="Add a description"
            />
            <ErrorMessage
              name="about"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mt-2 flex justify-between">
            <div className="relative rounded-md shadow-sm">
              <Field
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
              <ErrorMessage
                name="price"
                component="div"
                className="text-red-500"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-8 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? "Adding..." : "Add"}
            </button>
          </div>
        </Form>
      </Formik>
      <div className=" justify-center items-center hidden lg:flex">
        <img src={AddIcon} alt="add icon" />
      </div>
    </div>
  );
}

export default AddProduct;
