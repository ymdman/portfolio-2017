import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ActionCreator from '../../actions/ActionCreator';

import WorksList from '../WorksList/WorksList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';
import Modal from '../Modal/Modal';

class ContentCareer extends React.Component {
  componentDidMount() {
    this.props.actions.fetchPost();
  }

  render() {
    // const currentState = this.props.currentState;
    let worksList;
    let loading;
    let errorMessage;

    if (this.props.currentState.response) {
      loading = <Loading />;
    } else if (this.props.currentState.postSucces) {
      worksList = <WorksList />;
    } else if (this.props.currentState.postFailure) {
      errorMessage = <ErrorMessage />;
    }

    return (
      <section className="l-section">
        <h2 className="l-section__title">Works</h2>
        <div className="l-section__detail">
          <p>
            上から順に直近の職歴と携わったサイトの一部を掲載しております。<br />
            サイトによってはリニューアルしているものもあり、画像と相違している場合があります(画像は私が携わっていた時のものです)。<br />
            また、公開終了しているサイトとWeb以外の制作物にはリンクボタンが付いておりません。
          </p>
          {loading}
          {worksList}
          {errorMessage}
          <Modal />
        </div>
      </section>
    );
  }
}

ContentCareer.propTypes = {
  actions: PropTypes.shape({
    fetchPost: PropTypes.func.isRequired,
  }),
  currentState: PropTypes.shape({
    response: PropTypes.bool.isRequired,
    postSucces: PropTypes.bool.isRequired,
    postFailure: PropTypes.bool.isRequired,
  }),
};

ContentCareer.defaultProps = {
  actions: {},
  currentState: {},
};

const mapStateToProps = state => ({ currentState: state.Index });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreator, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentCareer);
