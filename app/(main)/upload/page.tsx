"use client";
import {
  addDataToFirestore,
  uploadFile,
} from "@/app/firebase/firebaseFunctions";
import React, { useState } from "react";

export default function Upload() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageName, setImageName] = useState<string>("No file chosen");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const url = await uploadFile(image);
      if (url) {
        await addDataToFirestore({ title, date, description, imageLink: url });

        setTitle("");
        setDate("");
        setDescription("");
        setImage(null);
        setImageName("No file chosen");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setImage(selectedFile);
      setImageName(selectedFile.name);
    } else {
      setImage(null);
      setImageName("No file chosen");
    }
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
          <section className="my-1 flex items-center justify-center border-2 border-black rounded-lg p-2 bg-gray-200 cursor-pointer">
            <span className="text-gray-500">{imageName}</span>
            <input
              type="file"
              className="hidden"
              aria-label="Image"
              placeholder="Choose image"
              accept="image/png, image/jpeg"
              onChange={handleFileUpload}
            />
          </section>
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
