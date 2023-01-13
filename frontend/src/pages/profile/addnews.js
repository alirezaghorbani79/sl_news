import ProfileLayout from 'layouts/ProfileLayout'
import styles from '../../styles/addnews.module.scss'

const addnews = () => {


  const formChangeHandler = (e) => {
    console.log(e.target.value)
  } 

  return (
    <ProfileLayout>
      <div className={styles.formCard}>
        <form className={styles.form}>
          <label>
            <input type="checkbox" value="Sport" />
            Sport
          </label>
          <label>
            <input type="checkbox" value="Health" />
            Health
          </label>
          <label>
            <input type="checkbox" value="Politics" />
            Politics
          </label>
          <label>
            <input type="checkbox" value="Economics" />
            Economics
          </label>
          <label>
            <input type="checkbox" value="Technology" />
            Technology
          </label>
        </form>
      </div>
    </ProfileLayout>
  )
}

export default addnews
