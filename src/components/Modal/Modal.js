import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../../actions/ActionCreator';

class Modal extends React.Component {
  constructor() {
    super();

    this.toggleModal = this.toggleModal.bind(this);
    this.getWindowHeight = this.getWindowHeight.bind(this);
  }

  componentDidMount() {
    this.getWindowHeight();

    window.addEventListener(
      'resize',
      () => {
        this.getWindowHeight();
      },
      false,
    );
  }

  getWindowHeight() {
    this.props.actions.getWindowHeight();
  }

  toggleModal() {
    if (this.props.currentState.showModal) {
      return { display: 'block' };
    }

    return { display: 'none' };
  }

  render() {
    return (
      <div className="modal" style={this.toggleModal()}>
        <div
          className="modal__inner"
          style={{ height: this.props.currentState.windowHeight - 120 }}
        >
          <div className="modal-datail">
            <h2 className="modal-datail__title">
              {this.props.currentState.modalContent.siteName}
            </h2>
            <p className="modal-datail__description">
              {this.props.currentState.modalContent.description}
            </p>
            <dl className="modal-datail__list">
              <dt>Site / サイト</dt>
              <dd>{this.props.currentState.modalContent.siteName}</dd>
              <dt>Charge / 担当</dt>
              <dd>{this.props.currentState.modalContent.charge}</dd>
              <dt>Experience / 期間</dt>
              <dd>{this.props.currentState.modalContent.experience}</dd>
              <dt>Other / その他</dt>
              <dd>{this.props.currentState.modalContent.other}</dd>
            </dl>

            {(() => {
              if (!this.props.currentState.modalContent.url) {
                return false;
              }

              return (
                <p>
                  <a
                    href={this.props.currentState.modalContent.url}
                    target="_blank"
                  >
                    Visit This Site
                  </a>
                </p>
              );
            })()}
          </div>

          <div className="modal-image">
            <ul className="modal-image__list">
              {this.props.currentState.modalContent.image.map(image => (
                <li key={image.key}>
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="modal-image-list__image"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          onClick={() => {
            this.props.actions.showModal({ image: [] });
            this.toggleModal();
          }}
          role="button"
          tabIndex="0"
          className="modal__close-btn"
        >
          close
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  actions: React.PropTypes.shape({
    showModal: React.PropTypes.func.isRequired,
    getWindowHeight: React.PropTypes.func.isRequired,
  }),
  currentState: React.PropTypes.shape({
    modalContent: React.PropTypes.object.isRequired,
    showModal: React.PropTypes.boolean,
    windowHeight: React.PropTypes.number.isRequired,
  }),
};

Modal.defaultProps = {
  actions: {},
  currentState: {},
};

const mapStateToProps = state => ({ currentState: state.Index });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreator, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
