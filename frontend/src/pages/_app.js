import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from 'contexts/AuthContext'
import RootLayout from 'layouts/RootLayout'

import '../styles/globals.scss'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    // <RootLayout>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
    // </RootLayout>
  )
}
