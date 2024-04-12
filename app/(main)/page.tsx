import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-bgColor h-dvh">
      <section className="relative w-auto h-[50%]">
        <Image
          src="/modern_art.webp"
          fill={true}
          objectFit="cover"
          alt="Modern Art Photo"
        />
      </section>
    </main>
  );
}
