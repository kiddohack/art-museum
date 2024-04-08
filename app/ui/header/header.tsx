import { HomeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function HeaderMain() {
  return (
    <header className="bg-bgColorHeader text-white flex items-center h-10">
      <section className="flex justify-center pl-16">
        <Link href={"/"}>
          <HomeIcon className="w-6 h-6 text-white-500" />
        </Link>
      </section>
      <ul className="flex gap-7 justify-center w-full pr-16">
        <li>
          <HeaderComponents title="Blog" path="/news" />
        </li>
        <li>
          <HeaderComponents title="Events" path="/events" />
        </li>
        <li>
          <HeaderComponents title="About Us" path="/about" />
        </li>
        <li>
          <HeaderComponents title="Contacts" path="/contacts" />
        </li>
      </ul>
    </header>
  );
}

type HeaderComponentsProps = {
  title: string;
  path: string;
};

function HeaderComponents({ title, path }: HeaderComponentsProps) {
  return (
    <section>
      <Link href={path}>{title}</Link>
    </section>
  );
}
