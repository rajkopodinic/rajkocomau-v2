import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout';
import GoogleTagManager from '../components/GoogleTagManager'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <GoogleTagManager>
      <Head>
        <title>Rajko Podinic - Portfolio</title>
        <link rel="shortcut icon" href="../images/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GoogleTagManager>
  )
}

export default MyApp
