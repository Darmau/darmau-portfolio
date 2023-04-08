import style from "../styles/intro.module.css";

export default function Intro() {
  return (
    <div className="p-16 border-y border-black font-serif">
      <div className={style.text}>
        <h3>我叫李大毛，显然这是个网名。</h3>
        <h3>
          我曾经是交互设计师，现在的目标是成为视觉表现方向的全栈开发。
        </h3>
        <h3>业余时间我喜欢摄影<span className={style.emoji}> 📷 </span>和骑摩托<span className={style.emoji}> 🏍️ </span></h3>
        <h3>另外我也很喜欢历史和地理</h3>
      </div>
    </div>
  );
}
