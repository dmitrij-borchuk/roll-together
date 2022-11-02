import { Accordion, Loader, Notification } from '@mantine/core'
import { IconX } from '@tabler/icons'
import { useRoomsList } from '../../firebase/api/useRoomsList'
import { parseError } from '../../shared/errorParser'

export const RoomList = () => {
  const { error, list, loading } = useRoomsList()

  if (loading) {
    return <Loader />
  }

  if (error) {
    return (
      <Notification icon={<IconX size={18} />} color="red">
        {parseError(error)}
      </Notification>
    )
  }

  return (
    <ul>
      <Accordion defaultValue="customization">
        {list.map((room) => (
          <Accordion.Item key={room.id} value={room.id}>
            <Accordion.Control>{room.name}</Accordion.Control>
            <Accordion.Panel>TBD</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </ul>
  )
}
