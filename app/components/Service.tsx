export default function Service() {
  return (
    <section className="border-b border-black bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 flex flex-col justify-center items-center gap-16 lg:px-8">
        <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900">服务</h2>
        <ul className="flex flex-wrap justify-center gap-8">
          <li className="font-serif font-bold text-lg border border-black px-8 py-6 transition-all duration-300 hover:bg-black hover:text-white">网站设计</li>
          <li className="font-serif font-bold text-lg border border-black px-8 py-6 transition-all duration-300 hover:bg-black hover:text-white">App 设计</li>
          <li className="font-serif font-bold text-lg border border-black px-8 py-6 transition-all duration-300 hover:bg-black hover:text-white">网站开发</li>
          <li className="font-serif font-bold text-lg border border-black px-8 py-6 transition-all duration-300 hover:bg-black hover:text-white">烤羊肉串</li>
        </ul>
      </div>
    </section>
  );
}