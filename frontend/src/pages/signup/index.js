import Button from 'componentes/Button'
import RegisterForm from 'componentes/RegisterForm'
import { doSignup, useAuth, useAuthDispatch } from 'contexts/AuthContext'
import RegisterLayout from 'layouts/RegisterLayout'
import Link from 'next/link'
import { useRef } from 'react'

import styles from '../../styles/login.module.scss'

const Singup = () => {
  const nameRef = useRef()
  const userRef = useRef()
  const passwordRef = useRef()

  const authDispatch = useAuthDispatch()
  const { isLoggedIn } = useAuth()

  const loginHandler = (e) => {
    e.preventDefault()
    const name = nameRef.current.value
    const email = userRef.current.value
    const password = passwordRef.current.value
    doSignup(authDispatch, { name, email, password })
  }

  return (
    <RegisterLayout>
      <div className={styles.formBody}>
        <h1>SLNews</h1>
        <div className={styles.title}>Sign up</div>
        <div className={styles.inputs}>
          <div className={styles.inputLabel}>
            <label>enter name:</label>
            <input type="text" ref={nameRef} className={styles.input} />
          </div>
          <div className={styles.inputLabel}>
            <label>enter email:</label>
            <input type="email" ref={userRef} className={styles.input} />
          </div>
          <div className={styles.inputLabel}>
            <label>enter password:</label>
            <input type="password" ref={passwordRef} className={styles.input} />
          </div>
        </div>
        <br />
        <Button onClick={loginHandler}>Sign up</Button>
      </div>
    </RegisterLayout>
  )
}

export default Singup
