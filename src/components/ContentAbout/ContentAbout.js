import React from 'react';
import MainVisual from '../MainVisual/MainVisual';
import Section from '../Section/Section';
import AboutSite from '../AboutSite/AboutSite';
import Profile from '../Profile/Profile';

const ContentAbout = props => (
  <div>
    <MainVisual {...props} />
    <Section title={'About Site'}>
      <div>
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
    </Section>
  </div>
);

export default ContentAbout;
