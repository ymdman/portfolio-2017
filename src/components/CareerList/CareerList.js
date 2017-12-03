import React from 'react';
import request from 'superagent';

export default class CareerList extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
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
        this.setState({
          data: res.body,
        });
      });
  }

  render() {
    console.log(this.state.data, 'afafa');
    return (
      <div>
        {this.state.data.map((hoge) => {
          const fuga = hoge.companyName;
          const id = hoge.job;
          return (
            <div key={id}>{fuga}</div>
          );
        })}
      </div>
    );
  }
}
