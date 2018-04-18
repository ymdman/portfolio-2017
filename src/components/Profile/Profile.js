import React from 'react';
import { MarkGithubIcon } from 'react-octicons';

const Profile = () => (
  <div className="l-content">
    <h3 className="l-content__title">Profile</h3>
    <div className="l-content__detail">
      <div className="profile">
        <div className="profile__image">
          <img
            src="/images/img-kazuhiro-yamada.jpg"
            alt="Kazuhiro Yamadaの写真"
          />
        </div>
        <div className="profile__detail">
          <h4 className="profile-name">Kazuhiro Yamada</h4>
          <h5 className="profile-job">Front-End Engineer / Web-Designer</h5>
          <p className="profile-introduction">
            現在、自社メディアサイトでJavaScript開発 / マークアップ / デザイン /
            ディレクションと幅広く仕事をしております。<br />
            JavaScriptを書いてる時が一番楽しい人です！
          </p>
          <ul className="profile-social-list">
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
  </div>
);

export default Profile;
