import Button from 'componentes/Button'
import { doLogin, useAuth, useAuthDispatch } from 'contexts/AuthContext'
import RegisterLayout from 'layouts/RegisterLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

import styles from '../../styles/login.module.scss'

const Login = () => {
  const userRef = useRef()
  const passwordRef = useRef()
  const router = useRouter()

  const authDispatch = useAuthDispatch()
  const { isLoggedIn } = useAuth()

  const loginHandler = (e) => {
    e.preventDefault()
    const username = userRef.current.value
    const password = passwordRef.current.value
    doLogin(authDispatch, { username, password })
  }

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/')
    }
  }, [isLoggedIn])

  return (
    <RegisterLayout>
      <div className={styles.formBody}>
        <h1>SLNews</h1>
        <div className={styles.title}>Log in</div>
        <div className={styles.inputs}>
          <div className={styles.inputLabel}>
            <label>enter email:</label>
            <input type="email" ref={userRef} className={styles.input} />
          </div>
          <div className={styles.inputLabel}>
            <label>enter password:</label>
            <input type="password" ref={passwordRef} className={styles.input} />
          </div>
        </div>
        <Link href={'/signup'} className={styles.link}>
          don’t have an account? sign up
        </Link>
        <Button onClick={loginHandler}>Log in</Button>
      </div>
    </RegisterLayout>
  )
}

export default Login
