import React from 'react';
import anime from 'animejs';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import utils from '../utils/utils';

class Testpage extends React.Component {
  componentDidMount() {
    var objPropLogEl = document.querySelector(`.${styles.demo01}`);
    anime({
      targets: objPropLogEl,
      translateX: 150,
    });
    anime({
      targets: '.demo02',
      translateX: 200,
      borderRadius: ['0%', '40%'],
      rotate: '135deg',
      easing: 'easeInOutQuad',
      duration: 3000
    });
    anime({
      targets: '.demo03',
      value: [0, 1000],
      round: 1,
    });
    anime({
      targets: '.demo04',
      translateX: 250,
      delay: 1000,
      endDelay: 1000,
      direction: 'alternate'
    });
  }

  render() {
    return (
      <div className={styles.animate}>
        <h1>Animate</h1>
        <div className={styles.demo01} />
        <div className="demo02" />
        <input className="demo03" value="0" />
        <div className="demo04" />
      </div>
    );
  }
}

Testpage.propTypes = {

};

function mapStateToProps(state) {
  const { example } = state;
  return {
    ...example
  };
}

export default connect(mapStateToProps)(Testpage);
