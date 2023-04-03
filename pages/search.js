import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
function Search({results}) {
    console.log(results)
  return (
    <div>
    <Head>
        <title>Search Results</title>
        <link rel='icon' href='/favicon.ico' />
    </Head>

    <Header />


    </div>
  )
}

export default Search


export async function getServerSideProps(context) {
    const useDummyData = false;

    const data = await fetch(`https://www.googlepapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}`)
    .then(response => response.json());

    return {
        props: {results: response}
    }
}