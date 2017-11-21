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

const dataPhotoshop = {
  datasets: [
    {
      data: [60, 40],
      backgroundColor: ['#00c8ff', '#f5f5f5'],
      borderWidth: 0,
    },
  ],
};

const dataIllustrator = {
  datasets: [
    {
      data: [40, 60],
      backgroundColor: ['#fd8c1f', '#f5f5f5'],
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
  <div>
    <p>JavaScript(ES2015)についてはオブジェクト指向で書け、ライブラリはReact,Vue.js,jQueryを使用できます。<br />
    HTMLについてはセマンティックなコーディングが出来ます。</p>
    <div className="skill-graph-list">
      <ul className="skill-graph-list__inner">
        <li>
          <h3>JavaScript</h3>
          <p>80%</p>
          <Doughnut data={dataJS} options={options} width={150} height={150} />
        </li>
        <li>
          <h3>Node.js</h3>
          <p>40%</p>
          <Doughnut data={dataNode} options={options} width={150} height={150} />
        </li>
        <li>
          <h3>HTML</h3>
          <p>80%</p>
          <Doughnut data={dataHTML} options={options} width={150} height={150} />
        </li>
        <li>
          <h3>CSS</h3>
          <p>80%</p>
          <Doughnut data={dataCSS} options={options} width={150} height={150} />
        </li>
        <li>
          <h3>PHP</h3>
          <p>80%</p>
          <Doughnut data={dataPHP} options={options} width={150} height={150} />
        </li>
        <li>
          <h3>Photoshop</h3>
          <p>60%</p>
          <Doughnut data={dataPhotoshop} options={options} width={150} height={150} />
        </li>
        <li>
          <h3>Illustrator</h3>
          <p>60%</p>
          <Doughnut data={dataIllustrator} options={options} width={150} height={150} />
        </li>
      </ul>
    </div>
  </div>
);

export default SkillGraph;
