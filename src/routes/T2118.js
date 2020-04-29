import { connect } from 'dva';

import React from 'react';
import styles from './T2118.scss';

class Cable extends React.Component {
  state = {
    lang: {},
    Percent: 50
  }

  componentDidMount() {

  }

  subscribeSubmit = e => {
    e.preventDefault();
    const arr = document.getElementsByName("a");
    if (arr) {
      const value = [];
      arr.forEach(v => v.checked && value.push(v.value));
    }
  }

  getLeft = () => {
    const isMobile = window && window.innerWidth < 768;
    const { Percent = 0 } = this.state;
    if (isMobile) {
      if (Percent < 12) return 12;
      if (Percent > 80) return 80;
      return Percent - 5;
    } else {
      if (Percent < 6) return 6;
      if (Percent > 90) return 90;
      return Percent - 2;
    }
  }

  render() {
    const {
      lang = {},
      Percent = 0,
    } = this.state;
    return (
      <div className={styles.Cable}>
        <section className={styles.banner}>
          {
            lang.bannerMobile ? <img src={lang.bannerMobile} alt="" /> :
              <img className={styles.img} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191031_100615_banner.jpg" alt="" />

          }
        </section>
        <section className={styles.section1back}>
          <div className={`${styles.section1} ${styles.section}`}>
            <img className={styles.imgp} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191031_100624_t2118v11.psd.png" alt="" />
            <div className={styles.box}>
              <h2>Ranks as an all-time Best Seller on Amazon.com with over 5,000 positive reviews</h2>
              <div className={styles.barbox}>
                <div className={styles.progressBack}>
                  <div style={{ width: `${Percent}%` }} className={styles.progress} />
                  <div style={{ width: `${Percent}%` }} className={styles.backline} />
                </div>
                <div className={styles.flex}>
                  <p className={styles.start}>Start</p>
                  <p className={styles.curent}>
                    <b style={{ left: `${this.getLeft()}%` }}>{Percent}%</b>
                  </p>
                  <p className={styles.end}>End</p>
                </div>
              </div>
              <div className={styles.share}>
                <p>share</p>
              </div>
              <a className={styles.btn}>
                Buy Now: 1
              </a>
            </div>
          </div>
        </section>
        <section className={styles.section2back}>
          <div className={`${styles.section2} ${styles.section}`}>
            <h1>Rules</h1>
            <ul>
              <li>1.xxxxxx xxxxx xxxxxxxx xxx xxx</li>
              <li>1.xxxxxx xxxxxxx xxxxxxxxxxxx</li>
              <li>1.xxxxxxxxxxxxxx xxxxx xxxxxx</li>
              <li>1.xx xxxxx xxxx xxxxxx xxxx xxxx</li>
              <li>1.xx xxxxx xxxx xxxxxx xxxx xxxx</li>
              <li>1.xx xxxxx xxxx xxxxxx xxxx xxxx</li>
              <li>1.xx xxxxx xxxx xxxxxx xxxx xxxx</li>
              <li>1.xx xxxxx xxxx xxxxxx xxxx xxxx</li>
              <li>1.xx xxxxx xxxx xxxxxx xxxx xxxx</li>
            </ul>
          </div>
        </section>
        <section className={styles.section3back}>
          <div className={`${styles.section3} ${styles.section}`}>
            <img className={styles.subicon} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191031_100827_picon.png" alt="" />
            <h1>Why Choose Anker?</h1>
            <ul>
              <li>
                <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191031_100635_p1.jpg" alt="" />
                <h3>Ultra-Durable</h3>
                <p>asda asda dasd ad asdasdasdasdas asd asd asdasdsadas asd asdasd asd asda sda sdasd asd asd a</p>
              </li>
              <li>
                <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191031_100635_p1.jpg" alt="" />
                <h3>Ultra-Durable</h3>
                <p>asda asda dasd ad asdasdasdasdas asd asd asdasdsadas asd asdasd asd asda sda sdasd asd asd a</p>
              </li>
              <li>
                <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191031_100635_p1.jpg" alt="" />
                <h3>Ultra-Durable</h3>
                <p>asda asda dasd ad asdasdasdasdas asd asd asdasdsadas asd asdasd asd asda sda sdasd asd asd a</p>
              </li>
            </ul>

          </div>
        </section>
      </div >
    );
  }
}

Cable.propTypes = {

};

function mapStateToProps(state) {
  const { example } = state;
  return {
    ...example
  };
}

export default connect(mapStateToProps)(Cable);
