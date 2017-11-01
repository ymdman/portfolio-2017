import React from 'react';
import MainVisual from '../MainVisual/MainVisual';
import Section from '../Section/Section';
import AboutSite from '../AboutSite/AboutSite';
import AboutMe from '../AboutMe/AboutMe';

const ContentAbout = props => (
  <div>
    <MainVisual {...props} />
    <Section title={'About Site'}>
      <AboutSite />
    </Section>

    <Section title={'About Me'}>
      <AboutMe />
    </Section>
  </div>
);

export default ContentAbout;
