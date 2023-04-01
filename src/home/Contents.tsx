import { Fragment } from "react";

function Contents() {
  const linkStyle = {
    display: 'inline-block',
  };

  return (
    <Fragment>
      <h1 style={{display: 'inline'}}> Portfolio </h1>
      <sub> フロントエンド入門編 </sub>
      <br />
      <div className="card large">
        <h3> About me </h3>
        最適化してるエンジニア
      </div>
      <div className="card large">
        <h3> Accounts </h3>
        <ul>
          <li> <a style={linkStyle} href="https://twitter.com/_gacin">Twitter</a> </li>
          <li> <a href="https://github.com/gasin">GitHub</a> </li>
          <li> <a href="https://atcoder.jp/users/gasin?contestType=algo">AtCoder</a> </li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Contents;
