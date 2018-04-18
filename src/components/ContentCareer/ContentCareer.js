import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ActionCreator from '../../actions/ActionCreator';

import CareerList from '../CareerList/CareerList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';
import Modal from '../Modal/Modal';

class ContentCareer extends React.Component {
  componentDidMount() {
    this.props.actions.fetchPost();
  }

  render() {
    const currentState = this.props.currentState;
    let careerList;
    let loading;
    let errorMessage;

    if (currentState.response) {
      loading = <Loading />;
    } else if (currentState.postSucces) {
      careerList = <CareerList />;
    } else if (currentState.postFailure) {
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
          {careerList}
          {errorMessage}
          <Modal />
        </div>
      </section>
    );
  }
}

ContentCareer.propTypes = {
  actions: React.PropTypes.shape({
    fetchPost: React.PropTypes.func.isRequired,
  }),
  currentState: React.PropTypes.shape({
    postSucces: React.PropTypes.bool.isRequired,
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
