import PageStructure from "../components/PageStructure";

import FormSvg from "../../assets/form.svg";
import Image from "next/image";

export default function Buttons() {
  const pageProps = {
    title: "Forms",
  };

  return (
    <PageStructure pageProps={pageProps}>
      <div className="w-2/3 text-center font-lato">
        <h2 className="text-2xl font-bold">Square desgin</h2>

        <form className="py-8 px-12 text-white text-left">
          <p className="text-lg font-thin">Send us and Email</p>
          <div className="flex flex-col gap-3 my-3">
            <input
              type="text"
              placeholder="Name"
              className="border-white border-2 p-2 pl-3 rounded-sm text-gray-900"
            />
            <input
              type="email"
              placeholder="Email adress"
              className="border-white border-2 p-2 pl-3 rounded-sm text-gray-900"
            />
            <textarea
              cols={30}
              rows={10}
              className="border-white border-2 p-2 pl-3 rounded-sm text-gray-900"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button className="bg-white py-2 px-6 text-gray-900 uppercase rounded-sm hover:text-white hover:bg-gray-900 transition border-2 border-white">
            Send
          </button>
        </form>

        <hr />

        <h2 className="text-2xl font-bold mt-10 mb-8">Rounded inputs</h2>

        <div className="flex px-12 justify-between items-center gap-16">
          <Image src={FormSvg} alt="Form svg" width="200" />

          <div className="w-full">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-left text-2xl text-blue-400">
                Hello! Please login
              </h3>
              <p className="font-bold text-left text-pink-500">
                Fill in your details
              </p>
            </div>

            <form className="flex flex-col gap-1 py-5 text-left">
              <label className="font-bold">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="p-2 pl-4 rounded-full bg-zinc-200 text-gray-900 outline-pink-500"
              />
              <label className="font-bold">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="p-2 pl-4 rounded-full bg-zinc-200 text-gray-900 outline-pink-500"
              />

              <div className="flex gap-4 mt-2">
                <button className="bg-pink-500 py-3 px-5 rounded-full">
                  Login
                </button>
                <button className="underline">Forgot your password?</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageStructure>
  );
}
