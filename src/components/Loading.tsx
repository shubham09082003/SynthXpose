

function Loading() {
  return (
    <div className="flex justify-center items-center mt-50">
      <div className="bg-gray-300 h-40 w-100 rounded-md shadow-md">
        <div className="flex flex-col justify-center items-center mt-10">
          <img src={"./loading.gif"} width={70} height={70} />
          <p className="font-bold">
            Checking the Video is Real and Fake.
          </p>
        </div>
      </div>
        
    </div>
  )
}

export default Loading