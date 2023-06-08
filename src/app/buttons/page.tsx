import PageStructure from "../components/PageStructure";

export default function Buttons() {
  const pageProps = {
    title: "Buttons",
    description: `Here are some examples of buttons I'd like to create using Tailwind
    CSS to improve my knowleadge with this tool. 😊`,
  };

  return (
    <PageStructure pageProps={pageProps}>
      <div className="flex flex-col gap-8 w-2/3 items-center">
        <button className="rounded-full bg-pink-800 font-light py-3 px-8 hover:bg-pink-900 transition">
          Full rounded
        </button>
        <button className="rounded-sm bg-pink-800 font-light py-3 px-8 hover:bg-pink-900 transition">
          Partial rounded
        </button>
        <div className="flex gap-2">
          <button className="rounded-sm bg-white text-pink-800 font-light py-3 px-8 hover:bg-pink-800 hover:text-white transition">
            Back
          </button>
          <button className="rounded-sm bg-pink-800 text-white font-light py-3 px-8 hover:bg-white hover:text-pink-800 transition">
            Next
          </button>
        </div>
        <button
          className="rounded-sm bg-gradient-to-r from-gray-800 via-gray-900 to-pink-800 text-white font-light py-3 px-8
         hover:from-pink-800 hover:to-gray-800 hover:via-gray-900"
        >
          With gradient
        </button>
        <div className="flex gap-3 flex-wrap justify-center">
          <button className="rounded-sm bg-pink-800 font-light py-3 px-8 hover:bg-pink-900 transition cursor-wait">
            Cursor wait
          </button>
          <button className="rounded-sm bg-pink-800 font-light py-3 px-8 hover:bg-pink-900 transition cursor-text">
            Cursor text
          </button>
          <button className="rounded-sm bg-pink-800 font-light py-3 px-8 hover:bg-pink-900 transition cursor-move">
            Cursor move
          </button>
          <button className="rounded-sm bg-pink-800 font-light py-3 px-8 hover:bg-pink-900 transition cursor-help">
            Cursor help
          </button>
          <button className="rounded-sm bg-pink-800 font-light py-3 px-8 hover:bg-pink-900 transition cursor-not-allowed">
            Cursor not-allowed
          </button>
          <button className="rounded-sm bg-pink-800 font-light py-3 px-8 hover:bg-pink-900 transition cursor-progress">
            Cursor progress
          </button>
          <button className="rounded-sm bg-pink-800 font-light py-3 px-8 hover:bg-pink-900 transition cursor-crosshair">
            Cursor crosshair
          </button>
          <button className="rounded-sm bg-pink-800 font-light py-3 px-8 hover:bg-pink-900 transition cursor-context-menu">
            Cursor context-menu
          </button>
          <button className="rounded-sm bg-pink-800 font-light py-3 px-8 hover:bg-pink-900 transition cursor-copy">
            Cursor copy
          </button>
          <button className="rounded-sm bg-pink-800 font-light py-3 px-8 hover:bg-pink-900 transition cursor-no-drop">
            Cursor no-drop
          </button>
        </div>
      </div>
    </PageStructure>
  );
}
