type PageStructureProps = {
  pageProps: {
    title?: string;
    description?: string;
  };
  children: React.ReactNode;
};

export default function PageStructure({
  pageProps,
  children,
}: PageStructureProps) {
  return (
    <section className="w-full p-10 flex flex-col items-center">
      <h1 className="text-2xl font-bold">{pageProps.title}</h1>
      <p className="my-8">{pageProps.description}</p>
      {children}
    </section>
  );
}
