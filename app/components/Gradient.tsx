import style from "../styles/gradient.module.css";
// 渐变背景
export default function Gradient() {
  return (
    <>
      <div className={style.gradient}></div>
      <div className={style.mask}></div>
    </>
  );
}
