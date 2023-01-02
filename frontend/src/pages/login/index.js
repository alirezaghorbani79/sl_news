import Button from 'componentes/Button'
import Navigation from 'componentes/Header/Navigation'
import RegisterForm from 'componentes/RegisterForm'
import RegisterLayout from 'layouts/RegisterLayout'

const inputs = [
  {
    label: 'enter email:',
    type: 'text',
  },
  {
    label: 'enter password',
    type: 'password',
  },
]

const Login = () => {
  return (
    <RegisterLayout>
      <RegisterForm title={'Log in'} inputs={inputs} />
    </RegisterLayout>
  )
}

export default Login
