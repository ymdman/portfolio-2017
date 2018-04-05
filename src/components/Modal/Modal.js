import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../../actions/ActionCreator';

class Modal extends React.Component {
  constructor() {
    super();

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    if (this.props.currentState.showModal) {
      return { display: 'table' };
    }

    return { display: 'none' };
  }

  render() {
    return (
      <div className="modal" style={this.toggleModal()}>
        <div className="modal__inner">
          <h2>{this.props.currentState.modalContent.siteName}</h2>
          <p>{this.props.currentState.modalContent.description}</p>
          <div
            onClick={() => {
              this.props.actions.showModal({});
              this.toggleModal();
            }}
            role="button"
            tabIndex="0"
            className="modal__close-btn"
          >close</div>
        </div>
      </div>
    );
  }
}

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
