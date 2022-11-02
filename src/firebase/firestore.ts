import { getFirestore, collection, QueryDocumentSnapshot } from 'firebase/firestore/lite'
import { Room } from '../types/room'
import { app } from './app'

export const db = getFirestore(app)

export const rooms = collection(db, 'rooms').withConverter(converter<Room>())
export const room = (id: string) => collection(db, 'rooms', id).withConverter(converter<Room>())
export const roomsOfUser = (uid: string) => collection(db, `users/${uid}/rooms`).withConverter(converter<Room>())

export function converter<T>() {
  return {
    toFirestore: (data: T) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) => ({ id: snap.id, ...snap.data() } as T),
  }
}
