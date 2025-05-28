import { getFirestore, collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore"
const collName = "projects"
const getProject = async (id) => {
    const db = getFirestore()
    const docRef = doc(db, collName, id)
    const snapshot = await getDoc(docRef)
    return snapshot || "No existe el proyecto solicitado"
}
const getProjects = async () => {
    const db = getFirestore()
    const collRef = collection(db, collName)
    const snapshot = await getDocs(collRef)
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}
const createProject = async (data) => {
    const db = getFirestore()
    const collRef = collection(db, collName)
    const resp = await addDoc(collRef, data)
    return resp.id
}
const updateProject = async (id, data) => {
    const db = getFirestore()
    const doc = doc(db, collName, id)
    await updateDoc(doc, data)
}
const deleteProject = async (id) => {
    const db = getFirestore()
    const doc = doc(db, collName, id)
    await deleteDoc(doc)
}
export const projectServicies = [getProject, getProjects, createProject, updateProject, deleteProject]