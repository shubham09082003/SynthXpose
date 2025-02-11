
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='w-7xl mx-auto'>
    <div className='flex justify-between items-center p-4 shadow-md rounded-md'>
        <div className='text-2xl font-bold text-fuchsia-500'>
            SynthXpose

        </div>

        <Link to="/dashboard">

            <button className='bg-blue-500 text-white p-2 rounded-md'>
                Dashboard
            </button>
        </Link>
    </div>
    </div>
  )
}


export default NavBar