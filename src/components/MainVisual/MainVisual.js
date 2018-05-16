import React from 'react';
import PropTypes from 'prop-types';
import { ChevronDownIcon } from 'react-octicons';
import Transition from 'react-transition-group/Transition';

const defaultStyle = {
  transition: `all 400ms ease-in-out`,
  transform: 'translateY(20px)',
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: {
    opacity: 1,
    transform: 'translateY(0)',
  },
};

export default class MainVisual extends React.Component {
  constructor() {
    super();

    this.getWindowHeight = this.getWindowHeight.bind(this);
  }

  componentDidMount() {
    this.getWindowHeight();
    this.isAnimation = true;

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

  render() {
    return (
      <div
        className="main-visual"
        style={{ height: this.props.currentState.windowHeight }}
      >
        <div className="main-visual__inner">
          <Transition in={this.isAnimation} timeout={400}>
            {state => (
              <div
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                <h2 className="main-visual-title-name">Kazuhiro Yamada</h2>
              </div>
            )}
          </Transition>
          <Transition in={this.isAnimation} timeout={600}>
            {state => (
              <div
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                <p className="main-visual-title-job">
                  Front End Engineer / Web Designer
                </p>
              </div>
            )}
          </Transition>
        </div>
        <ChevronDownIcon
          onClick={() => {
            window.scrollTo(0, this.props.currentState.windowHeight);
          }}
          role="button"
          tabIndex="0"
          width="48"
          height="48"
          className="main-visual__scroll-btn"
        />
      </div>
    );
  }
}

MainVisual.propTypes = {
  actions: PropTypes.shape({
    getWindowHeight: PropTypes.func.isRequired,
  }),
  currentState: PropTypes.shape({
    windowHeight: PropTypes.number.isRequired,
  }),
};

MainVisual.defaultProps = {
  actions: {},
  currentState: {},
};
