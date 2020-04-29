import { connect } from 'dva';

import React from 'react';
import styles from './Referral.scss';

class Referral extends React.Component {
  state = {
    lang: {},
    terms: {},
    fileName: '',
    Percent: 50,
    uploading: false
  }

  componentDidMount() {
    const btn = document.querySelector('.copybtn');
    btn.addEventListener('click', e => {
      const input = document.createElement('input');
      input.setAttribute('readonly', 'readonly');
      input.setAttribute('value', e.target.dataset.link);
      document.body.appendChild(input);
      input.select();
      if (document.execCommand('copy')) {
        document.execCommand('copy');
        console.log('copied');
        this.setState({ copied: true }, () => window.setTimeout(() => {
          this.setState({ copied: false });
        }, 3000));
      }
      document.body.removeChild(input);
    });
  }

  showTerms = i => {
    const terms = this.state.terms;
    terms[i] = !terms[i];
    this.setState({ terms });
  }

  render() {
    const {
      lang = {}, copied, terms
    } = this.state;
    return (
      <div className={styles.Cable}>
        <section className={styles.banner}>
          {
            lang.bannerMobile ? <img src={lang.bannerMobile} alt="" /> :
              <img className={styles.img} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191114_144506_.jpg" alt="" />

          }
          <div className={styles.section}>
            <div className={styles.content}>
              <h1>XXX XXX XXXXX XXXX XXXXX XXXXX XXXXX</h1>
              <p>
                x xxx x x x x x x xxxxxx xx x x xxxxxx x x xxxxx x
              </p>
              <p>
                x x x x xxx xxxxxxxx x xxxxx x x x xx xxxxx x x x x
              </p>
              <div className={styles.achievements}>
                <h3>My Achievements</h3>
                <p>Friends Referred <b>4</b></p>
                <p>Friends Referred <b>4</b></p>
              </div>

            </div>
          </div>
        </section>
        <section className={styles.section1}>
          <div className={styles.section}>
            <h1>Start Referring Now!</h1>
            <p className={styles.subTitle}>Select your country to get started</p>
            <ul className={styles.product}>
              <li>
                <div className={styles.contentli}>
                  <div className={styles.imgbox}>
                    <span>Get $100</span>
                    <img alt="" src="//forumus-uploads-production.s3.dualstack.us-west-2.amazonaws.com/original/3X/3/7/3756d3eb416c7015cd7cab29d2fd303d96f4a47f.png" />
                  </div>
                  <h3>Get $100 for each eufyCam purchase your friends make!</h3>
                  <div className={styles.rules}>
                    <div className={styles.rulesBox}>
                      <a>
                        Rules
                      <i className="iconfont" dangerouslySetInnerHTML={{ __html: '&#xe6bc;' }} />
                      </a>
                      <pre className={styles.dialog}>
                        <b>Promotion</b>: Send an invitation to your friends. If one of your friends purchases a eufyCam, they will get 2 free Entry Sensors worth $60. You will receive $100 and 500 Buddy Bucks for each eufyCam purchase your friends make.
                      <br />
                        <b>Claiming your reward</b>: After 30 days you will be contacted to receive your reward.
                      </pre>
                    </div>
                  </div>
                  <div className={styles.copyBox}>
                    <p className={styles.txt}>
                      https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.eufylife.com%2Freferral%2Fbuy%3Futm_source%3Dankercommunity%26utm_medium%3Dreferral%26utm_campaign%3Deufycam%26utm_content%3Duscmreferral%26ic%3Dcbadc6f62ec58644b679
                    </p>
                    <div className={styles.iconBox}>
                      <div className={`${styles.copyIcon} ${copied && styles.copied}`}>
                        {copied ?
                          <a disabled className={styles.copyLink}>COPIED</a> :
                          <a data-link="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.eufylife.com%2Freferral%2Fbuy%3Futm_source%3Dankercommunity%26utm_medium%3Dreferral%26utm_campaign%3Deufycam%26utm_content%3Duscmreferral%26ic%3Dcbadc6f62ec58644b679" className={`copybtn ${styles.copyLink}`}>COPY LINK</a>
                        }
                      </div>
                      <div className={styles.copyIcon}></div>
                      <div className={styles.copyIcon}></div>
                      <div className={styles.copyIcon}></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.section2}>
          <div className={styles.section}>
            <h1>Terms & Conditions</h1>
            <div className={styles.container}>
              <dl className={styles.terms}>
                <dt onClick={() => this.showTerms(`term${0}`)}>
                  <h5>Participation</h5>
                </dt>
                <dd className={`${terms['term0'] && styles.show}`}>
                  <p>Any community members from the US, UK, and Germany can join the community referral programAny community members from the US, UK, and Germany can join the community referral programAny community members from the US, UK, and Germany can join the community referral program</p>
                </dd>
              </dl>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Referral.propTypes = {

};

function mapStateToProps(state) {
  const { example } = state;
  return {
    ...example
  };
}

export default connect(mapStateToProps)(Referral);
