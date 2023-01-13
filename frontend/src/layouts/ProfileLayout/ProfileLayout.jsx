import Panel from 'componentes/Panel'
import RootLayout from 'layouts/RootLayout'
import styles from './Profilelayout.module.scss'

const ProfileLayout = ({ children }) => {
  return (
    <RootLayout>
      <div className={styles.container}>
        <Panel />
        {children}
      </div>
    </RootLayout>
  )
}

export default ProfileLayout
