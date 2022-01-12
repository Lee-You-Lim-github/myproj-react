// import "./CssModule.css"; // global 전역이기 때문에 from이 없음.

import "./CssModule.scss";

function CssModule() {
  return (
    <div className="css-module">
      <h2>Css Module</h2>
      <div className="content">내용 내용 내용</div>
      <div className="date">2022.01.11</div>
    </div>
  );
}

export default CssModule;

// Module 방식ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// import Styles from "./CssModule.module.css";

// function CssModule() {
//   return (
//     <div className={Styles.cssmodule}>
//       <h2>Css Module</h2>
//     </div>
//   );
// }

// export default CssModule;
