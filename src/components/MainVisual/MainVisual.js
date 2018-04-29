import React from 'react';
import { ChevronDownIcon } from 'react-octicons';

export default class MainVisual extends React.Component {
  constructor() {
    super();

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

  render() {
    return (
      <div
        className="main-visual"
        style={{ height: this.props.currentState.windowHeight }}
      >
        <div className="main-visual__inner">
          <h2 className="main-visual-title-name">Kazuhiro Yamada</h2>
          <p className="main-visual-title-job">
            Front End Engineer / Web Designer
          </p>
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
  actions: React.PropTypes.shape({
    getWindowHeight: React.PropTypes.func.isRequired,
  }),
  currentState: React.PropTypes.shape({
    windowHeight: React.PropTypes.number.isRequired,
  }),
};

MainVisual.defaultProps = {
  actions: {},
  currentState: {},
};
