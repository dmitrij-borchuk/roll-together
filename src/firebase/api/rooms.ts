import { doc, getDoc, getDocs, setDoc } from 'firebase/firestore/lite'
import { nanoid } from 'nanoid'
import { Room } from '../../types/room'
import { getUser } from '../auth'
import { converter, db, roomsOfUser } from '../firestore'

export async function getRoomsOfUser(uid: string) {
  const snapshot = await getDocs(roomsOfUser(uid))
  const list = snapshot.docs.map((doc) => doc.data())
  return list
}

export async function getRoomById(id: string) {
  const docSnap = await getDoc(doc(db, 'rooms', id).withConverter(converter<Room>()))

  return docSnap.data() as Room
}

export async function addRoom(room: Omit<Room, 'id'>) {
  const user = getUser()
  const id = nanoid()
  const res = await setDoc(doc(db, 'rooms', id), room)
  await setDoc(doc(db, `users/${user?.uid}/rooms`, id), { id })

  return res
}
