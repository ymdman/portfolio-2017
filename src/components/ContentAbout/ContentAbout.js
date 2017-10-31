import React from 'react';
import MainVisual from '../MainVisual/MainVisual';
import Section from '../Section/Section';
import Description from '../Description/Description';
import Profile from '../Profile/Profile';

const ContentAbout = props => (
  <div>
    <MainVisual {...props} />
    <Section title={'About'}>
      <Description />
    </Section>

    <Section title={'Me'}>
      <Profile />
    </Section>
  </div>
);

export default ContentAbout;
