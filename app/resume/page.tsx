import Image from "next/image";
import style from "../styles/resume.module.css";
import { LinkIcon, XMarkIcon } from "@heroicons/react/20/solid";

export default function Resume() {
  return (
    <main
      className={`relative bg-transparent mt-16 mb-4 pt-8 pb-12 lg:my-16 lg:py-14 px-6 max-w-5xl mx-auto gap-8 lg:px-8 ${style.paper}`}
    >
      <header className="space-y-8 sm:space-y-0 sm:flex sm:justify-between">
        <div className="flex gap-4">
          <div>
            <Image
              className="inline-block h-16 w-16 rounded-full"
              src="/avatar.jpg"
              alt="avatar"
              width={180}
              height={180}
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold font-serif">李大毛没有猫</h1>
            <small className="space-x-2">
              <span className="line-through">UX Designer</span>
              <span>Front-end Developer</span>
              <span className="underline decoration-wavy">Creative Coder</span>
            </small>
          </div>
        </div>
        <address className="not-italic space-y-2">
          <p>
            了解我:{" "}
            <a
              href="https://darmau.design"
              target="_blank"
              className="font-mono underline decoration-violet-700 decoration-2 underline-offset-4 hover:decoration-violet-900"
            >
              可可托海没有海
            </a>
          </p>
          <p>
            联系我:{" "}
            <a
              href="mailto:contact@darmau.design"
              target="_blank"
              className="font-mono underline decoration-violet-700 decoration-2 underline-offset-4 hover:decoration-violet-900"
            >
              Email
            </a>
          </p>
        </address>
      </header>
      <div className="py-16 border-b border-black">
        <p className="font-bold font-serif text-2xl leading-relaxed">
          作为一名具备良好审美和设计能力的前端开发者，我深知如何将界面设计和技术开发紧密结合。我的设计背景赋予我能够设计出极具想象力和创意的网站，同时我的前端开发经验更使我能够将这些设计转化为高效、流畅的网页交互。
        </p>
      </div>
      <article className="w-full py-16 flex flex-col gap-16 md:grid md:grid-cols-4">
        <div className="space-y-16 md:col-span-3">
          <section className="flex gap-8">
            <h2 className={`${style.category} text-lg font-serif font-bold`}>
              教育
            </h2>
            <ol className="space-y-6 -mt-1">
              <li className="space-y-1">
                <h3 className="font-serif font-bold text-lg">长安大学</h3>
                <p className="text-sm text-gray-600">2011 ~ 2015</p>
                <p className="text-gray-800">工业设计·工学学士</p>
              </li>
            </ol>
          </section>
          <section className="flex gap-8">
            <h2 className={`${style.category} text-lg font-serif font-bold`}>
              项目
            </h2>
            <ol className="space-y-8 -mt-1">
              <li className="space-y-2">
                <h3 className="font-serif font-bold text-lg flex items-center gap-2 group">
                  <a
                    href="https://darmau.design"
                    target="_blank"
                    className="hover:underline hover:underline-offset-4 group-hover:decoration-violet-900"
                  >
                    可可托海没有海
                  </a>
                  <LinkIcon className="h-5 w-5 text-gray-600 group-hover:text-violet-600 group-hover:animate-bounce" />
                </h3>
                <p className="text-gray-800">
                  可可托海是我独立完成的一个博客项目，包括设计、后台搭建和前端开发。该项目采用了多种技术栈，后台使用了
                  Strapi 框架，前端使用了 Next.js 和 TypeScript，并利用 GraphQL
                  进行数据交互。同时，样式采用了 Tailwind CSS
                  构建，并整合自行开发的 Node 接口 Fetch Exif。
                </p>
                <p className="text-gray-800">
                  该博客项目的特点在于设计精美，页面访问速度快，并且提供中英双语，优化了无障碍访问和SEO表现，提供了优秀的浏览体验。
                </p>
              </li>
              <li className="space-y-2">
                <h3 className="font-serif font-bold text-lg flex items-center gap-2 group">
                  <a
                    href="https://www.figma.com/community/plugin/1217826923789274183"
                    target="_blank"
                    className="hover:underline hover:underline-offset-4 group-hover:decoration-violet-900"
                  >
                    Tailwind Export
                  </a>
                  <LinkIcon className="h-5 w-5 text-gray-600 group-hover:text-violet-600 group-hover:animate-bounce" />
                </h3>
                <p className="text-gray-800">
                  Tailwind Export 是一款基于 Figma 平台并使用 TypeScript
                  开发的插件，它可以帮助 UI
                  设计师和开发人员在设计界面的过程中，快速生成类似于 Tailwind
                  CSS 这样的样式类名。
                </p>
                <p className="text-gray-800">
                  Tailwind Export
                  可以将矩形、椭圆形、文本和框架等元素的各种属性提取出来，包括边框宽度、颜色、填充色、字体、字号、行高等，并根据
                  Tailwind CSS 的 CSS 原子类规则，自动生成相应的样式类名代码。
                </p>
                <p className="text-gray-800">
                  同时该插件会匹配 Figma 中的颜色定义， 通过 Tailwind
                  预设颜色变量找到最接近的 tailwind
                  颜色定义，以保证生成代码的准确性。这大大加速了设计与开发之间的迭代速度，使得设计师和开发人员不再需要动手写样式代码，只需要专心完成自己的工作。
                </p>
                <p className="text-gray-800">
                  总之，Tailwind Export 是一个快速、便捷的 Figma
                  插件，可有效提升设计和开发过程中的效率，并且符合现代前端开发的主流标准和实践。
                </p>
              </li>
              <li className="space-y-2">
                <h3 className="font-serif font-bold text-lg">
                  <a
                    href="https://github.com/Darmau/fetch-exif"
                    target="_blank"
                    className="hover:underline hover:underline-offset-4 group-hover:decoration-violet-900"
                  >
                    Fetch EXIF
                  </a>
                </h3>
                <p className="text-gray-800">
                  fetch-exif 是一个基于 Node.js 和 Express
                  框架的后端服务项目。该项目提供了一个接口，可以接收传入的图片
                  URL，然后通过 Node.js
                  的请求库，发送异步请求获取这张图片的原始信息。
                </p>
                <p className="text-gray-800">
                  fetch-exif 将会解析出格式化的 exif
                  信息，并将其返回给前端调用方。用户能够通过此接口获得原始图片的拍摄时间、制造商、型号、ISO、GPS等重要信息。
                </p>
                <p className="text-gray-800">
                  由于使用了缓存机制，该接口的运行速度极快。
                </p>
              </li>
              <li className="space-y-2">
                <h3 className="font-serif font-bold text-lg">
                  万物云 Design System
                </h3>
                <p className="text-gray-800">
                  这是一个被万物云内部5个部门20位以上设计师使用的设计系统，包含了设计元素、基础组件、业务组件三层结构。实现了统一设计风格、提升设计效率。
                </p>
              </li>
              <li className="space-y-2">
                <h3 className="font-serif font-bold text-lg">飞地 App</h3>
                <p className="text-gray-800">
                  作为产品负责人、产品经理和设计师，我承担了飞地 2.0
                  的开发工作。该产品包括移动端 App
                  和网页版网站，是一款致力于提供诗歌内容的应用，在每日更新的基础上，为爱好者们打造了一个自由的诗歌世界。
                </p>
                <p className="text-gray-800">
                  飞地获得过多家应用市场评选的设计奖项，获得了业内及用户的高度认可。
                </p>
              </li>
            </ol>
          </section>
          <section className="flex gap-8">
            <h2 className={`${style.category} text-lg font-serif font-bold`}>
              工作
            </h2>
            <ol className="space-y-8 -mt-1">
              <li className="space-y-2">
                <h3 className="font-serif font-bold text-lg">Ubisoft</h3>
                <p className="text-sm text-gray-600">2022</p>
                <p className="text-gray-800">负责内部数据产品的设计</p>
              </li>
              <li className="space-y-2">
                <h3 className="font-serif font-bold text-lg">万物云</h3>
                <p className="text-sm text-gray-600">2018 ~ 2021</p>
                <p className="text-gray-800">
                  住这儿、助英台及后台应用的功能模块设计
                </p>
              </li>
              <li className="space-y-2">
                <h3 className="font-serif font-bold text-lg">飞地</h3>
                <p className="text-sm text-gray-600">2016 ~ 2018</p>
                <p className="text-gray-800">负责飞地App的交互及UI设计工作</p>
              </li>
            </ol>
          </section>
        </div>
        <aside className="space-y-16 md:col-span-1">
          <section className="flex gap-8">
            <h2 className={`${style.category} text-lg font-serif font-bold`}>
              开发
            </h2>
            <ol className="space-y-2 -mt-1 text-gray-600">
              <li>React</li>
              <li>Typescript</li>
              <li>TailwindCSS</li>
              <li>Next.js</li>
              <li>Gatsby</li>
              <li>GraphQL</li>
              <li>Three.js</li>
            </ol>
          </section>
          <section className="flex gap-8">
            <h2 className={`${style.category} text-lg font-serif font-bold`}>
              设计
            </h2>
            <ol className="space-y-2 -mt-1 text-gray-600">
              <li>Figma</li>
              <li>Spline</li>
              <li>Framer</li>
              <li>Photoshop</li>
            </ol>
          </section>
        </aside>
      </article>

      {/* 提醒查看完整简历 */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
        <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-900 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
          <p className="text-sm leading-6 text-white">查看完整简历请联系我</p>
        </div>
      </div>
    </main>
  );
}
