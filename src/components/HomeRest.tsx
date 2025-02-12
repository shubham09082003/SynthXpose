import { Link } from "react-router-dom"

function HomeRest() {
  return (
    <div className="w-7xl mx-auto mt-10">
        <div className="flex flex-col items-center justify-center">
            <div>
                <div className="text-2xl font-bold text-center text-fuchsia-500"> Hi there, welcome to SynthXpose</div>
                <div className="text-center text-gray-500">Detect video audio and images are fake or real</div>
            </div>

            <div className="flex flex-col gap-4 mt-10">
            <div className="flex flex-row gap-4">
                <div>
                    <img src={"./real2.jpg"} width={200} height={200} className="hover:scale-105 transition-all duration-300" alt="" />
                    <p className="text-center text-gray-500">
                        Fake
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src="./arrow.png" width={20} height={20} className="animate-bounce" alt="" />
                </div>
                <div>
                    <img src={"./fake2.jpg"} width={200} height={200} className="hover:scale-105 transition-all duration-300" alt="" />
                    <p className="text-center text-gray-500">
                        Real
                    </p>
                </div>
            </div>
            </div>  
            

            <Link to="/dashboard" className="mt-3 mb-7">
                <button className="bg-blue-500 text-white p-2 rounded-md">
                    Get Started
                </button>
            </Link>
        </div>
    </div>

  )

}

export default HomeRest