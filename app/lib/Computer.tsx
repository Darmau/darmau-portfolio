"use client";
import Spline from "@splinetool/react-spline";

export default function Computer() {
  return (
    <figure className="w-full flex flex-col lg:absolute lg:h-full">
      <Spline scene="https://prod.spline.design/5oDZfdQhMJTldExH/scene.splinecode" />
      <figcaption className="text-sm font-serif text-center">
        电脑可以拖动哦
      </figcaption>
    </figure>
  );
}
