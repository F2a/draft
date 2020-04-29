import { connect } from 'dva';

import React from 'react';
import styles from './flaremini.scss';
import ReactSwipe from 'react-swipe';
import Carousel from 'nuka-carousel';
import ReactPlayer from 'react-player';

class Flaremini extends React.Component {
  state = {
    icon: [
      ` <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_172341_-1.png" />
      <p>360°</p><p>Sound</p>`,
      ` <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_172345_-2.png" />
      <p>Good</p><p>Bass</p>`,
      ` <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_172353_-3.png" />
      <p>Enhance the</p><p>Atmosphere</p>`,
      ` <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_172358_-4.png" />
      <p>Long</p><p>Playtime</p>`,
      ` <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_172401_-5.png" />
      <p>Extra</p><p>Portable</p>`,
    ],
    lamp: [
      'https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_174230_.mp4',
      'https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_134210_-.mp4',
      'https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_174221_-.mp4',
      'https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_174226_-.mp4',
      'https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_174217_-.mp4'
    ],
    lampDec: [
      `<h3>M-Sync</h3><p>LEDs pulse to the beat of the music.</p>`,
      `<h3>Fusion</h3><p>Dual colors flash and phase.</p>`,
      `<h3>Breathe</h3><p>Flows gently between orange and red.</p>`,
      `<h3>Pulse</h3><p>Rings of color run and chase.</p>`,
      `<h3>Glow</h3><p>Gently phases between colors.</p>`,
    ],
    play: [
      `<b>19:00</b><img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_150443_-2580.png" />`,
      `<b>21:30</b><img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_175238_soundcore4444.png" />`,
      `<b>24:00</b><img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_175241_soundcore6076.png" />`,
    ],
    palyon: [
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_150443_-2580.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_175238_soundcore4444.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_175241_soundcore6076.png"
    ],
    double: [
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190614_173541_dt01.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190614_173625_dt03.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190614_173629_dt05.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190614_173633_dt07.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190614_173637_dt09.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190614_173642_dt011.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190614_173647_dt013.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190614_173651_dt015.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190614_173657_dt017.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190614_173702_dt019.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190614_173705_dt021.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190614_173709_dt023.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190614_173714_dt025.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190614_173717_dt029.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190614_173721_dt031.png",
    ],
    show: 0
  }
  timer = null;
  componentDidMount() {
    // const isMobile = (window.innerWidth) < 768;
    window.addEventListener('scroll', this.orderScroll);
    // this.timer = window.setInterval(() => {
    //   const { double, show } = this.state;
    //   this.setState({ show: show >= double.length - 1 ? 0 : show + 1 })
    // }, 100);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.orderScroll.bind(this));
    this.timer = null;
  }
  orderScroll = e => {
    this.isInViewPortOfOne(document.getElementById('audio'), (top, viewPortHeight, offsetTop, scrollTop) => {
      console.log('top', top, viewPortHeight, this.isInViewPortOfOne(document.getElementById('pool')));
      const screenHeight = window.innerHeight;
      if (top + screenHeight <= viewPortHeight) {
        this.setState({ fixed: true, screenHeight });
      } else {
        this.setState({ fixed: false, screenHeight });
      }
      if (this.isInViewPortOfOne(document.getElementById('pool'))) {
        this.setState({ isBottom: true });
      } else {
        this.setState({ isBottom: false });
      }
      this.setState({
        audio: top <= viewPortHeight - this.ready ? viewPortHeight - top - this.ready : 0,
      })
    });
    this.isInViewPortOfOne(document.getElementById('pool'), (top, viewPortHeight) =>
      this.setState({
        pool: top <= viewPortHeight ? viewPortHeight - top - this.ready : 0,
      })
    );
    this.isInViewPortOfOne(document.getElementById('moving'), (top, viewPortHeight) => {
      this.setState({
        moving: top <= viewPortHeight ? viewPortHeight - top - this.ready : 0,
      })
    }
    );
    // this.setState({
    //   audio1: this.isInViewPortOfOne(document.getElementById('audio')) || false,
    // });
  }
  ready = 900;
  isInViewPortOfOne(el, fn) {
    // viewPortHeight 兼容所有浏览器写法
    if (el) {
      const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const offsetTop = el.offsetTop;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const top = offsetTop - scrollTop;
      // 这里有个-ready是为了提前加载 ready
      fn && fn(top, viewPortHeight, offsetTop, scrollTop);
      return top <= viewPortHeight;
    }
  }
  render() {
    const {
      icon = [],
      lamp = [],
      lampDec = [],
      play = [],
      palyon = [],
      color = 0,
      slideIndex = 0,
      audio = 0,
      pool = 0,
      moving = 0,
      double = [],
      screenHeight = 800,
      isBottom = false
    } = this.state;
    const isMobile = window && window.innerWidth < 768;

    return (
      <div className={styles.flaremini}>

        <div className={styles.banner}>
          <ReactPlayer className={styles.player} url={'https://dz02g1kgtiysz.cloudfront.net/deals/files/190617_180122_2-1.mp4'} width="100%" height={`125%`} muted playing loop />
          <section>
            <div className={styles.content}>
              <h1>Flare Mini</h1>
              <span className={styles.lineBlue} />
              <h3 dangerouslySetInnerHTML={{
                __html: `<span>Amplify the Atmosphere.</span><span>Any Time, Any Place.</span>`
              }} />
              <div className={styles.selectColor}>
                <p>Selected Color:  {
                  ['White', 'Blue', 'Red'][color]
                }</p>
                <span onClick={() => this.setState({ color: 0 })} className={`${styles.pointer}  ${color === 0 && styles.current}`} />
                <span onClick={() => this.setState({ color: 1 })} className={`${styles.pointer} ${styles.blue} ${color === 1 && styles.current}`} />
                <span onClick={() => this.setState({ color: 2 })} className={`${styles.pointer} ${styles.red}  ${color === 2 && styles.current}`} />
              </div>
              <h3 className={styles.price}>$49.99</h3>
              <div className={styles.box}>
                <a className={styles.button}>
                  ADD TO CART
                </a>
                <a className={`${styles.button} ${styles.borderonly}`}>
                  BUY ON AMAZON
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.items}>
          <section>
            <div className={styles.iconList}>
              {
                icon && icon.map((v, i) =>
                  <div className={styles.iconSub}
                    dangerouslySetInnerHTML={{ __html: v }}
                    onClick={() => this.setState({ cardPosition: i })}
                  />)
              }
            </div>
          </section>
        </div>

        <div className={styles.screen1x}>
          <section>
            <div className={styles.title}>
              <h1>360°</h1>
              <h2>SOUND</h2>
            </div>
            <span className={styles.lineBlue} />
            <p>Make sure everyone in the space gets a face full of atmosphere thanks to Flare Mini’s intense all-around sound. BassUp™ Technology combines with back-to-back rare-earth drivers to drop three hundred and sixty degrees of audio power.</p>
            <div className={styles.videobox}>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_173219_-1.png" />
              <ReactPlayer className={styles.player} url={'https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_172116_360sound-videov4.mp4'} width="100%" height="100%" muted playing loop />
            </div>
          </section>
        </div>

        <div id="audio" className={styles.screen2x} style={{ height: screenHeight * 2 }} >
          <div className={styles.screen2xBox} style={
            {
              width: '100%',
              position: 'sticky',
              top: '0',
              zIndex: '5',
            }}>
            <section>
              <div className={styles.content}>
                <div className={styles.title}>
                  <h1>AUDIO</h1>
                  <h2>FIREWORKS</h2>
                </div>
                <span className={styles.lineBlue} />
                <p>Turn up the lights and light up the sound. Flare Mini’s beat-driven lightshow reacts to the beat and pumps up the atmosphere. Simply press the button to choose from one of 5 lighting modes to match the mood.</p>
              </div>
              <div className={styles.videobox}>
                <img style={{ opacity: (screenHeight - audio) / screenHeight, zIndex: (screenHeight - audio) / screenHeight <= 0.1 ? -1 : 5 }} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_172218_audio.png" />
                <div className={styles.screen3x}>
                  <section>
                    <div className={styles.carousel}>
                      <Carousel
                        autoplayReverse={this.state.autoplayReverse}
                        dragging={false}
                        withoutControls
                        vertical
                        autoplay={(screenHeight - audio) / screenHeight <= 0.1}
                        autoplayInterval={1200}
                        // transitionMode="fade"
                        slidesToShow={1}
                        slideIndex={this.state.slideIndex}
                        afterSlide={slideIndex => this.setState({
                          slideIndex,
                          autoplayReverse: slideIndex === 4 || slideIndex === 0 ? !this.state.autoplayReverse : !!this.state.autoplayReverse
                        })}
                      >
                        {lamp.map((item, index) => (
                          <div className={styles.item} key={index}>
                            <ReactPlayer className={styles.player} url={item || 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_134210_-.mp4'} width="100%" height={`${400}px`} muted playing={(screenHeight - audio) / screenHeight <= 0.1} loop />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                    <div className={styles.controls}>
                      {lampDec.map((item, index) => (
                        <div
                          key={index}
                          onClick={() => this.setState({
                            slideIndex: index,
                            autoplayReverse: index === 4 ? true : false
                          })}
                          className={`${styles.sub} ${slideIndex === index && styles.current}`} dangerouslySetInnerHTML={{ __html: item }} />
                      ))
                      }
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div id="pool" className={styles.screen4x}>
          <section>
            <div className={styles.title}>
              <h1>POOL</h1>
              <h2>SOUND</h2>
            </div>
            <span className={styles.lineBlue} />
            <p>o matter where the good times go, Flare Mini is suited up and ready. Super-safe IPX7 waterproof protection effortlessly withstands spills, rain, and even complete submersion in water. </p>
            <div className={styles.videobox}>
              <img style={{ top: pool / -10 }} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_145627_3l8a0265-v1.png" />
            </div>
          </section>
        </div>

        <div className={styles.screen5x}>
          <section>
            <div className={styles.title}>
              <h1>PLAY ON</h1>
              <p>Get up to 12 hours of souped-up sound and incredible illumination from a single charge. Whether you’re rocking from morning ‘til night or the other way round, Flare Mini is the engine that powers the party.</p>
            </div>
            <div className={styles.playBox}>
              {
                play && play.map((v, i) => (
                  <div
                    key={i}
                    className={styles.play}
                    dangerouslySetInnerHTML={{ __html: v }}
                    style={{ backgroundImage: `url(${palyon && palyon[i]})` }}
                  />
                ))
              }
            </div>
          </section>
        </div>

        <div className={styles.screen6x}>
          <section>
            <div className={styles.content}>
              <div className={styles.title}>
                <h1>DOUBLE</h1>
                <h2>TROUBLE</h2>
              </div>
              <span className={styles.lineBlue} />
              <p>Get turbo-charged stereo sound by pairing two speakers via a single Bluetooth device. Then hold on tight as the party jumps into a new dimension with a beat-driven light show that syncs across both speakers.</p>
              <div className={styles.videobox}>
                {
                  double && double.map((v, i) =>
                    <img style={{ display: this.state.show === i ? '' : 'none' }} src={v} alt="" />
                  )
                }
              </div>
            </div>
          </section>
        </div>

        <div id="moving" className={styles.screen7x}>
          <section>
            <div className={styles.content}>
              <div className={styles.title}>
                <h1>GET</h1>
                <h2>MOVING</h2>
              </div>
              <span className={styles.lineBlue} />
              <p>Flare mini may be only slightly larger than a can of soda, but it is squeezed full of good times. Portable enough to take anywhere, simply press ‘Play’ to release the atmosphere wherever you are.</p>
            </div>
          </section>
          <div className={styles.videobox}>
            <img style={{ width: `${110 + moving / 200 > 100 ? 110 + moving / 200 : 100}%` }} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_160710_rp06.png" />
          </div>
        </div>

        <div className={styles.screen8x}>
          <section>
            <div className={styles.title}>
              <h1>Find Your Flare</h1>
            </div>
            <div className={styles.buttonBox}>
              <a className={styles.button}>Compare models</a>
            </div>
            <div className={styles.productBox}>
              <div className={styles.product}>
                <div className={styles.img}>
                  <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_163314_437a7885.png" />
                </div>
                <h3><b>Flare Mini</b></h3>
                <a className={styles.button}>Learn more</a>
              </div>
              <div className={styles.product}>
                <div className={styles.img}>
                  <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_163323_8cbefc9b8439a758e62196cc3ca76747.png" />
                </div>
                <h3><b>Flare</b></h3>
                <a className={styles.button}>Learn more</a>
              </div>
              <div className={styles.product}>
                <div className={styles.img}>
                  <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190613_163329_8a53169a521460a92aac2951ac455a7d.png" />
                </div>
                <h3><b>Flare+</b></h3>
                <a className={styles.button}>Learn more</a>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.faq}>
          <h1>FAQ</h1>
          <section>
            <p>
              <span>+</span>
              xxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <p>
              <span>+</span>
              xxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <p>
              <span>+</span>
              xxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <p>
              <span>+</span>
              xxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <p>
              <span>+</span>
              xxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <p>
              <span>+</span>
              xxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
          </section>
        </div>

      </div>
    );
  }
}

Flaremini.propTypes = {

};

function mapStateToProps(state) {
  const { example } = state;
  return {
    ...example
  };
}

export default connect(mapStateToProps)(Flaremini);
