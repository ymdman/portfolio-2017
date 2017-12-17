import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ActionCreator from '../../actions/ActionCreator';

// import Section from '../Section/Section';
import CareerList from '../CareerList/CareerList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

class ContentCareer extends React.Component {
  componentDidMount() {
    console.log(this.props.actions, 'afdassfda');
    this.props.actions.fetchPost();
  }

  render() {
    const currentState = this.props.currentState;
    let careerList;
    let errorMessage;

    console.log(currentState);
    if (currentState.postSucces) {
      careerList = <CareerList />;
    } else if (currentState.postFailure) {
      errorMessage = <ErrorMessage />;
    }

    return (
      <div>
        {careerList}
        {errorMessage}
      </div>
    );
  }
}


// const ContentCareer = (props) => {
//   const currentState = props.currentState;
//   let careerList;
//   let errorMessage;

//   console.log(currentState);
//   if (currentState.postSucces) {
//     careerList = <CareerList />;
//   } else if (currentState.postFailure) {
//     errorMessage = <ErrorMessage />;
//   }

//   return (
//     <div>
//       {careerList}
//       {errorMessage}
//     </div>
//   );
// };

// const ContentCareer = props => (
//   <div>
//     {console.log(props.currentState.postSucces)}

//     <ErrorMessage />
//     <CareerList />
//   </div>
// );

ContentCareer.propTypes = {
  actions: React.PropTypes.shape({
    fetchPost: React.PropTypes.func.isRequired,
  }),
  currentState: React.PropTypes.shape({
    postSucces: React.PropTypes.bool.isRequired,
  }),
};

ContentCareer.defaultProps = {
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
)(ContentCareer);
