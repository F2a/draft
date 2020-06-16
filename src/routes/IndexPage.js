import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';

class IndexPage extends React.Component {
  goto = (url) =>  {
    return function () {
      this.props.dispatch({
        type: "example/goto",
        payload: url
      })
    }.bind(this)
  }
  render() {
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>
            <h2 onClick={this.goto('/testpage')}>testpage</h2>
          </li>
          <li>
            <h2 onClick={this.goto('/PIQ3')}>PIQ3</h2>
          </li>
          <li>
            <h2 onClick={this.goto('/material')}>Material</h2>
          </li>
          <li>
            <h2 onClick={this.goto('/flaremini')}>Flaremini</h2>
          </li>
          <li>
            <h2 onClick={this.goto('/rope')}>Rope</h2>
          </li>
          <li>
            <h2 onClick={this.goto('/animate')}>Animate</h2>
          </li>
          <li>
            <h2 onClick={this.goto('/cable')}>Cable</h2>
          </li>
          <li>
            <h2 onClick={this.goto('/t2118')}>T2118</h2>
          </li>
          <li>
            <h2 onClick={this.goto('/Capsule')}>Capsule</h2>
          </li>
          <li>
            <h2 onClick={this.goto('/Referral')}>Referral</h2>
          </li>
          <li>
            <h2 onClick={this.goto('/CampaignLanding')}>CampaignLanding</h2>
          </li>
          <li>
            <h2 onClick={this.goto('/PixiDemo')}>PixiDemo</h2>
          </li>
          <li>
            <h2 onClick={this.goto('/Camp')}>Camp</h2>
          </li>
          <li>
            <h2 onClick={this.goto('/Momshare')}>Momshare</h2>
          </li>
          <li>
            <h2 onClick={this.goto('/MothersDay')}>MothersDay</h2>
            <h2 onClick={this.goto('/MothersDayUk')}>MothersDayUk</h2>
          </li>
          <li>
            <h2 onClick={this.goto('/Friendbuy')}>Friendbuy</h2>
            <h2 onClick={this.goto('/ProductNan')}>ProductNan</h2>
          </li>
        </ul>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

function mapStateToProps(state) {
  const { example } = state;
  return {
    ...example
  };
}

export default connect(mapStateToProps)(IndexPage);
