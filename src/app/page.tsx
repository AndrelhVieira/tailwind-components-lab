"use client";

import PageStructure from "./components/PageStructure";

export default function Home() {
  const pageProps = {
    title: "Welcome to my Tailwind CSS component project 😊",
    description:
      "Here you'll find some examples of simple components and structures created using Tailwind CSS",
  };

  return (
    <PageStructure pageProps={pageProps}>
      <div className="mt-10">
        <p className="font-lato font-bold text-xl">
          Check the menu to see some examples
        </p>
      </div>
    </PageStructure>
  );
}
