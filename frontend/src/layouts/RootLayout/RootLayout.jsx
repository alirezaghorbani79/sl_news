import Header from "componentes/Header"


const RootLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}

export default RootLayout
