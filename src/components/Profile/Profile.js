import React from 'react';
import { MarkGithubIcon } from 'react-octicons';

const Profile = () => (
  <div className="profile">
    <h3 className="profile__title">Profile</h3>
    <div className="profile__content">
      <div className="profile-image">
        <img
          src="/images/img-kazuhiro-yamada.jpg"
          alt="Kazuhiro Yamadaの写真"
        />
      </div>
      <div className="profile-detail">
        <h4 className="profile-detail__name">Kazuhiro Yamada</h4>
        <h5 className="profile-detail__job">
          Front-End Engineer / Web-Designer
        </h5>
        <p className="profile-detail__introduction">
          現在、自社メディアサイトでJavaScript開発 / マークアップ / デザイン /
          ディレクションと幅広く仕事をしております。<br />
          JavaScriptを書いてる時が一番楽しい人です！
        </p>
        <ul className="profile-detail__social-list">
          <li>
            <a
              href="https://github.com/ymdman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MarkGithubIcon width="32" height="32" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Profile;
