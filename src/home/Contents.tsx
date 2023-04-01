import { Fragment } from "react";

function Contents() {
  return (
    <Fragment>
      <h1 style={{display: 'inline'}}> Portfolio </h1>
      <sub> フロントエンド入門編 </sub>
      <br /> <br />
      <div className="card large">
        <h3> About me </h3>
        最適化してるエンジニア
      </div>
      <div className="card large">
        <h3> Accounts </h3>
        Twitter
        GitHub
        AtCoder
      </div>
    </Fragment>
  )
}

export default Contents;
