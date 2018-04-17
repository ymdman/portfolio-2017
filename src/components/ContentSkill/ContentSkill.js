import React from 'react';
import Section from '../Section/Section';
import SkillGraph from '../SkillGraph/SkillGraph';

const ContentSkill = () => (
  <div>
    <Section title={'Skill'}>
      <div>
        <p>自己評価ですがスキルについて説明させて頂きます。</p>
        <SkillGraph />
      </div>
    </Section>
  </div>
);

export default ContentSkill;
