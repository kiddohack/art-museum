"use client";
import { db } from "@/app/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";

type DataComponents = {
  title: string;
  date: string;
  description: string;
};

async function addDataToFirestore({
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

export default function Upload() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addDataToFirestore({ title, date, description });

    setTitle("");
    setDate("");
    setDescription("");
  };

  return (
    <section>
      <p className="text-4xl font-bold m-10 flex justify-center">
        Add Data to Firebase
      </p>
      <form onSubmit={handleSubmit} className="grid justify-center w-screen">
        <input
          className="my-1 border-2 border-black rounded-lg p-2"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          className="my-1 border-2 border-black rounded-lg p-2"
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
        />
        <textarea
          className="my-1 border-2 border-black rounded-lg p-2"
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button
          type="submit"
          className="rounded-lg my-3 bg-blue-500 text-white p-2"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
