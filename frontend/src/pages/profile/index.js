import Button from 'componentes/Button'
import ProfileLayout from 'layouts/ProfileLayout'
import styles from '../../styles/profile.module.scss'

const Profile = () => {
  return (
    <ProfileLayout>
      <div className={styles.formCard}>
        <form className={styles.form}>
          <div className={styles.inputLabel}>
            <label>Name:</label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.inputLabel}>
            <label>Email:</label>
            <input type="text" className={styles.input} />
          </div>
        </form>
        <Button>Done</Button>
      </div>
    </ProfileLayout>
  )
}

export default Profile
