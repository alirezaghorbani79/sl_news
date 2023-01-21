import Button from 'componentes/Button'
import { useCreateNews } from 'hooks/useApi'
import ProfileLayout from 'layouts/ProfileLayout'
import { useRef, useState } from 'react'
import styles from '../../styles/addnews.module.scss'

const addnews = () => {
  const [category, setCategory] = useState('sport')
  const titleRef = useRef()
  const bodyRef = useRef()

  const { mutate } = useCreateNews()

  const radioChangeHandler = (e) => {
    setCategory(e.target.value)
  }

  const formChangeHandler = (e) => {
    mutate({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      picture: 'test',
      class: category,
    })
  }

  return (
    <ProfileLayout>
      <div className={styles.formCard}>
        <label className={styles.title}>Choose news category:</label>
        <form className={styles.form} onChange={radioChangeHandler}>
          <label>
            <input type="radio" name="category" value="sport" defaultChecked />
            Sport
          </label>
          <label>
            <input type="radio" name="category" value="sealth" />
            Health
          </label>
          <label>
            <input type="radio" name="category" value="politics" />
            Politics
          </label>
          <label>
            <input type="radio" name="category" value="economics" />
            Economics
          </label>
          <label>
            <input type="radio" name="category" value="technology" />
            Technology
          </label>
        </form>

        <label className={styles.title}>News topic:</label>
        <input className={styles.textInput} type="text" ref={titleRef} />
        <label className={styles.title}>News body:</label>
        <textarea
          className={[styles.textInput, styles.newsBodyInput].join(' ')}
          ref={bodyRef}
        ></textarea>
        <Button onClick={formChangeHandler}>add news</Button>
      </div>
    </ProfileLayout>
  )
}

export default addnews
