import Button from 'componentes/Button'
import { updateFav, useAuth, useAuthDispatch } from 'contexts/AuthContext'
import { useUpdateFavorite } from 'hooks/useApi'
import ProfileLayout from 'layouts/ProfileLayout'
import { useState } from 'react'

import styles from '../../styles/addnews.module.scss'

const FavClass = () => {
  const { favoriteClasses, name } = useAuth()
  const [favorite, setfavorite] = useState(favoriteClasses)
  const dispatch = useAuthDispatch()
  const { mutate } = useUpdateFavorite()

  const formChangeHandler = (e) => {
    if (favorite.includes(e.target.value)) {
      let newState = [...favorite].filter((el) => el !== e.target.value)
      setfavorite(newState)
    } else {
      let newState = [...favorite]
      newState.push(e.target.value)
      setfavorite(newState)
    }
  }

  const formSubmitHandler = () => {
    const newFav = favorite.join(',')
    updateFav(dispatch, { newFav })

    mutate({
      favoriteClasses: newFav,
    })
  }

  return (
    <ProfileLayout>
      <div className={styles.formCard}>
        <label className={styles.title}>Choose news category:</label>
        <form className={styles.form} onChange={formChangeHandler}>
          <label>
            <input
              type="checkbox"
              name="category"
              value="sport"
              defaultChecked={favorite.includes('sport') ? true : false}
            />
            Sport
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="health"
              defaultChecked={favorite.includes('health') ? true : false}
            />
            Health
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="politics"
              defaultChecked={favorite.includes('politics') ? true : false}
            />
            Politics
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="economics"
              defaultChecked={favorite.includes('economics') ? true : false}
            />
            Economics
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="technology"
              defaultChecked={favorite.includes('technology') ? true : false}
            />
            Technology
          </label>
        </form>
        <Button onClick={formSubmitHandler}>save</Button>
      </div>
    </ProfileLayout>
  )
}

export default FavClass
