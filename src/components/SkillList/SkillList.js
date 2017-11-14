import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  datasets: [{
    data: [80, 20],
    label: ['A', 'B'],
    backgroundColor: [
      'rgb(255, 99, 132)',
      '#fff',
    ],
    borderWidth: 0,
  },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutoutPercentage: 80,
  legend: {
    display: false,
  },

  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },
};

const SkillList = () => (
  <div className="">
    <Doughnut data={data} options={options} width={150} height={150} />
  </div>
);

export default SkillList;
