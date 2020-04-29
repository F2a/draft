import { connect } from "dva";
import Slick from "react-slick";
import ReactPlayer from "react-player";
import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import AutoResponsive from "autoresponsive-react";
import Reactselect, { components } from "react-select";
import Masonry from "react-masonry-component";
import styles from "./MomShare.scss";

class MomShare extends React.Component {
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

  getAutoResponsiveProps() {
    return {
      itemMargin: 4,
      containerWidth: this.state.containerWidth || document.body.clientWidth,
      itemClassName: "item",
      gridWidth: 10,
      transitionDuration: ".5",
    };
  }

  screen = (current) => {
    this.setState({ current });
  };

  countryChange(event) {
    const { value, options, selectedIndex } = event.target;
    this.setState({
      current: "select",
      product_id: value,
      // product_name: options[selectedIndex].text
    });
  }

  uploadAttach(store, event) {
    // 上传附件
    // const { common } = this.props;
    const { files = [] } = event.target;
    const file = files[0];
    if (!file) return;
    // if (!['image'].find(t => file.type.includes(t))) {
    //   this.props.errorModal({ error: common.file_format_error });
    //   return;
    // }
    // if (file.size > 1024 * 1024 * 10) {
    //   this.props.errorModal({ error: common.file_size_error });
    //   return;
    // }
    const data = new FormData();
    data.append("file", file);
    data.append("category", store);
    console.log("file", file);
    this.setState({ captchaLoading: true });
    this.setState({ file });
    // this.props
    //   .uploadFile(data)
    //   .then(body => {
    //     console.log('file :', body, file);
    //     this.setState({
    //       file,
    //       uploadBack: body,
    //       captchaLoading: false,
    //     });
    //   })
    //   .catch(err => {
    //     this.setState({ captchaLoading: false });
    //     this.props.errorModal(err);
    //   });
  }

  deleteFile = () => {
    this.setState({ file: "" });
  };

  valueChange(event) {
    const { name, value, checked, type } = event.target;
    this.setState({ [name]: type === "checkbox" ? checked || false : value });
  }

  menuList = (props) => {
    const { Option } = components;
    const { data } = props;
    return (
      <Option {...props}>
        <div className={styles.flex}>
          <img
            className={styles.optImg}
            src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110834_t2108211td01v1.png"
            alt=""
          />
          <div className={styles.optTitle}>
            <p className={styles.titleTop}>{data.value} </p>
            <p className={styles.titleDec}>{data.label} </p>
          </div>
        </div>
      </Option>
    );
  };

  liked = () => {

  }

  closeModal = () => {
    this.setState({ show: false });
  };

  showModal = act => {
    // this.loginModal()
    // this.formModal()
    // this.detailModal()
    if (this.hasLogin()) {
      this.setState({ modalDom: act });
    } else {
      this.setState({ modalDom: 'loginModal' });
    }
    this.setState({ show: true }, () => {
      if (this.closeButton.current) this.closeButton.current.focus();
    });
  };

  formModal = () => {
    const { file } = this.state;
    return (
      <div className={styles.formBox}>
        <div className={styles.left}>
          {file && (
            <div className={styles.preview}>
              <img
                src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110834_t2108211td01v1.png"
                alt=""
              />
              <button type="button" onClick={() => this.deleteFile()}>
                delete
              </button>
            </div>
          )}
          {!file && !this.state.uploadDiv && (
            <div className={`${styles.btnBox} ${styles.uplaodBox}`}>
              <div className={styles.uplaodBtn}>
                <p>
                  <b>upload</b>
                </p>
                <input
                  className={styles.file_upload}
                  type="file"
                  name="file_upload"
                  accept="image/*,application/pdf"
                  onChange={(e) => this.uploadAttach("momShare2020", e)}
                />
              </div>

              <button
                type="button"
                className={`${styles.btns} ${styles.btnsBorder}`}
                onClick={(e) => this.setState({ uploadDiv: true })}
              >
                Mehr sehen
              </button>
            </div>
          )}
          {!file && this.state.uploadDiv && (
            <form
              className={styles.videoform}
              ref={(c) => {
                this.form = c;
              }}
              onSubmit={(e) => this.setState({ uploadDiv: false })}
            >
              <div className={styles.input}>
                <input
                  placeholder={"youtube video url"}
                  value={this.state.videourl}
                  onChange={(e) => this.valueChange(e)}
                  type="text"
                  name="videourl"
                />
              </div>
              <div className={styles.btnBox}>
                <button
                  type="button"
                  className={`${styles.btns} ${styles.btnsBorder}`}
                  onClick={(e) => this.setState({ uploadDiv: false })}
                >
                  Mehr sehen
                </button>
                <button type="button" className={styles.btns}>
                  Mehr sehen
                </button>
              </div>
            </form>
          )}
        </div>
        <div className={styles.right}>
          <div className={styles.portrait}>
            <img
              src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200410_115638_man.png"
              alt=""
            />
            <div className={styles.btnBox}>
              <button
                type="button"
                className={`${styles.btns} ${styles.btnsBorder}`}
              >
                FEMALE
              </button>
              <button type="button" className={styles.btns}>
                MAIl
              </button>
            </div>
          </div>
          <div className={styles.input}>
            <input
              placeholder={"youtube video url"}
              value={this.state.videourl}
              onChange={(e) => this.valueChange(e)}
              type="text"
              name="videourl"
            />
          </div>
          <Reactselect
            isMulti
            className={styles.select}
            styles={{
              control: (base) => ({ ...base, border: "none" }),
              placeholder: (base) => ({ ...base, fontSize: "14px" }),
            }}
            maxMenuHeight={230}
            components={{ Option: this.menuList }}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
            value={this.state.selectedOption}
            onChange={(selectedOption) => {
              if (selectedOption && selectedOption.length > 2) return false;
              this.setState({ selectedOption }, () =>
                console.log(`Option selected:`, this.state.selectedOption)
              );
            }}
          />
          <div className={styles.input}>
            <textarea
              placeholder={"youtube video url"}
              value={this.state.videourl}
              onChange={(e) => this.valueChange(e)}
              type="text"
              name="videourl"
            />
          </div>
          <div className={styles.policy}>
            {/* <label onClick={this.agreeToPolicy}>
              <i
                className="iconfont"
                dangerouslySetInnerHTML={{
                  __html: agreed ? "&#xe722;" : "&#xe720;",
                }}
              />
              <span
                onClick={(e) => stopEvent("A", e)}
                dangerouslySetInnerHTML={{ __html: lang.privacy }}
              />
            </label> */}
          </div>
          <div className={styles.btnBox}>
            <button
              type="button"
              className={`${styles.btns} ${styles.btnsBorder}`}
            >
              CANCLE
            </button>
            <button type="button" className={styles.btns}>
              POST
            </button>
          </div>
          <div
            className={styles.tip}
            dangerouslySetInnerHTML={{
              __html: "*Please log in to your account.",
            }}
          />
        </div>
      </div>
    );
  };

  detailModal = () => {
    const { detail } = this.state;
    return (
      <div className={styles.detailBox}>
        <div className={styles.left}>
          <img
            src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200410_164408_-3-.png"
            alt=""
          />
        </div>
        <div className={styles.right}>
          <div className={styles.portrait}>
            <img
              className={styles.portraitImg}
              src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200410_115645_woman.png"
              alt=""
            />
            <p className={styles.name}>shenoy</p>
            <a className={styles.xin} role="button" onClick={() => this.liked(detail)}>
              <img
                src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200410_115645_woman.png"
                alt=""
              />
            </a>
          </div>
          <span className={styles.line} />
          <p className={styles.titl}>Soundcore Life Q10 on monitor</p>
          <p className={styles.desc}>
            Soundcore Life Q10 on monitor Soundcore Life Q10 on monitor
          </p>
          <span className={styles.line} />
          <p className={styles.titl}>Soundcore Life Q10 on monitor</p>
          <div class={styles.flex}>
            <div className={styles.fleft}>
              <img
                src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110834_t2108211td01v1.png"
                alt=""
              />
            </div>
            <div className={styles.fright}>
              <p className={styles.ptitl}>Soundcore Life Q10 on monitor</p>
              <p className={styles.pdesc}>
                Soundcore Life Q10 on monitor Soundcore Life Q10 on monitor
              </p>
              <p className={styles.prize}>Price: $123.5</p>
              <div className={styles.btnBox}>
                <button type="button" className={styles.btns}>
                  POST
                </button>
              </div>
            </div>
          </div>
          <span className={styles.line} />
          <div className={styles.btnBox}>
            <button type="button" className={styles.btns}>
              POST
            </button>
            <img
              className={styles.facebook}
              src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200410_115645_woman.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };

  loginModal = () => {
    return (
      <div className={styles.loginBox}>
        <div
          className={styles.loginTip}
          dangerouslySetInnerHTML={{ __html: "Please log in to your account." }}
        />
        <div className={styles.google}></div>
        <div className={styles.facebook}></div>
      </div>
    );
  };

  isMobile = () => window && window.innerWidth < 768;

  hasLogin = () => true;

  render() {
    const { lang = {}, modalDom, current } = this.state;
    return (
      <div className={styles.momshared}>
        <a
          role="button"
          onClick={() => this.showModal("formModal")}
          className={styles.banner}
        >
          {lang.bannerMobile && this.isMobile() ? (
            <img src={lang.bannerMobile} alt="" />
          ) : (
            <img
              className={styles.img}
              src={
                lang.banner ||
                "https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110745_banner.jpg"
              }
              alt=""
            />
          )}
        </a>

        <section className={styles.prizeSec}>
          <div className={styles.section}>
            <div className={styles.section}>
              <div className={styles.caidaititle}>
                <h2 className={styles.titletxt}>Der Ehrenpreis</h2>
                <img
                  className={styles.caidai}
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110752_caidai.png"
                  alt=""
                />
              </div>
              <div className={styles.giftBox}>
                <img
                  className={styles.giftMobile}
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200413_111612_prizemo.png"
                  alt=""
                />
                <div className={styles.gift}>
                  <div className={styles.paddingBox}>
                    <div className={styles.img}>
                      <img
                        src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110756_g1.png"
                        alt=""
                      />
                    </div>
                    <div className={styles.content}>
                      <h3>xxxxxxxxxxx xxxx</h3>
                      <ul>
                        <li>xxxxxxxxx xxx xxxx xxxxxx xxxx xxxxxx</li>
                        <li>xxxxx xxxx xxx xxxx xxxxxx xxxx xxxxxx</li>
                        <li>
                          xxxxx xxxx xxx xxxx xxx xxxxxx xxxx xxxx xxxxx xxxxxx{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={styles.gift}>
                  <div className={styles.paddingBox}>
                    <div className={styles.img}>
                      <img
                        src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110756_g1.png"
                        alt=""
                      />
                    </div>
                    <div className={styles.content}>
                      <h3>xxxxxxxxxxx xxxx</h3>
                      <ul>
                        <li>xxxxxxxxx xxx xxxx xxxxxx xxxx xxxxxx</li>
                        <li>xxxxx xxxx xxx xxxx xxxxxx xxxx xxxxxx</li>
                        <li>
                          xxxxx xxxx xxx xxxx xxx xxxxxx xxxx xxxx xxxxx xxxxxx{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={styles.gift}>
                  <div className={styles.paddingBox}>
                    <div className={styles.img}>
                      <img
                        src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110756_g1.png"
                        alt=""
                      />
                    </div>
                    <div className={styles.content}>
                      <h3>xxxxxxxxxxx xxxx</h3>
                      <ul>
                        <li>xxxxxxxxx xxx xxxx xxxxxx xxxx xxxxxx</li>
                        <li>xxxxx xxxx xxx xxxx xxxxxx xxxx xxxxxx</li>
                        <li>
                          xxxxx xxxx xxx xxxx xxx xxxxxx xxxx xxxx xxxxx xxxxxx{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={styles.gift}>
                  <div className={styles.paddingBox}>
                    <div className={styles.img}>
                      <img
                        src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110756_g1.png"
                        alt=""
                      />
                    </div>
                    <div className={styles.content}>
                      <h3>xxxxxxxxxxx xxxx</h3>
                      <ul>
                        <li>xxxxxxxxx xxx xxxx xxxxxx xxxx xxxxxx</li>
                        <li>xxxxx xxxx xxx xxxx xxxxxx xxxx xxxxxx</li>
                        <li>
                          xxxxx xxxx xxx xxxx xxx xxxxxx xxxx xxxx xxxxx xxxxxx{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.stepSec}>
          <div className={styles.section}>
            <div className={styles.title}>
              <h2 className={styles.titletxt}>Der Ehrenpreis</h2>
              <span className={styles.line} />
            </div>
          </div>
        </section>

        <section className={styles.stepLine}>
          <div className={styles.section}>
            <div className={styles.stepBox}>
              {this.isMobile() ? (
                <img
                  className={styles.stepBack}
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200413_120045_stepmo.png"
                  alt=""
                />
              ) : (
                <img
                  className={styles.stepBack}
                  src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110830_sec2pc.png"
                  alt=""
                />
              )}
              <div className={styles.stepAll}>
                <div className={styles.step}>
                  <div className={styles.stepTop}>
                    <p>Step1</p>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110812_icon1.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.stepContent}>
                    xxx x xxxxxx x x x x x x xxxxxx x x xxxxx x x xxxx xxx x
                    xxxxxx x x x x x x xxxxxx x x xxxxx x x xxxx
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepTop}>
                    <p>Step1</p>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110812_icon1.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.stepContent}>
                    xxx x xxxxxx x x x x x x xxxxxx x x xxxxx x x xxxx xxx x
                    xxxxxx x x x x x x xxxxxx x x xxxxx x x xxxx
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepTop}>
                    <p>Step1</p>
                    <img
                      src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110812_icon1.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.stepContent}>
                    xxx x xxxxxx x x x x x x xxxxxx x x xxxxx x x xxxx xxx x
                    xxxxxx x x x x x x xxxxxx x x xxxxx x x xxxx
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sharedSec}>
          <div className={styles.section}>
            <div className={styles.caidaititle}>
              <h2 className={styles.titletxt}>#Der Ehrenpreis</h2>
              <img
                className={styles.caidai}
                src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110752_caidai.png"
                alt=""
              />
            </div>
            <div className={`${styles.btnBox} ${styles.showForm}`}>
              <button
                type="button"
                className={styles.btns}
                onClick={() => this.showModal("formModal")}
              >
                Mehr sehen
              </button>
            </div>
            <div className={styles.screen}>
              <div className={styles.left}>
                <a
                  role="button"
                  onClick={() => this.screen("all")}
                  className={`${styles.btn} ${
                    current === "all" && styles.current
                  }`}
                >
                  Alle Beitrage
                </a>
                <span className={styles.line} />
                <a
                  role="button"
                  onClick={() => this.screen("mine")}
                  className={`${styles.btn} ${
                    current === "mine" && styles.current
                  }`}
                >
                  Alle Beitrage
                </a>
              </div>
              <div className={styles.right}>
                <select
                  name="select1"
                  className={`${styles.btn} ${
                    current === "select" && styles.current
                  }`}
                  value={this.state.product_id || ""}
                  onChange={(e) => this.countryChange(e)}
                >
                  <option value="">Sortieren: Neueste zuest</option>
                  {lang.screenProduct &&
                    lang.screenProduct.map((v, i) => (
                      <option key={i} value={v}>
                        {v}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div id="autoResponsiveBox" className={styles.section}>
              <Masonry
                className={styles.masonry} // default ''
                elementType={"div"} // default 'div'
                options={{ transitionDuration: 0 }} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={{ background: ".my-bg-image-el" }} // default {}
              >
                {this.state.data.map((val, index) => {
                  return (
                    <div key={index} className={`${styles.water} album item`}>
                      <div className={styles.showimg}>
                        <img
                          src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_170954_-3.png"
                          alt=""
                        />
                        <div className={styles.showBtn}>
                          <span>6</span>
                          <button type="button" onClick={() => this.liked(val)}>
                            <img
                              src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110819_icon3.png"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                      <div className={styles.showContent}>
                        <div className={styles.showContenttop}>
                          <img
                            className={styles.product}
                            src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110834_t2108211td01v1.png"
                            alt=""
                          />
                          <button
                            type="button"
                            onClick={() => this.showModal("detailModal", val)}
                            className={`${styles.btns} ${styles.btnsBorder}`}
                          >
                            Teilen
                          </button>
                        </div>
                        <h3>Full Glam</h3>
                        <span className={styles.line} />
                        <div className={styles.showName}>
                          <img
                            src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200410_115638_man.png"
                            alt=""
                          />
                          <span>Jack</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Masonry>
              <div className={styles.btnBox}>
                <button type="button" className={styles.btns}>
                  Mehr sehen
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.rulesSec}>
          <div className={styles.section}>
            <div className={styles.title}>
              <h2 className={styles.titletxt}>Der Ehrenpreis</h2>
              <span className={styles.line} />
            </div>
            <ul>
              <li>
                asdas asdasdasdasd asd asd asda dasdasdasd asdasdas dasd asd a
                dasdasd asdas dasd asd a asd{" "}
              </li>
              <li>asdas ad a dasdasd asdas dasd asd a asd </li>
              <li>
                asdas asdasdasdasd asd asd asda dasdasdasd asdasdas dasd asd a
                dasdasd asdas dasd asd a asd{" "}
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.productSec}>
          <div className={styles.section}>
            <div className={styles.caidaititle}>
              <h2 className={styles.titletxt}>
                #Der Ehrenpreis <br /> Der Ehrenpreis
              </h2>
              <img
                className={styles.caidai}
                src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200409_110752_caidai.png"
                alt=""
              />
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
                        Mehr sehen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {this.state.show && (
          <div>
            <div className={styles.main}>
              <button
                type="button"
                tabIndex="0"
                className="modalClose"
                ref={this.closeButton}
                onClick={() => this.closeModal()}
              >
                X
                {/* <i className="iconfont" dangerouslySetInnerHTML={{ __html: iconfont.cross }} /> */}
              </button>
              <div className={styles.content}>{this[modalDom]()}</div>
            </div>
            <div className={styles.mask} />
          </div>
        )}
      </div>
    );
  }
}

MomShare.propTypes = {};

function mapStateToProps(state) {
  const { example } = state;
  return {
    ...example,
  };
}

export default connect(mapStateToProps)(MomShare);
