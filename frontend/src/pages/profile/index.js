import Button from 'componentes/Button'
import { useAuth } from 'contexts/AuthContext'
import ProfileLayout from 'layouts/ProfileLayout'
import { useRouter } from 'next/router'
import styles from '../../styles/profile.module.scss'

const Profile = () => {
  const { name, email, isLoggedIn } = useAuth()
  const router = useRouter()

  if(!isLoggedIn) {
    router.replace('/login')
  }

  return (
    <ProfileLayout>
      <div className={styles.formCard}>
        <form className={styles.form}>
          <div className={styles.inputLabel}>
            <label>Name:</label>
            <input
              type="text"
              defaultValue={name ? name : ''}
              className={styles.input}
            />
          </div>
          <div className={styles.inputLabel}>
            <label>Email:</label>
            <input
              type="text"
              defaultValue={email ? email : ''}
              className={styles.input}
            />
          </div>
        </form>
        <Button>Done</Button>
      </div>
    </ProfileLayout>
  )
}

export default Profile
