import React from 'react';
import { connect } from 'react-redux';

class CareerList extends React.Component {
  constructor() {
    super();

    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    console.log(this);
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
                      <div onClick={() => { this.showModal(); }} role="button" tabIndex="0">
                        <h4>{projects.siteName}</h4>
                        <div><img src={projects.imagePath} alt={projects.siteName} /></div>
                      </div>
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
