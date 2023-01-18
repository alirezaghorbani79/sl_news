import { useReducer, useContext, createContext } from 'react'
import { login, signUp } from '../utils/api/api'

const AUTH_SIGNUP = 'AUTH_SIGNUP'
const AUTH_SIGNIN = 'AUTH_SIGNIN'
const AUTH_SIGNOUT = 'AUTH_SIGNOUT'

const AuthStateContext = createContext()
const AuthDispatchContext = createContext()

const AuthProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    isLoggedIn: false,
    isAdmin: false,
  }

  const authReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
      case AUTH_SIGNUP:
        let newState = { ...state }
        if (payload.user.isAdmin) {
          newState.isAdmin = true
        }
        newState.isLoggedIn = true
        return newState
        break

      case AUTH_SIGNIN:
        newState = { ...state }
        if (payload.user.isAdmin) {
          newState.isAdmin = true
        }
        newState.isLoggedIn = true
        return newState
    }
  }

  const [auth, dispatch] = useReducer(authReducer, initialState)

  return (
    <AuthStateContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

const doLogin = async (dispatch, { username, password }) => {
  try {
    const { data } = await login(username, password)
    dispatch({ type: AUTH_SIGNIN, payload: data })
  } catch (error) {
    console.log(error)
  }
}

const doSignup = async (disaptch, { name, email, password }) => {
  try {
    const { data } = await signUp(name, email, password)
    disaptch({ type: AUTH_SIGNUP, payload: data })
  } catch (error) {
    console.group(error)
  }
}

const useAuth = () => {
  return useContext(AuthStateContext)
}

const useAuthDispatch = () => {
  return useContext(AuthDispatchContext)
}

export default AuthProvider

export { useAuth, useAuthDispatch, doLogin, doSignup }
