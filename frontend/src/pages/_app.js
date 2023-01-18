import AuthProvider from 'contexts/AuthContext'
import RootLayout from 'layouts/RootLayout'

import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    // <RootLayout>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
    // </RootLayout>
  )
}
