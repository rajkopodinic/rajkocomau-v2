import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout';
import GoogleTagManager from '../components/GoogleTagManager'

function MyApp({ Component, pageProps }) {
  return (
    <GoogleTagManager>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GoogleTagManager>
  )
}

export default MyApp
