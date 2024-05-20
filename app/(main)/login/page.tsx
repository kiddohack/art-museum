"use client";

import { Auth, fetchPass } from "@/app/firebase/firebaseFunctions";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [data, setData] = useState<Auth[]>([]);

  useEffect(() => {
    async function dataFetch() {
      const data = await fetchPass();
      setData(data);
    }
    dataFetch();
  }, []);

  return (
    <>
      <section>
        <h2>Login Data</h2>
        {data.map((data) => (
          <section key={data.id}>
            <p>{data.email}</p>
            <p>{data.pass}</p>
          </section>
        ))}
      </section>
    </>
  );
}
