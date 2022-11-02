import { useCallback, useEffect, useState } from 'react'
import { Room } from '../../types/room'
import { useUser } from '../auth'
import { getRoomById, getRoomsOfUser } from './rooms'

export function useRoomsList() {
  const [list, setList] = useState<Room[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error>()
  const user = useUser()

  const fetchRooms = useCallback(async (userId: string) => {
    setLoading(true)
    try {
      const list = await getRoomsOfUser(userId)

      const items = await Promise.all(list.map((i) => getRoomById(i.id)))
      setList(items)
      setLoading(false)
    } catch (error: any) {
      setError(error)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!user) {
      return
    }
    fetchRooms(user.uid)
  }, [fetchRooms, user])

  return { list, loading, error }
}
