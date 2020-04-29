import { connect } from 'dva';

import React from 'react';
import styles from './material.scss';
import dy from './sass/animate.scss';
import ReactSwipe from 'react-swipe';
import Carousel from 'nuka-carousel';

class Material extends React.Component {
  state = {
    house: [
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190610_185947_doorbell.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190610_185954_bbm.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190610_190005_came.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190610_190010_light.png"
    ],
    logoP: [
      "XXXX XXXXXXX XXXXXXXXXX XXXXXXXXX XXXXXXXXX XXXXXXXXXX XXXXXXXXX XXXXXX\XXX",
      "XXXX XXXXXXXX XXXXXXXXXX XXXXXXXXX XXXXXXXX XXXXXXXXXX XXXXXXXXX XXXXXX\XXX",
      "XXXX XXXXXXXXXXX XXXXXXXXXX XXXXXXXXX XXXXX XXXXXXXXXX XXXXXXXXX XXXXXX\XXX"
    ],
    meiti: [
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190610_174533_4-zuo.png",
      "https://dz02g1kgtiysz.cloudfront.net/deals/files/190610_173913_4-you.png",
    ],
    goods: [
      `<div class="goods">
      <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_101909_1.png" />
      </div>
      <div class="nameSwiper">
        <p><b>XXX XXXX</b></p>
        <p>XXXX XXXXXXX XXXXXX\XXX</p>
      </div>`,
      `<div class="goods"><img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_102200_2.png" />
      </div>
      <div class="nameSwiper">
        <p><b>XXX XXXX</b></p>
        <p>XXXX XXXXXXX XXXXXXX\XXX</p>
      </div>`,
      `<div class="goods"><img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_101919_3.png" />
      </div>
      <div class="nameSwiper">
        <p><b>XXX XXXX</b></p>
        <p>XXXX XXXXXXX XXXXXX\XXX</p>
      </div>`,
      `<div class="goods"><img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_101923_4.png" />
      </div>
      <div class="nameSwiper">
        <p><b>XXX XXXX</b></p>
        <p>XXXX XXXXXXX XXXXXXXX\XXX</p>
      </div>`,
    ],
    rule: `<li>Winners will be notified via email by July 30th, 2019.</li>
          <li>Users who do not win a prize will receive a 30% discount code for related products.</li>
          <li>This campaign is open to residents in the US, UK, and Germany only.</li>
          <li>The winners will receive a 2-set eufyCam E security camera + eufy Video Doorbell.</li>
          <li>By offering your email you agree to the Terms of Use and Policy Privacy.</li>
          <li>eufy reserves the right of final explanation.</li>
          <li>5 prizes are reserved.</li>`,
    houseIcon: [
      ` <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_102509_doll.png" />
      <p>Doorbell</p>`,
      ` <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_102513_baby.png" />
      <p>Baby Monitor</p>`,
      ` <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_102521_cam.png" />
      <p>eufyCam E</p>`,
      ` <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_102525_floor.png" />
      <p>Floodlight</p>`,
    ],
    cards: [
      `<div>
        <p><b>XXX XXXX</b></p>
        <p>XXXX XXXXXXX XXXXXXXXXX XXXXXXXXX XXXXXX\XXX</p>
      </div>
      <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_102047_t82001.png" />`,
      `<div>
        <p><b>XXX XXXX</b></p>
        <p>XXXX XXXXXXX XXXXXXXXXX XXXXXXXXX XXXXXX\XXX</p>
      </div>
      <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_102052_t830014.png" />`,
      `<div>
        <p><b>XXX XXXX</b></p>
        <p>XXXX XXXXXXX XXXXXXXXXX XXXXXXXXX XXXXXX\XXX</p>
      </div>
      <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_102058_2.png" />`,
      `<div>
        <p><b>XXX XXXX</b></p>
        <p>XXXX XXXXXXX XXXXXXXXXX XXXXXXXXX XXXXXX\XXX</p>
      </div>
      <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_102121_4.png" />`,
    ],
    category1: [
      `<div>
        <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_114448_dianchi.png" />
        <p>
          <span>xxxxxx</span>
          <span>xxxxxx</span>
        </p>
      </div>`,
      `<div>
        <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_114459_k2.png" />
        <p>
          <span>xxxxxx</span>
          <span>xxxxxx</span>
        </p>
      </div>`,
      `<div>
        <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_114519_snka.png" />
        <p>
          <span>xxxxxx</span>
          <span>xxxxxx</span>
        </p>
      </div>`,
      `<div>
        <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_114445_c160.png" />
        <p>
          <span>xxxxxx</span>
          <span>xxxxxx</span>
        </p>
      </div>`,
      `<div>
        <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_114515_san.png" />
        <p>
          <span>xxxxxx</span>
          <span>xxxxxx</span>
        </p>
      </div>`,
    ],
    category2: [
      `<div>
        <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_114512_man.png" />
        <p>
          <span>xxxxxx</span>
          <span>xxxxxx</span>
        </p>
      </div>`,
      `<div>
        <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_114503_lingdang.png" />
        <p>
          <span>xxxxxx</span>
          <span>xxxxxx</span>
        </p>
      </div>`,
      `<div>
        <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_114454_dun.png" />
        <p>
          <span>xxxxxx</span>
          <span>xxxxxx</span>
        </p>
      </div>`,
      `<div>
        <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_114507_loading.png" />
        <p>
          <span>xxxxxx</span>
          <span>xxxxxx</span>
        </p>
      </div>`,
      `<div>
        <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_114523_weixin.png" />
        <p>
          <span>xxxxxx</span>
          <span>xxxxxx</span>
        </p>
      </div>`,
    ],
    dodge: 1000, way: -1
  }
  componentDidMount() {
    // const isMobile = (window.innerWidth) < 768;
    window.addEventListener('scroll', this.orderScroll);
    this.tick();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.orderScroll.bind(this));
  }
  orderScroll = e => {
    const { screenHeight, hidekey } = this.state;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    this.setState({ scale: (scrollTop / screenHeight) * (hidekey - 1) + 1 });
    // add
    this.setState({
      iphoneShow: this.isInViewPortOfOne(document.getElementById('iphoneShow')) || false,
      dunShow: this.isInViewPortOfOne(document.getElementById('dunShow')) || false,
    });
  }
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

  interval = 1;
  tick = (dodge = this.state.dodge, way = this.state.way) => {
    this.setState({ dodge: dodge - 1 })
    // window.requestAnimationFrame(this.tick)
    if (dodge <= 0) this.setState({ way: 1 });
    if (dodge >= 1000) this.setState({ way: -1 });
    console.log('dodge', dodge)
  }

  render() {
    const {
      rule = '',
      cardPosition = 0,
      cards = [],
      meiti = [],
      house = [],
      houseIcon = [],
      logoP = [],
      goods = [],
      iphoneShow = false,
      dunShow = false,
      category1 = [], category2 = [],
      dodge = 1000
    } = this.state;
    const isMobile = window && window.innerWidth < 768;
    return (
      <div className={styles.material}>
        <div className={styles.banner}>
          <section>
            <h1>XXXXXX</h1>
            <h2>XXXXXX</h2>
            <p>XXXXXXXXXXX   XXX XXXXXXX XXXXXXX XXXXXXXXXXXXXXXXXXXXX XXXXXXX</p>
          </section>
        </div>

        <div className={styles.subscribe}>
          <h1>XXXXXX</h1>
          <section>
            <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190610_143521_2-.png" />
            <div className={styles.form}>

            </div>
          </section>
        </div>

        <div className={styles.screen1x}>
          <section>
            <h1
              className={this.state.screen1x && `${dy.animated} ${dy.bounce} ${dy['delay-2s']}`}
              onClick={() => {
                this.tick();
                this.setState({ screen1x: true })
              }}
              dangerouslySetInnerHTML={{ __html: '<span>XXXXXXXXXXXXX</span> <span>XXXXX XXXX-XXX</span>' }} />
            <div className={styles.iconList}>
              {
                houseIcon && houseIcon.map((v, i) =>
                  <div className={styles.iconSub}
                    dangerouslySetInnerHTML={{ __html: v }}
                    onClick={() => this.setState({ cardPosition: i })}
                  />)
              }
            </div>
          </section>
          <div className={styles.house}>
            <img className={styles.houseback} src={isMobile ? house[cardPosition || 0] : "https://dz02g1kgtiysz.cloudfront.net/deals/files/190620_104803_housenodoll.png"} />
            <div className={`${styles.houseproduct} ${styles.product1}`}>
              <div style={{ opacity: dodge / 1000 }} className={styles.close1} />
              <div style={{ opacity: dodge / 1000 }} className={styles.close2} />
              <img onClick={() => this.setState({ cardPosition: 0 })} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190624_114923_p1.png" />
            </div>
            <div className={`${styles.houseproduct} ${styles.product2}`}>
              <div className={styles.close1} />
              <div className={styles.close2} />
              <img onClick={() => this.setState({ cardPosition: 1 })} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190624_114927_p2.png" />
            </div>
            <div className={`${styles.houseproduct} ${styles.product3}`}>
              <div className={styles.close1} />
              <div className={styles.close2} />
              <img onClick={() => this.setState({ cardPosition: 2 })} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190624_114934_p3.png" />
            </div>
            <div className={`${styles.houseproduct} ${styles.product4}`}>
              <div className={styles.close1} />
              <div className={styles.close2} />
              <img onClick={() => this.setState({ cardPosition: 3 })} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190624_114937_p4.png" />
            </div>
            <div className={`${cardPosition >= 0 && styles['card' + cardPosition]} ${styles.popCard}`} dangerouslySetInnerHTML={{ __html: cards.length ? cards[cardPosition] : '' }} />
          </div>
        </div>

        <div className={styles.screen2x}>
          <section>
            <h1>XXXXX XXX</h1>
            <div className={styles.carousel}>
              <a className={styles.next} onClick={() => {
                this.swipeEl.next()
              }} />
              <a className={styles.pre} onClick={() => {
                this.swipeEl.prev()
              }} />
              <ReactSwipe
                className="carousel"
                swipeOptions={{
                  continuous: true,
                  auto: 5000,
                }}
                ref={el => (this.swipeEl = el)}>
                {
                  logoP.map(v =>
                    (<div className={styles.boxCard}>
                      <div className={styles.nameSwiper}>
                        <p dangerouslySetInnerHTML={{ __html: v }} />
                      </div>
                      <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190604_160300_-110.png" />
                    </div>))
                }
              </ReactSwipe>
            </div>
            <div className={styles.meiti}>
              {
                meiti && meiti.map(v => <img src={v} />)
              }
            </div>
          </section>
        </div>

        <div className={styles.screen3x}>
          <section>
            <h1>XXXXX XXX</h1>
            <div className={styles.carousel}>
              {
                goods.map(v =>
                  (<a href={v.link || ''} target="_blank" rel="noopener noreferrer" className={styles.boxCard} >
                    <div class="goods">
                      <img src={v.thumb} />
                    </div>
                    <div class="nameSwiper">
                      <p>{v.name}</p>
                      <p>{v.dec}</p>
                    </div>
                  </a>))
              }
            </div>
          </section>
        </div>

        <div className={styles.screen4x}>
          <section>
            <div>
              <h2>XXXXXX</h2>
              <p>XXXXXXXXXXX   XXX XXXXXXX XXXXXXX XXXXXXXXXXXXXXXXXXXXX XXXXXXX</p>
            </div>
          </section>
        </div>

        <div className={styles.screen5x}>
          <section>
            <div>
              <h2>XXXXXX</h2>
              <p>XXXXXXXXXXX   XXX XXXXXXX XXXXXXX XXXXXXXXXXXXXXXXXXXXX XXXXXXX</p>
            </div>
          </section>
        </div>

        <div className={styles.screen6x}>
          <section>
            <img className={styles.img} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_112040_8-hd.jpg" />
            <div className={styles.desc}>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_114459_k2.png" />
              <h2>XXXX XXX</h2>
              <p>xxxxxx xxxxxx xxxxxxxxx xxxxxxxx xxx xxxxxxx xxxxxxxxx xxxxxxxx xxx xxxxxxxx xx x xxxx x xxxxxx</p>
            </div>
          </section>
          <section>
            <div className={styles.desc}>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_114503_lingdang.png" />
              <h2>XXXX XXX</h2>
              <p>xxxxxx xxxxxx xxxxxxxxx xxxxxxxx xxx xxxxxxx xxxxxxxxx xxxxxxxx xxx xxxxxxxx xx x xxxx x xxxxxx</p>
            </div>
            <img className={styles.img} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_130942_9-.gif" />
          </section>
        </div>

        <div id="iphoneShow" className={styles.screen7x}>
          <section className={`${styles.sectionTxet} ${iphoneShow && styles.show}`}>
            <div>
              <h2>XXXXXX</h2>
              <p>XXXXXXXXXXX   XXX XXXXXXX XXXXXXX XXXXXXXX XXXX XXXX XXXXX XXXXXXX</p>
            </div>
          </section>
        </div>

        <div className={styles.screen8x}>
          <section>
            <img className={styles.img} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_112126_11-.jpg" />
            <div className={`${styles.descSpcial} ${styles.desc}`}>
              <h2>XXXX XXX XXX</h2>
              <h3>XXXX XXX</h3>
              <p>xxxxxx xxxxxx xxxxxxxxx xxxxxxxx xxx xxxxxxx xxxxxxxxx xxxxxxxx xxx xxxxxxxx xx x xxxx x xxxxxx</p>
              <div className={styles.bar}>
                <p>xxxxx</p>
                <div className={styles.barBox}>
                  <span className={styles.blueBar}></span>
                  <div className={styles.money}>
                    0$<sub>/year</sub>
                  </div>
                </div>
              </div>
              <div className={styles.bar}>
                <p>xxxxx</p>
                <div className={styles.barBox}>
                  <span className={`${styles.greyBar} ${styles.blueBar}`}></span>
                  <div className={`${styles.greyBar} ${styles.money}`}>
                    0$<sub>/year</sub>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className={styles.desc}>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_114512_man.png" />
              <h2>XXXX XXX</h2>
              <p>xxxxxx xxxxxx xxxxxxxxx xxxxxxxx xxx xxxxxxx xxxxxxxxx xxxxxxxx xxx xxxxxxxx xx x xxxx x xxxxxx</p>
            </div>
            <img className={styles.img} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_112135_12-ai.jpg" />
          </section>
        </div>

        <div className={styles.screen9x}>
          <section className={styles.section9x}>
            <h2>XXXXXX</h2>
            <p>XXXXXXXXXXX XXX XXXXXXX XXXXXXX XXXXXXXXXXX XXXXXXXXXX XXXXXXX</p>
          </section>
        </div>

        <div className={styles.screen10x}>
          <section>
            <div className={styles.desc}>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_114507_loading.png" />
              <h2>XXXX XXX</h2>
              <p>xxxxxx xxxxxx xxxxxxxxx xxxxxxxx xxx xxxxxxx xxxxxxxxx xxxxxxxx xxx xxxxxxxx xx x xxxx x xxxxxx</p>
            </div>
            <img className={styles.img} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190611_112221_14-.gif" />
          </section>
        </div>

        <div className={styles.screen11x}>
          <section>
            <img className={styles.productImg} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190604_193223_t82001--2.png" />
            <div className={styles.product}>
              <h3>xxxxxx 2</h3>
              <p>xxxxxx xxxxxxxx x  x x x xxxx xxx xxxxxxxxx xx x  xxxxxx</p>
              <h3 className={styles.price}>$123</h3>
              <div className={styles.category} dangerouslySetInnerHTML={{ __html: category1 && category1.join('') }} />
              <div className={styles.category} dangerouslySetInnerHTML={{ __html: category2 && category2.join('') }} />
            </div>
          </section>
        </div>

        <div id="dunShow" className={styles.screen12x}>
          <img className={`${dunShow && styles.dunShow} ${styles.dun}`} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/190610_093340_.png" />
          <section className={`${dunShow && styles.dunShow} ${styles.section12x}`}>
            <div className={`${dunShow && styles.dunShow} ${styles.content}`}>
              <h2>XXXXXX XXX XXXXXX XXXv XXX</h2>
              <p>XXXXXXXXXXX XXX XXXXXXX XXXXXXX XXXXXXXXXXX XXXXXXXXXXXXXXX XXX XXXXXXX XXXXXXX XXXXXXXXXXX XXXXXXXXXXXXXXX XXX XXXXXXX XXXXXXX XXXXXXXXXXX XXXXXXXXXXXXXXX XXX XXXXXXX XXXXXXX XXXXXXXXXXX XXXXXXXXXXXXXXX XXX XXXXXXX XXXXXXX XXXXXXXXXXX XXXXXXXXXXXXXXX XXX XXXXXXX XXXXXXX XXXXXXXXXXX XXXXXXXXXXXXXXX XXX XXXXXXX XXXXXXX XXXXXXXXXXX XXXXXXXXXXXXXXX XXX XXXXXXX XXXXXXX XXXXXXXXXXX XXXXXXXXXXXXXXX XXX XXXXXXX XXXXXXX XXXXXXXXXXX XXXXXXXXXXXXXXX XXX XXXXXXX XXXXXXX XXXXXXXXXXX XXXXXXXXXXXXXXX XXX XXXXXXX XXXXXXX XXXXXXXXXXX XXXXXXXXXX XXXXXXX</p>
            </div>
          </section>
        </div>

        <div className={styles.screen13x}>
          <section>
            <h1>RULES</h1>
            <p dangerouslySetInnerHTML={{ __html: `<b>XXxxxx xxxxx</b>` }} />
            <p dangerouslySetInnerHTML={{ __html: `xxxxx xxxx xxxx xxxxx` }} />
            <ul dangerouslySetInnerHTML={{ __html: rule }} />
          </section>
        </div>

        <div className={styles.footer}>
        </div>
      </div>
    );
  }
}

Material.propTypes = {
};

function mapStateToProps(state) {
  const { example } = state;
  return {
    ...example
  };
}

export default connect(mapStateToProps)(Material);
