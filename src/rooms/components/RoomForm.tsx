import { Button, Divider, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useCallback, useState } from 'react'

type Props = {
  onSubmit?: (values: { name: string }) => void
}
export const RoomForm = ({ onSubmit }: Props) => {
  const [loading, setLoading] = useState(false)
  const form = useForm({
    initialValues: {
      name: '',
    },

    validate: {
      name: (value: string) => value.length < 3 && 'Name must be at least 3 characters long',
    },
  })
  const submit = useCallback(
    async (values: { name: string }) => {
      setLoading(true)
      if (onSubmit) {
        await onSubmit(values)
      }
      setLoading(false)
    },
    [onSubmit]
  )

  return (
    <form onSubmit={form.onSubmit(submit)}>
      <TextInput placeholder="Name" label="Name" withAsterisk {...form.getInputProps('name')} disabled={loading} />

      <Divider my="sm" />
      <Button type="submit" disabled={loading} loading={loading}>
        Submit
      </Button>
    </form>
  )
}
