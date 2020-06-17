import { connect } from "dva";
import React from "react";
import utils from "../utils/utils";
import styles from "./ProductNan.scss";

class A2616 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: -1,
      data: [1, 12, 13, 1, 1, 13, 1, 11, 1, 1],
      lang: {
        screenProduct: [1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1],
        bannerMobile:
          "https://dz02g1kgtiysz.cloudfront.net/deals/err/200525_163127_-222x.png",
      },
      textList: [
        {
          h1: "Bends Lifespan",
          p:
            "Smarter connector end design & bulletproof fibercore ensured this cable to<br/>be 35x more durable.",
          img:
            "https://dz02g1kgtiysz.cloudfront.net/deals/files/200616_193136_c1.png",
        },
        {
          h1: "Anti-Rust ",
          p:
            "Smarter connector end design &  <br/>bulletproof fibercore ensured this cable to<br/>be 35x more durable.",
          img:
            "https://dz02g1kgtiysz.cloudfront.net/deals/files/190827_161021_707594423f7a4ed8284b97d41a7fdf5b.png",
        },
        {
          h1: "Easier to Store ",
          p:
            "Smarter connector end design &  <br/>bulletproof fibercore ensured this cable to<br/>be 35x more durable.",
          img:
            "https://dz02g1kgtiysz.cloudfront.net/deals/files/190827_161024_fee0f6bc18d79ccd2d35ad3795ef5246.png",
        },
      ],
      questions: [
        {
          h1: "Frequently Asked Questions",
          arr: [
            {
              h1: "Why is PowerPort III Nano faster and smaller?",
              text:
                "Anker’s exclusive highly-integrated technology uses a stacked design with custom magnetic components to reduce size, boost efficiency, and improve heat dissipation. This allows PowerPort III Nano to support an 18W max output, while being just as small as a 5W iPhone charger.",
            },
            {
              h1: "Is fast charging safe with my phone battery",
              text:
                "Anker’s exclusive highly-integrated technology uses a stacked design with custom magnetic components to reduce size, boost efficiency, and improve heat dissipation. This allows PowerPort III Nano to support an 18W max output, while being just as small as a 5W iPhone charger.",
            },
          ],
        },
      ],
    };
    this.closeButton = React.createRef();
  }

  timer = null;

  componentDidMount() {
    this.resize();
    window.addEventListener("resize", () => utils.throttle(this.resize, 500));
    window.addEventListener("scroll", utils.throttle(this.scrollevent, 200));
  }

  componentWillUnmount() {}

  resize = (e) => {
    const screenHeight = window.innerHeight - 108; // 108 为top nav的高度
    const screenWidth = window.innerWidth;
    const Carousel = this.getElementTop(document.getElementById("Carousel"));
    this.setState({
      Carousel,
      screenWidth,
      screenHeight: screenHeight > 580 ? screenHeight : 580,
    });
  };

  getElementTop = (element) => {
    let actualTop = element.offsetTop;
    let c = element.offsetParent;
    while (c !== null && c.offsetTop > 0) {
      actualTop += c.offsetTop;
      c = c.offsetParent;
    }
    return actualTop;
  };
  scrollAction = (c, act) => {
    const action =
      {
        top: this.state.scrollTop,
        left: this.state.scrollLeft,
      }[act] || this.state.scrollTop;
    return c > action;
  };

  scrollevent = (e) => {
    const { screenHeight = 600, Carousel = 600 } = this.state;
    const scrollTop =
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      window.pageYOffset;
    const action = this.scrollAction(scrollTop, "top");
    if (scrollTop > Carousel) {
      const gap = (scrollTop - Carousel) / screenHeight;
      const distance = scrollTop - Carousel;
      if (distance >= 4 * screenHeight) {
        window.clearTimeout(this.timer);
        this.timer = window.setTimeout(() => this.setState({ Battery: true }), 300);
      } else {
        window.clearTimeout(this.timer);
        this.timer = window.setTimeout(() => this.setState({ Battery: false }), 100);
      }

      this.setState({
        gap: gap > 0.5 ? 0.5 : gap,
        distance: scrollTop - Carousel,
      });
    } else {
      this.setState({
        gap: 0,
      });
    }
    if (scrollTop - screenHeight > Carousel) {
      // 半屏高度 gap === 0.5 时 展示下一屏
      const i =
        scrollTop - screenHeight > Carousel
          ? Math.floor((scrollTop - screenHeight - Carousel) / screenHeight)
          : 0;
      this.setState({
        current: i >= 2 ? 2 : i,
      });
    } else {
      this.setState({
        current: -1,
      });
    }
    this.setState({ scrollTop, action });
  };

  carouselshow = () => {
    const { gap } = this.state;
    return gap >= 0.5;
  };

  openQuestion = (v) => {
    const { openList = [] } = this.state;
    const index = openList.findIndex((val) => v === val);
    if (index > -1) {
      openList.splice(index, 1);
    } else {
      openList.push(v);
    }
    this.setState({ openList });
  };

  isIE = () => {
    if (!!window.ActiveXObject || "ActiveXObject" in window) return true;
    else return false;
  };

  isMobile = () => window && window.innerWidth < 768;

  hasLogin = () => true;

  render() {
    const {
      lang = {},
      questions = [],
      screenHeight,
      textList,
      current = -1,
      distance,
      gap,
      openList = [],
    } = this.state;
    const transList = {
      title: [
        {
          transform: `scale(${1 + gap * 7}) translate(-50%, ${
            gap * 100 - 50
          }%)`,
          left: `${50 + gap * 200}%`,
          opacity: `${1 - gap * 2}`,
        },
        {
          transform: `scale(${1 + gap * 14}) translate(-50%, ${
            gap * 150 - 50
          }%)`,
          left: `${50 + gap * 160}%`,
          opacity: `${1 - gap * 2}`,
        },
      ],
      carouselshow: [
        {
          transform: `translate(${155 - gap * 2 * 155}px, ${
            gap * 2 * 15 - 15
          }px) 
          scale(${gap * 2 * 0.93 + 0.07})`,
        },
        {
          transform: `translate(${125 - gap * 2 * 125}px, ${gap * 2 * 5 - 5}px) 
          scale(${gap * 2 * 0.93 + 0.07})`,
        },
      ],
    };
    return (
      <div className={styles.A2616}>
        <div className={styles.section1}>
          <section className={styles.section}>
            <ul>
              <li>
                <div className={styles.content}>
                  <img
                    src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200615_113351_pub-logo-standard-2020-nyt-wirecutter-logo-1.png"
                    alt=""
                  />
                  <p>
                    “... the best option for charging any phone fast. ”
                    <i>
                      From Wirecutter, © 2019 The Wirecutter, Inc.. All rights
                      reserved.
                    </i>
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <img
                    src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200615_113351_pub-logo-standard-2020-nyt-wirecutter-logo-1.png"
                    alt=""
                  />
                  <p>
                    “... the best option for charging any phone fast. ”
                    <i>
                      From Wirecutter, © 2019 The Wirecutter, Inc.. All rights
                      reserved.
                    </i>
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <img
                    src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200615_113351_pub-logo-standard-2020-nyt-wirecutter-logo-1.png"
                    alt=""
                  />
                  <p>
                    “... the best option for charging any phone fast. ”
                    <i>
                      From Wirecutter, © 2019 The Wirecutter, Inc.. All rights
                      reserved.
                    </i>
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>

        <div
          id="Carousel"
          className={styles.section2}
          style={{
            height: this.isIE()
              ? `${screenHeight}px`
              : `${screenHeight * 6 + screenHeight}px`,
          }}
        >
          <div className={styles.stickyBox}>
            <section
              className={`${styles.stickyBoxsection} ${styles.stickyCarousel} ${
                distance >= 4 * screenHeight && styles.animat
              }`}
              style={{ height: `${screenHeight}px` }}
            >
              <div
                className={styles.title}
                style={transList.title[this.isMobile() ? 1 : 0]}
              >
                <h1>PowerPort III Nan</h1>
                <i>Small Yet Mighty</i>
              </div>
              <div
                className={`${styles.carousel} ${
                  this.carouselshow() && styles.carouselshow
                }`}
                style={transList.carouselshow[this.isMobile() ? 1 : 0]}
              >
                <div
                  className={styles.carouselcontent}
                  style={{ height: `${screenHeight * 0.8}px` }}
                >
                  <div className={styles.textBox}>
                    {textList &&
                      textList.map((v, i) => (
                        <div
                          key={i}
                          className={`${styles.text} ${
                            i === current && styles.show
                          }`}
                        >
                          <h1 dangerouslySetInnerHTML={{ __html: v.h1 }} />
                          <span className={styles.line} />
                          <p dangerouslySetInnerHTML={{ __html: v.p }} />
                        </div>
                      ))}
                  </div>
                  <div
                    style={{ height: `${screenHeight * 0.8}px` }}
                    className={styles.imgBox}
                  >
                    <div className={styles.box}>
                      {
                        <img
                          className={`${styles.img} ${
                            current === -1 && styles.show
                          }`}
                          src={
                            lang.pro ||
                            "https://dz02g1kgtiysz.cloudfront.net/deals/files/200615_141859_-24.png"
                          }
                          alt=""
                        />
                      }
                      {textList &&
                        textList.map((v, i) => (
                          <img
                            key={i}
                            className={`${styles.img} ${
                              i === current && styles.show
                            }`}
                            src={
                              v.img ||
                              "https://dz02g1kgtiysz.cloudfront.net/deals/files/190823_104200_5bd124cd884b12c0d9dcfc7b72f923f2.jpg"
                            }
                            alt=""
                          />
                        ))}
                      {current > -1 && (
                        <div className={styles.progressBox}>
                          <img
                            src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200616_193136_c1.png"
                            alt=""
                          />
                          <div className={styles.progress}>
                            <b
                              className={`${styles.bluebar} ${
                                styles[`bluebar${current}`]
                              }`}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`${styles.stickyBoxsection} ${styles.stickyBack} ${
                distance >= 4 * screenHeight ? styles.animat : styles.animat2
              }`}
              style={{ height: `${screenHeight}px` }}
            >
              <div
                className={`${styles.back} ${
                  distance >= 4 * screenHeight ? styles.animat : styles.animat2
                }`}
              />
              <div className={styles.content}>
                <section className={styles.stickbody}>
                  {this.state.Battery ? (
                    <img
                      className={styles.Battery}
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/A2616/200617_110512_.gif"
                      alt=""
                    />
                  ) : (
                    <img
                      className={styles.Battery}
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/A2616/200617_111016_1.png"
                      alt=""
                    />
                  )}
                  <h1>
                    Less Charge Time <br />
                    More You Time
                  </h1>
                  <p>
                    Charge up to 16 hours less per week, giving you more time to
                    do the things you enjoy.
                  </p>
                </section>
                <span className={styles.bottom}>
                  Data based on charging iPhone 11 from 0% to 100% battery 1.5
                  times per day for a week.
                </span>
              </div>
            </section>
          </div>
        </div>

        <div className={styles.section3}>
          <section className={styles.section}>
            <h1 className={styles.title}>Available at</h1>
            <ul>
              <li>
                <div className={styles.content}>
                  <img
                    src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200616_112921_amazon.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <img
                    src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200616_112909_bestbuy.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <img
                    src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200615_113351_pub-logo-standard-2020-nyt-wirecutter-logo-1.png"
                    alt=""
                  />
                </div>
              </li>
            </ul>
          </section>
        </div>

        <div className={styles.section4}></div>

        <div className={styles.section5}>
          <section className={styles.section}>
            {questions &&
              questions.map((v, i) => (
                <div key={i}>
                  <div
                    className={`${styles.actionLine} ${styles.actionLine1}`}
                    onClick={() => this.openQuestion(`${v.h1}${i}`)}
                  >
                    <span
                      className={styles.title}
                      dangerouslySetInnerHTML={{ __html: v.h1 }}
                    />
                    <b
                      className={`${styles.act} ${
                        openList.find((g) => g === `${v.h1}${i}`) && styles.open
                      }`}
                    >
                      +
                    </b>
                  </div>
                  <div
                    className={`${styles.textLine} ${styles.textLine1} ${
                      openList.find((g) => g === `${v.h1}${i}`) && styles.open
                    }`}
                  >
                    {v.arr ? (
                      v.arr.map((val, index) => (
                        <div key={index}>
                          <div
                            className={`${styles.actionLine} ${styles.actionLine2}`}
                            onClick={() =>
                              this.openQuestion(`${val.h1}${index}`)
                            }
                          >
                            <span
                              className={styles.title}
                              dangerouslySetInnerHTML={{ __html: val.h1 }}
                            />
                            <b
                              className={`${styles.act} ${
                                openList.find(
                                  (g) => g === `${val.h1}${index}`
                                ) && styles.open
                              }`}
                            >
                              +
                            </b>
                          </div>
                          <div
                            className={`${styles.textLine} ${
                              styles.textLine2
                            } ${
                              openList.find((g) => g === `${val.h1}${index}`) &&
                              styles.open
                            }`}
                            dangerouslySetInnerHTML={{ __html: val.text }}
                          />
                        </div>
                      ))
                    ) : (
                      <p dangerouslySetInnerHTML={{ __html: v.text }} />
                    )}
                  </div>
                </div>
              ))}
          </section>
        </div>

        <div className={styles.section6}>
          <section className={styles.section}>
            <div
              className={`${styles.actionLine} ${styles.actionLine1}`}
              onClick={() => this.openQuestion(`Specs`)}
            >
              <span
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: "Specs" }}
              />
              <b
                className={`${styles.act} ${
                  openList.find((g) => g === `Specs`) && styles.open
                }`}
              >
                +
              </b>
            </div>
            <div
              className={`${styles.textLine} ${styles.textLine1} ${
                openList.find((g) => g === `Specs`) && styles.open
              }`}
            >
              <div className={styles.top}>
                <img
                  className={styles.img}
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200616_164841_-99.png"
                  alt=""
                />
                <div className={styles.right}>
                  <p>
                    <b>Dimensions:</b> 1.81 x 1.08 x 1.08 in
                    <br />
                    <b>Weight:</b> 1.12 oz
                  </p>
                  <p>
                    <b>Input:</b>
                    <br />
                    100-240V-0.5A, 50-60Hz
                  </p>
                  <p>
                    <b>Output:</b>
                    <br />
                    5V=2.4A / 9V=2A
                    <br />
                    <i>
                      (For iPhone 8 and later and other Power Delivery devices)
                    </i>
                    5V=3A / 9V=2A / 12V=1.5A
                    <br />
                    <i>(For Samsung and other Quick Charge devices)</i>
                  </p>
                  <p>
                    <b>Warranty:</b> 18-month
                  </p>
                </div>
              </div>
              <div className={styles.bottom}>
                <b>Note:</b>
                <br />
                <p>
                  Will charge Nintendo Switch but does not support
                  "Charge-and-Play" in TV mode. <br />
                  After connecting to iPhone (8 / 8 Plus / X / XS Max / XS /
                  XR), fast charging (9V) will begin automatically, regardless
                  of whether you hear one charging indicator sound or two.{" "}
                  <br />
                  This charger is compatible with Note 10 / Note 10+, but does
                  not support fast charging. <br />
                  Use a USB-C to Lightning cable for Lightning devices and use a
                  USB-C to USB-C cable for USB-C devices (Cables sold
                  separately).
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

A2616.propTypes = {};

function mapStateToProps(state) {
  const { example } = state;
  return {
    ...example,
  };
}

export default connect(mapStateToProps)(A2616);
