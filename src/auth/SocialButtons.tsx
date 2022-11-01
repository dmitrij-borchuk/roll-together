import { Button, ButtonProps } from '@mantine/core'
import { signInWithGoogle } from '../firebase/auth'
import { GoogleIcon } from './GoogleIcon'

export function GoogleButton(props: ButtonProps) {
  return <Button leftIcon={<GoogleIcon />} variant="default" color="gray" onClick={signInWithGoogle} {...props} />
}
