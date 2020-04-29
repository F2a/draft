import React from 'react';
import { connect } from 'dva';
import ReactPlayer from 'react-player';
import styles from './Rope.scss';
import utils from '../utils/utils';

class Testpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      textList: [
        {
          text: '<h1>over <br/>25,000 <br/>Bends Lifespan</h1><p>Smarter connector end design &  <br/>bulletproof fibercore ensured this cable to<br/>be 35x more durable.</p>',
          img: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190823_104200_5bd124cd884b12c0d9dcfc7b72f923f2.jpg',
          video: ''
        },
        {
          text: '<h1>Anti-Rust & <br/>Break Connector </h1><p>By using latest Lightning pin and with  <br/>Anker’s protective design, we have greatly <br/>reduced the chances for you to have <br/>usted and broken connector. </p>',
          img: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190827_161021_707594423f7a4ed8284b97d41a7fdf5b.png',
          video: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190828_104012_powerline-3rd-generation-insv3.mp4'
        },
        {
          text: '<h1>Easier <br/>to Store </h1><p>PowerLine+ III is apply stainless steel to <br/>the connector and with the edgeless <br/>curves, the cable could look great with<br/>your premium devices </p>',
          img: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190827_161024_fee0f6bc18d79ccd2d35ad3795ef5246.png',
          video: ''
        },
        {
          text: '<h1>Easy-Clean</h1><p>Wiping with wet clothes to take off dirt,<br/>bring you back a clean cable as new. No<br/>more yellow grey ugly cables!</p>',
          img: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190827_161044_f3d34aab196807271635cadd3bf4a8b7.png',
          video: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190828_104016_anker-powerline-3rd-generation-insv71.mp4'
        },
      ],
      section1: [
        {
          img: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190827_165817_low-quality-construction.jpg',
          text: '<p><b>Rusty</b></p><p>Connectors</p>'
        },
        {
          img: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190827_165822_rust-and-corrosion.jpg',
          text: '<p><b>Breaking</b></p><p>Connectors/Cables</p>'
        },
        {
          img: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190827_165828_discoloration.jpg',
          text: '<p><b>Turning to Ugly</b></p><p>Yellow & Grey</p>'
        },
        {
          img: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190827_165832_thick-and-inflexible.jpg',
          text: '<p><b>Thick & Dumb</b></p>'
        }
      ],
      iconlist: [
        {
          img: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190827_171401_-3.png',
          text: 'Faster'
        },
        {
          img: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190827_171404_safer.png',
          text: 'Safer'
        },
        {
          img: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190827_171407_more-durable.png',
          text: 'More Durable'
        }
      ]
    }
  }

  componentDidMount() {
    const isMobile = () => false;
    this.resize();
    window.setInterval(this.resize, 3000);
    window.addEventListener('resize', utils.throttle(this.resize, 500));
    window.addEventListener('scroll', utils.throttle(this.scrollevent, 500));
    const videoLine = document.querySelector('#videoLine');
    isMobile() ? videoLine.play() : window.addEventListener('scroll', this.videoAnimate);
  }

  isIE = () => { //ie?
    if (!!window.ActiveXObject || "ActiveXObject" in window)
      return true;
    else
      return false;
  }

  resize = e => {
    console.log('isIE :', this.isIE());
    const screenHeight = window.innerHeight - 108; // 108 为top nav的高度
    const screenWidth = window.innerWidth;
    const Carousel = this.getElementTop(document.getElementById("Carousel"));
    const powerline = this.getElementTop(document.getElementById("powerline"));
    console.log('Carousel', document.getElementById("Carousel").offsetTop)
    this.setState({
      Carousel,
      powerline,
      screenWidth,
      screenHeight: screenHeight > 580 ? screenHeight : 580,
    });
  }

  scrollAction = (current, act) => {
    const action = {
      top: this.state.scrollTop,
      left: this.state.scrollLeft
    }[act] || this.state.scrollTop;
    return current > action;
  }

  scrollevent = e => {
    const { screenHeight = 600, Carousel = 600, powerline = 600, textList } = this.state;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
    const action = this.scrollAction(scrollTop, 'top');
    if (scrollTop > Carousel) {
      const i = Math.floor((scrollTop + 100 - Carousel) / screenHeight * 5 / 3);
      this.setState({ current: i >= textList.length - 1 ? textList.length - 1 : i });
    }
    if (scrollTop > powerline - screenHeight) {
      const lineTop = scrollTop - powerline;
      this.setState({ lineTop: lineTop > 0 });
    }
    this.setState({ scrollTop, action });
  }

  getElementTop = element => {
    let actualTop = element.offsetTop;
    let current = element.offsetParent;
    while (current !== null && current.offsetTop > 0) {
      actualTop += current.offsetTop;
      current = current.offsetParent;
    }

    return actualTop;
  }

  videoAnimate = () => {
    const { screenHeight = 600 } = this.state;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
    if (scrollTop > screenHeight * 10) return;
    const videoLine = document.querySelector('#videoLine');
    videoLine.currentTime = scrollTop / screenHeight * 12 / 10;
    const b = videoLine.buffered;
    if (b && b.length > 0) {
      let videoReady = 0;
      let i = b.length;
      while (i--) {
        videoReady += b.end(i) - b.start(i);
      }
      if (videoReady < 12) videoLine.play();
      this.setState({ videoReady: videoReady > 1 });
      console.log('object :', b, videoReady, videoLine.currentTime);
    }
  }

  render() {
    const { scrollTop = 0, screenHeight = 600, textList, current, lineTop, showVideo, section1 = [], iconlist = [], videoReady, videoBanner } = this.state;
    const isMobile = window && window.innerWidth < 768;
    const CarouselRatio = isMobile ? 0.5 : 0.8;
    return (
      <div className={styles.rope}>
        <div style={{ height: `${videoReady && !isMobile && !this.isIE() && videoBanner ? screenHeight * 11 : screenHeight * 2}px` }}>
          <div
            id="banner"
            className={styles.banner}
            style={{ height: `${screenHeight}px`, backgroundImage: 'url(https://dz02g1kgtiysz.cloudfront.net/deals/files/190829_105608_powerline-iiibanner.jpg)' }}
          >

            <div className={`${styles.title1} ${scrollTop > screenHeight / 2 && styles.titlehide}`}>
              <h1>PowerLine III</h1>
            </div>
            <div className={`${styles.title2} ${scrollTop > screenHeight * 9 && styles.titleShow}`}>
              <p>Withstand over</p>
              <h1>35,000</h1>
              <p><b>Bends Lifespan</b></p>
            </div>
            <div style={{ height: screenHeight / 3 }} className={`${styles.title2box} ${scrollTop > screenHeight * 9 && styles.titleShow}`}>
              <div />
              <div />
              <div />
              <div />
            </div>
            <video style={{ display: videoReady || isMobile ? '' : 'none' }} title="videoLine" id="videoLine" width="100%" height="100%" className={styles.videoLine}>
              <source type="video/mp4"
                src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190829_102740_.mp4"
              />
              {videoReady || isMobile && <track default kind="captions" />}
            </video>
          </div>
        </div>
        <section className={`${styles.section} ${styles.section1}`}>
          <h3>Why would you wanna throw the cables away?</h3>
          <div className={styles.flexbox}>
            {
              section1 && section1.map(v =>
                (<div className={styles.flex}>
                  <img src={v.img} alt="" />
                  <div dangerouslySetInnerHTML={{ __html: v.text }} />
                </div>))
            }
          </div>
          <div className={styles.powerline} />
          <h4>Latest PowerLine could help you<br />with all those complaints!</h4>
        </section>
        <section id="Carousel" style={{ height: this.isIE() ?`${screenHeight}px` : `${screenHeight * 3 + 200}px` }} className={styles.section2}>
          <div style={{ height: `${screenHeight}px` }} className={styles.stickyBox}>
            <div className={styles.lineBack} />
            <div className={styles.section}>
              {
                textList && textList.map((v, i) =>
                  <div key={i}
                    className={`${styles.text} ${i === current && styles.show}`}
                  >
                    <div dangerouslySetInnerHTML={{ __html: v.text }} />
                    {v.video && (<div className={styles.btn} onClick={() => this.setState({ showVideo: true })}>
                      <b className={styles.triangle} /> Click to view video
                  </div>)}
                  </div>)
              }
              <div style={{ height: `${screenHeight * CarouselRatio}px`, width: `${screenHeight * CarouselRatio + 80}px`, top: `${screenHeight * 0.5}px` }} className={styles.carousel}>
                <div className={styles.box} style={{ top: `${-1 * (screenHeight > 1000 ? 800 : (screenHeight * CarouselRatio)) * current}px` }}>
                  {
                    textList && textList.map((v, i) =>
                      <img style={{ height: `${screenHeight * CarouselRatio}px`, width: `${screenHeight * CarouselRatio}px` }} src={v.img || 'https://dz02g1kgtiysz.cloudfront.net/deals/files/190823_104200_5bd124cd884b12c0d9dcfc7b72f923f2.jpg'} alt="" />
                    )
                  }
                </div>
                <div style={{ height: `${screenHeight * CarouselRatio}px` }} className={styles.progress}>
                  <b style={{ height: `${screenHeight * 0.1}px` }} className={`${styles.bluebar} ${styles[`bluebar${current}`]}`} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="powerline" style={{ height: this.isIE() ?`${screenHeight}px` : `${screenHeight * 2}px` }} className={styles.section3}>
          <div style={{ height: `${screenHeight}px` }} className={styles.stickyBox}>
            <div style={{ height: `${screenHeight * 0.7}px` }} className={`${lineTop && styles.lineShow} ${styles.imgBox}`}>
              <img className={styles.lineGray} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190823_104230_-24.png" alt="" />
              <img className={styles.lineWhite} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190823_104244_-27.png" alt="" />
              <img className={styles.linebai} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190829_180810_.jpg" alt="" />
              <img className={styles.linehong} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190829_180817_.png" alt="" />
              <div className={styles.textLeft}>
                <h2><b>PowerLine III</b><br />USB-A to Lightning Cable</h2>
              </div>
              <div className={styles.textRight}>
                <h2><b>PowerLine+ III</b><br />USB-A to Lightning Cable<br /><br /><b><sup>*</sup>Coming Soon</b></h2>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.section4}`}>
          <h1>MFI Certification</h1>
          <div className={styles.iphone}>
            <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190827_150652_mfi.png" alt="" />
          </div>
          <div className={styles.iconList}>
            {
              iconlist && iconlist.map(v =>
                (<div className={styles.icon}><img src={v.img} alt="" />{v.text}</div>)
              )
            }
          </div>

        </section>
        <section className={styles.section5}>
          <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190826_154310_a8813011banner.png" alt="" />
        </section>
        <div onClick={e => {
          e.stopPropagation();
          this.setState({ showVideo: false });
        }} style={{ height: `${screenHeight + 105}px`, top: showVideo ? '0' : (`${-1 * (screenHeight + 108)}px`) }} className={styles.playerBox}
        >
          <ReactPlayer onClick={e => e.stopPropagation()} playing={showVideo} className={styles.player} url={textList[current].video} width="100%" height={isMobile ? '' : '100%'} controls />
          <div onClick={() => this.setState({ showVideo: false })} className={styles.iconClose} style={{ fontFamily: 'Helvetica, Arial' }}>&times;</div>
        </div>
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
