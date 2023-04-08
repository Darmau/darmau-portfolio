import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  LinkIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div className="font-noto relative isolate bg-transparent">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 border-b border-gray-600 sm:pt-32 lg:border-b-0 lg:border-r lg:border-gray-600 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            {/* <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div> */}
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              联系我
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              如果你有项目想要和我合作，或者有工作机会，或者只是想跟我聊聊，还可以通过下列方式找到我
            </p>
            <ul className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <li className="flex gap-2 items-center decoration-2 hover:underline underline-offset-4 decoration-indigo-600 cursor-pointer">
                GitHub：darmau
                <LinkIcon
                  className="h-4 w-4 text-indigo-700"
                  aria-hidden="true"
                />
              </li>
              <li className="flex gap-2 items-center decoration-2 hover:underline underline-offset-4 decoration-indigo-600 cursor-pointer">
                Twitter: darmaulee
                <LinkIcon
                  className="h-4 w-4 text-indigo-700"
                  aria-hidden="true"
                />
              </li>
              <li className="flex gap-2 items-center decoration-2 hover:underline underline-offset-4 decoration-indigo-600 cursor-pointer">
                微信公众号：darmau
                <LinkIcon
                  className="h-4 w-4 text-indigo-700"
                  aria-hidden="true"
                />
              </li>
            </ul>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="bg-white/60 backdrop-blur-lg p-8 border border-gray-100 rounded-2xl mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block font-semibold leading-6 text-gray-900"
                >
                  称呼
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block bg-transparent border-0 border-b w-full px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-800 focus:border-b-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block bg-transparent border-0 border-b w-full px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-800 focus:border-b-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block font-bold leading-6 text-gray-900"
                >
                  信息
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={2}
                    className="block bg-transparent border-0 border-b w-full px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-800 focus:border-b-0 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="bg-zinc-800 w-full px-3.5 py-2.5 text-center font-bold text-white hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              >
                发送
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
