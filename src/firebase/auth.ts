import { getAuth, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { app } from './app'

export const auth = getAuth(app)
const provider = new GoogleAuthProvider()

// To localize the provider's OAuth flow to the user's preferred language without explicitly passing the relevant custom OAuth parameters
// https://firebase.google.com/docs/auth/web/google-signin
// auth.languageCode = 'it';

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result)
    if (!credential) {
      throw new Error('No credential')
    }
    const token = credential.accessToken
    if (!token) {
      throw new Error('No token')
    }
    const user = result.user
    localStorage.setItem('rt.token', token)
    localStorage.setItem('rt.user', JSON.stringify(user))

    window.location.href = '/'
  })
}

export function getToken() {
  return localStorage.getItem('rt.token')
}

export function getUser() {
  const str = localStorage.getItem('rt.user')

  if (!str) {
    return null
  }

  return JSON.parse(str) as User
}
