import Head from 'next/head'
import { GraphQLClient, gql } from 'graphql-request'
//Components
import Header from '../components/Header'
import Hero from '../components/Hero'
import Socials from '../components/Socials'
import Arts from '../components/Arts'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const graphcms = new GraphQLClient(
  "https://api-us-east-1.hygraph.com/v2/cl8zemt1c0x0h01ul5cplenr8/master"
); 

const query = gql`
{
  aRTS(orderBy: datePublished_DESC) {
    id
    title
    datePublished
    slug
    content{
      html
    }
    tags
    coverPhoto{
      url
    }
  }
}`

export async function getStaticProps(){
  const {aRTS} = await graphcms.request(query)

  const featuredArts = aRTS.filter(art => {
    return art.tags.includes('featured')
  })

  const arts = aRTS.filter(art => {
    return !art.tags.includes('featured')
  })

  const digitalArts = aRTS.filter(art => {
      return art.tags.includes('digitalart') && !art.tags.includes('featured')
  })

  const inkedArts = aRTS.filter(art => {
      return art.tags.includes('inkdrawing') && !art.tags.includes('featured')
  })

  return{
    props: {
      arts,
      featuredArts,
      digitalArts,
      inkedArts
    },
    revalidate: 10
  }
}

export default function Home({ arts, featuredArts, digitalArts, inkedArts }) {

  const [darkMode, setDarkMode] = useState(false)

  const enableDarkMode = () => {
    setDarkMode(true)
    localStorage.setItem('darkmode', 'enabled')
  }

  const disableDarkMode = () => {
    setDarkMode(false)
    localStorage.setItem('darkmode', null)
  }
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      let darkmode = localStorage.getItem('darkmode')

      if(darkmode === 'enabled'){
        enableDarkMode()
      }
    }
  }, [])

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Angelitomato</title>
        <meta name="description" content="Angelitomato website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-x-hidden dark:bg-mattBlack dark:text-white">
        <div className='container mx-auto px-1 md:px-2 lg:px-40'>
          <Header enableDarkMode={enableDarkMode} disableDarkMode={disableDarkMode} darkMode={darkMode} />
          <Hero />
        </div>
        <Socials />
        <Arts arts={arts} featuredArts={featuredArts} digitalArts={digitalArts} inkedArts={inkedArts} />
        <Footer />
      </main>
    </div>
  )
}
