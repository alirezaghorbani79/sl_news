import RootLayout from 'layouts/RootLayout'

import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}
