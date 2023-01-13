import Button from 'componentes/Button'
import ProfileLayout from 'layouts/ProfileLayout'
import styles from '../../styles/profile.module.scss'
const changepassword = () => {
  return (
    <ProfileLayout>
        <div className={styles.formCard}>
        <form className={styles.form}>
          <div className={styles.inputLabel}>
            <label>Enter old password:</label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.inputLabel}>
            <label>Enter new password:</label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.inputLabel}>
            <label>Enter new password again:</label>
            <input type="text" className={styles.input} />
          </div>
        </form>
        <Button>Done</Button>
      </div>
    </ProfileLayout>
  )
}

export default changepassword