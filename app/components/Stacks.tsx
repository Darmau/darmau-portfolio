import Image from "next/image"

const iconList = [
  "/images/react.svg",
  "/images/next.svg",
  "/images/tailwind.svg",
  "/images/typescript.svg",
  "/images/node.svg",
  "/images/docker.svg",
  "/images/gatsby.svg",
  "/images/threejs.svg",
  "/images/graphql.svg",
]

export default function Stacks() {
  return (
    <section className="bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900">我的技术栈</h2>
            <p className="mt-6 leading-8 text-gray-600">
              掌握多少个框架并不重要，重要的是学习能力。最近用得多就熟练，用得少就生疏。
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-3 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            {iconList.map((icon, index) => (
              <Image
              key={index}
              className="w-full h-auto object-contain object-left"
              src={icon}
              alt="react"
              width={180}
              height={48}
            />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
