import React from 'react';
import { connect } from 'react-redux';

const Modal = props => (
  <div className="modal">
    <div className="modal__inner">
      <p>{props.currentState.modalContent.siteName}</p>
    </div>
  </div>
);

Modal.propTypes = {
  currentState: React.PropTypes.shape({
    modalContent: React.PropTypes.object.isRequired,
  }),
};

Modal.defaultProps = {
  currentState: {},
};

const mapStateToProps = state => (
  { currentState: state.Index }
);

export default connect(
  mapStateToProps,
)(Modal);
