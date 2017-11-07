import React from 'react';
import { MarkGithubIcon } from 'react-octicons';

const AboutMe = () => (
  <div className="about-me">
    <div className="about-me__image">
      <img src="/images/img-kazuhiro-yamada.jpg" alt="Kazuhiro Yamadaの写真" />
    </div>
    <div className="about-me__content">
      <h3 className="about-me-title">Kazuhiro Yamada</h3>
      <h4 className="about-me-sub-title">Front-End Engineer / Web-Designer</h4>
      <p className="about-me-text">
        JavaScriptが好きです。JavaScriptが好きです。<br />
        JavaScriptが好きです。JavaScriptが好きです。
      </p>
      <ul className="about-me-social-list">
        <li>
          <a href="https://github.com/ymdman" target="_blank" rel="noopener noreferrer">
            <MarkGithubIcon width="32" height="32" />
          </a>
        </li>
      </ul>

    </div>
  </div>
);

export default AboutMe;
