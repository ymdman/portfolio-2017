import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreator from '../../actions/ActionCreator';

const options = {
  cutoutPercentage: 70,
  legend: {
    display: false,
  },

  hover: {
    mode: false,
  },

  animation: {
    duration: 2000,
  },

  tooltips: {
    enabled: false,
  },
};

class SkillGraph extends React.Component {
  constructor() {
    super();

    this.attachEvent = this.attachEvent.bind(this);
    this.showSkillGraph = this.showSkillGraph.bind(this);
  }

  componentDidMount() {
    this.props.actions.getWindowHeight();
    this.setSkillGraphRect();
    this.showSkillGraph();
    this.attachEvent();
  }

  setSkillGraphRect() {
    this.currentWindowHeight = this.props.currentState.windowHeight;

    this.skillGraphRectTop = this.skillGraph.getBoundingClientRect().top;
    this.skillGraphRectBottom =
      this.skillGraphRectTop + this.skillGraph.clientHeight;
  }

  attachEvent() {
    window.addEventListener(
      'scroll',
      () => {
        this.showSkillGraph();
      },
      false,
    );
  }

  showSkillGraph() {
    this.scrollTop = window.pageYOffset;
    this.scrollBottom = this.currentWindowHeight + this.scrollTop;

    if (
      this.scrollBottom > this.skillGraphRectTop &&
      this.scrollTop < this.skillGraphRectBottom
    ) {
      this.props.actions.showSkillGraph();
    }
  }

  render() {
    return (
      <div className="l-content">
        <h3 className="l-content__title">Programming / Markup</h3>
        <div className="l-content__detail">
          <dl className="skill-description">
            <dt>
              <dfn>JavaScript(ES2015)</dfn>
            </dt>
            <dd>
              オブジェクト指向で書けライブラリはReact / Vue.js /
              jQueryを使用できます。<br />モジュール管理はwebpack /
              Browserify、タスクランナーはgulp / Gruntの使用経験があります。
            </dd>
            <dt>
              <dfn>CSS</dfn>
            </dt>
            <dd>
              設計についてはFLOCSS / BEM / SMACSS、altCSSについてはSass / Stylus
              / PostCSSを使用できます。
            </dd>
            <dt>
              <dfn>OTHER</dfn>
            </dt>
            <dd>
              HTMLはセマンティックなマークアップができますし、CMSについてはWordPress開発の経験もあります。
            </dd>
          </dl>
          <div
            className="skill-graph"
            ref={c => {
              this.skillGraph = c;
            }}
          >
            <ul className="skill-graph__list">
              <li>
                <h3>JavaScript</h3>
                <p className="skill-graph-value">80%</p>
                <Doughnut
                  data={this.props.currentState.skillGraph.js}
                  options={options}
                  width={130}
                  height={130}
                />
              </li>
              <li>
                <h3>HTML</h3>
                <p className="skill-graph-value">80%</p>
                <Doughnut
                  data={this.props.currentState.skillGraph.html}
                  options={options}
                  width={130}
                  height={130}
                />
              </li>
              <li>
                <h3>CSS</h3>
                <p className="skill-graph-value">80%</p>
                <Doughnut
                  data={this.props.currentState.skillGraph.css}
                  options={options}
                  width={130}
                  height={130}
                />
              </li>
              <li>
                <h3>Node.js</h3>
                <p className="skill-graph-value">40%</p>
                <Doughnut
                  data={this.props.currentState.skillGraph.node}
                  options={options}
                  width={130}
                  height={130}
                />
              </li>
              <li>
                <h3>PHP</h3>
                <p className="skill-graph-value">20%</p>
                <Doughnut
                  data={this.props.currentState.skillGraph.php}
                  options={options}
                  width={130}
                  height={130}
                />
              </li>
              <li>
                <h3>Design</h3>
                <p className="skill-graph-value">60%</p>
                <Doughnut
                  data={this.props.currentState.skillGraph.design}
                  options={options}
                  width={130}
                  height={130}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

SkillGraph.propTypes = {
  actions: PropTypes.shape({
    getWindowHeight: PropTypes.func.isRequired,
    showSkillGraph: PropTypes.func.isRequired,
  }),
  currentState: PropTypes.shape({
    windowHeight: PropTypes.number.isRequired,
    skillGraph: PropTypes.object.isRequired,
  }),
};

SkillGraph.defaultProps = {
  actions: {},
  currentState: {},
};

const mapStateToProps = state => ({ currentState: state.Index });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreator, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillGraph);

// const SkillGraph = () => (
//   <div className="l-content">
//     <h3 className="l-content__title">Programming / Markup</h3>
//     <div className="l-content__detail">
//       <dl className="skill-description">
//         <dt>
//           <dfn>JavaScript(ES2015)</dfn>
//         </dt>
//         <dd>
//           オブジェクト指向で書けライブラリはReact / Vue.js /
//           jQueryを使用できます。<br />モジュール管理はwebpack /
//           Browserify、タスクランナーはgulp / Gruntの使用経験があります。
//         </dd>
//         <dt>
//           <dfn>CSS</dfn>
//         </dt>
//         <dd>
//           設計についてはFLOCSS / BEM / SMACSS、altCSSについてはSass / Stylus /
//           PostCSSを使用できます。
//         </dd>
//         <dt>
//           <dfn>OTHER</dfn>
//         </dt>
//         <dd>
//           HTMLはセマンティックなマークアップができますし、CMSについてはWordPress開発の経験もあります。
//         </dd>
//       </dl>
//       <div className="skill-graph">
//         <ul className="skill-graph__list">
//           <li>
//             <h3>JavaScript</h3>
//             <p className="skill-graph-value">80%</p>
//             <Doughnut
//               data={dataJS}
//               options={options}
//               width={130}
//               height={130}
//             />
//           </li>
//           <li>
//             <h3>HTML</h3>
//             <p className="skill-graph-value">80%</p>
//             <Doughnut
//               data={dataHTML}
//               options={options}
//               width={130}
//               height={130}
//             />
//           </li>
//           <li>
//             <h3>CSS</h3>
//             <p className="skill-graph-value">80%</p>
//             <Doughnut
//               data={dataCSS}
//               options={options}
//               width={130}
//               height={130}
//             />
//           </li>
//           <li>
//             <h3>Node.js</h3>
//             <p className="skill-graph-value">40%</p>
//             <Doughnut
//               data={dataNode}
//               options={options}
//               width={130}
//               height={130}
//             />
//           </li>
//           <li>
//             <h3>PHP</h3>
//             <p className="skill-graph-value">20%</p>
//             <Doughnut
//               data={dataPHP}
//               options={options}
//               width={130}
//               height={130}
//             />
//           </li>
//           <li>
//             <h3>Design</h3>
//             <p className="skill-graph-value">60%</p>
//             <Doughnut
//               data={dataDesign}
//               options={options}
//               width={130}
//               height={130}
//             />
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
// );

// export default SkillGraph;
