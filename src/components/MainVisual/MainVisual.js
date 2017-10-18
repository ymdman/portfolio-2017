import React from 'react';

class MainVisual extends React.Component {
  constructor() {
    super();

    this.getWindowHeight = this.getWindowHeight.bind(this);
  }

  componentDidMount() {
    this.getWindowHeight();

    window.addEventListener('resize', () => {
      this.getWindowHeight();
    }, false);
  }

  getWindowHeight() {
    this.props.actions.getWindowHeight();
  }

  render() {
    return (
      <div className="main-visual" style={{ height: this.props.currentState.windowHeight }}>
        <div className="main-visual__inner">
          <h2>Kazuhiro Yamada</h2>
          <p>Front End Engineer / Web Designer</p>
        </div>
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

export default MainVisual;
