import Computer from "../lib/Computer";

export default function Cover() {
  return (
    <section className="relative bg-transparent mt-20 mb-8">
      <div className="mx-auto max-w-7xl lg:grid lg:items-center lg:grid-cols-5 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-2 lg:px-0 lg:pb-56 lg:pt-48">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h3 className="font-title text-2xl">Design and Develop</h3>
            <h2 className="font-title mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:mt-8 sm:text-6xl">
            To Create
            </h2>
            <p className="mt-6 leading-8 text-lg text-gray-600">
            不管是设计师还是开发者，都不应该被职位限制住。在AI时代，我们应该成为创造者。
            </p>
          </div>
        </div>
        <div className="px-8 lg:col-span-3">
          <Computer />
        </div>
      </div>
    </section>
  )
}

