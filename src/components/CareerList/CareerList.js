import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ActionCreator from '../../actions/ActionCreator';

class CareerList extends React.Component {
  componentDidMount() {
    this.props.actions.fetchPost();
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
  actions: React.PropTypes.shape({
    fetchPost: React.PropTypes.func.isRequired,
  }),
  currentState: React.PropTypes.shape({
    careerData: React.PropTypes.array.isRequired,
  }),
};

CareerList.defaultProps = {
  actions: {},
  currentState: {},
};

const mapStateToProps = state => (
  { currentState: state.Index }
);

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(ActionCreator, dispatch) }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CareerList);
