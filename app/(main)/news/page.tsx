import { Metadata } from "next";
import NewsPage from "./dataFetch";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blogs() {
  return (
    <section className="bg-bgColor h-full min-h-screen">
      <NewsPage />
    </section>
  );
}
