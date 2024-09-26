import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa6";


const BackBtn = ({Location}) => {
  return (
    <div className='w-[60%] h-[7rem] pl-12 mt-5'>
     <Link href={Location}>
     <button className='bg-slate-900 text-white py-2 px-7 mt-4'><FaArrowLeft/></button>
     </Link>
    </div>
  )
}

export default BackBtn
