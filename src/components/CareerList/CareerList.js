import React from 'react';
import request from 'superagent';

export default class CareerList extends React.Component {
  constructor() {
    super();

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    request
      .get('./data/career.json')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        console.log(err, res, this);
      });
  }

  render() {
    return (
      <div>hoge</div>
    );
  }
}
