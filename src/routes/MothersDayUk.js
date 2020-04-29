import { connect } from "dva";
import React from "react";
import Slider from 'react-slick';
import styles from "./MothersDayUk.scss";

class MothersDay extends React.Component {
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

        <section className={styles.section1}>
          <div className={styles.section}>
            <div className={styles.titleBox}>
              <div className={styles.title}>
                <img
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_144449_tit12x.png"
                  alt=""
                />
              </div>
            </div>

            <div className={styles.typical}>
              <div className={styles.itemBox}>
                <img
                  className={styles.manimg}
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_152051_man012x.png"
                  alt=""
                />
                <div className={styles.item}>
                  <div className={styles.imgbox}>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_150115_pro2x.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <p className={styles.name}>2 + GRATIS eufyCam 2 </p>
                    <p className={styles.price}>
                      <span>Price: </span>
                      <span className="currentprice">£188.9</span>
                      <span className="saleprice">£268.9</span>
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
            </div>

            <div className={styles.flexBox}>
              <div className={styles.flex}></div>
              <Slider
                className={styles.swiper}
                {...{
                  arrows: true,
                  slidesToShow: 2,
                  slidesToScroll: 1
                }}
              >
                <div className={styles.item}>
                  <div className={styles.imgbox}>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_150115_pro2x.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <p className={styles.name}>2 + GRATIS eufyCam 2 </p>
                    <p className={styles.price}>
                      <span>Price: </span>
                      <span className="currentprice">£188.9</span>
                      <span className="saleprice">£268.9</span>
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

                <div className={styles.item}>
                  <div className={styles.imgbox}>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_150115_pro2x.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <p className={styles.name}>2 + GRATIS eufyCam 2 </p>
                    <p className={styles.price}>
                      <span>Price: </span>
                      <span className="currentprice">£188.9</span>
                      <span className="saleprice">£268.9</span>
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

                <div className={styles.item}>
                  <div className={styles.imgbox}>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_150115_pro2x.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <p className={styles.name}>2 + GRATIS eufyCam 2 </p>
                    <p className={styles.price}>
                      <span>Price: </span>
                      <span className="currentprice">£188.9</span>
                      <span className="saleprice">£268.9</span>
                    </p>
                    <div className={styles.code}>
                      Code: 123456789
                      <button type="button" className={styles.btns}>
                        copy
                      </button>
                    </div>
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
              </Slider>
            </div>

            <div className={styles.btnBox}>
              <a
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.moreBtn}
              >
                More Products
              </a>
            </div>
          </div>
        </section>

        <section className={styles.section2}>
          <div className={styles.section}>
            <div className={styles.titleBox}>
              <div className={styles.title}>
                <img
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_144449_tit12x.png"
                  alt=""
                />
              </div>
            </div>

            <div className={styles.typical}>
              <div className={styles.itemBox}>
                <img
                  className={styles.manimg}
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_152051_man012x.png"
                  alt=""
                />
                <div className={styles.item}>
                  <div className={styles.imgbox}>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_150115_pro2x.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <p className={styles.name}>2 + GRATIS eufyCam 2 </p>
                    <p className={styles.price}>
                      <span>Price: </span>
                      <span className="currentprice">£188.9</span>
                      <span className="saleprice">£268.9</span>
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
            </div>

            <div className={styles.flexBox}>
              <div className={styles.flex}>
                <div className={styles.item}>
                  <div className={styles.imgbox}>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_150115_pro2x.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <p className={styles.name}>2 + GRATIS eufyCam 2 </p>
                    <p className={styles.price}>
                      <span>Price: </span>
                      <span>£188.9</span>
                      <span className="saleprice">£268.9</span>
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

                <div className={styles.item}>
                  <div className={styles.imgbox}>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_150115_pro2x.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <p className={styles.name}>2 + GRATIS eufyCam 2 </p>
                    <p className={styles.price}>
                      <span>Price: </span>
                      <span>£188.9</span>
                      <span className="saleprice">£268.9</span>
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
                <div className={styles.item}>
                  <div className={styles.imgbox}>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_150115_pro2x.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <p className={styles.name}>2 + GRATIS eufyCam 2 </p>
                    <p className={styles.price}>
                      <span>Price: </span>
                      <span>£188.9</span>
                      <span className="saleprice">£268.9</span>
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
            </div>
            <div className={styles.btnBox}>
              <a
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.moreBtn}
              >
                More Products
              </a>
            </div>
          </div>
        </section>

        <section className={styles.section3}>
          <div className={styles.section}>
            <div className={styles.titleBox}>
              <div className={styles.title}>
                <img
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_144449_tit12x.png"
                  alt=""
                />
              </div>
            </div>

            <div className={styles.flexBox}>
              <div className={styles.flex}>
                <div className={styles.item}>
                  <div className={styles.imgbox}>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_150115_pro2x.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <p className={styles.name}>2 + GRATIS eufyCam 2 </p>
                    <p className={styles.price}>
                      <span>Price: </span>
                      <span>£188.9</span>
                      <span className="saleprice">£268.9</span>
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

                <div className={styles.item}>
                  <div className={styles.imgbox}>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_150115_pro2x.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <p className={styles.name}>2 + GRATIS eufyCam 2 </p>
                    <p className={styles.price}>
                      <span>Price: </span>
                      <span>£188.9</span>
                      <span className="saleprice">£268.9</span>
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
                <div className={styles.item}>
                  <div className={styles.imgbox}>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_150115_pro2x.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <p className={styles.name}>2 + GRATIS eufyCam 2 </p>
                    <p className={styles.price}>
                      <span>Price: </span>
                      <span>£188.9</span>
                      <span className="saleprice">£268.9</span>
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
            </div>
          </div>
        </section>

        <section className={styles.section4}>
          <div className={styles.section}>
            <div className={styles.titleBox}>
              <div className={styles.title}>
                <img
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_144449_tit12x.png"
                  alt=""
                />
              </div>
            </div>

            <div className={styles.flexBox}>
              <div className={styles.flex}>
                <div className={styles.item}>
                  <div className={styles.imgbox}>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_150115_pro2x.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <p className={styles.name}>
                      <span>RoboVac 15C MAX </span>
                      <span className="add">+ </span>
                      <span>eufyCam 2 </span>
                      <span className="add">+ </span>
                      <span>
                        eufyCam 2 Add-on <b>(Free)</b>
                      </span>
                    </p>
                    <p className={styles.price}>
                      <span>Price: </span>
                      <span>£188.9</span>
                      <span className="saleprice">£268.9</span>
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

                <div className={styles.item}>
                  <div className={styles.imgbox}>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_150115_pro2x.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <p className={styles.name}>
                      <span>RoboVac 15C MAX </span>
                      <span className="add">+ </span>
                      <span>eufyCam 2 </span>
                      <span className="add">+ </span>
                      <span>
                        eufyCam 2 Add-on <b>(Free)</b>
                      </span>
                    </p>
                    <p className={styles.price}>
                      <span>Price: </span>
                      <span className="currentprice">£188.9</span>
                      <span className="saleprice">£268.9</span>
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
                <div className={styles.item}>
                  <div className={styles.imgbox}>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_150115_pro2x.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <p className={styles.name}>
                      <span>RoboVac 15C MAX </span>
                      <span className="add">+ </span>
                      <span>eufyCam 2 </span>
                      <span className="add">+ </span>
                      <span>eufyCam 2 Add-on (Free)</span>
                    </p>
                    <p className={styles.price}>
                      <span>Price: </span>
                      <span>£188.9</span>
                      <span className="saleprice">£268.9</span>
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
            </div>
          </div>
        </section>

        <section className={styles.section5}>
          <div className={styles.section}>
            <div className={styles.titleBox}>
              <div className={styles.title}>
                <img
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200423_144449_tit12x.png"
                  alt=""
                />
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
