import React from 'react';
import MainVisual from '../MainVisual/MainVisual';

const ContentAbout = props => (
  <div>
    <MainVisual {...props} />
    <div className="content">
      <h2 className="title">About</h2>
      <p>
        フロントエンド・エンジニアKazuhiro Yamadaのポートフォリオサイトになります。<br />
        当サイトはReact+Reduxを使用しSPAで実装しております。<br />
        ソースはGitHubにて公開してますのでご確認頂けると幸いです。
      </p>
      <ul className="list">
        <li>React</li>
        <li>Redux</li>
        <li>ES2015</li>
        <li>webpack 3</li>
        <li>PostCSS</li>
        <li>cssnext</li>
      </ul>
    </div>
  </div>
);

export default ContentAbout;
