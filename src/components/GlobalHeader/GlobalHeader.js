import React from 'react';
import { Link } from 'react-router-dom';

export default class GlobalHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'fuga',
    };
  }

  render() {
    return (
      <header className="l-global-header">
        <h1>{this.props.title}</h1>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skill">Skill</Link></li>
            <li><Link to="/career">Career</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

GlobalHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
};
