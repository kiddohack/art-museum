import { db } from "@/app/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

export type Blog = {
  id: string;
  title: string;
  date: string;
  description: string;
  timestamp: { seconds: number; nanoseconds: number };
};

export type DataComponents = {
  title: string;
  date: string;
  description: string;
};

export async function addDataToFirestore({
  title,
  date,
  description,
}: DataComponents) {
  try {
    const docRef = await addDoc(collection(db, "blogs"), {
      title: title,
      date: date,
      description: description,
      timestamp: serverTimestamp(),
    });
    console.log("Document ID: ", docRef.id);
    alert("Data was sent Succesfully!!!");
  } catch (error) {
    console.error("Error adding document ", error);
  }
}

export async function fetchDataFirestore(): Promise<Blog[]> {
  const queryByTime = query(
    collection(db, "blogs"),
    orderBy("timestamp", "desc"),
  );
  const querySnapshot = await getDocs(queryByTime);

  const data: Blog[] = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() } as Blog);
  });

  return data;
}

export async function handleDelete(id: string) {
  try {
    await deleteDoc(doc(db, "blogs", id));
    console.log("Document successfully deleted!");
    window.location.reload();
  } catch (error) {
    console.error("Error removing the document: ", error);
  }
}
