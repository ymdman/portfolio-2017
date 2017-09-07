import React from 'react';
// import { Link } from 'react-router-dom';

export default class GlobalHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    console.log('コンポーネントのマウント前');
  }

  handleClick() {
    console.log(this);
  }

  render() {
    return (
      <header className="l-global-header">
        <h1>fuga</h1>
        <nav>
          <ul>
            <li><button onClick={() => this.handleClick()}>About</button></li>
            <li>Skill</li>
            <li>Career</li>
          </ul>
        </nav>
      </header>
    );
  }
}

// GlobalHeader.propTypes = {
//   title: React.PropTypes.string.isRequired,
// };
