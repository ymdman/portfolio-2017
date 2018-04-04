import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../../actions/ActionCreator';

class Modal extends React.Component {
  constructor() {
    super();

    console.log(this);
  }

  render() {
    const toggleModal = () => {
      if (this.props.currentState.showModal) {
        return { display: 'table' };
      }

      return { display: 'none' };
    };

    return (
      <div className="modal" style={toggleModal()}>
        <div className="modal__inner">
          <p>{this.props.currentState.modalContent.siteName}</p>
          <div
            onClick={() => {
              this.props.actions.showModal({});
              toggleModal();
            }}
            role="button"
            tabIndex="0"
          >close</div>
        </div>
      </div>
    );
  }
}

// const Modal = props => (
//   <div className="modal">
//     <div className="modal__inner">
//       <p>{props.currentState.modalContent.siteName}</p>
//     </div>
//   </div>
// );

Modal.propTypes = {
  actions: React.PropTypes.shape({
    showModal: React.PropTypes.func.isRequired,
  }),
  currentState: React.PropTypes.shape({
    modalContent: React.PropTypes.object.isRequired,
    showModal: React.PropTypes.boolean,
  }),
};

Modal.defaultProps = {
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
)(Modal);
