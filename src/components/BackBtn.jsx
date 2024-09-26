import Link from 'next/link'
import React from 'react'

const BackBtn = ({Location}) => {
  return (
    <div>
     <Link href={Location}>
     <button className='bg-slate-900 text-white py-2 px-7 mt-4'>Back</button>
     </Link>
    </div>
  )
}

export default BackBtn
