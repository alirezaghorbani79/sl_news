import RegisterForm from 'componentes/RegisterForm'
import RegisterLayout from 'layouts/RegisterLayout'

const inputs = [
  {
    label: 'enter name:',
    type: 'text',
  },
  {
    label: 'enter email:',
    type: 'text',
  },
  {
    label: 'enter password',
    type: 'password',
  },
]

const Singup = () => {
  return (
    <RegisterLayout>
      <RegisterForm title={'Sign up'} inputs={inputs} />
    </RegisterLayout>
  )
}

export default Singup
