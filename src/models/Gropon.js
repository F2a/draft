

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { provideHooks } from 'redial';
import Helmet from 'react-helmet';
import { loadDeal, captchaSubscribe } from 'lizard/redux/deals';
import { getCaptcha } from 'lizard/redux/menu';
import { openModal, errorModal } from 'lizard/redux/modal';
import { Spin, Maintaining, BuyNow } from 'lizard';
import { buynow } from 'lizard/redux/cart';
import styles from './Gropon.scss';

const key = 'T2118';
const load = () => loadDeal(key, 'eufy::T2118', { group_by: '' });

@provideHooks({
  fetch: async ({ store: { dispatch, getState } }) => {
    const { deals } = getState();
    const promises = [];
    if (!deals[key]) promises.push(dispatch(load()).catch(() => null));
    if (__SERVER__) await Promise.all(promises);
  },
  defer: ({ store: { dispatch, getState } }) => {
    const { deals } = getState();
    if (__DEVELOPMENT__ || !deals[key]) dispatch(load());
  },
})

@connect(
  ({ locales, req, deals }) => ({
    common: locales.common || {},
    country: locales.country || {},
    deal: deals[key] || {},
    origin: req.origin,
  }),
  {
    buynow, openModal, errorModal, getCaptcha, captchaSubscribe
  }
)

class Gropon extends React.Component {
  static propTypes = {
    country: PropTypes.shape().isRequired,
    common: PropTypes.shape().isRequired,
    location: PropTypes.shape().isRequired,
    deal: PropTypes.shape().isRequired,
    captchaSubscribe: PropTypes.func.isRequired,
    buynow: PropTypes.func.isRequired,
    origin: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
    errorModal: PropTypes.func.isRequired,
    getCaptcha: PropTypes.func.isRequired,
  };

  state = {
    Percent: 50,
    variantloading: true
  }

  componentDidMount() {
    const {
      props: { deal },
    } = this;
    const { products = {} } = deal;
    if (products) {
      this.getProducts(products);
    }
  }
  getProducts = data => {
    this.props.getProduct(data[0].code)
      .then(v => {
        if (v && v.variants) this.setState({ variant: v.variants[0] });
      })
      .catch(() => this.setState({ variant: false }))
      .finally(() => this.setState({ variantloading: false }));
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
    const { props: { origin, location, deal } } = this;
    const { lang = {} } = deal;
    const {
      Percent = 0,
      variantloading
    } = this.state;
    const {
      title = '',
      url = `${origin}${location.pathname}${location.search}`,
      ogimg, twimg, ogdesc,
    } = lang;
    return (
      <div className={styles.Cable}>
        <Helmet title={title}
          meta={[
            { property: 'og:title', content: title },
            { property: 'og:url', content: url },
            { property: 'og:image', content: ogimg },
            { property: 'twitter:card', content: 'summary_large_image' },
            { property: 'twitter:image:src', content: twimg || ogimg },
            { property: 'og:description', content: ogdesc },
          ]}
        />
        <section className={styles.banner}>
          {
            lang.bannerMobile ?
              <img src={lang.bannerMobile} alt="" /> :
              <img className={styles.img} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191031_100615_banner.jpg" alt="" />
          }
        </section>
        <section className={styles.section1back}>
          <Spin spining={variantloading}>
            {this.state.variant && <div className={`${styles.section1} ${styles.section}`}>
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
                <BuyNow {...{ ...this.props, id: 'btn_buynow', className: `button-normal submit ${styles.btn}` }}
                  variant={this.state.variant} btnTxt={lang.butnow}
                />
                <a className={styles.btn}>
                Buy Now: 1
                </a>
              </div>
            </div>}
          </Spin>
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
      </div>
    );
  }
}

export default Gropon;
