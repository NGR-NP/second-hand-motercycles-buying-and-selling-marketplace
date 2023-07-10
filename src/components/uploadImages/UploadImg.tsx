import React from "react";

const UploadImg = ({ image, setImage }: any) => {
  const handleUploadImg = (e: any) => {
    const img = e.target.files[0];
    setImage(img);
    console.log(img);
  };
  return (
    <div className="mb-6">
      <div className="flex justify-center items-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer"
        >
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className=" h-[30vmin] object-cover"
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="img"
            />
          ) : (
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="font-semibold">Click to upload</div> or drag and
                drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
          )}
          <input
            id="dropzone-file"
            onChange={(e) => handleUploadImg(e)}
            type="file"
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default UploadImg;
