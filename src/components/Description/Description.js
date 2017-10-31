import React from 'react';

const Description = () => (
  <div>
    <p>
    フロントエンド・エンジニアKazuhiro Yamadaのポートフォリオサイトになります。<br />
    当サイトはReact+Reduxを使用しSPAで実装しております。<br />
    ソースは<a href="https://github.com/ymdman/portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>にて公開してますのでご確認頂けると幸いです。
    </p>
    <dl className="hoge23">
      <dt>サイト構成</dt>
      <dd>
        <ul className="list">
          <li>React</li>
          <li>Redux</li>
          <li>ES2015</li>
          <li>webpack 3</li>
          <li>PostCSS</li>
          <li>cssnext</li>
        </ul>
      </dd>
    </dl>
  </div>
);

export default Description;
