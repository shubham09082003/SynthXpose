
function VideoUpload() {
  return (
    <div className="flex flex-col gap-4">
        <div className="text-center text-2xl font-bold text-fuchsia-500 mt-3"> 
            <h1>Upload Video to check if it is fake or real</h1>
        </div>
        <div className="text-center mt-3 shadow-md rounded-md p-4  mx-auto bg-gray-300 flex flex-col gap-4 w-1/2">
            <div className="shadow-md rounded-md p-4 w-60 h-60 mx-auto bg-gray-100 flex items-center justify-center">
                <input type="file" accept="video/*" id="fileInput" className="hidden"/>
                <label htmlFor="fileInput" className="cursor-pointer">
                    <img src="./file-upload.png" width={100} height={100} alt="" />
                </label>
            </div>
            <div>
                <button className="bg-fuchsia-500 text-white p-2 rounded-md">Upload</button>
            </div>
        </div>
    </div>
  )
}

export default VideoUpload