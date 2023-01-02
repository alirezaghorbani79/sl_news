import styles from './Button.module.scss'

const Button = ({ children, ...props }) => {
  return (
    <div className={styles.button} {...props}>
      {children}
    </div>
  )
}

export default Button
