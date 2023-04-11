import Computer from "../lib/Computer";

export default function Cover() {
  return (
    <section className="relative bg-transparent mt-20 mb-8">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h3 className="font-title text-2xl">Design and Develop</h3>
            <h2 className="font-title mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:mt-8 sm:text-6xl">
            WIP
            </h2>
            <p className="mt-6 leading-8 text-gray-600">
            不管是设计师还是开发者，都不应该被职位限制住。在AI时代，我们应该成为创造者。
            </p>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Computer />
        </div>
      </div>
    </section>
  )
}

