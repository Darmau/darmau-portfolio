import style from "../styles/intro.module.css";

const introString = [
  "我叫李大毛，显然这是个网名",
  "我曾经是交互设计师",
  "现在的目标是成为视觉表现方向的全栈开发",
  "业余时间我喜欢摄影和骑摩托",
  "另外我也很喜欢历史和地理",
];

export default function Intro() {
  const generateColorClass = () =>
    `${style["color-" + (Math.floor(Math.random() * 5) + 1)]}`;

  // 遍历字符串数组，为每个字符串生成一个 div 元素
  const divs = introString.map((string, index) => (
    <div
      key={index}
      className={`${index === 0 ? "text-gray-700" : "text-gray-500"}`}
    >
      {/* 遍历字符串中的字符，为每个字符生成一个随机颜色的 span 元素 */}
      {string.split("").map((char, index) => (
        <span key={index} className={generateColorClass()}>
          {char}
        </span>
      ))}
    </div>
  ));

  return (
    <section className="px-8 py-16 border-y border-black font-serif md:py-24">
      <div className="text-center font-bold text-4xl space-y-8 cursor-crosshair">
        {divs}
      </div>
    </section>
  );
}
