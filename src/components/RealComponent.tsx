

function RealComponent({thumbnail} : {thumbnail : string | null}) {
  return (
        <div className='mx-auto mt-30'>
                <div className='flex flex-col justify-center items-center bg-gray-200 w-100 h-100 '>
                        {thumbnail && (
                            <div className="mb-3">
                                <h2 className="text-lg text-gray-600"></h2>
                                <img src={thumbnail} alt="Thumbnail" className="w-60 h-40 mx-auto rounded-md shadow-md" />
                            </div>
                        )}
                    <p className='font-bold text-center'>
                        Accuracy : 90 %
                    </p>
                    <p className='font-bold text-center'> Video is Real</p>
                </div>
            </div>
  )
}

export default RealComponent 