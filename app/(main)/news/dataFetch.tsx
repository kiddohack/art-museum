"use client";

import {
  Blog,
  fetchDataFirestore,
  handleDelete,
} from "@/app/firebase/firebaseFunctions";
import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <div className="grid grid-flow-row w-dvh h-full">
      <div className="w-full mx-auto py-8 px-10 whitespace-normal xl:px-36 xl:w-[80%] md:px-20">
        {blogData.map((blog) => (
          <div key={blog.id} className="border rounded-lg p-8 flex-1 my-5">
            <div>
              <section className="w-full mx-auto mb-4 h-[300px] relative">
                <Image
                  src={blog.image}
                  alt="Image Blog Description"
                  layout="fill"
                  objectFit="cover"
                />
              </section>
              <h1 className="text-xl font-semibold mb-2 sm:text-2 xl">
                {blog.title}
              </h1>
              <p className="text-gray-500 mb-1">{blog.date}</p>
              <p className="text-s sm:text-xl">{blog.description}</p>
              <section className="flex justify-end mt-3">
                <button type="submit">
                  <PencilIcon className="w-6 h-6 text-black mr-3" />
                </button>
                <button
                  type="submit"
                  onClick={() => handleDelete(blog.id, blog.image)}
                >
                  <TrashIcon className="w-6 h-6 text-black" />
                </button>
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// function EditBlog() {
//   return (
//     <form className="bg-bgColor flex flex-col">
//       <input
//         name="title"
//         className="my-1 flex-grow border-2 border-black rounded-lg p-2"
//         type="text"
//         value={editData.title}
//         onChange={(e) => handleInputChange("title", e.target.value)}
//         placeholder="Title"
//       />
//       <input
//         name="date"
//         className="my-1 flex-grow border-2 border-black rounded-lg p-2"
//         type="text"
//         value={editData.date}
//         onChange={(e) => handleInputChange("date", e.target.value)}
//         placeholder="Date"
//       />
//       <textarea
//         name="description"
//         className="my-1 flex-grow border-2 border-black rounded-lg p-2 resize-none"
//         rows={5}
//         value={editData.description}
//         onChange={(e) => handleInputChange("description", e.target.value)}
//         placeholder="Description"
//       />
//       <section className="flex justify-center">
//         <button
//           type="button"
//           onClick={() => handleDoneClick()}
//           className="rounded-lg w-[30%] my-3 bg-blue-500 text-white p-2"
//         >
//           Upload
//         </button>
//       </section>
//     </form>
//   );
// }
