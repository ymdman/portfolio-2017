import React from 'react';
import { connect } from 'react-redux';

class CareerList extends React.Component {
  componentDidMount() {
    console.log('fdaf');
  }

  render() {
    return (
      <ul className="career-list">
        {
          this.props.currentState.careerData.map(data => (
            <li key={data.key}>
              <h3>{data.companyName}</h3>
              <dl>
                <dt>Job</dt>
                <dd>{data.job}</dd>
                <dt>status</dt>
                <dd>{data.status}</dd>
                <dt>experience</dt>
                <dd>{data.experience}</dd>
              </dl>
              <p>{data.description}</p>
            </li>
          ))
        }
      </ul>
    );
  }
}

CareerList.propTypes = {
  currentState: React.PropTypes.shape({
    careerData: React.PropTypes.array.isRequired,
  }),
};

CareerList.defaultProps = {
  currentState: {},
};

const mapStateToProps = state => (
  { currentState: state.Index }
);


export default connect(
  mapStateToProps,
)(CareerList);
