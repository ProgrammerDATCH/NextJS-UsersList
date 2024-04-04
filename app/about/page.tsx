import Link from 'next/link';
import React from 'react'

const Page = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center'>
        <div className=" bg-white text-black rounded-3xl w-96 h-32 animate-pulse flex justify-center items-center flex-col">
            <p>This is Next JS Testing App by DATCH</p>
            <Link href="/" className='text-blue-400'>Back to Home</Link>
            </div>
    </div>
  )
}

export default Page;
