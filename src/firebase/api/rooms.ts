import { doc, getDoc, getDocs } from 'firebase/firestore/lite'
import { Room } from '../../types/room'
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
