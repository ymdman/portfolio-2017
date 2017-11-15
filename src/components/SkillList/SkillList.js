import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const dataJS = {
  datasets: [
    {
      data: [80, 20],
      backgroundColor: [
        '#ffda3f',
        '#fff',
      ],
      borderWidth: 0,
    },
  ],
};

const dataHTML = {
  datasets: [
    {
      data: [80, 20],
      backgroundColor: [
        '#e44d27',
        '#fff',
      ],
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

const SkillList = () => (
  <ul className="hoge">
    <li>
      <h3>JavaScript</h3>
      <p>80%</p>
      <Doughnut data={dataJS} options={options} width={150} height={150} />
    </li>
    <li>
      <h3>HTML</h3>
      <p>80%</p>
      <Doughnut data={dataHTML} options={options} width={150} height={150} />
    </li>
  </ul>
);

export default SkillList;
