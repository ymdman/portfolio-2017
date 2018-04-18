import React from 'react';
import MainVisual from '../MainVisual/MainVisual';
import AboutSite from '../AboutSite/AboutSite';
import Profile from '../Profile/Profile';

const ContentAbout = props => (
  <div>
    <MainVisual {...props} />
    <section className="l-section">
      <h2 className="l-section__title">About</h2>
      <div className="l-section__detail">
        <p>
          フロントエンド・エンジニアKazuhiro
          Yamadaのポートフォリオサイトになります。<br />
          当サイトはReact+Reduxを使用しSPAで実装しております。<br />
          ソースは<a
            href="https://github.com/ymdman/portfolio-2018"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>にて公開してますのでご確認頂けると幸いです。
        </p>
        <AboutSite />
        <Profile />
      </div>
    </section>
  </div>
);

export default ContentAbout;
