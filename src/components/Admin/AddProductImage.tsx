import { TrashIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

const thumbsContainer: object = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb: object = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner: object = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};
function AddProductImage({
  files,
  setFiles,
}: {
  readonly files: any;
  readonly setFiles: any;
}) {
  const [images, setImages] = useState<File[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length + images.length > 3)
        return alert("Max 3 images allowed");
      setImages([
        ...images,
        ...acceptedFiles.map((file) => ({
          ...file,
          preview: URL.createObjectURL(file),
        })),
      ]);
      setFiles([...files, ...acceptedFiles]);
    },
  });

  const deleteImage = (e: any) => {
    console.log("salam");

    let newFiles = images.filter(
      (file: any) =>
        file.preview !== e.target.parentElement.parentElement.lastChild.src
    );
    console.log(newFiles);

    setImages(newFiles);
  };

  const thumbs = images.map((file: any) => (
    <div style={thumb} key={file?.name} className="group">
      <div style={thumbInner} className="relative">
        <div>
          <button
            onClick={deleteImage}
            className="absolute z-50 hidden group-hover:flex  hoverDelete w-full h-full justify-center items-center"
          ></button>

          <TrashIcon
            width={50}
            height={50}
            className="absolute hidden group-hover:block top-5 left-4 text-white z-0"
          />
        </div>
        <img src={file?.preview} style={img} alt="" />
      </div>
    </div>
  ));

  return (
    <section className="w-full">
      {images.length >= 3 ? (
        <div className="space-y-1 text-center">
          <div className="flex text-sm text-gray-600">
            <span>Max 3 images allowed</span>
          </div>
        </div>
      ) : (
        <div {...getRootProps({ className: "dropzone" })}>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div
              className={classNames(
                images.length >= 3
                  ? "border-2 border-red-500 border-dashed rounded-md flex justify-center px-6 pt-5 pb-6"
                  : " flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
              )}
            >
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      {...getInputProps()}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
}

export default AddProductImage;
