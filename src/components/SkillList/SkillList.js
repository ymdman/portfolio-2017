import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const data = {
  labels: ['JavaScript', 'CSS', 'HTML', 'PHP', 'Photoshop', 'Illustrator'],
  datasets: [{
    data: [80, 70, 75, 80, 70, 75],
    label: ['A', 'B', 'C'],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 206, 86)',
    ],
  },
  ],
};

const options = {
  responsive: true,

  legend: {
    display: false,
  },

  scales: {
    yAxes: [{
      display: true,
      barPercentage: 0.6,
      categoryPercentage: 0.6,
      scaleLabel: {
        display: true,
      },
      gridLines: {
        display: false,
      },
    }],

    xAxes: [{
      display: true,
      ticks: {
        min: 0,
        max: 100,
        stepSize: 10,
      },
    }],
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
    <HorizontalBar data={data} options={options} />
  </div>
);

export default SkillList;
