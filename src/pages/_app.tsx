import Head from 'next/head'
import { Fragment } from 'react'
import { Toaster } from 'react-hot-toast'
import Header from '@/srccomponents/Header'
import Footer from '@/srccomponents/Footer'
import type { AppProps } from 'next/app'
import '@/srcstyles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='author' content='Ben Elferink' />
        <meta name='keywords' content='cardano, blockchain, anatomy, nft, coin, community' />
        <meta name='description' content='The official website of A.R.F $LAB.' />

        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />

        <title>A.R.F $LAB</title>
      </Head>

      <Toaster />
      <Header />
      <main className='w-screen min-h-screen bg-black/70'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment>
  )
}
