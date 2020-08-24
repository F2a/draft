import { connect } from "dva";
import React from "react";
import styles from "./Eufyrefrral.scss";

class Eufyrefrral extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      langs: {
        btnTxt: "Refer Your Neighbors",
        contentH3: "Community Care 3 Person Package",
        contentP: `Refer 3 of your neighbors. Get <b>$150</b> cash reward. <br /> 
                  Be in for the chance to earn <br /> 
                  an additional <b>$30</b> bonus per referral!`,
        product2:
          "https://dz02g1kgtiysz.cloudfront.net/deals/ers/200720_150128_1.png",
        product1:
          "https://dz02g1kgtiysz.cloudfront.net/deals/ers/200720_113209_2.png",
        product3:
          "https://dz02g1kgtiysz.cloudfront.net/deals/ers/200720_113213_3.png",
        product4:
          "https://dz02g1kgtiysz.cloudfront.net/deals/ers/200720_150140_4.png",
        backblue:
          "https://dz02g1kgtiysz.cloudfront.net/deals/ers/200720_113222_blue.png",
        backgreen:
          "https://dz02g1kgtiysz.cloudfront.net/deals/ers/200720_113226_green.png",
      },
    };
  }

  timer = null;

  componentDidMount() {}

  isMobile = () => window && window.innerWidth < 768;

  render() {
    const { langs = {} } = this.state;
    return (
      <div className={styles.referrals}>
        <div className={styles.banner}>
          {langs.bannerMobile && this.isMobile() ? (
            <img src={langs.bannerMobile} alt="" />
          ) : (
            <img
              className={styles.img}
              src={
                langs.banner ||
                "https://dz02g1kgtiysz.cloudfront.net/deals/ers/200720_113238_banner.jpg"
              }
              alt=""
            />
          )}
        </div>

        <div className={styles.section1}>
          <section className={styles.section}>
            <div className={styles.productsBox}>
              <div className={styles.content}>
                <h3 dangerouslySetInnerHTML={{ __html: langs.contentH3 }} />
                <div className={styles.offbox}>
                  <div className="off">
                    <span className="top">Your Neighbors Get</span>
                    <span className="bottom">$70 Off Each</span>
                  </div>
                  <div className="off">
                    <span className="top">Your Neighbors Get</span>
                    <span className="bottom">$70 Off Each</span>
                  </div>
                </div>
                <p dangerouslySetInnerHTML={{ __html: langs.contentP }} />
                <div className={styles.btnbox}>
                  <button dangerouslySetInnerHTML={{ __html: langs.btnTxt }} />
                </div>
              </div>
              <div className={styles.product}>
                <div className={`${styles.img} ${styles.product1}`}>
                  <img className={styles.main} src={langs.product1} alt="" />
                  <img className={styles.back} src={langs.backgreen} alt="" />
                </div>
                <div className={`${styles.img} ${styles.product2}`}>
                  <img className={styles.main} src={langs.product2} alt="" />
                  <img className={styles.back} src={langs.backblue} alt="" />
                </div>
              </div>
              <div className={styles.content}>
                <h3 dangerouslySetInnerHTML={{ __html: langs.contentH3 }} />
                <p dangerouslySetInnerHTML={{ __html: langs.contentP }} />
                <div className={styles.btnbox}>
                  <button dangerouslySetInnerHTML={{ __html: langs.btnTxt }} />
                </div>
              </div>
              <div className={styles.subIcon}>
                <img
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/ers/200720_113337_-1.png"
                  alt=""
                />
                <span
                  className={styles.subTxt}
                  dangerouslySetInnerHTML={{ __html: "CASH REWARD" }}
                />
              </div>
            </div>

            <div className={`${styles.productsBox} ${styles.productsBoxRight}`}>
              <div className={styles.content}>
                <h3 dangerouslySetInnerHTML={{ __html: langs.contentH3 }} />
                <p dangerouslySetInnerHTML={{ __html: langs.contentP }} />
                <div className={styles.btnbox}>
                  <button dangerouslySetInnerHTML={{ __html: langs.btnTxt }} />
                </div>
              </div>
              <div className={styles.product}>
                <div className={`${styles.img} ${styles.product3}`}>
                  <img className={styles.main} src={langs.product3} alt="" />
                  <img className={styles.back} src={langs.backblue} alt="" />
                </div>
                <div className={`${styles.img} ${styles.product4}`}>
                  <img className={styles.main} src={langs.product4} alt="" />
                  <img className={styles.back} src={langs.backgreen} alt="" />
                </div>
              </div>
              <div className={styles.content}>
                <h3 dangerouslySetInnerHTML={{ __html: langs.contentH3 }} />
                <p dangerouslySetInnerHTML={{ __html: langs.contentP }} />
                <div className={styles.btnbox}>
                  <button dangerouslySetInnerHTML={{ __html: langs.btnTxt }} />
                </div>
              </div>
              <div className={styles.subIcon}>
                <img
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/ers/200720_113337_-1.png"
                  alt=""
                />
                <span
                  className={styles.subTxt}
                  dangerouslySetInnerHTML={{ __html: "CASH REWARD" }}
                />
              </div>
            </div>
          </section>
        </div>

        <div className={styles.modal}>
          <section className={styles.section}>
            <div className={styles.left}>
              <div className={styles.top}>
                <img src={langs.product1} alt="" />
              </div>
              <div className={styles.bottom}>
                <img src={langs.product2} alt="" />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.top}>
                <p className={styles.text}>
                  You’ve successfully signed up for the “Community Care
                  Package”. Share the security products now and make your
                  neighborhood a safer place.
                </p>
              </div>
              <div className={styles.bottom}></div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

Eufyrefrral.propTypes = {};

function mapStateToProps(state) {
  const { example } = state;
  return {
    ...example,
  };
}

export default connect(mapStateToProps)(Eufyrefrral);
