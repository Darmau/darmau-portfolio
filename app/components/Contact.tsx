'use client'
import { LinkIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { useState } from "react";

// 动态加载对话框
const Success = dynamic(() => import("./ModalSingleAction"));

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);

  const submitUrl =
    process.env.NEXT_PUBLIC_EZ_FORM_URL ?? "localhost:1337/api/ezforms/submit/";

  // 保存及提交表单数据
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submitData = {
      formName: "合作",
      formData: { ...formData },
    };

    fetch(submitUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_EZ_FORM_TOKEN}`,
      },
      body: JSON.stringify(submitData),
    })
      .then((response) => {
        // 推送通知到手机
        if (response.ok) {
          return fetch(
            `${process.env.NEXT_PUBLIC_BARK}${formData.name}/${formData.message}`
          );
        }
        throw new Error("Error:" + response.statusText);
      })
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        setShowModal(true);
      })
      .catch((err: Error) => {
        alert("Error:" + err.message);
        console.log("Error:", err);
      });
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {showModal && <Success />}
      <section id="contact" className="relative isolate bg-transparent">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 border-b border-gray-600 sm:pt-32 lg:border-b-0 lg:border-r lg:border-gray-600 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900">
                联系我
              </h2>
              <p className="mt-6 leading-8 text-gray-600">
                如果你有项目想要和我合作，或者有工作机会，或者只是想跟我聊聊，还可以通过下列方式找到我
              </p>
              <ul className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <li className="flex gap-2 items-center decoration-2 hover:underline underline-offset-4 decoration-indigo-600 cursor-pointer">
                  <a href="https://github.com/Darmau" target="_blank">GitHub：darmau</a>
                  <LinkIcon
                    className="h-4 w-4 text-indigo-700"
                    aria-hidden="true"
                  />
                </li>
                <li className="flex gap-2 items-center decoration-2 hover:underline underline-offset-4 decoration-indigo-600 cursor-pointer">
                  <a href="https://twitter.com/darmaulee" target="_blank">Twitter：darmaulee</a>
                  <LinkIcon
                    className="h-4 w-4 text-indigo-700"
                    aria-hidden="true"
                  />
                </li>
                <li className="flex gap-2 items-center decoration-2 hover:underline underline-offset-4 decoration-indigo-600 cursor-pointer">
                  微信公众号：darmau
                </li>
              </ul>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            action={submitUrl}
            method="POST"
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
          >
            <div className="bg-white/40 backdrop-blur-lg p-8 border border-gray-100 rounded-2xl mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
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
                      onChange={handleInputChange}
                      type="text"
                      name="name"
                      id="name"
                      required
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
                      onChange={handleInputChange}
                      type="email"
                      name="email"
                      id="email"
                      required
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
                      onChange={handleInputChange}
                      name="message"
                      id="message"
                      rows={2}
                      required
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
      </section>
    </>
  );
}
