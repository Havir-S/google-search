import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'

function Header() {
    const router = useRouter()
    const searchRef = useRef(null)

    const search = e => {
        e.preventDefault()

        const term = searchRef.current.value;

        if (!term) return

        router.push(`/search?term=${term}`)
    }
  return (
    <header className='sticky top-0 bg-white pb-6'>
        <div className='flex w-full items-center p-6'>
            <Image src='https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png' width={140} height={40} alt='' className='cursor-pointer'  onClick={() => {router.push('/')}}/>
            <form className='flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5'>
                <input ref={searchRef} className='flex-grow w-full focus:outline-none' type='text' />
                <XIcon className='h-7 sm:mr-3 text-gray-500  p-0 cursor-pointer transform duration-100 hover:scale-125' onClick={() => {searchRef.current.value = ''}}/>
                <MicrophoneIcon className='mr-3  h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer' />
                <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
                <button hidden type='submit' onClick={search}>Search</button>
            </form>
            <Avatar className='ml-auto' url='https://i.stack.imgur.com/34AD2.jpg' />
        </div>

        <HeaderOptions />
        
    </header>
  )
}

export default Header