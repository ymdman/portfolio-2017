import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ActionCreator from '../../actions/ActionCreator';

class CareerList extends React.Component {
  constructor() {
    super();

    console.log('aa');
  }

  componentDidMount() {
    this.props.actions.fetchPost();
  }

  render() {
    return (
      <div>
        {console.log(this.props.currentState.careerData)}
      </div>
    );
  }
}

CareerList.propTypes = {
  actions: React.PropTypes.shape({
    fetchPost: React.PropTypes.func.isRequired,
  }),
  currentState: React.PropTypes.shape({
    response: React.PropTypes.bool.isRequired,
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
