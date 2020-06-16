import { connect } from "dva";
import React from "react";
import Slider from "react-slick";
import styles from "./Friendbuy.scss";

class Friendbuy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  timer = null;

  componentDidMount() {}

  componentWillUnmount() {}

  isMobile = () => window && window.innerWidth < 768;

  render() {
    const { lang = {} } = this.state;
    return (
      <div className={styles.stayathome}>
        <div className={styles.banner}>
          {lang.bannerMobile && this.isMobile() ? (
            <img src={lang.bannerMobile} alt="" />
          ) : (
            <img
              className={styles.img}
              src={
                lang.banner ||
                "https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_135958_banner.jpg"
              }
              alt=""
            />
          )}
        </div>

        <div className={styles.section1}>
          <section className={styles.section}>
            <h1 className={styles.title}>My Referral</h1>
            <div className={styles.table}>
              <dl>
                <dt>
                  <span className={styles.content}>Referral Date</span>
                </dt>
                <dd>
                  <div className={styles.sub}>1</div>
                  <div className={styles.sub}>1</div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span className={styles.content}>Friend’s Email Address</span>
                </dt>
                <dd>
                  <div className={styles.sub}>1</div>
                  <div className={styles.sub}>1</div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span className={styles.content}>Order Date</span>
                </dt>
                <dd>
                  <div className={styles.sub}>1</div>
                  <div className={styles.sub}>1</div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span className={styles.content}>Order Amount</span>
                </dt>
                <dd>
                  <div className={styles.sub}>1</div>
                  <div className={styles.sub}>1</div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span className={styles.content}>Order ID</span>
                </dt>
                <dd>
                  <div className={styles.sub}>1</div>
                  <div className={styles.sub}>1</div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span className={styles.content}>My Referral Reward</span>
                </dt>
                <dd>
                  <div className={styles.sub}>1</div>
                  <div className={styles.sub}>1</div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span className={styles.content}>Status</span>
                </dt>
                <dd>
                  <div className={styles.sub}>1</div>
                  <div className={styles.sub}>1</div>
                </dd>
              </dl>
            </div>
          </section>
        </div>

        <div className={styles.section2}>
          <section className={styles.section}>
            <h1 className={styles.title}>It’s easy to get started</h1>
            <div className={styles.stepbox}>
              <div className={styles.step}>
                <div className={styles.content}>
                  <img
                    src="https://dz02g1kgtiysz.cloudfront.net/deals/erf/200520_095151_-27.jpg"
                    alt=""
                  />
                  <h3>step1</h3>
                  <p>Invite your friends to join</p>
                </div>
                <span className={styles.arrow} />
              </div>
              <div className={styles.step}>
                <div className={styles.content}>
                  <img
                    src="https://dz02g1kgtiysz.cloudfront.net/deals/erf/200520_095151_-27.jpg"
                    alt=""
                  />
                  <h3>step2</h3>
                  <p>
                    Your friend will receive £40 off their purchase of any eufy
                    product over £200.
                  </p>
                </div>
                <span className={styles.arrow} />
              </div>
              <div className={styles.step}>
                <div className={styles.content}>
                  <img
                    src="https://dz02g1kgtiysz.cloudfront.net/deals/erf/200520_095151_-27.jpg"
                    alt=""
                  />
                  <h3>step3</h3>
                  <p>Invite your friends to join</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.section3}>
          <section className={styles.section}>
            <h1 className={styles.title}>
              The More You Refer the Greater the Rewards!
            </h1>
            <p className={styles.desc}>
              It’s win-win when you refer friends to buy RoboVac! They’ll
              receive £40 off their purchase, you’ll receive a £40 Amazon gift
              card. Refer multiple friends and earn awesome eufy rewards by
              doing so. When you reach 3 referrals we will send you a free Lumus
              Smart Bulb, as well as your Amazon gift card reward. Hit 5
              referrals and we will send you a free RoboVac 30C! Yes, you heard
              right!
            </p>
            <div className={styles.stepbox}>
              <div className={styles.step}>
                <h3>For Every Referral Earn</h3>
                <div className={styles.content}>
                  <img
                    src="https://dz02g1kgtiysz.cloudfront.net/deals/erf/200520_103148_-2.png"
                    alt=""
                  />
                  <p>Invite your friends to join</p>
                  <span className={styles.arrow} />
                </div>
              </div>
              <div className={styles.step}>
                <h3>For Every Referral Earn</h3>
                <div className={styles.content}>
                  <img
                    src="https://dz02g1kgtiysz.cloudfront.net/deals/erf/200520_103152_-26.png"
                    alt=""
                  />
                  <p>Invite your friends to join</p>
                  <span className={styles.arrow} />
                </div>
              </div>
              <div className={styles.step}>
                <h3>For Every Referral Earn</h3>
                <div className={styles.content}>
                  <img
                    src="https://dz02g1kgtiysz.cloudfront.net/deals/erf/200520_103148_-2.png"
                    alt=""
                  />
                  <p>Invite your friends to join</p>
                  <span className={styles.arrow} />
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.section4}>
          <section className={styles.section}>
            <h1 className={styles.title}>
              Quarterly Leaderboard
            </h1>
            <p className={styles.desc}>
              Refer More to Come Out on Top <br />
              The Top 3 Referrers Win Exclusive Prizes.
            </p>
            <div className={styles.btnbox}>
              <button>
                Rules <span className={styles.arrow} />
              </button>
            </div>
            <ul className={styles.rules}>
              <li>
                - Our quarterly leaderboard starts from the first day of each
                quarter and ends on the last day of each 3-month.
              </li>
              <li>
                - Your rank will update once your friends have successfully
                placed an order via your referral link.
              </li>
              <li>
                - If your friends cancel their orders, your score on the
                leaderboard will be adjusted.
              </li>
              <li>
                - Your final rank is determined by the number of product orders
                placed through your referral link each 3 months. If 2 or more
                users have the same number of referred orders, the rank will be
                determined by order placing time.
              </li>
              <li>
                - All winners will be contacted by email and invited to claim
                their exclusive prizes.
              </li>
            </ul>

            <ul className={styles.topThree}>
              <li>
                <img
                  className={styles.medal}
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/erf/200520_095214_-30.png"
                  alt=""
                />
                <p className={styles.email}>matt@un****edmf.com</p>
                <p className={styles.amount}>
                  Earned <b>$3000</b>
                </p>
              </li>
              <li>
                <img
                  className={styles.medal}
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/erf/200520_095214_-30.png"
                  alt=""
                />
                <p className={styles.email}>matt@un****edmf.com</p>
                <p className={styles.amount}>
                  Earned <b>$3000</b>
                </p>
              </li>
              <li>
                <img
                  className={styles.medal}
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/erf/200520_095214_-30.png"
                  alt=""
                />
                <p className={styles.email}>matt@un****edmf.com</p>
                <p className={styles.amount}>
                  Earned <b>$3000</b>
                </p>
              </li>
            </ul>
          </section>
        </div>

        <div className={styles.section5}>
          <section className={styles.section}>
            <h1 className={styles.title}>Prizes for Referrers</h1>
            <ul className={styles.referres}>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <div className={styles.content}>
                    <div className={styles.tips}>Top 1</div>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/erf/200520_120802_-27.png"
                      alt=""
                    />
                  </div>
                  <p className={styles.name}>Soundcore Life P2</p>
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <div className={styles.content}>
                    <div className={styles.tips}>Top 1</div>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/erf/200520_120802_-27.png"
                      alt=""
                    />
                  </div>
                  <p className={styles.name}>Soundcore Life P2</p>
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <div className={styles.content}>
                    <div className={styles.tips}>Top 1</div>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/erf/200520_120802_-27.png"
                      alt=""
                    />
                  </div>
                  <p className={styles.name}>Soundcore Life P2</p>
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <div className={styles.content}>
                    <div className={styles.tips}>Top 1</div>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/erf/200520_120802_-27.png"
                      alt=""
                    />
                  </div>
                  <p className={styles.name}>Soundcore Life P2</p>
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <div className={styles.content}>
                    <div className={styles.tips}>Top 1</div>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/erf/200520_120802_-27.png"
                      alt=""
                    />
                  </div>
                  <p className={styles.name}>Soundcore Life P2</p>
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className={styles.section6}>
          <section className={styles.section}>
            <h1 className={styles.title}>Terms & Conditions</h1>
            <ul className={styles.conditions}>
              <li>
                <h4 className={styles.active}>
                  Participation Qualification
                  <span className={styles.arrow} />
                </h4>
                <p style={{ height: 'auto' }}>
                  Any UK residents who sign up on eufylife.com can refer
                  friends. By providing a valid email address, and accepting the
                  program’s Terms & Conditions, you can refer your friends and
                  family to join the referral site.
                </p>
              </li>
              <li>
                <h4>
                  Conditions for Earning
                  <span className={styles.arrow} />
                </h4>
                <p>
                  Nobody tells the eufy story better than you, our customer. So
                  when you recommend a eufy RoboVac to your friends via your
                  referral link you send, we want to thank you by giving you £40
                  Amazon gift card every time one of your friends completes
                  their first purchase of a eufy RoboVac or security device on
                  eufylife.com. You and your friend will both receive a gift.
                  The more friends you invite, the more you can earn. For every
                  RoboVac your friends successfully purchase, they will receive
                  a £40 OFF code for all eufy products above £200 (code can only
                  be used once within 1 month). Code cannot be combined with
                  other discount codes.
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

Friendbuy.propTypes = {};

function mapStateToProps(state) {
  const { example } = state;
  return {
    ...example,
  };
}

export default connect(mapStateToProps)(Friendbuy);
