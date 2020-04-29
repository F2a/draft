import { connect } from 'dva';

import React from 'react';
import styles from './Cable.scss';

class Cable extends React.Component {
  state = {
    rule: '',
    step: [
      '<b>Step1 <span /></b>asdasdas dasd asdad',
      '<b>Step2 <span /></b>asdasdas dasd asdad',
      '<b>Step3 <span /></b>asdasdas dasd asdad',
    ],
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

  render() {
    const {
      rule = '',
      step = [],
      current = 0
    } = this.state;
    const isMobile = window && window.innerWidth < 768;
    return (
      <div className={styles.Cable}>
        <section className={styles.banner}>
          <div className={styles.section}>
            <div className={styles.title}>
              <h1><i>Get a Cable</i> for Life</h1>
              <p>Trial Program for New Users</p>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190903_142000_mfi-new.png" alt="" />
            </div>
          </div>
        </section>
        <section className={`${styles.section1} ${styles.section}`}>
          <h1>Rules</h1>
          <ul>
            <li>1.xxxxxx xxxxx xxxxxxxx xxx xxx</li>
            <li>1.xxxxxx xxxxxxx xxxxxxxxxxxx</li>
            <li>1.xxxxxxxxxxxxxx xxxxx xxxxxx</li>
            <li>1.xx xxxxx xxxx xxxxxx xxxx xxxx</li>
          </ul>
        </section>
        <section className={styles.section2}>
          <div className={styles.section}>
            <h1>Rules</h1>
            <div>
              <ul>
                {
                  step && step.map((v, i) => <li key={i} className={`${i === current && styles.current}`} dangerouslySetInnerHTML={{ __html: v }} />)
                }
              </ul>
              <div className={styles.box}>
                <div className={`${styles.step1} ${current === 0 && styles.current}`}>
                  <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190903_153135_official-website-bannermeitu1.jpg" alt="" />
                  <div className={styles.verify}>
                    <h1>Verify Your Email</h1>
                    <p>adsasd asd asd asd asd a asdasd ad a asd asd asd asd ad asd a</p>
                  </div>
                </div>
                <div className={`${styles.step2} ${current === 1 && styles.current}`}>
                  <form ref={c => this.form = c} onSubmit={e => this.subscribeSubmit(e)}>
                    <div className={styles.question}>
                      <h2>1. asdasdasdasdasdasdasdasdasda adasdas</h2>
                      <div className={styles.flex4}>
                        <p><label><input name="a" type="checkbox" value="1" />苹果 </label></p>
                        <p><label><input name="a" type="checkbox" value="2" />桃子 </label></p>
                        <p><label><input name="a" type="checkbox" value="3" />香蕉 </label></p>
                        <p><label><input name="a" type="checkbox" value="4" />梨 </label></p>
                      </div>
                    </div>
                    <div className={styles.question}>
                      <h2>1. asdasdasdasdasdasdasdasdasda adasdas</h2>
                      <div className={styles.flex2}>
                        <p><label><input name="b" type="checkbox" value="5" />苹果 </label></p>
                        <p><label><input name="b" type="checkbox" value="6" />桃子 </label></p>
                        <p><label><input name="b" type="checkbox" value="7" />香蕉 </label></p>
                        <p><label><input name="b" type="checkbox" value="8" />梨 </label></p>
                      </div>
                    </div>
                    <div className={styles.question}>
                      <h2>1. asdasdasdasdasdasdasdasdasda adasdas</h2>
                      <div className={styles.flex2}>
                        <p><label><input name="used" type="radio" value="9" />苹果 </label></p>
                        <p><label><input name="used" type="radio" value="0" />桃子 </label></p>
                      </div>
                    </div>
                    <button className="button-normal submit" type="submit" dangerouslySetInnerHTML={{ __html: 'NEXT STEP' }} />
                  </form>
                </div>
                <div className={`${styles.step3} ${current === 2 && styles.current}`}>
                  <div className={styles.img}>
                    <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190903_153135_official-website-bannermeitu1.jpg" alt="" />
                    <a>Learn Morebr <br/><b>&lt;</b></a>
                  </div>
                  <div className={styles.verify}>
                    <h4><b>PowerLine+ II</b>adasdada adasdasd</h4>
                    <p>adsasd asd asd asd asd a asdasd ad a asd asd asd asd ad asd a</p>
                    <h1>$1<sub>$19.99</sub></h1>
                    <button className="button-normal submit" dangerouslySetInnerHTML={{ __html: 'Get Your Cable' }} />
                    <p>adsasd asd asd asd asd a asdas adsasdasda asda dasd a adasdasdd ad a asd asd asd asd ad asd aasd.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section3} ${styles.section}`}>
          <h1>Why Choose Anker?</h1>
          <ul>
            <li>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190903_145606_-3.png" alt="" />
              <h3>Ultra-Durable</h3>
              <p>asda asda dasd ad asdasdasdasdas asd asd asdasdsadas asd asdasd asd asda sda sdasd asd asd a</p>
            </li>
            <li>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190903_145608_-1364.png" alt="" />
              <h3>Ultra-Durable</h3>
              <p>asda asda dasd ad asdasdasdasdas asd asd asdasdsadas asd asdasd asd asda sda sdasd asd asd a</p>
            </li>
            <li>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190903_145611_-4.png" alt="" />
              <h3>Ultra-Durable</h3>
              <p>asda asda dasd ad asdasdasdasdas asd asd asdasdsadas asd asdasd asd asda sda sdasd asd asd a</p>
            </li>
          </ul>
        </section>
      </div>
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
