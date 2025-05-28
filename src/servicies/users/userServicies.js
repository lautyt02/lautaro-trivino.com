import { getFirestore, collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore"
const collName = "users"
const getUser = async (id) => {
    const db = getFirestore()
    const docRef = doc(db, collName, id)
    const snapshot = await getDoc(docRef)
    return snapshot || "No existe el usuario solicitado"
}
const getUsers = async () => {
    const db = getFirestore()
    const collRef = collection(db, collName)
    const snapshot = await getDocs(collRef)
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

}
const createUser = async (data) => {
    const db = getFirestore()
    const collRef = collection(db, collName)
    const resp = await addDoc(collRef, data)
    return resp.id
}
const updateUser = async (id, data) => {
    const db = getFirestore()
    const doc = doc(db, collName, id)
    await updateDoc(doc, data)
}
const deleteUser = async (id) => {
    const db = getFirestore()
    const doc = doc(db, collName, id)
    await deleteDoc(doc)
}
export const userServicies = [getUser, getUsers, createUser, updateUser, deleteUser]