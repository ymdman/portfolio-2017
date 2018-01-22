import React from 'react';
import { connect } from 'react-redux';
import CareerDetail from '../CareerDetail/CareerDetail';

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
              <h3 className="career-list__title">{career.companyName}</h3>
              <dl className="career-list__detail">
                <dt>Job</dt>
                <dd>{career.job}</dd>
                <dt>status</dt>
                <dd>{career.status}</dd>
                <dt>experience</dt>
                <dd>{career.experience}</dd>
              </dl>
              <p className="career-list__description">{career.description}</p>
              <ul className="career-list__project">
                {
                  career.projects.map(projects => (
                    <li key={projects.siteName}>
                      <span
                        onClick={() => { this.showModal(projects); }}
                        role="button"
                        tabIndex="0"
                      >
                        <h4 className="project-title">{projects.siteName}</h4>
                        <div className="project-image"><img src={projects.imagePath} alt={projects.siteName} /></div>
                      </span>
                      <CareerDetail projects={projects} />
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
