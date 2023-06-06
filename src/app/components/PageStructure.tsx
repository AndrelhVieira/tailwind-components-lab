type PageStructureProps = {
  children: React.ReactNode;
};

export default function PageStructure({ children }: PageStructureProps) {
  return (
    <section className="w-full p-10 flex flex-col items-center">
      <h1 className="text-2xl font-bold">Buttons</h1>
      <p className="my-8">
        {`Here are some examples of buttons I'd like to create using Tailwind
          CSS to improve my knowleadge with this tool. 😊`}
      </p>

      {children}
    </section>
  );
}
