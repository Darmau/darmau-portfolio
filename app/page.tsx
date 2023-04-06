import type { Metadata } from "next";
import Stacks from "./components/Stacks";
import Projects from "./components/Projects";
import Intro from "./components/Intro";
import Cover from "./components/Cover";
import Contact from "./components/Contact";

export const metadata: Metadata = {
  title: "darmau.dev",
  description: "darmau's personal website",
};

export default function Home() {
  return (
    <main>
      <Cover />
      <Intro contents={text} />
      <Stacks />
      <Projects />
      <Contact />
    </main>
  );
}

const text = [
  '这是第一行字',
  '这是第二行字',
  '这是第三行字',
  '这是第四行字',
]