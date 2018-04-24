import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../../actions/ActionCreator';

const CareerList = props => (
  <div className="l-content">
    <div className="l-content__detail">
      <ul className="career-list">
        {props.currentState.careerData.map(career => (
          <li key={career.key}>
            <h3 className="career-list__title">{career.companyName}</h3>
            <dl className="career-list__detail">
              <dt>職種</dt>
              <dd>{career.job}</dd>
              <dt>雇用形態</dt>
              <dd>{career.status}</dd>
              <dt>期間</dt>
              <dd>{career.experience}</dd>
            </dl>
            <p className="career-list__description">{career.description}</p>
            <ul className="career-list__project">
              {career.projects.map(project => (
                <li key={project.siteName}>
                  <div
                    onClick={() => {
                      props.actions.showModal(project);
                      props.actions.changeModalImage({
                        url: project.image[0].url,
                        alt: project.image[0].alt,
                      });
                    }}
                    role="button"
                    tabIndex="0"
                    className="career-project"
                  >
                    <div className="career-project__image">
                      <div className="career-project__image-inner">
                        <img
                          src={project.image[0].url}
                          alt={project.image[0].alt}
                        />
                      </div>
                    </div>
                    <h4 className="career-project__title">
                      {project.siteName}
                    </h4>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

CareerList.propTypes = {
  currentState: React.PropTypes.shape({
    careerData: React.PropTypes.array.isRequired,
  }),
};

CareerList.defaultProps = {
  currentState: {},
};

const mapStateToProps = state => ({ currentState: state.Index });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreator, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CareerList);
