export default function HeaderMain() {
  return (
    <header className="bg-bgColor text-white flex items-center justifiy center h-16">
      <ul className="flex gap-7">
        <li>
          <HeaderComponents title="Noutati" />
        </li>
        <li>
          <HeaderComponents title="Evenimente" />
        </li>
        <li>
          <HeaderComponents title="Documente" />
        </li>
      </ul>
    </header>
  );
}

type HeaderComponentsProps = {
  title: string;
};

function HeaderComponents({ title }: HeaderComponentsProps) {
  return (
    <section>
      <p>{title}</p>
    </section>
  );
}
