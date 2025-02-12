import { Link } from "react-router-dom"
import VideoUpload from "../components/VideoUpload"



function DashBoard() {
  return (
    <div>

            {/* NavBar */}
        <div className='w-7xl mx-auto'>
            <div className='flex justify-between items-center p-4 shadow-md rounded-md'>
                <Link to="/">
                    <div className='text-2xl font-bold text-fuchsia-500'>
                        SynthXpose
                    </div>
                </Link>
            </div>
        </div>


        {/* Video Upload */}
        <div className='w-7xl mx-auto'>
            <VideoUpload />
        </div>
    </div>
  )
}

export default DashBoard    