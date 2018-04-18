import React from 'react';
import SkillGraph from '../SkillGraph/SkillGraph';

const ContentSkill = () => (
  <div>
    <section className="section">
      <h2 className="section__title">About</h2>
      <div className="section__detail">
        <p>自己評価ですがスキルについて説明させて頂きます。</p>
        <SkillGraph />
      </div>
    </section>
  </div>
);

export default ContentSkill;
