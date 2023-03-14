import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Avatar from '@/components/Avatar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
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

          <Avatar url={'https://i.stack.imgur.com/dr5qp.jpg'} />
        </div>
      </header>
    </>
  )
}
