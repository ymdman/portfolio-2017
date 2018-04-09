import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../../actions/ActionCreator';

class CareerList extends React.Component {
  constructor() {
    super();

    console.log(this.props, 'fuga');
  }

  render() {
    return (
      <div>
        <p>
          上から順に直近の職歴と携わったサイトの一部を掲載しております。<br />
          サイトによってはリニューアルしているものもあり、画像と相違している場合があります(画像は私が携わっていた時のものです)。<br />
          また、公開終了しているサイトとWeb以外の制作物にはリンクボタンが付いておりません。
        </p>
        <ul className="career-list">
          {this.props.currentState.careerData.map(career => (
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
                {career.projects.map(project => (
                  <li key={project.siteName}>
                    <span
                      onClick={() => {
                        this.props.actions.showModal(project);
                      }}
                      role="button"
                      tabIndex="0"
                    >
                      <h4 className="project-title">{project.siteName}</h4>
                      <div className="project-image">
                        <img
                          src={project.image[0].url}
                          alt={project.image[0].alt}
                        />
                      </div>
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

CareerList.propTypes = {
  actions: React.PropTypes.shape({
    showModal: React.PropTypes.func.isRequired,
  }),
  currentState: React.PropTypes.shape({
    careerData: React.PropTypes.array.isRequired,
  }),
};

CareerList.defaultProps = {
  currentState: {},
  actions: {},
};

const mapStateToProps = state => ({ currentState: state.Index });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreator, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CareerList);
