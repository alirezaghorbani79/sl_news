import RootLayout from 'layouts/RootLayout/RootLayout'

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}
