"use client";
import Spline from "@splinetool/react-spline";

export default function Computer() {
  return (
    <figure className="w-full flex flex-col aspect-[4/3]">
      <Spline scene="https://prod.spline.design/5oDZfdQhMJTldExH/scene.splinecode" />
      <figcaption className="text-sm text-center">
        Press Enter
      </figcaption>
    </figure>
  );
}
