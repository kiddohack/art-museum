"use client";

import { db } from "@/app/firebaseConfig";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

type Blog = {
  id: string;
  title: string;
  date: string;
  description: string;
  timestamp: { seconds: number; nanoseconds: number };
};

async function fetchDataFirestore(): Promise<Blog[]> {
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

export default function NewsPage() {
  const [blogData, setBlogData] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFirestore();
      setBlogData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-flow-row ">
      <div className="max-w mx-auto py-8 px-20 xl:px-36">
        {blogData.map((blog) => (
          <div key={blog.id} className="border rounded-lg p-8 flex-1 my-5">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-500 mb-1">{blog.date}</p>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
