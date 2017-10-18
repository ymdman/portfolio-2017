import React from 'react';

class MainVisual extends React.Component {
  constructor() {
    super();

    this.getWindowHeight = this.getWindowHeight.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.getWindowHeight();
    }, false);
  }

  getWindowHeight() {
    this.hoge = window.innerHeight;
  }

  render() {
    return (
      <div className="main-visual" style={{ height: 500 }}>
        <div className="main-visual__inner">
          <h2>Kazuhiro Yamada</h2>
          <p>Front End Engineer / Web Designer</p>
        </div>
      </div>
    );
  }
}

export default MainVisual;
