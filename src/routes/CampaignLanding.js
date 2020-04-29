import { connect } from 'dva';

import Slick from 'react-slick';
import React from 'react';
import moment from 'moment';
import styles from './CampaignLanding.scss';

class CampaignLanding extends React.Component {
  state = {
    openedGift: 1,
    lang: {
      openedGift: 1,
      dueTime: [
        '2019-12-05 17:00',
        '2019-12-06 01:00',
        '2019-12-06 02:00',
        '2019-12-13 12:00',
        '2019-12-15 17:00',
        '2019-12-17 17:00'
      ],
      timezone: 'America/Los_Angeles',
      product: [
        [
          'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161459_product.png',
          'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161459_product.png',
          'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161459_product.png'
        ],
        [
          'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161459_product.png',
          'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161459_product.png',
          'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161459_product.png'
        ],
        [
          'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161459_product.png',
          'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161459_product.png',
          'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161459_product.png'
        ],
        [
          'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161459_product.png',
          'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161459_product.png',
          'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161459_product.png'
        ],
        [
          'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161459_product.png',
          'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161459_product.png',
          'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161459_product.png'
        ],
        [
          'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161459_product.png',
          'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161459_product.png',
          'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161459_product.png'
        ],
      ],
      nameList1: [12312231, 1323213213, 313131313, 3436353434, 242, 121131331313133333],
      nameList2: [12312231, 1323213213, 313131313, 3436353434, 242, 121131331313133333],
      advance2: {
        "us": 'https://www.soundcore.com',
        "uk": 'https://www.soundcore.com/uk',
      },
      advance3: {
        "us": 'https://www.soundcore.com/',
        "uk": 'https://www.soundcore.com/uk',
      },
      back1: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161556_back3.png',
      back2: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161605_back4.png',
      back3: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161556_back3.png',
      back4: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161605_back4.png',
      back5: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161556_back3.png',
      back6: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161605_back4.png',
      influencerIcon1: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161511_wanghongsub.png',
    },
    step: 2,
    currentProduct: 1
  }

  timer = null;

  componentDidMount() {
    this.timer = window.setInterval(this.timerfn, 1000);
    const btn = document.querySelector('.copybtn');
    btn && btn.addEventListener('click', e => {
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

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  timerfn = () => {
    const { lang } = this.state;
    const m1 = moment().tz(lang.timezone);
    let du;
    if (Array.isArray(lang.dueTime)) {
      const current = lang.dueTime.find(v => moment.tz(v, lang.timezone).isAfter(m1));
      const openedGift = lang.dueTime.findIndex(v => moment.tz(v, lang.timezone).isAfter(m1));
      this.setState({ openedGift: openedGift > 0 && openedGift <= 6 ? openedGift : lang.product.length })
      const m2 = current ? moment.tz(current, lang.timezone) : moment.tz(lang.timezone[lang.timezone.length - 1], lang.timezone);
      du = moment.duration(m2 - m1);
    } else {
      const m2 = moment.tz(lang.dueTime, lang.timezone);
      du = moment.duration(m2 - m1);
    }
    const days = du.asDays() ? parseInt(du.asDays(), 10) : 0;
    const hours = du.get('hours');
    const mins = du.get('minutes');
    const ss = du.get('seconds');
    this.setState({
      hours: hours > 0 || days >= 0 ? hours + days * 24 : '00',
      mins: mins > 0 ? mins : '00',
      ss: ss > 0 ? ss : '00',
    });
  }
  zeroPpadding = v => {
    if (String(v).length === 1) {
      return `0${v}`
    }
    return v;
  }
  nextStep = (v) => {
    const { step } = this.state;
    if (step > v) return;
    if (step === 2) {

    }
    if (step === 3) {

    }
    this.setState({ step: step + 1 });
  }
  isMobile = () => window && window.innerWidth < 768;
  render() {
    const {
      lang = {}, step = 1, currentProduct, openedGift
    } = this.state;
    return (
      <div className={styles.CampaignLanding}>
        <section className={styles.banner}>
          {
            lang.bannerMobile && this.isMobile() ? <img src={lang.bannerMobile} alt="" /> :
              <img className={styles.img} src={lang.banner || "https://dz02g1kgtiysz.cloudfront.net/deals/files/191205_100341_banner.jpg"} alt="" />
          }
        </section>
        <section className={styles.section1}>
          <div className={styles.section}>
            <ul>
              <li>
                <div className={styles.countdown}>
                  <div className={styles.hour}>
                    {this.state.hours ? this.zeroPpadding(this.state.hours) : '00'}
                    <span className={styles.line} />
                  </div>
                  <div className={styles.minute}>
                    {this.state.mins ? this.zeroPpadding(this.state.mins) : '00'}
                    <span className={styles.line} />
                  </div>
                  <div className={styles.second}>
                    {this.state.ss ? this.zeroPpadding(this.state.ss) : '00'}
                    <span className={styles.line} />
                  </div>
                </div>
              </li>
              <li className={styles.tipInfo}>
                <div className={styles.info}>
                  <p><span>Remaining to win </span> <span><b>Linus Tech Tips</b> Edition</span></p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.section2}>
          <div className={`${styles.section} ${styles.tipInfo}`}>
            <p>From the 10th to 21st of December there are 6 special edition Liberty 2 Pro up for grabs (10 of each to give away). </p>
            <p>3 specially selected versions will also be on sale until December 27th.</p>
          </div>
          <div className={`${styles.section} ${styles.howtowin}`}>
            <div className={styles.win}>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_111415_how.png" alt="" />
            </div>
            <div className={styles.sign}>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_111433_sign.png" alt="" />
              <img className={styles.arrow} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_111424_arrow.png" alt="" />
            </div>
            <div className={styles.follow}>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_111443_follow.png" alt="" />
              <img className={styles.arrow} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_111424_arrow.png" alt="" />
            </div>
            <div className={styles.share}>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_111457_share.png" alt="" />
            </div>
          </div>
          <div className={`${styles.section} ${styles.stepBox}`}>
            <div className={styles.step1}>
              <h3><b>Step1</b> <span>Sign up</span></h3>
            </div>
            <div className={styles.step23}>
              <div className={styles.step2}>
                <h3>
                  {step < 2 && <img className={styles.lock} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_145710_lock.png" alt="" />}
                  <b>Step2</b> <span>Follow to Unlock <br /> More Prizes</span>
                </h3>
                <div className={styles.icon}>
                  {step < 2 ?
                    <a className={styles.shared1} /> :
                    <a onClick={() => this.nextStep(2)} className={styles.share1} href="https://fanyi.baidu.com/" target="_blank" rel="noopener noreferrer" />
                  }
                  {step < 2 ?
                    <a className={styles.shared2} /> :
                    <a onClick={() => this.nextStep(2)} className={styles.share2} href="https://fanyi.baidu.com/" target="_blank" rel="noopener noreferrer" />
                  }
                  {step < 2 ?
                    <a className={styles.shared3} /> :
                    <a onClick={() => this.nextStep(2)} className={styles.share3} href="https://fanyi.baidu.com/" target="_blank" rel="noopener noreferrer" />
                  }
                </div>
              </div>
              <div className={styles.step3}>
                <h3>
                  {step < 3 && <img className={styles.lock} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_145710_lock.png" alt="" />}
                  <b>Step3</b> <span>Share to Unlock <br /> More Prizes</span>
                </h3>
                <div className={styles.icon}>
                  {step < 3 ?
                    <a className={styles.shared2} /> :
                    <a onClick={() => this.nextStep(3)} className={styles.share2} href="https://fanyi.baidu.com/" target="_blank" rel="noopener noreferrer" />
                  }
                  {step < 3 ?
                    <a className={styles.shared3} /> :
                    <a onClick={() => this.nextStep(3)} className={styles.share3} href="https://fanyi.baidu.com/" target="_blank" rel="noopener noreferrer" />
                  }
                </div>
              </div>
            </div>
          </div>
          {openedGift && <div className={`${styles.section} ${styles.main}`}>
            <div className={styles.today}>
              <div className={styles.maincontent}>
                {this.isMobile() ?
                  lang.product && lang.product.map((v, i) => openedGift > i ? (
                    <div className={`${styles.productCurrent} ${openedGift === (i + 1) && styles.opening}`}>
                      <img className={styles.subicon} src={lang[`influencerIcon${i + 1}`] || "https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161511_wanghongsub.png"} alt="" />
                      {lang[`nameList${i + 1}`] &&
                        <img className={`${styles.over} ${!(lang[`nameList${i + 1}`] || lang[`advance${i + 1}`]) && styles.actnone}`} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161544_over.png" alt="" />
                      }
                      {Array.isArray(lang.product[i]) ?
                        <Slick
                          ref={slider => (this.slider = slider)}
                          className={`${styles.productSlick} ${!(lang[`nameList${i + 1}`] || lang[`advance${i + 1}`]) && styles.actnone}`}
                          {...{
                            dots: true,
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            // nextArrow: this.nextArrow(),
                            // prevArrow: this.prevArrow(),
                          }}
                        >
                          {
                            lang.product[i].map((v, i) =>
                              <img key={i} src={v} alt="" />)
                          }
                        </Slick> :
                        <img className={`${styles.product} ${!(lang[`nameList${i + 1}`] || lang[`advance${i + 1}`]) && styles.actnone}`} src={lang.product[i]} alt="" />
                      }

                      <div className={`${lang[`nameList${i + 1}`] && lang[`advance${i + 1}`] && styles.actBox}`}>
                        {lang[`advance${i + 1}`] &&
                          <div className={styles.btnBox}>
                            {lang[`advance${i + 1}`].us && <a href={lang[`advance${i + 1}`].us} alt="us" target="_blank" rel="noopener noreferrer" className={styles.submitBtn}>
                              <img className={styles.counrtybt} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_182406_.svg" alt="" />
                              PREORDER
                          <img className={styles.arrowbtn} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_183333_arrowbtn.png" alt="" />
                            </a>}
                            {lang[`advance${i + 1}`].uk && <a href={lang[`advance${i + 1}`].uk} alt="uk" target="_blank" rel="noopener noreferrer" className={styles.submitBtn}>
                              <img className={styles.counrtybt} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_182409_-1.svg" alt="" />
                              PREORDER
                          <img className={styles.arrowbtn} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_183333_arrowbtn.png" alt="" />
                            </a>}
                          </div>}
                        {lang[`nameList${i + 1}`] && <div className={styles.namelist}>
                          <h3>WINNING INFORMATION</h3>
                          <Slick ref={slider => (this.slider = slider)} className={styles.swiper} {...{
                            infinite: true,
                            arrows: false,
                            swipe: false,
                            touchMove: false,
                            autoplay: true,
                            speed: 1000,
                            autoplaySpeed: 0,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            vertical: true,
                          }}
                          >
                            {lang[`nameList${i + 1}`].map((item, key) => (
                              <div key={key} className={styles.swiperitem}>
                                <p className={styles.name}>{item}</p>
                              </div>
                            ))}
                          </Slick>
                        </div>}
                      </div>
                    </div>
                  ) :
                    <div className={`${styles.productCurrent} ${styles.borderNone}`}>
                      <div className={styles.back}
                        style={{ backgroundImage: `url(${lang[`back${i + 1}`]})` }} />
                    </div>) :
                  <div className={`${styles.productCurrent} ${openedGift === currentProduct && styles.opening}`}>
                    <img className={styles.subicon} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161511_wanghongsub.png" alt="" />
                    {lang[`nameList${currentProduct}`] &&
                      <img className={`${styles.over} ${!(lang[`nameList${currentProduct}`] || lang[`advance${currentProduct}`]) && styles.actnone}`} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_161544_over.png" alt="" />
                    }
                    {Array.isArray(lang.product[currentProduct - 1]) ?
                      <Slick
                        ref={slider => (this.slider = slider)}
                        className={`${styles.productSlick} ${!(lang[`nameList${currentProduct}`] || lang[`advance${currentProduct}`]) && styles.actnone}`}
                        {...{
                          dots: true,
                          infinite: true,
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          // nextArrow: this.nextArrow(),
                          // prevArrow: this.prevArrow(),
                        }}
                      >
                        {
                          lang.product[currentProduct - 1].map((v, i) =>
                            <img key={i} src={v} alt="" />)
                        }
                      </Slick> :
                      <img className={`${styles.product} ${!(lang[`nameList${currentProduct}`] || lang[`advance${currentProduct}`]) && styles.actnone}`} src={lang.product[currentProduct - 1]} alt="" />
                    }

                    <div className={`${lang[`nameList${currentProduct}`] && lang[`advance${currentProduct}`] && styles.actBox}`}>
                      {lang[`advance${currentProduct}`] &&
                        <div className={styles.btnBox}>
                          {lang[`advance${currentProduct}`].us && <a href={lang[`advance${currentProduct}`].us} alt="us" target="_blank" rel="noopener noreferrer" className={styles.submitBtn}>
                            <img className={styles.counrtybt} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_182406_.svg" alt="" />
                            PREORDER
                          <img className={styles.arrowbtn} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_183333_arrowbtn.png" alt="" />
                          </a>}
                          {lang[`advance${currentProduct}`].uk && <a href={lang[`advance${currentProduct}`].uk} alt="uk" target="_blank" rel="noopener noreferrer" className={styles.submitBtn}>
                            <img className={styles.counrtybt} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_182409_-1.svg" alt="" />
                            PREORDER
                          <img className={styles.arrowbtn} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191204_183333_arrowbtn.png" alt="" />
                          </a>}
                        </div>}
                      {lang[`nameList${currentProduct}`] && <div className={styles.namelist}>
                        <h3>WINNING INFORMATION</h3>
                        <Slick ref={slider => (this.slider = slider)} className={styles.swiper} {...{
                          infinite: true,
                          arrows: false,
                          swipe: false,
                          touchMove: false,
                          autoplay: true,
                          speed: 1000,
                          autoplaySpeed: 0,
                          slidesToShow: 3,
                          slidesToScroll: 1,
                          vertical: true,
                        }}
                        >
                          {lang[`nameList${currentProduct}`].map((item, key) => (
                            <div key={key} className={styles.swiperitem}>
                              <p className={styles.name}>{item}</p>
                            </div>
                          ))}
                        </Slick>
                      </div>}
                    </div>
                  </div>
                }</div>
            </div>
            {!this.isMobile() && <ul className={styles.mainul}>
              {
                lang.product && lang.product.map((v, i) => (
                  <li className={styles.mainli} key={i}>
                    <div className={styles.maincontent}>
                      {openedGift > i ?
                        <div onClick={() => this.setState({ currentProduct: i + 1 })} className={`${styles.front} ${openedGift - 1 === i && styles.openedGift} ${currentProduct === i + 1 && styles.current}`}>
                          <img className={`${styles.product} ${openedGift - 1 !== i && styles.current}`} src={Array.isArray(v) ? v[0] : v} alt="" />
                          {openedGift - 1 !== i && lang[`nameList${i + 1}`] &&
                            <p><b>WINNING INFORMATION</b></p>}
                        </div> :
                        <div className={styles.back}
                          style={{ backgroundImage: `url(${lang[`back${i + 1}`]})` }} />}
                    </div>
                  </li>
                ))
              }
            </ul>}
          </div>
          }

          <div className={`${styles.section} ${styles.rulesec}`}>
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
      </div>
    );
  }
}

CampaignLanding.propTypes = {

};

function mapStateToProps(state) {
  const { example } = state;
  return {
    ...example
  };
}

export default connect(mapStateToProps)(CampaignLanding);
