import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../../actions/ActionCreator';

class Modal extends React.Component {
  constructor() {
    super();

    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.props.actions.getWindowHeight();

    window.addEventListener(
      'resize',
      () => {
        this.props.actions.getWindowHeight();
      },
      false,
    );
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
              <dt>サイト名</dt>
              <dd>{this.props.currentState.modalContent.siteName}</dd>
              <dt>担当</dt>
              <dd>{this.props.currentState.modalContent.charge}</dd>
              <dt>期間</dt>
              <dd>{this.props.currentState.modalContent.experience}</dd>
              <dt>その他</dt>
              <dd>{this.props.currentState.modalContent.other}</dd>
            </dl>

            <ul className="modal-datail__thumbnail-list">
              {this.props.currentState.modalContent.image.map(image => (
                <li key={image.key}>
                  <div
                    onClick={e => {
                      console.log(e.target);
                      this.props.actions.changeModalImage({
                        src: e.target.src,
                        alt: e.target.alt,
                      });
                    }}
                    role="button"
                    tabIndex="0"
                    className="modal-datail-thumbnail"
                  >
                    <img src={image.src} alt={image.alt} />
                  </div>
                </li>
              ))}
            </ul>

            {(() => {
              if (!this.props.currentState.modalContent.url) {
                return false;
              }

              return (
                <p className="modal-datail__link-btn">
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
            <div className="modal-image__inner">
              <img
                src={this.props.currentState.modalImage.src}
                alt={this.props.currentState.modalImage.alt}
              />
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            this.props.actions.showModal({ image: [] });
            this.props.actions.changeModalImage({
              src: '',
              alt: '',
            });
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
    changeModalImage: React.PropTypes.func.isRequired,
  }),
  currentState: React.PropTypes.shape({
    modalContent: React.PropTypes.object.isRequired,
    showModal: React.PropTypes.boolean,
    windowHeight: React.PropTypes.number.isRequired,
    modalImage: React.PropTypes.object.isRequired,
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
