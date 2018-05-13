import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const dataJS = {
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ['#ffda3f', '#f5f5f5'],
      borderWidth: 0,
    },
  ],
};

const dataNode = {
  datasets: [
    {
      data: [40, 60],
      backgroundColor: ['#539e43', '#f5f5f5'],
      borderWidth: 0,
    },
  ],
};

const dataHTML = {
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ['#e44d27', '#f5f5f5'],
      borderWidth: 0,
    },
  ],
};

const dataCSS = {
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ['#1b72bb', '#f5f5f5'],
      borderWidth: 0,
    },
  ],
};

const dataPHP = {
  datasets: [
    {
      data: [20, 80],
      backgroundColor: ['#767bb4', '#f5f5f5'],
      borderWidth: 0,
    },
  ],
};

const dataDesign = {
  datasets: [
    {
      data: [60, 40],
      backgroundColor: ['#32c6f5', '#f5f5f5'],
      borderWidth: 0,
    },
  ],
};

const options = {
  cutoutPercentage: 70,
  legend: {
    display: false,
  },

  hover: {
    mode: false,
  },

  animation: {
    duration: 2000,
  },

  tooltips: {
    enabled: false,
  },
};

const SkillGraph = () => (
  <div className="l-content">
    <h3 className="l-content__title">Programming / Markup</h3>
    <div className="l-content__detail">
      <dl className="skill-description">
        <dt>
          <dfn>JavaScript(ES2015)</dfn>
        </dt>
        <dd>
          オブジェクト指向で書けライブラリはReact / Vue.js /
          jQueryを使用できます。<br />モジュール管理はwebpack /
          Browserify、タスクランナーはgulp / Gruntの使用経験があります。
        </dd>
        <dt>
          <dfn>CSS</dfn>
        </dt>
        <dd>
          設計についてはFLOCSS / BEM / SMACSS、altCSSについてはSass / Stylus /
          PostCSSを使用できます。
        </dd>
        <dt>
          <dfn>OTHER</dfn>
        </dt>
        <dd>
          HTMLはセマンティックなマークアップができますし、CMSについてはWordPress開発の経験もあります。
        </dd>
      </dl>
      <div className="skill-graph">
        <ul className="skill-graph__list">
          <li>
            <h3>JavaScript</h3>
            <p className="skill-graph-value">80%</p>
            <Doughnut
              data={dataJS}
              options={options}
              width={130}
              height={130}
            />
          </li>
          <li>
            <h3>HTML</h3>
            <p className="skill-graph-value">80%</p>
            <Doughnut
              data={dataHTML}
              options={options}
              width={130}
              height={130}
            />
          </li>
          <li>
            <h3>CSS</h3>
            <p className="skill-graph-value">80%</p>
            <Doughnut
              data={dataCSS}
              options={options}
              width={130}
              height={130}
            />
          </li>
          <li>
            <h3>Node.js</h3>
            <p className="skill-graph-value">40%</p>
            <Doughnut
              data={dataNode}
              options={options}
              width={130}
              height={130}
            />
          </li>
          <li>
            <h3>PHP</h3>
            <p className="skill-graph-value">20%</p>
            <Doughnut
              data={dataPHP}
              options={options}
              width={130}
              height={130}
            />
          </li>
          <li>
            <h3>Design</h3>
            <p className="skill-graph-value">60%</p>
            <Doughnut
              data={dataDesign}
              options={options}
              width={130}
              height={130}
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default SkillGraph;
