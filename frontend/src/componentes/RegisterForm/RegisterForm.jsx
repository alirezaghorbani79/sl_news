import Button from 'componentes/Button'
import Link from 'next/link'
import styles from './RegisterForm.module.scss'

const RegisterForm = ({ title, inputs, ...props }) => {
  const inputsElement = inputs.map((el) => {
    return (
      <div className={styles.inputLabel}>
        <label>{el.label}</label>
        <input type={el.type} className={styles.input} />
      </div>
    )
  })

  const loginHandler = () => {
    console.log('Working')
  }

  return (
    <div className={styles.formBody}>
      <h1>SLNews</h1>
      <div className={styles.title}>{title}</div>
      <div className={styles.inputs}>{inputsElement}</div>
      <Link href={'/signup'} className={styles.link}>
        don’t have an account? sign up
      </Link>
      <Button onClick={loginHandler}>Log in</Button>
    </div>
  )
}

export default RegisterForm
