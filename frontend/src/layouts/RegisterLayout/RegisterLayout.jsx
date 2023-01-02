import Navigation from 'componentes/Header/Navigation'
import styles from './RegisterLayout.module.scss'

const RegisterLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.cardBody}>{children}</section>
      </main>
    </>
  )
}

export default RegisterLayout
