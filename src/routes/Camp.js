import { connect } from 'dva';

import Slick from 'react-slick';
import ReactPlayer from 'react-player';
import React from 'react';
import moment from 'moment';
import styles from './Camp.scss';

class Camp extends React.Component {
  state = {
    openedGift: 1,
    rules: [
      '1. This promotion is open to US residents only.',
      '2. The promotion runs from March 31st to April 9th, 2020.',
      '3. Enter your email address to take part in the lucky draw. Following and sharing our social media offers more chances to take part.',
      '4. Prizes will be shipped within 2 months. Shipping addresses will be requested via email.',
      '5. Prizes in this giveaway may have been used by Linus Tech Tips to create their video.',
      '6. Discount codes will be sent to your email inbox. Codes are valid until April 16th.',
      '7. By entering your email address you will automatically subscribe to the Soundcore.com newsletter, and agree to our Terms of Use and Privacy Policy.',
      '8 Soundcore reserves the right of final explanation.',
      '9. Prizes cannot be refunded, returned or exchanged.',
    ],
    lang: {
      startTime: '2020-03-25 10:00',
      dueTime: '2020-03-31 10:00',
      timezone: 'America/Los_Angeles',
      cardinality: 8796
    },
    namelist: [12312231, 1323213213, 313131313, 3436353434, 242, 3436353434, 242, 121131331313133333],
    step: 2,
    currentProduct: 1
  }

  timer = null;

  componentDidMount() {
    this.appendFont();
    this.timer = window.setInterval(this.timerfn, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  appendFont = () => {
    const style = document.createElement('link');
    style.href = '//fonts.googleapis.com/css?family=Carter+One';
    style.rel = 'stylesheet';
    style.type = 'text/css';
    document.getElementsByTagName('head').item(0).appendChild(style);
  }
  timerfn = () => {
    const { lang } = this.state;
    if (lang.startTime) {
      const m1 = moment().tz(lang.timezone);
      const m2 = moment.tz(lang.startTime, lang.timezone);
      const du = moment.duration(m1 - m2).asSeconds();
      console.log('du', du);
      if (Math.random() > 0.7) {
        this.setState({ cardinality: parseInt(lang.cardinality, 10) + parseInt(du / 2, 10) });
      }
    }
    if (lang.dueTime) {
      const m1 = moment().tz(lang.timezone);
      const m2 = moment.tz(lang.dueTime, lang.timezone);
      const du = moment.duration(m2 - m1);
      const days = du.asDays() ? parseInt(du.asDays(), 10) : 0;
      const hours = du.get('hours');
      const mins = du.get('minutes');
      const ss = du.get('seconds');
      this.setState({
        days,
        hours: hours > 0 ? this.zeroPpadding(hours) : '00',
        mins: mins > 0 ? this.zeroPpadding(mins) : '00',
        ss: ss > 0 ? this.zeroPpadding(ss) : '00',
      });
    }
  }

  zeroPpadding = v => {
    if (String(v).length === 1) {
      return `0${v}`
    }
    return v;
  }

  showModel = act => {
    const { rules } = this.state;
    const content = {
      draw: [
        <div className={styles.content}>
          <h3 className={styles.shadow}>Rules</h3>
          <div className={styles.inside}>
            <div className={styles.code}>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200326_113521_redgift.png" alt="" />
              <p>You haven’t entered yet!</p>
            </div>
          </div>
          <div className={styles.giftinside}>
            <div className={styles.gift}>
              <div className={styles.giftname}>
                <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200326_113150_a.png" alt="" />
                <p className={styles.shadow}>Flare 2  <span>X3</span></p>
              </div>
            </div>
          </div>
          <h4 className={styles.shadow}>dasd asda sdasd asd asd as </h4>
          <div className={styles.btnbox}>
            <button type="button" className={styles.btn}>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200325_185116_get-it.png" alt="" />
            </button>
          </div>
        </div>
      ],
      rules: [
        <div className={styles.content}>
          <h3 className={styles.shadow}>
            <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200323_174206_rules.png" alt="" />
            Rules
          </h3>
          <div className={styles.inside}>
            <ul>
              {
                rules.length && rules.map((v, i) => <li key={i} dangerouslySetInnerHTML={{ __html: v }} />)
              }
            </ul>
          </div>
        </div>
      ],
      prizes: [
        <div className={styles.content}>
          <h3 className={styles.shadow}>
            <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200323_174200_gifticon.png" alt="" />
            My Prizes
          </h3>
          <div className={styles.inside}>
            <div className={styles.flex}>
              <div className={styles.imgBox}>
                <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200326_113521_redgift.png" alt="" />
              </div>
              <p>You haven’t entered yet!</p>
            </div>
            <div className={styles.flex}>
              <div className={styles.imgBox}>
                <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200326_113521_redgift.png" alt="" />
              </div>
              <p>20% OFF Code：2020-XX-XX</p>
            </div>
            <div className={styles.flex}>
              <div className={styles.imgBox}>
                <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200326_113521_redgift.png" alt="" />
              </div>
              <p>20% OFF Code：2020-XX-XX</p>
            </div>
          </div>

          <h4 className={styles.shadow}>You can check all details in your emails</h4>

        </div>
      ]
    }
    this.setState({ showModel: true, modelcontent: content[act] });
  }

  hideModel = () => {
    this.setState({ showModel: false });
  }

  toStringNum = num => {
    if (num && !isNaN(parseInt(num))) {
      return parseInt(num).toLocaleString('en-US');
    }
    return num;
  }

  isMobile = () => window && window.innerWidth < 768;
  hasLogin = () => true;
  render() {
    const {
      lang = {}, btnGo, namelist = [], cardinality
    } = this.state;
    return (
      <div className={styles.Camp}>
        <section className={styles.banner}>
          {
            lang.bannerMobile && this.isMobile() ? <img src={lang.bannerMobile} alt="" /> :
              <img className={styles.img} src={lang.banner || "https://dz02g1kgtiysz.cloudfront.net/deals/files/200325_162847_banner.png"} alt="" />
          }
        </section>

        <div className={styles.back}>
          <div className={styles.section1}>

            <h3 className={styles.shadow} dangerouslySetInnerHTML={{ __html: 'The IOO' }} />

            <section className={styles.section}>
              <div className={styles.left}>
                <div className={styles.form}>
                  {this.hasLogin() ?
                    <div>
                      <div className={styles.backBox}>
                        <div className={styles.title}>
                          <div className={styles.timeleft}>
                            <p dangerouslySetInnerHTML={{ __html: 'Time Left:' }} />
                          </div>
                          <div className={styles.days}>
                            <div className={styles.timeOut}>
                              <span>{this.state.days || 0}</span>
                              <b>days</b>
                              <span>{this.state.hours || 0}</span>
                              <b>:</b>
                              <span>{this.state.mins || 0}</span>
                              <b>:</b>
                              <span>{this.state.ss || 0}</span>
                            </div>
                          </div>
                        </div>
                        <div className={styles.contentBox}>
                          <div className={styles.content}>
                            <p dangerouslySetInnerHTML={{ __html: 'Your Remaining Entries:' }} />
                            <div className={styles.num}>
                              <span>0</span>
                              <b> / </b>
                              <span>5</span>
                            </div>
                          </div>
                          <button onClick={e => this.showModel('draw')} className={styles.btn} type="button">
                            {btnGo ?
                              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200323_174113_button.gif" alt="" /> :
                              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200323_174106_btninit.png" alt="" />
                            }
                          </button>
                        </div>
                      </div>
                      <div className={styles.policy}>
                        Wasd asdasda asdasd a sda. <br />
                      Wasd asdasda asdasd a sda  Wasd asdasda asdasd a sda.
                    </div>
                    </div> :
                    <div className={styles.loginBox}>
                      <div className={styles.google}>
                      </div>

                      <div className={styles.facebook}>
                      </div>
                    </div>
                  }
                </div>
                <div className={`${styles.timer} ${styles.backBox}`}>
                  <div className={styles.title}>
                    <div className={styles.days}>
                      <p dangerouslySetInnerHTML={{ __html: 'Time' }} />
                    </div>
                    <div className={styles.winner}>
                      <p dangerouslySetInnerHTML={{ __html: 'Winner:' }} />
                      <div className={styles.num}>
                        <span>{this.toStringNum(cardinality || lang.cardinality)}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.namelist}>
                    {namelist && <div className={styles.slickBox}>
                      <Slick ref={slider => (this.slider = slider)} className={styles.swiper} {...{
                        className: "center",
                        centerMode: true,
                        infinite: true,
                        arrows: false,
                        swipe: false,
                        touchMove: false,
                        autoplay: true,
                        speed: 1000,
                        autoplaySpeed: 0,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        vertical: true,
                      }}
                      >
                        {namelist.map((item, key) => (
                          <div key={key} className={styles.swiperitem}>
                            <p className={styles.name}>{item}</p>
                          </div>
                        ))}
                      </Slick>
                    </div>}
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={`${styles.followBox} ${styles.backBox}`}>
                  <div className={styles.title}>
                    <div className={styles.gifticon}>
                      <p dangerouslySetInnerHTML={{ __html: 'Get More Chances to Win' }} />
                    </div>
                  </div>
                  <div className={styles.followlist}>
                    <ul>
                      <li>
                        <div className={styles.icon}>
                          <img className={styles.iconBlue} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200323_174136_instagram.png" alt="" />
                          <img className={styles.share} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200323_174145_share.png" alt="" />
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: 'Get More' }} />
                        <button type="button" className={styles.btn}>
                          <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200325_155459_follow.png" alt="" />
                          <span className={styles.donetext}>Done</span>
                        </button>
                      </li>
                      <li>
                        <div className={styles.icon}>
                          <img className={styles.iconBlue} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200323_174136_instagram.png" alt="" />
                          <img className={styles.share} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200323_174145_share.png" alt="" />
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: 'Get More' }} />
                        <button type="button" className={styles.btn}>
                          <span className={styles.followtext}>Done</span>
                          <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200325_155459_follow.png" alt="" />
                        </button>
                      </li>
                      <li>
                        <div className={styles.icon}>
                          <img className={styles.iconBlue} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200323_174136_instagram.png" alt="" />
                          <img className={styles.share} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200323_174145_share.png" alt="" />
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: 'Get More' }} />
                        <button type="button" className={styles.btn}>
                          <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200325_155459_follow.png" alt="" />
                        </button>
                      </li>
                      <li>
                        <div className={styles.icon}>
                          <img className={styles.iconBlue} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200323_174136_instagram.png" alt="" />
                          <img className={styles.share} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200323_174145_share.png" alt="" />
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: 'Get More' }} />
                        <button type="button" className={styles.btn}>
                          <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200325_155459_follow.png" alt="" />
                        </button>
                      </li>
                      <li>
                        <div className={styles.icon}>
                          <img className={styles.iconBlue} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200323_174136_instagram.png" alt="" />
                          <img className={styles.share} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200323_174145_share.png" alt="" />
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: 'Get More' }} />
                        <button type="button" className={styles.btn}>
                          <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200323_174127_follow.png" alt="" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className={styles.section2}>
            <section className={styles.section}>
              <div className={styles.titleLineBack}>
                <div className={`${styles.shadow} ${styles.title}`}>
                  <p>
                    Discover What Happened When Linus Tech Tips Got 100 Flare 2 Speakers
                  </p>
                </div>
              </div>
              <div className={styles.content}>
                <img onClick={e => {
                  e.stopPropagation();
                  if (this.isMobile()) this.setState({ cover: true });
                }}
                  className={styles.cover}
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200324_143043_video.png" alt="" />
                {(this.state.cover || !this.isMobile()) &&
                  <div onClick={e => {
                    e.stopPropagation();
                    if (this.isMobile()) this.setState({ cover: false });
                  }} className={styles.playerBox}>
                    <div className={styles.reactPlayer}>
                      <ReactPlayer
                        controls
                        width="100%" height="100%"
                        url={'https://youtu.be/B190xZBqog4'}
                        onPause={() => this.setState({ cover: false })}
                        onEnded={() => this.setState({ cover: false })}
                        config={{
                          youtube: { playerVars: { showinfo: 1, autoplay: 0, controls: 2 } }
                        }}
                      />
                    </div>
                  </div>}
              </div>
            </section>
          </div>
          <div className={styles.section4}>
            <section className={styles.section}>
              <div className={styles.productBox}>
                <img className={styles.productImg} src="https://dz02g1kgtiysz.cloudfront.net/deals/sflc/200330_161254_pro4.png" alt="" />
                <div className={styles.nameBox}>
                  <p className={styles.name}>Flare 2</p>
                  <div className={styles.review}>
                    <img src="https://dz02g1kgtiysz.cloudfront.net/deals/sflc/200330_161225_xinxin.png" alt="" />
                    <p>( 2120 review )</p>
                  </div>
                  <p className={styles.prize}>$99</p>
                </div>
              </div>
              <div className={styles.shopNow}>
                <button className={styles.btn}>
                  <img src="https://dz02g1kgtiysz.cloudfront.net/deals/sflc/200330_165619_shoppc3x.png" alt="" />
                </button>
              </div>
            </section>
          </div>

          <div className={`${styles.section3} ${this.isMobile() && styles.fixed}`}>
            <section className={styles.section}>
              <div className={styles.titleLineBack}>
                <div className={`${styles.shadow} ${styles.title}`}>
                  <div className={styles.modelBtn} onClick={() => this.showModel('rules')}>
                    <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200323_174206_rules.png" alt="" />
                    <p>Rules</p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.modelBtn} onClick={() => this.showModel('prizes')}>
                    <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200323_174200_gifticon.png" alt="" />
                    <p>My Prizes</p>
                    <div className={styles.num}>
                      <b>3</b>
                    </div>

                  </div>
                </div>
              </div>
            </section>
          </div>
     
        </div>
        {this.state.showModel ?
          <div className={styles.modelBox}>
            <div className={styles.modelcontent}>

              <div className={styles.modeltitle}>
                <img className={styles.modaltop} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200325_182328_modaltop.png" alt="" />
                <img className={styles.close} onClick={() => this.hideModel()} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200325_182728_close.png" alt="" />
              </div>
              {this.state.modelcontent}

            </div>
          </div> : ''
        }
      </div>
    );
  }
}

Camp.propTypes = {

};

function mapStateToProps(state) {
  const { example } = state;
  return {
    ...example
  };
}

export default connect(mapStateToProps)(Camp);
