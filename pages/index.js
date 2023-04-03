import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Avatar from '@/components/Avatar'
import { ViewGridIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
import Footer from '@/components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const searchRef = useRef(null)
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();
    const term = searchRef.current.value;

    if (!term) return;

    router.push(`/search?terms=${term}`)

  }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Fake Google</title>
        <meta name="description" content="Fake Google by Krzysztof Szafran" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className='flex justify-between px-5 py-4 w-full text-sm text-gray-700'>
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          <ViewGridIcon className='h-10 w-10 p-2 rounded-full cursor-pointer hover:bg-gray-100'/>
          <Avatar url={'https://i.stack.imgur.com/dr5qp.jpg'} />
        </div>
      </header>

      <form className='flex flex-col w-4/5 items-center mt-44 flex-grow '>
        <Image className='' height={100} width={300} src='https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png' alt='' />
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center
          sm:max-w-xl lg:max-w-2xl
        '>
          <SearchIcon className='mr-3 text-gray-500 h-5' />
          <input ref={searchRef} type='text' className='focus:outline-none flex-grow' />
          <MicrophoneIcon className='h-5' />
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>Google Search</button>

          <button onClick={search} className='btn'>I'm Feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  )
}
