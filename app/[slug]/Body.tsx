"use client"
import useCustomReplace from "./useCustomReplace";

export default function Body({ html }: { html: string }) {
  const parsedHtml = useCustomReplace({ html });
  return <div>{parsedHtml}</div>;
}