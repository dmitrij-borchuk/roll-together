import { Button, Divider, Modal } from '@mantine/core'
import { useState } from 'react'
import { addRoom } from '../../firebase/api/rooms'
import { Header } from '../../shared/components/Header'
import { RoomForm } from './RoomForm'
import { RoomList } from './RoomsList'

export const RoomListPage = () => {
  const [opened, setOpened] = useState(false)
  const onSubmit = async (data: { name: string }) => {
    await addRoom(data)
    setOpened(false)
    // TODO: reload list
  }

  return (
    <>
      <Header />
      <Button onClick={() => setOpened(true)}>Add room</Button>
      <Divider my="sm" />
      <RoomList />

      <Modal opened={opened} onClose={() => setOpened(false)} title="Add room">
        <RoomForm onSubmit={onSubmit} />
      </Modal>
    </>
  )
}
