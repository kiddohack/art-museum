import { db, storage } from "@/app/firebase/firebaseConfig";
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
import {
  deleteObject,
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { v4 } from "uuid";

export type Blog = {
  id: string;
  title: string;
  date: string;
  description: string;
  timestamp: { seconds: number; nanoseconds: number };
  image: string;
  uuid: string;
};

export type Auth = {
  id: string;
  email: string;
  pass: string;
};

export type DataComponents = {
  title: string;
  date: string;
  description: string;
  imageLink: string;
};

let uid: string = "";

export async function addDataToFirestore({
  title,
  date,
  description,
  imageLink,
}: DataComponents) {
  try {
    const docRef = await addDoc(collection(db, "blogs"), {
      title: title,
      date: date,
      description: description,
      timestamp: serverTimestamp(),
      image: imageLink,
      uuid: uid,
    });
    console.log("Document ID: ", docRef.id);
    console.log("Adding to database" + imageLink);
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

export async function fetchPass(): Promise<Auth[]> {
  try {
    const queryPass = await getDocs(collection(db, "auth"));

    const data: Auth[] = [];
    queryPass.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() } as Auth);
    });

    return data;
  } catch (error) {
    console.error("Error fetching the pass", error);
    return [];
  }
}

const deleteFromStorage = async (url: string) => {
  try {
    const pictureRef = storageRef(storage, url);
    await deleteObject(pictureRef);
    alert("Picture deleted successfully!");
  } catch (error: any) {
    alert(error.message);
  }
};

export async function handleDelete(id: string, url: string) {
  try {
    await deleteDoc(doc(db, "blogs", id));
    deleteFromStorage(url);

    console.log("Document successfully deleted!");
    window.location.reload();
  } catch (error) {
    console.error("Error removing the document: ", error);
  }
}

export const uploadFile = async (
  image: File | null,
): Promise<string | undefined> => {
  if (image === null) {
    alert("Please select an image");
    return undefined;
  }
  const id = v4();
  const imageRef = storageRef(storage, `${id}`);
  uid = id;

  try {
    const snapshot = await uploadBytes(imageRef, image);
    const url = await getDownloadURL(snapshot.ref);
    console.log("In function after setting imageLink: " + url);

    return url;
  } catch (error: any) {
    alert(error.message);
  }
};
