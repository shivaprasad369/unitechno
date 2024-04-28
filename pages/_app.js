import Layout from "@/components/common/Layout"
import "@/styles/main.scss"
import { AnimatePresence } from 'framer-motion'
export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence>

    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AnimatePresence>
  )
}
