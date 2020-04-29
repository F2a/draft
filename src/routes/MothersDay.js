import { connect } from "dva";
import Slick from "react-slick";
import ReactPlayer from "react-player";
import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import AutoResponsive from "autoresponsive-react";
import Reactselect, { components } from "react-select";
import Masonry from "react-masonry-component";
import styles from "./MothersDay.scss";

class MothersDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "all",
      data: [1, 12, 13, 1, 1, 13, 1, 11, 1, 1],
      lang: {
        screenProduct: [1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1],
        bannerMobile:
          "https://dz02g1kgtiysz.cloudfront.net/deals/files/200413_112954_bannermo.jpg",
      },
    };
    this.closeButton = React.createRef();
  }

  timer = null;

  componentDidMount() {
    this.appendFont();
    this.resize();
    window.addEventListener("resize", this.resize);
  }

  componentWillUnmount() {}

  resize = (e) => {
    const container = document.getElementById("autoResponsiveBox");
    if (container) {
      const containerWidth = container.clientWidth;
      console.log("containerWidth", containerWidth);
      this.setState({
        containerWidth,
      });
    }
  };

  appendFont = () => {
    const style = document.createElement("link");
    style.href =
      "//db.onlinewebfonts.com/c/d4d77772c32c53cda6724c33cca67436?family=Booster+Next+FY";
    style.rel = "stylesheet";
    style.type = "text/css";
    document.getElementsByTagName("head").item(0).appendChild(style);
  };

  isMobile = () => window && window.innerWidth < 768;

  render() {
    const { lang = {}, modalDom, current } = this.state;
    return (
      <div className={styles.momshared}>
        <div className={styles.banner}>
          {lang.bannerMobile && this.isMobile() ? (
            <img src={lang.bannerMobile} alt="" />
          ) : (
            <img
              className={styles.img}
              src={
                lang.banner ||
                "https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_151731_banner.jpg"
              }
              alt=""
            />
          )}
        </div>

        <section className={styles.section1}>
          <h2>Am 10. Mai ist Muttertag! </h2>
          <div className={styles.section}>
            <img
              className={styles.back}
              src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_151741_p1back.png"
              alt=""
            />
            <img
              className={styles.car}
              src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_151749_p1main.png"
              alt=""
            />
          </div>
          <div className={styles.road}>
            <div className={styles.section}>
              <div className={styles.linebox}>
                <span className={styles.line} />
                <span className={styles.line} />
                <span className={styles.line} />
              </div>
              <p className={styles.txt}>
                Bestellungen werden innerhalb von 5-7 Werktagen geliefert! Jetzt
                zugreifen und Muttertag pünktlich feiern!
              </p>
              <div className={styles.linebox}>
                <span className={`${styles.line} ${styles.lineRight}`} />
                <span className={`${styles.line} ${styles.lineRight}`} />
                <span className={`${styles.line} ${styles.lineRight}`} />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section2}>
          <div className={styles.section}>
            <div className={styles.titleBox}>
              <div className={styles.title}>
                <img
                  className={styles.titleImg}
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_161432_titleimg.png"
                  alt=""
                />
                <h2 className={styles.titletxt}>
                  Für jedes Budget etwas dabei!
                </h2>
              </div>
            </div>
            <div className={styles.flex}>
              <div className={styles.item}>
                <span className={styles.unter}>unter</span>
                <p className={styles.price}>50€</p>
              </div>
              <div className={styles.item}>
                <span className={styles.unter}>unter</span>
                <p className={styles.price}>200€</p>
              </div>
              <div className={styles.item}>
                <span className={styles.unter}>unter</span>
                <p className={styles.price}>300€</p>
              </div>
              <div className={styles.item}>
                <span className={styles.unter}>unter</span>
                <p className={styles.price}>500€</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.timeline}>
          <div className={styles.section}>
            <div className={`${styles.flex} ${styles.imgbox}`}>
              <div className={styles.item}>
                <img
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200422_165606_timeline1.png"
                  alt=""
                />
              </div>
              <div className={styles.item}>
                <img
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200422_165610_timeline2.png"
                  alt=""
                />
              </div>
            </div>
            <div className={`${styles.flex} ${styles.dotbox}`}>
              <div className={styles.item} />
              <div className={styles.item} />
              <div className={styles.item} />
              <div className={styles.item} />
              <div className={styles.item} />
            </div>
            <div className={`${styles.flex} ${styles.txtbox}`}>
              <div className={styles.item}>
                <span className="top">26. April - 3. Mai</span>
                <span className="central">Exklusive eufy Geschenkbox zum Muttertag </span>
                <span className="bottom">Nur für kurze Zeit! </span>
              </div>
              <div className={styles.item}>
                <span className="top">26. April - 3. Mai</span>
                <span className="central">Exklusive eufy Geschenkbox zum Muttertag </span>
                <span className="bottom">Nur für kurze Zeit! </span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section3}>
          <div className={styles.section}>
            <div className={styles.titleBox}>
              <div className={styles.title}>
                <img
                  className={styles.titleImg}
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_161432_titleimg.png"
                  alt=""
                />
                <h2 className={styles.titletxt}>
                  Nur die besten Geschenke für die besten Mamas
                </h2>
              </div>
            </div>

            <div className={styles.card}>
              <img
                className={styles.left}
                src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_165238_.png"
                alt=""
              />
              <img
                className={styles.right}
                src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_165243_.png"
                alt=""
              />
              <div className={styles.content}>
                <div className={styles.ptop}>
                  <img
                    className={styles.cardimg}
                    src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_165224_ca.png"
                    alt=""
                  />
                  <div className={styles.cardTxt}>
                    <h3>RoboVac 30C</h3>
                    <div className={styles.cardContent}>
                      <p>Nie wieder Staubsaugen.</p>
                      <br />
                      <p>Mama soll sich wichtigeren</p>
                      <br />
                      <p>Dingen widmen.</p>
                    </div>
                  </div>
                </div>
                <div className={styles.pbottom}>
                  <div className={styles.item}>
                    <div className={styles.imgbox}>
                      <img
                        src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_170405_product.png"
                        alt=""
                      />
                    </div>
                    <p className={styles.name}>RoboVac 30C</p>
                    <p className={styles.price}>£188.9</p>
                    <div className={styles.btnBox}>
                      <button type="button" className={styles.btns}>
                        JETZT SHOPPEN
                      </button>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.imgbox}>
                      <img
                        src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_170405_product.png"
                        alt=""
                      />
                    </div>
                    <p className={styles.name}>RoboVac 30C</p>
                    <p className={styles.price}>£188.9</p>
                    <div className={styles.btnBox}>
                      <button type="button" className={styles.btns}>
                        JETZT SHOPPEN
                      </button>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.imgbox}>
                      <img
                        src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_170405_product.png"
                        alt=""
                      />
                    </div>
                    <p className={styles.name}>RoboVac 30C</p>
                    <p className={styles.price}>£188.9</p>
                    <div className={styles.btnBox}>
                      <button type="button" className={styles.btns}>
                        JETZT SHOPPEN
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section4}>
          <div className={styles.section}>
            <div className={styles.titleBox}>
              <div className={styles.title}>
                <img
                  className={styles.titleImg}
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_161432_titleimg.png"
                  alt=""
                />
                <h2 className={styles.titletxt}>
                  Das ultimative Geschenkset
                  <br />
                  Die Geschenkbox, die Mama verdient!
                </h2>
              </div>
            </div>
            <div className={styles.referral}>
              <div className={styles.item}>
                <div className={styles.imgbox}>
                  <img
                    src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_174800_box.png"
                    alt=""
                  />
                </div>
                <p className={styles.name}>2 + GRATIS eufyCam 2 </p>
                <p className={styles.price}>
                  £188.9
                  <span className={styles.total}>£268.9</span>
                </p>
                <div className={styles.code}>
                  Code: 123456789
                  <button type="button" className={styles.btns}>
                    copy
                  </button>
                </div>
                <div className={styles.btnBox}>
                  <button type="button" className={styles.btns}>
                    JETZT SHOPPEN
                  </button>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.imgbox}>
                  <img
                    src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_174800_box.png"
                    alt=""
                  />
                </div>
                <p className={styles.name}>2 + GRATIS eufyCam 2 </p>
                <p className={styles.price}>
                  £188.9
                  <span className={styles.total}>£268.9</span>
                </p>
                <div className={styles.code}>
                  Code: 123456789
                  <button type="button" className={styles.btns}>
                    copy
                  </button>
                </div>
                <div className={styles.btnBox}>
                  <button type="button" className={styles.btns}>
                    JETZT SHOPPEN
                  </button>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.imgbox}>
                  <img
                    src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_174800_box.png"
                    alt=""
                  />
                </div>
                <p className={styles.name}>2 + GRATIS eufyCam 2 </p>
                <p className={styles.price}>
                  £188.9
                  <span className={styles.total}>£268.9</span>
                </p>
                <div className={styles.code}>
                  Code: 123456789
                  <button type="button" className={styles.btns}>
                    copy
                  </button>
                </div>
                <div className={styles.btnBox}>
                  <button type="button" className={styles.btns}>
                    JETZT SHOPPEN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section5}>
          <div className={styles.section}>
            <div className={styles.titleBox}>
              <div className={styles.title}>
                <img
                  className={styles.titleImg}
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_161432_titleimg.png"
                  alt=""
                />
                <h2 className={styles.titletxt}>
                  Unsere exklusive #MomLovesEufy Aktion!
                </h2>
              </div>
            </div>
            <div className={styles.gallary}>
              {!this.isMobile() && (
                <div
                  className={styles.left3}
                  style={{
                    backgroundImage: `url(https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_182534_-539.jpg)`,
                  }}
                >
                  <div className={styles.box}>
                    <div className={styles.content}>
                      <div className={styles.imgbox}>
                        <img
                          src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_170405_product.png"
                          alt=""
                        />
                      </div>
                      <div className={styles.contentbox}>
                        <div className={styles.center}>
                          <p className={styles.name}>RoboVac 30C</p>
                          <p className={styles.price}>£188.9</p>
                        </div>
                      </div>
                      <span className={styles.arrow} />
                    </div>
                  </div>
                </div>
              )}
              <div className={styles.left7}>
                <div className={styles.topBox}>
                  {this.isMobile() && (
                    <div
                      className={`${styles.left3} ${styles.sohei}`}
                      style={{
                        backgroundImage: `url(https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_182534_-539.jpg)`,
                      }}
                    >
                      <div className={styles.box}>
                        <div className={styles.content}>
                          <div className={styles.imgbox}>
                            <img
                              src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_170405_product.png"
                              alt=""
                            />
                          </div>
                          <div className={styles.contentbox}>
                            <div className={styles.center}>
                              <p className={styles.name}>RoboVac 30C</p>
                              <p className={styles.price}>£188.9</p>
                            </div>
                          </div>
                          <span className={styles.arrow} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div
                    className={`${styles.left3} ${styles.sohei}`}
                    style={{
                      backgroundImage: `url(https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_183557_-542.jpg)`,
                    }}
                  >
                    <div className={styles.box}>
                      <div className={styles.content}>
                        <div className={styles.imgbox}>
                          <img
                            src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_170405_product.png"
                            alt=""
                          />
                        </div>
                        <div className={styles.contentbox}>
                          <div className={styles.center}>
                            <p className={styles.name}>RoboVac 30C</p>
                            <p className={styles.price}>£188.9</p>
                          </div>
                        </div>
                        <span className={styles.arrow} />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.left3} ${styles.sohei}`}
                    style={{
                      backgroundImage: `url(https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_183557_-542.jpg)`,
                    }}
                  >
                    <div className={styles.box}>
                      <div className={styles.content}>
                        <div className={styles.imgbox}>
                          <img
                            src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_170405_product.png"
                            alt=""
                          />
                        </div>
                        <div className={styles.contentbox}>
                          <div className={styles.center}>
                            <p className={styles.name}>RoboVac 30C</p>
                            <p className={styles.price}>£188.9</p>
                          </div>
                        </div>
                        <span className={styles.arrow} />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.left3} ${styles.sohei}`}
                    style={{
                      backgroundImage: `url(https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_183557_-542.jpg)`,
                    }}
                  >
                    <div className={styles.box}>
                      <div className={styles.content}>
                        <div className={styles.imgbox}>
                          <img
                            src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_170405_product.png"
                            alt=""
                          />
                        </div>
                        <div className={styles.contentbox}>
                          <div className={styles.center}>
                            <p className={styles.name}>RoboVac 30C</p>
                            <p className={styles.price}>£188.9</p>
                          </div>
                        </div>
                        <span className={styles.arrow} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.bottomBox}>
                  <div
                    className={`${styles.left5} ${styles.sohei}`}
                    style={{
                      backgroundImage: `url(https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_182530_-538.jpg)`,
                    }}
                  >
                    <div className={styles.box}>
                      <div className={styles.content}>
                        <div className={styles.imgbox}>
                          <img
                            src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_170405_product.png"
                            alt=""
                          />
                        </div>
                        <div className={styles.contentbox}>
                          <div className={styles.center}>
                            <p className={styles.name}>RoboVac 30C</p>
                            <p className={styles.price}>£188.9</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.left5} ${styles.sohei}`}
                    style={{
                      backgroundImage: `url(https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_182530_-538.jpg)`,
                    }}
                  >
                    <div className={styles.box}>
                      <div className={styles.content}>
                        <div className={styles.imgbox}>
                          <img
                            src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200420_170405_product.png"
                            alt=""
                          />
                        </div>
                        <div className={styles.contentbox}>
                          <div className={styles.center}>
                            <p className={styles.name}>RoboVac 30C</p>
                            <p className={styles.price}>£188.9</p>
                          </div>
                        </div>
                        <span className={styles.arrow} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.productSec}>
          <div className={styles.section}>
            <div className={styles.title}>
              <h2 className={styles.titletxt}>
                Erstklassige Geschenkideen für unter 50€
              </h2>
              <span className={styles.line} />
            </div>
            <div className={styles.flex}>
              <div className={styles.flexbox}>
                <div className={styles.paddingBox}>
                  <div className={styles.img}>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110834_t2108211td01v1.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <h3>xxxxxxxxxxx xxxx</h3>
                    <p className={styles.desc}>
                      xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx
                    </p>
                    <div className={styles.price}>xxxxx</div>
                    <div className={styles.btnBox}>
                      <a
                        href={""}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btns}
                      >
                        JETZT SHOPPEN
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.flexbox}>
                <div className={styles.paddingBox}>
                  <div className={styles.img}>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110834_t2108211td01v1.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <h3>xxxxxxxxxxx xxxx</h3>
                    <p className={styles.desc}>
                      xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx
                    </p>
                    <div className={styles.price}>xxxxx</div>
                    <div className={styles.btnBox}>
                      <a
                        href={""}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btns}
                      >
                        JETZT SHOPPEN
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.flexbox}>
                <div className={styles.paddingBox}>
                  <div className={styles.img}>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110834_t2108211td01v1.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <h3>xxxxxxxxxxx xxxx</h3>
                    <p className={styles.desc}>
                      xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx
                    </p>
                    <div className={styles.price}>xxxxx</div>
                    <div className={styles.btnBox}>
                      <a
                        href={""}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btns}
                      >
                        JETZT SHOPPEN
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

MothersDay.propTypes = {};

function mapStateToProps(state) {
  const { example } = state;
  return {
    ...example,
  };
}

export default connect(mapStateToProps)(MothersDay);
