"use client";
import Spline from "@splinetool/react-spline";

export default function Computer() {
  return (
    <figure className="w-full flex flex-col aspect-[4/3]" data-umami-event="Camera">
      <Spline scene="https://prod.spline.design/5oDZfdQhMJTldExH/scene.splinecode" />
      <figcaption className="text-sm text-center text-gray-700">
        按回车键或点击红色快门试试<br />大陆访问可能有点慢
      </figcaption>
    </figure>
  );
}
