import { Fragment } from "react";
import HomeTopic from "./HomeTopic";

function Contents() {
  const linkStyle = {
    display: 'inline-block',
  };

  const hobbyContents = () => (
    <Fragment>
      <div className="card large">
        <h4> パソコン </h4>
        パソコンに関する話は好き。
      </div>
      <div className="card large">
        <h4> 絵 </h4>
        たまに気が向いたら描いてる。ラフ絵が好き。
      </div>
      <div className="card large">
        <h4> ゲーム </h4>
        囲碁、ポーカー、Civ、LoL、Minecraft等々をしてた。 <br />
        最近あまりやらなくなった。
      </div>
    </Fragment>
  );

  const accountsContents = () => (
    <ul>
      <li> <a style={linkStyle} href="https://twitter.com/_gacin">Twitter</a> </li>
      <li> <a href="https://github.com/gasin">GitHub</a> </li>
      <li> <a href="https://atcoder.jp/users/gasin?contestType=algo">AtCoder</a> </li>
    </ul>
  );

  return (
    <Fragment>
      <h1 style={{display: 'inline'}}> Portfolio </h1>
      <sub> フロントエンド入門編 </sub>
      <br />
      <HomeTopic
        title="About me"
        contents="何かを最適化してるエンジニア"
      />
      <HomeTopic
        title="Hobby"
        contents= { hobbyContents() }
      />
      <HomeTopic
        title="Accounts"
        contents= { accountsContents() }
      />
    </Fragment>
  )
}

export default Contents;
