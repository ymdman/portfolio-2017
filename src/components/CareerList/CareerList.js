import React from 'react';
import { connect } from 'react-redux';

class CareerList extends React.Component {
  componentDidMount() {
    console.log('fdaf');
  }

  render() {
    return (
      <ul className="career-list">
        {
          this.props.currentState.careerData.map(career => (
            <li key={career.key}>
              <h3>{career.companyName}</h3>
              <dl>
                <dt>Job</dt>
                <dd>{career.job}</dd>
                <dt>status</dt>
                <dd>{career.status}</dd>
                <dt>experience</dt>
                <dd>{career.experience}</dd>
              </dl>
              <p>{career.description}</p>
              <ul className="career-list__project">
                {
                  career.projects.map(projects => (
                    <li key={projects.siteName}>
                      <a href={projects.url}>
                        <h4>{projects.siteName}</h4>
                        <div><img src={projects.imagePath} alt={projects.siteName} /></div>
                      </a>
                    </li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    );
  }
}

CareerList.propTypes = {
  currentState: React.PropTypes.shape({
    careerData: React.PropTypes.array.isRequired,
  }),
};

CareerList.defaultProps = {
  currentState: {},
};

const mapStateToProps = state => (
  { currentState: state.Index }
);

export default connect(
  mapStateToProps,
)(CareerList);
