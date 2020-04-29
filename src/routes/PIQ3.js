/* eslint max-len:0, object-property-newline:0, react/no-unused-state:0, no-unused-vars:0 */
import { connect } from 'dva';

import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import ReactPlayer from 'react-player';
import styles from './PIQ3.scss';

class Deal extends Component {
  state = {
    requestting: true,
    hidekey: 13,
    curCar: 0,
    curMan: 0,
    carColor: [
      '#1DC436',
      '#00A9E0',
      '#E11139',
      '#EB6100',
      '#FFFFFF',
      '#FFF100',
      '#2A35CD',
    ],
    manColor: [
      '#1DC436',
      '#EB6100',
      '#FFFFFF',
    ],
    car: {
      'iPhone XS Max': 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190523_161405_.png',
      "iPad Pro 11'' 2018": 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190523_161825_.png',
      'Samsung S10': 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190523_161813_.png',
      'Pixel 3XL': 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190524_115910_.png',
      'LG G6': 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190523_161806_.png',
      'MacBook Pro 13’’': 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190523_161749_.png',
      'MacBook Air 2018': 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190523_161754_.png',
    },
    // add
    carName: {
      'iPhone XS Max': 'XS Speedster',
      "iPad Pro 11'' 2018": 'iPad Inferno',
      'Samsung S10': 'S10 Spider',
      'Pixel 3XL': 'Pixel Challenger',
      'LG G6': 'LG Land Racer',
      'MacBook Pro 13’’': 'MacBook Mustang',
      'MacBook Air 2018': 'Ace Air',
    },
    manName: {
      'Power Delivery': 'U. S. B. Cecil',
      'Quick Charge 3.0': 'QC Snapdragon',
      'Stock Charger': 'Stocky',
    },
    man: {
      'Power Delivery': 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190523_161409_.png',
      'Quick Charge 3.0': 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190523_161617_-.png',
      'Stock Charger': 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190523_161610_.png',
    },
    anker: { 'PowerIQ 3.0': 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190523_161405_.png' },
    resultList: [
      ['result4', 'result3', 'result2'],
      ['result4', 'result2', 'result3'],
      ['result4', 'result4', 'result4'],
      ['result4', 'result3', 'result4'],
      ['result4', 'result4', 'result4'],
      ['result4', 'result1', 'result4'],
      ['result4', 'result1', 'result4'],
    ],
    circle: [
      [101, 118, 116, 193],
      [155, 157, 328, 175],
      [90, 93, 95, 95],
      [106, 106, 149, 109],
      [112, 107, 104, 107],
      [104, 104, 0, 110],
      [110, 110, 0, 115],
    ],
  }
  componentDidMount() {
    // const isMobile = (window.innerWidth) < 768;
    this.resize();
    window.addEventListener('resize', this.resize);
    window.addEventListener('scroll', this.orderScroll);
  }
  componentWillReceiveProps(nextProps) {
    const { deal } = nextProps;
    if (deal.products && !this.state.variants) {
      // this.getProducts(deal.products);
    }
  }

  resize = e => {
    const screenHeight = window.innerHeight - 108; // 108 为top nav的高度
    const screenWidth = window.innerWidth; // 108 为top nav的高度
    this.setState({
      screenWidth,
      screenHeight: screenHeight > 700 ? screenHeight : 700,
      modalHeight: window.innerHeight > 808 ? window.innerHeight : 808
    });
  }
  orderScroll = e => {
    const { screenHeight, hidekey } = this.state;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    this.setState({ scale: (scrollTop / screenHeight) * (hidekey - 1) + 1 });
    // add
    const el = document.getElementById("barList");
    if (this.isInViewPortOfOne(el)) {
      this.setState({ hasHide: true })
    } else {
      this.setState({ hasHide: false });
    }
  }
  // add
  isInViewPortOfOne(el) {
    // viewPortHeight 兼容所有浏览器写法
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    const offsetTop = el.offsetTop
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const top = offsetTop - scrollTop
    console.log('top', top, offsetTop)
    // 这里有个+100是为了提前加载+ 100
    return top <= viewPortHeight - 400
  }
  valueChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  swipeArr = (obj) => {
    let arr = []
    for (let i in obj) {
      arr.push(i);
    }
    return arr
  }
  circelRotate = (i, g, isLeft) => {
    const { circle } = this.state;
    const current = circle[i][g];
    if (current > 240) return 180;
    if (current <= 120 && !isLeft) return current * 180 / 120;
    if (current > 120 && isLeft) return (current - 120) * 180 / 120;
    if (current > 120) return 180;
    return 0;
  }
  render() {
    const navHeight = window && window.innerWidth < 768 ? 70 : 108;
    const {
      props: {
        origin, location,
        country, loading, deal, lang = {}
      },
      state
    } = this;
    // add
    let {
      variants,
      done,
      start,
      ready,
      screenWidth = 100,
      screenHeight = 700,
      modalHeight = 808,
      scale = 1,  // 当前放大系数
      hidekey = 6, // 最大放大系数，放大到多少倍之后hide
      car,
      man,
      curCar,
      curMan,
      carColor,
      manColor,
      carName,
      manName,
      anker,
      resultList,
      circle,
      hasHide = false,
      circeli = 0,
    } = state;
    const swipeCar = this.swipeArr(car);
    const swipeMan = this.swipeArr(man);
    const offset = screenWidth > 1360 ? (screenWidth - 1360) * 0.065 : 0;
    const scrollHeihgt = screenHeight * (2 + 0.5); // 留给首屏的滚动高度，2为滚动动画距离，0.5是静止停留距离
    const topHeihgt = screenHeight * (1 + 0.5); // 定位的高度
    const transformOrigin = navHeight === 70 ? screenHeight * 0.62 : screenHeight * 0.67 + offset; // 中心的跟随屏幕宽度偏移
    const pageUrl = `${origin}${location.pathname}${location.search}`;
    const inviteUrl = encodeURIComponent(pageUrl);
    const shareUrl = {
      Facebook: `https://www.facebook.com/sharer/sharer.php?u=${inviteUrl}`,
      Twitter: `https://twitter.com/intent/tweet?text=${lang.sharedTitle}&url=${inviteUrl}`,
      Instagram: `https://www.facebook.com/sharer/sharer.php?u=${inviteUrl}`,
    };
    return (
      <div className={styles.deal}>
        <div style={{ height: scrollHeihgt }} className={`${styles.section} ${styles.video} screen0x`}>
          <div style={{
            height: screenHeight, top: scale >= hidekey * (1 + 0.5) ? topHeihgt : 108, left: 0,
            position: scale >= hidekey * (1 + 0.5) ? 'absolute' : 'fixed'
          }} className={styles.fixVideo}
          >
            <ReactPlayer className={styles.player} url='https://dz02g1kgtiysz.cloudfront.net/deals/files/190528_100615_1920-980.mp4' width="100%" height={`${screenHeight}px`} muted playing loop />
            <div style={{
              height: screenHeight,
              transform: `scale(${scale}, ${scale})`,
              transformOrigin: `50% ${transformOrigin}px`,
              opacity: scale > (hidekey - 0.5) ? 0 : 1,
            }} className={styles.mask}
            />
            <div style={{ opacity: scale > 3 ? 1 : 0 }} className={styles.mainTitle}>
              <p>PowerIQ</p>
              <h1>3.0</h1>
            </div>
          </div>
        </div>

        <div style={{ height: modalHeight }} className={`${styles.section} ${styles.sectionModel}`}>
          <div
            className={`${styles.modalMask} ${styles.readyMask} ${ready && styles.hidetop}`}
            style={{ height: modalHeight }}>
            <div className={`wrap ${styles.Modal} ${styles.selectModal}`}>
              <div className={styles.content}>
                <div className={styles.seltitle}>
                  <p>Hit the road for your chance to </p>
                  <p><b>win a PowerIQ 3.0 charger.</b></p>
                </div>
                <div className={`${styles.selcon} ${styles.flexbox}`}>
                  <div className={styles.sel}>
                    <div className={styles.cartitle}>
                      <p><b>Choose Your Car</b></p>
                      <p>Which device will you charge?</p>
                    </div>
                    <div className={styles.carcontent}>
                      <div className={styles.carp}>
                        <div className={styles.swipe}>
                          <a className={styles.next} onClick={() => {
                            this.carSwipeEl.next()
                            console.log(curCar)
                            this.setState({ curCar: curCar >= 6 ? 0 : curCar + 1 })
                          }} />
                          <a className={styles.pre} onClick={() => {
                            this.carSwipeEl.prev()
                            this.setState({ curCar: curCar === 0 ? 6 : curCar - 1 })
                          }} />
                          <ReactSwipe
                            className="carousel"
                            swipeOptions={{ continuous: true }}
                            ref={el => (this.carSwipeEl = el)}>
                            {
                              swipeCar.map(v =>
                                (<div className={styles.boxCard}>
                                  <div className={styles.nameSwiper}>
                                    <p><b>{carName[v]}</b></p>
                                    <p>{v}</p>
                                  </div>
                                  <img src={car[v]} />
                                </div>))
                            }
                          </ReactSwipe>
                        </div>
                      </div>
                      <div className={styles.carPointer}>
                        {
                          carColor.map((v, i) => (
                            <div className={styles.cols}>
                              <div style={{
                                border: curCar === i ? `1px solid ${v}` : 'none'
                              }}>
                                <b style={{
                                  backgroundColor: v,
                                }} />
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>

                  <div className={styles.sel}>
                    <div className={styles.cartitle}>
                      <p><b>Choose Your Driver</b></p>
                      <p>Which charging tech is ideal?</p>
                    </div>
                    <div className={`${styles.carcontent} ${styles.mancontent}`}>
                      <div className={styles.carp}>
                        <div className={styles.swipe}>
                          <a className={styles.next} onClick={() => {
                            this.manSwipeEl.next()
                            this.setState({ curMan: curMan >= 2 ? 0 : curMan + 1 })
                          }} />
                          <a className={styles.pre} onClick={() => {
                            this.manSwipeEl.prev()
                            this.setState({ curMan: curMan === 0 ? 2 : curMan - 1 })
                          }} />
                          <ReactSwipe
                            className="carousel"
                            swipeOptions={{ continuous: true }}
                            ref={el => (this.manSwipeEl = el)}>
                            {
                              swipeMan.map(v =>
                                (<div className={styles.boxCard}>
                                  <div className={styles.nameSwiper}>
                                    <p><b>{manName[v]}</b></p>
                                    <p>{v}</p>
                                  </div>
                                  <img className={styles.manImg} src={man[v]} />
                                </div>))
                            }
                          </ReactSwipe>
                        </div>
                      </div>
                      <div className={`${styles.carPointer} ${styles.manPointer}`}>
                        {
                          manColor.map((v, i) => (
                            <div className={styles.cols}>
                              <div style={{
                                border: curMan === i ? `1px solid ${v}` : 'none'
                              }}>
                                <b style={{
                                  backgroundColor: v,
                                }} />
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.readybtn}>
                  <p onClick={() => this.setState({ ready: true })}><b>Start the Race!</b></p>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ height: modalHeight, opacity: ready ? 1 : 0 }}
            className={`${styles.contentmosd}`}>
            <div className={`${styles.content}`}>
              <div className={styles.race}>
                <div className={`${styles.other} ${styles.car} ${start && styles[resultList[curCar][curMan]]}`} style={{ backgroundImage: `url(${car[swipeCar[curCar]]})` }}>
                  <div className={styles.pop}>
                    <p>{swipeCar[curCar]}</p>
                    <p>{swipeMan[curMan]}</p>
                  </div>
                  <div style={{ opacity: start && !done ? 1 : 0 }} className={styles.huo}></div>
                </div>
                {/* add style */}
                <div className={`${styles.ankercar} ${styles.car} ${start && styles.result0}`}
                  style={{ backgroundImage: `url(${car[swipeCar[curCar]]})` }}>
                  <div className={styles.pop}>
                    {/* add */}
                    <p>{swipeCar[curCar]}</p>
                    <p>PowerIQ 3.0</p>
                  </div>
                  <div style={{ opacity: start && !done ? 1 : 0 }} className={styles.huo}></div>
                </div>
              </div>
              <div style={{ display: start ? 'none' : '' }} className={styles.readybtn}>
                <p onClick={() => {
                  this.setState({ start: true });
                  window.setTimeout(() => {
                    this.setState({ done: true });
                  }, 3000);
                  // add add
                }}><b>START</b></p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.modalMask} ${!done && styles.hidetop}`}
            style={{ height: modalHeight }}>
            <div
              style={{ height: modalHeight }}
              className={`wrap ${styles.Modal} ${styles.contentResult}`}>
              <div className={`${styles.content}`}>
                {/* add */}
                <div className={styles.close}
                  onClick={() => {
                    this.setState({
                      done: false,
                      start: false,
                      ready: false
                    })
                  }}
                />
                <div className={`${styles.contentResultying} ${resultList[curCar][curMan] === 'result4' && styles.contentResultping}`}>
                  <div className={styles.submitBox}>
                    <h1>PowerIQ 3.0 charges phones, tablets, laptops, and more at their fastest possible speed.</h1>
                    <p>Thanks for participating in the race!</p>
                    <p>Enter your email for a chance to <b>win our latest charger with PowerIQ 3.0.</b></p>
                    <form ref={c => this.form = c} onSubmit={e => this.subscribeSubmit(e)}>
                      <div style={{ height: '92px' }}></div>
                    </form>
                    <p>We promise to protect your privacy.</p>
                    <div className={styles.share}>
                      <div className={styles.unline} ></div>
                      <p>Share the result with your friends.</p>
                      <div className={styles.unline} ></div>
                    </div>
                    <div className={styles.share}>
                      <div className={styles.share1} ></div>
                      <div className={styles.share2} ></div>
                      <div className={styles.share3} ></div>

                    </div>
                  </div>
                </div>
                <div className={`${styles.footer}`}>
                  <p>Rule:</p>
                  <p>Open to residents in the US only.   </p>
                  <p>Open to residents in the US, UK, and Germany.</p>
                  <p>This event runs from May 27th to June 30th, 2019.</p>
                  <p>Complete the race and enter your email for your chance to win.</p>
                  <p>Winners will be notified via email by July 8th, 2019.</p>
                  <p>50 winners will be selected at random. Purchasing products on our website will not increase your chances of winning.</p>
                  <p>By offering your email you agree to the Privacy Policy and Terms of Use.</p>
                  <p>Anker reserves the right of final explanation.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className={`${styles.section} ${styles.screen2x} wrap`}>
          <h2><b>WWWWW WWWW WWWWWW?</b></h2>
          <h2>WWWWW WWWW WWWW WWWW WWWWWWWW WWWW WWWW WWWW WWWW WWWWWW</h2>
          <h2>WWWWW WWWW WWWW WWWW WWWWWWWW WWWW WWWW WWWW WWWW WWW WWWW WWWW WWWW WWWWWWWW WWWW WWWW WWWW WWWW WWW WWWW WWWW WWWW WWWWWWWW WWWW WWWW WWWW WWWW WWW WWWW WWWW WWWW WWWWWWWW WWWW WWWW WWWW WWWW WWWWWW?</h2>
          <h2 className={styles.subtitle}><b>HHHH HHH HHHH</b></h2>
          <div className={styles.flexbox}>
            <div className={styles.glance}>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190524_161733_-3--1.png" />
              <h3>HIGH-SPEADD</h3>
              <h3>HIGH-SPEADD</h3>
              <p>Aadnas asjjdalksd a asdasd  asdasdas asdasd.</p>
            </div>
            <div className={styles.glance}>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190524_161733_-3--1.png" />
              <h3>HIGH-SPEADD</h3>
              <h3>HIGH-SPEADD</h3>
              <p>Aadnas asjjdalksd a asdasd  asdasdas asdasd.</p>
            </div>
            <div className={styles.glance}>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190524_161733_-3--1.png" />
              <h3>HIGH-SPEADD</h3>
              <h3>HIGH-SPEADD</h3>
              <p>Aadnas asjjdalksd a asdasd  asdasdas asdasd.</p>
            </div>
          </div>
        </div>

        <div className={`${styles.section} ${styles.screen3x}`}>
          <div className="wrap">
            <h2 className={styles.subtitle}><b>WWWWW WWWW WWWWWW?</b></h2>
            <div className={`${styles.rowBox}`}>
              <div className={`${styles.flexbox} ${styles.row1}`}>
                <div className={styles.col1}></div>
                <div className={styles.col2}>
                  <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190524_170555_poweriq.png" />
                  <h3>PowerIQ 3.0</h3>
                  <p>(2019)</p>
                </div>
                <div className={styles.col3}>
                  <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190524_170555_poweriq.png" />
                  <h3>PowerIQ 2.0</h3>
                  <p>(2017)</p>
                </div>
                <div className={styles.col4}>
                  <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190524_170555_poweriq.png" />
                  <h3>PowerIQ</h3>
                  <p>(2014)</p>
                </div>
              </div>
              <div className={`${styles.flexbox} ${styles.row2}`}>
                <div className={styles.col1}>
                  <p>
                    <span> High-Speed</span>
                    <span>Charging</span>
                    <span>Compatible</span>
                    <span>Devices</span>
                  </p>
                </div>
                <div className={styles.col2}>
                  <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190524_163213_piq-3.0page222.jpg" />
                  <h3>100W*</h3>
                  <p>Max Output</p>
                </div>
                <div className={styles.col3}>
                  <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190524_163219_piq-3.0page111.jpg" />
                  <h3>24W</h3>
                  <p>Max Output</p>
                </div>
                <div className={styles.col4}>
                  <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190524_163225_piq-3.0page.jpg" />
                  <h3>12W</h3>
                  <p>Max Output</p>
                </div>
              </div>
              <div className={`${styles.flexbox} ${styles.row3}`}>
                <div className={styles.col1}>
                  <p>Connector</p>
                  <p>Type</p>
                </div>
                <div className={styles.col2}><h3>Max Output</h3></div>
                <div className={styles.col3}><h3>Max Output Qadas Output Output Qadas Output Qadas Adadaasdadasd</h3></div>
                <div className={styles.col4}><h3>Max OutputOutput Output Output OutputOutput</h3></div>
              </div>
            </div>
            <a href="">222222222222222222222222222222</a>
          </div>
        </div>

        <div className={`${styles.section} ${styles.screen4x}`}>
          <h2 className={styles.subtitle}><b>WWWWW WWWW WWWWWW?</b></h2>
          <div className={styles.navbox}>
            <div className={`${styles.flexbox} wrap`}>
              <div className={styles.scrollnav}>
                {
                  swipeCar.map((v, i) => <div className={`${styles.col} ${i === circeli && styles.circeli}`} onClick={() => this.setState({ circeli: i })}>{v}</div>)
                }
              </div>
            </div>
          </div>
          <div className={styles.content4x}>
            <div className='wrap'>
              {/* add */}
              <div className={styles.circleGifBox}>
                <img src={circeli === 0 && "https://dz02g1kgtiysz.cloudfront.net/deals/files/190529_105320_gif.gif"} />
                <div onClick={() => this.setState({ circeli: circeli + 1 })
                } style={{ display: circeli < 6 ? '' : 'none' }} className={styles.circleRight} />
                <div onClick={() => this.setState({ circeli: circeli - 1 })} style={{ display: circeli > 0 ? '' : 'none' }} className={styles.circleleft} />
              </div>

              <div style={{ display: 'none' }} className={styles.circleBox}>
                <h3>TIMES</h3>
                <p className={styles.c1h}>1h</p>
                <p className={styles.c2h}>2h</p>
                <p className={styles.c3h}>3h</p>
                <div className={styles.circleProgress_wrapper}>
                  <div className={`${styles.wrapper} ${styles.left}`}>
                    <div className={`${styles.circleProgress} ${styles.leftcircle}`}
                      style={{ transform: `rotate(${-135 + this.circelRotate(circeli, 0, true)}deg)` }} />
                  </div><div className={`${styles.wrapper} ${styles.right}`}>
                    <div className={`${styles.circleProgress} ${styles.rightcircle}`}
                      style={{ transform: `rotate(${-135 + this.circelRotate(circeli, 0)}deg)` }} />
                  </div>
                </div>

                <div className={`${styles.circleProgress_wrapper} ${styles.powerDelivery}`}>
                  <div className={`${styles.wrapper} ${styles.left}`}>
                    <div className={`${styles.circleProgress} ${styles.leftcircle}`}
                      style={{ transform: `rotate(${-135 + this.circelRotate(circeli, 1, true)}deg)` }} />
                  </div><div className={`${styles.wrapper} ${styles.right}`}>
                    <div className={`${styles.circleProgress} ${styles.rightcircle}`}
                      style={{ transform: `rotate(${-135 + this.circelRotate(circeli, 1)}deg)` }} />
                  </div>
                </div>

                <div className={`${styles.circleProgress_wrapper} ${styles.quickCharge}`}>
                  <div className={`${styles.wrapper} ${styles.left}`}>
                    <div className={`${styles.circleProgress} ${styles.leftcircle}`}
                      style={{ transform: `rotate(${-135 + this.circelRotate(circeli, 2, true)}deg)` }}></div>
                  </div><div className={`${styles.wrapper} ${styles.right}`}>
                    <div className={`${styles.circleProgress} ${styles.rightcircle}`}
                      style={{ transform: `rotate(${-135 + this.circelRotate(circeli, 2)}deg)` }}></div>
                  </div>
                </div>

                <div className={`${styles.circleProgress_wrapper} ${styles.stockCharge}`}>
                  <div className={`${styles.wrapper} ${styles.left}`}>
                    <div className={`${styles.circleProgress} ${styles.leftcircle}`}
                      style={{ transform: `rotate(${-135 + this.circelRotate(circeli, 3, true)}deg)` }}></div>
                  </div><div className={`${styles.wrapper} ${styles.right}`}>
                    <div className={`${styles.circleProgress} ${styles.rightcircle}`}
                      style={{ transform: `rotate(${-135 + this.circelRotate(circeli, 3)}deg)` }}></div>
                  </div>
                </div>

              </div>
              <div className={`${styles.legend}`}>
                <div className={styles.col}>
                  <span />
                  <p>PowerIQ 3.0</p>
                </div>
                <div className={styles.col}>
                  <span className={styles.powerDelivery} />
                  <p>Power Delivery</p>
                </div>
                <div className={styles.col}>
                  <span className={styles.quickCharge} />
                  <p>Quick Charge 3.0</p>
                </div>
                <div className={styles.col}>
                  <span className={styles.stockCharge} />
                  <p>Stock Charger</p>
                </div>
              </div>
              {/* add */}
              <div className={styles.sectionBottom}>
                <p>wwwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
                <a href="">222222222222222222222222222222</a>
              </div>
            </div>
          </div>
        </div>

        <div id="barList" className={`${styles.section} ${styles.screen5x}`}>
          <div className='wrap'>
            <h2 className={styles.subtitle}><b>WWWWW WWWW WWWWWW?</b></h2>
            <p>WWWWW WWWW WWWW WWWW WWWWWWWW WWWW WWWW WWWW WWWW WWWWWW</p>
            <h3><b>WWWWW WWWW WWWWWW?</b></h3>
            {/* add */}
            <div className={styles.bar}>
              <div className={styles.barTitlle}>
                <p>Laptops</p>
                <p>Consoles</p>
                <p>Tablets</p>
                <p>Smartphones</p>
                <p>Wireless Headphones</p>
              </div>
              <div className={styles.legent}>
                <div className={styles.barLegent}>
                  <span className={`${styles.bar100w} ${!hasHide && styles.hide}`} />
                  <b>30 - 100w</b>
                </div>
                <div className={styles.barLegent}>
                  <span className={`${styles.bar45w} ${!hasHide && styles.hide}`} />
                  <b>30 - 45w</b>
                </div>
                <div className={styles.barLegent}>
                  <span className={`${styles.bar30w} ${!hasHide && styles.hide}`} />
                  <b>18 - 30w</b>
                </div>
                <div className={styles.barLegent}>
                  <span className={`${styles.bar24w} ${!hasHide && styles.hide}`} />
                  <b>10 - 24w</b>
                </div>
                <div className={styles.barLegent}>
                  <span className={`${styles.bar5w} ${!hasHide && styles.hide}`} />
                  <b>5w</b>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}
export default connect()(Deal);
