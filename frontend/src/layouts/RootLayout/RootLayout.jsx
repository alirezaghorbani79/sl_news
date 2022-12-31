import Navigation from 'componentes/Navigation'

const RootLayout = ({ children }) => {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  )
}

export default RootLayout
