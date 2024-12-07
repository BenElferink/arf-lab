import { storage } from '@/srcutils/firebase'
import { v4 as uuidv4 } from 'uuid'

const uploadFile = async (file: File): Promise<{ fileId: string; fileUrl: string }> => {
  const fileId = uuidv4()

  const snapshot = await storage.ref(`/logos/${fileId}`).put(file, {
    contentType: file.type,
  })

  const fileUrl = await snapshot.ref.getDownloadURL()

  return { fileId, fileUrl }
}

export default uploadFile
