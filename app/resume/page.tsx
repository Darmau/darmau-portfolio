import Image from "next/image";
import style from "../styles/resume.module.css";
import { LinkIcon, XMarkIcon } from "@heroicons/react/20/solid";

export default function Resume() {
  return (
    <main
      className={`relative bg-transparent border border-black mt-16 mb-4 pt-8 pb-12 lg:my-16 lg:py-14 px-6 max-w-5xl mx-auto gap-8 lg:px-8 ${style.paper}`}
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
          曾经是 UX Designer，目前是 Front-end Developer，正在努力成为 Creative
          Coder。既然前端喜欢往后端卷，那我就从设计往前端卷。
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
                  个人项目。独立完成界面设计、前端开发和后端接口。使用了React、Typescript、Next.js、GraphQL、Node.js、Tailwind等技术，通过next/image和CDN实现图片优化，着重考虑了美观及访问体验。并另外部署有Node.js
                  API、访问分析、评论以及推送通知。
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
                  Figma插件。通过Figma的API，将Figma中的选定元素生成为预设的Tailwind类名，并复制到剪贴板。
                </p>
              </li>
              <li className="space-y-2">
                <h3 className="font-serif font-bold text-lg">
                  万物云 Design System
                </h3>
                <p className="text-gray-800">
                  负责设计系统的搭建、维护和推广。支持了5个部门20位设计师的日常设计工作，提升了设计效率和统一性。
                </p>
              </li>
              <li className="space-y-2">
                <h3 className="font-serif font-bold text-lg">飞地 App</h3>
                <p className="text-gray-800">
                  主导了2.0的改版，承担了PM和设计的工作。重构了整个产品，优化了设计语言。产品曾被多个安卓应用市场评选为精品应用。
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
          <p className="text-sm leading-6 text-white">
              查看完整简历请联系我
          </p>
        </div>
      </div>
    </main>
  );
}
