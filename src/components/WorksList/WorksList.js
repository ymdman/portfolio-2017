import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../../actions/ActionCreator';

const WorksList = props => (
  <div className="l-content">
    <div className="l-content__detail">
      <ul className="works-list">
        {props.currentState.worksData.map(works => (
          <li key={works.key}>
            <h3 className="works-list__title">{works.companyName}</h3>
            <dl className="works-list__detail">
              <dt>職種</dt>
              <dd>{works.job}</dd>
              <dt>雇用形態</dt>
              <dd>{works.status}</dd>
              <dt>期間</dt>
              <dd>{works.experience}</dd>
            </dl>
            <p className="works-list__description">{works.description}</p>
            <ul className="works-list__project">
              {works.projects.map(project => (
                <li key={project.siteName}>
                  <div
                    onClick={() => {
                      props.actions.showModal(project);
                      props.actions.changeModalImage({
                        src: project.image[0].src,
                        alt: project.image[0].alt,
                      });
                    }}
                    role="button"
                    tabIndex="0"
                    className="works-project"
                  >
                    <div className="works-project__image">
                      <div className="works-project__image-inner">
                        <img
                          src={project.image[0].src}
                          alt={project.image[0].alt}
                        />
                      </div>
                    </div>
                    <h4 className="works-project__title">{project.siteName}</h4>
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

WorksList.propTypes = {
  currentState: React.PropTypes.shape({
    worksData: React.PropTypes.array.isRequired,
  }),
};

WorksList.defaultProps = {
  currentState: {},
};

const mapStateToProps = state => ({ currentState: state.Index });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreator, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorksList);
