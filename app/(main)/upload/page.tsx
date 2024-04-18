"use client";
import { addDataToFirestore } from "@/app/firebase/firebaseFunctions";
import React, { useState } from "react";

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
    <section className="w-screen flex items-center justify-center">
      <section className="flex flex-col w-[80%] md:w-[60%] xl:w-[45%]">
        <p className="text-2xl font-bold m-10 text-center md:text-4xl">
          Add Data to Firebase
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            className="my-1 flex-grow border-2 border-black rounded-lg p-2"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            className="my-1 flex-grow border-2 border-black rounded-lg p-2"
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Date"
          />
          <textarea
            className="my-1 flex-grow border-2 border-black rounded-lg p-2 resize-none"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <section className="flex justify-center">
            <button
              type="submit"
              className="rounded-lg w-[30%] my-3 bg-blue-500 text-white p-2"
            >
              Upload
            </button>
          </section>
        </form>
      </section>
    </section>
  );
}
