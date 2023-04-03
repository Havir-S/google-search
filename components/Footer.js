import { GlobeIcon } from '@heroicons/react/solid'
import React from 'react'

function Footer() {
  return (
    <footer className='text-sm text-gray-500 w-full divide-y-[1px]  bg-gray-100'>

        <div className='px-8 py-3  border border-b-gray-300'>
            <p>Japan</p>
        </div>
        
        <div className='flex flex-col gap-2'>
            <div className='md:hidden flex justify-center items-center md:col-span-2 lg:col-span-1 lg-col-start-2 '>
                <GlobeIcon className='h-5 mr-1 text-green-700' /> Carbo neutral since 2007
            </div>
            <div className='flex flex-col gap-2 md:flex-row justify-center sm:justify-between sm:px-5 sm:py-2 items-center'>
                <div className='flex justify-center sm:justify-start space-x-4 sm:space-x-8 whitespace-nowrap flex-1'>
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How Search works</p>
                </div>
                <div className='hidden md:flex justify-center items-center flex-1'>
                    <GlobeIcon className='h-5 mr-1 text-green-700' /> Carbo neutral since 2007
                </div>
                <div className='flex justify-center sm:justify-end space-x-4 sm:space-x-8 flex-1 '>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer