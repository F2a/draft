import React from 'react';
import * as PIXI from 'pixi.js';
import { TweenMax, TimelineLite } from "gsap";
import { connect } from 'dva';
import styles from './PixiDemo.scss';
import toFlowerJson from '../assets/toFlower.json';
// 需要取到 json 的url才行，目前取出是个对象
import toFlowerPng from '../assets/toFlower.png';

class Testpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      goldbin: 0,
      counter: 0,
      countdown: 10,
      start: false,
      showModal: true
    }
  }
  app = null;
  pops = [];
  texture = {};
  animateXin = null;
  animateBoom = null;
  animateCount = null;
  gmap = [[2, 5], [6, 9], [10, 15]];

  componentDidMount() {
    console.log('toFlowerJson :', toFlowerJson);
    this.resize();
    // this.initStage();
    window.addEventListener('resize', this.resize);
  }

  resize = e => {
    const stageH = window.innerHeight; // 108 为top nav的高度
    const stageW = window.innerWidth;
    this.setState({ stageW, stageH });
    return { stageW, stageH };
  }

  countdownInit = () => {
    const { start } = this.state;
    this.animateCount = window.setInterval(() => {
      if (document.visibilityState === 'visible' && start) {
        const { countdown } = this.state;
        if (countdown > 0) {
          const num = countdown - 1;
          this.setState({ countdown: num < 10 ? `0${num}` : num });
        } else {
          // this.getEnd();
          // this.clearTimer();
        }
      }
    }, 1000);
  }

  initStage = (restart) => {
    let { stageW, stageH } = this.state;
    const stageSize = this.resize();
    const app = this.app = new PIXI.Application({
      width: stageW || stageSize.stageW,
      height: stageH || stageSize.stageH,
      transparent: true,
      autoStart: false,
    });

    document.getElementById('pixi').appendChild(app.view);
    if (!restart) {
      PIXI.Loader.shared
        .add('gold', 'https://dz02g1kgtiysz.cloudfront.net/deals/files/200119_104657_gold.png')
        .add('xin', 'https://dz02g1kgtiysz.cloudfront.net/deals/files/200119_145243_xin.png')
        .add('boom', 'https://dz02g1kgtiysz.cloudfront.net/deals/files/200119_145630_boom.png')
        .add('coupons', 'https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_093854_coupons.png')
        .add('p', toFlowerPng)
        .add('j', JSON.stringify(toFlowerJson))
        .on("progress", this.loadProgressHandler)
        .load(this.load);
    } else {
      this.load();
    }
  }

  load = () => {
    let xinnum = 3, boomnum = 3, app = this.app;
    const treasure = this.gmap.map(v => this.randomInt(v[0], v[1]));
    let p = PIXI.Loader.shared.resources.p.texture;
    let j = PIXI.Loader.shared.resources.j;
    let sheet = PIXI.Loader.shared.resources.j.spritesheet;
    console.log('sheet', sheet, j, p);
    this.animateXin = window.setInterval(() => {
      const { start } = this.state;
      if (document.visibilityState === 'visible' && start) {
        for (let i = 0; i < xinnum; i++) {
          let pop = new PIXI.Sprite(PIXI.Loader.shared.resources.xin.texture);
          pop = this.popQueen(pop);
          pop.interactive = true;
          pop.on('mousedown', (e) => {
            let { counter } = this.state;
            this.mousedown(pop);
            if (treasure.find(v => parseInt(v, 10) === counter)) this.getGold(pop);
            this.setState({ counter: counter + 1 });
          });
          pop.on('touchstart', (e) => {
            let { counter } = this.state;
            this.mousedown(pop);
            if (treasure.find(v => parseInt(v, 10) === counter)) this.getGold(pop);
            this.setState({ counter: counter + 1 });
          });
          this.pops.push(pop);
          app.stage.addChild(pop);
        }
      }
    }, 600);
    this.animateBoom = window.setInterval(() => {
      const { start } = this.state;
      if (document.visibilityState === 'visible' && start) {
        for (let i = 0; i < boomnum; i++) {
          let popboom = new PIXI.Sprite(PIXI.Loader.shared.resources.boom.texture);
          popboom = this.popQueen(popboom, 1.45);
          popboom.interactive = true;
          popboom.on('mousedown', () => this.mousedown(popboom));
          popboom.on('touchstart', () => this.mousedown(popboom));
          this.pops.push(popboom);
          app.stage.addChild(popboom);
        }
      }
    }, 2000);
    app.ticker.add(() => this.popMove());
  }

  getGold = (pop) => {
    pop.vx = 0;
    pop.vy = 0;
    let gold = new PIXI.Sprite(PIXI.Loader.shared.resources.gold.texture);
    gold.x = pop.x;
    gold.y = pop.y;
    gold.vx = pop.vx;
    gold.vy = pop.vy;
    gold.width = pop.width;
    gold.height = pop.height;
    gold.alpha = 0;
    this.app.stage.addChild(gold);
    this.shine(gold, 0.5);
    this.setState({ goldbin: this.state.goldbin + 1 });
  }

  shine = (target, delay, callback) => {
    const tl = new TimelineLite();
    tl.to(target, delay, { alpha: 1 }).to(target, delay, { alpha: 0 });
  }

  mousedown = (pop, callback) => {
    // TweenMax.to(pop, 0.3, { alpha: 0 });
    pop.interactive = false;
    let toFlowerPng = PIXI.utils.TextureCache.toFlowerPng;
    let sheet = PIXI.Loader.shared.resources.j.spritesheet;
    console.log('sheet', sheet);
    // let sheet1 = new PIXI.Spritesheet(toFlowerPng, sheet);
    // console.log('sheet1', sheet1);
    let gold = new PIXI.AnimatedSprite(sheet.animations["tu"]);
    console.log('gold', gold);
    gold.x = pop.x;
    gold.y = pop.y;
    gold.vx = pop.vx;
    gold.vy = pop.vy;
    gold.width = pop.width;
    gold.height = pop.height;
    this.app.stage.addChild(gold);
    if (callback) callback();
  }

  getEnd = () => {
    const size = 80, multiple = 1.2;
    let { stageW, stageH } = this.state;
    let gold1 = new PIXI.Sprite(PIXI.Loader.shared.resources.gold.texture);
    let gold2 = new PIXI.Sprite(PIXI.Loader.shared.resources.gold.texture);
    let gold3 = new PIXI.Sprite(PIXI.Loader.shared.resources.gold.texture);
    gold1.x = (stageW - size) / 2;
    gold2.x = (stageW - size) / 2 - multiple * size;
    gold3.x = (stageW - size) / 2 + multiple * size;
    gold1.y = gold2.y = gold3.y = -size;
    gold1.vx = gold2.vx = gold3.vx = 0;
    gold1.vx = gold2.vx = gold3.vx = 4;
    gold1.width = gold2.width = gold3.width = size;
    gold1.height = gold2.height = gold3.height = size;
    this.app.stage.addChild(gold1);
    this.app.stage.addChild(gold2);
    this.app.stage.addChild(gold3);
    TweenMax.to(gold1, 5, { y: (stageH + size) / 2, delay: 2 });
    TweenMax.to([gold2, gold3], 5,
      {
        y: stageH / 2 - multiple * size,
        delay: 2.5,
        onComplete: () => {
          this.setState({ show: false, showModal: true, visibleStage: true, step: 4 });
        }
      });
  }

  getPrize = () => {
    let coupons1 = new PIXI.Sprite(PIXI.Loader.shared.resources.coupons.texture);
    let coupons2 = new PIXI.Sprite(PIXI.Loader.shared.resources.coupons.texture);
    let coupons3 = new PIXI.Sprite(PIXI.Loader.shared.resources.coupons.texture);
  }

  popMove = () => {
    let { stageW, stageH } = this.state;
    this.pops.forEach((pop, i) => {
      pop.x += pop.vx;
      pop.y += pop.vy;
      if (pop.y > stageH || pop.x > stageW || pop.x < -pop.width) {
        this.app.stage.removeChild(pop);
        this.pops.splice(i, 1);
      }
    });
  }

  popQueen = (pop, scale) => {
    let { stageW } = this.state;
    const size = this.randomInt(50, 100);
    pop.width = size;
    pop.height = scale ? size * scale : size;
    pop.x = this.randomInt(0, stageW - pop.width);
    pop.y = -pop.height;
    pop.vx = this.randomInt(-1, 2, false);
    pop.vy = this.randomInt(2, 8, false);
    return pop;
  }

  randomInt = (min, max, isInt = true) => {
    if (isInt) {
      min = Math.ceil(min);
      max = Math.floor(max);
    }
    return Math.floor(Math.random() * (max - min)) + min;
  }

  loadProgressHandler = (loader, resource) => {
    this.setState({ progress: loader.progress });
    if (loader.progress >= 100) {
      this.setState({ visible: true });
      window.setTimeout(() => {
        this.app.start();
        this.setState({ show: true, start: true, showModal: false, visible: false });
        this.countdownInit();
      }, 1000);
    }
  }

  showBtn = () => {
    this.setState({ showModal: true });
  }

  hideBtn = () => {
    const { step } = this.state;
    if (step === 4) {
      this.setState({ step: 5 });
      return;
    }
    this.setState({ showModal: false });
  }

  playBtn = () => {
    this.initStage(!!this.app);
    this.setState({ countdown: 10, goldbin: 0, counter: 0 });
  }

  stopBtn = () => {
    if (this.app) {
      this.app.destroy(true);
      this.clearTimer();
    };
    this.setState({ show: false });
  }

  clearTimer = () => {
    this.setState({ start: false });
    clearInterval(this.animateXin);
    clearInterval(this.animateBoom);
    clearInterval(this.animateCount);
    this.animateXin = null;
    this.animateBoom = null;
    this.animateCount = null;
  }

  scene1 = () => {
    return (<div className={`${styles.scene} ${styles.scene1}`}>
      <h1 className={styles.title}>Quick-Fire Cupid</h1>
      <p className={styles.subTitle}>Click as many hearts within 10 seconds as possible for your chance to WIN BIG!</p>
      <div className={styles.btnbox}>
        <a className={styles.btn} onClick={() => this.setState({ step: 2 })}>Start</a>
      </div>
    </div>);
  }

  back1 = () => {
    return (<div className={styles.back1}>
      <img className={styles.leftTop} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_095909_quebite.png" alt="" />
      <img className={styles.rightBottom} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_095854_qinlv.png" alt="" />
      <img className={styles.leftBottom} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_104813_meigui.png" alt="" />
    </div>);
  }

  scene2 = () => {
    return (<div className={`${styles.scene} ${styles.scene2}`}>
      <h1 className={styles.title}>What You Can Win</h1>
      <div className={styles.flex}>
        <div className={styles.box}>
          <h1 className={styles.title}>Coupons</h1>
          <section className={styles.couponbox}>
            <img className={styles.coupon} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_093854_coupons.png" alt="" />
            <img className={styles.coupon} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_093854_coupons.png" alt="" />
            <img className={styles.coupon} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_093854_coupons.png" alt="" />
          </section>
          <ul className={styles.rules}>
            <li><h1>Rules</h1></li>
            <li>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_095912_li.png" alt="" />
              <i>1</i>
              <p>The coupons are valid from Feb 4th to Feb 16th.</p>
            </li>
            <li>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_095912_li.png" alt="" />
              <i>2</i>
              <p>The coupons can only be used on eufylife.com/uk</p>
            </li>
            <li>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_095912_li.png" alt="" />
              <i>3</i>
              <p>The more hearts you click, the more discount coupons you will receive.</p>
            </li>
            <li>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_095912_li.png" alt="" />
              <i>4</i>
              <p>The coupons will be generated at random.</p>
            </li>
            <li>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_095912_li.png" alt="" />
              <i>5</i>
              <p>Only one code per order.</p>
            </li>
          </ul>
        </div>
        <div className={styles.box}>
          <h1 className={styles.title}>Grand Prize</h1>
          <section>
            <img className={styles.coupon} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_095841_grand.png" alt="" />
            <img className={styles.coupon} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_095841_grand.png" alt="" />
            <img className={styles.coupon} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_095841_grand.png" alt="" />
          </section>
          <ul className={`${styles.rules} ${styles.rulesSpecail}`}>
            <li><h1>Rules</h1></li>
            <li>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_095912_li.png" alt="" />
              <i>1</i>
              <p>We will randomly select 4 winners who use the coupons to purchase on eufylife.com/uk as our grand prize winners. We will be giving away - romantic getaway fund (£1000*1), luxury date fund (£300*1), cozy dinner fund (£100*2)</p>
            </li>
            <li>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_095912_li.png" alt="" />
              <i>2</i>
              <p>We will send out an email to the giveaway winners on Feb 17th, 2020.</p>
            </li>
            <li>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_095912_li.png" alt="" />
              <i>3</i>
              <p>eufy reserves the final explanation.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.btnbox}>
        <a
          className={styles.btn}
          onClick={() => {
            this.playBtn();
            this.setState({ step: 3 })
          }}>Play</a>
      </div>
    </div>);
  }

  back2 = () => {
    return (<div className={styles.back2}>
      <img className={styles.leftTop} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_135044_giftbox.png" alt="" />
      <img className={styles.rightBottom} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_141801_meigui2.png" alt="" />
      <img className={styles.leftBottom} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_104813_meigui.png" alt="" />
    </div>);
  }

  scene3 = () => {
    const { progress = 0 } = this.state;
    return (<div className={`${styles.scene} ${styles.scene3}`}>
      <img className={styles.xin} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_164224_gaoqing.png" alt="" />
      <div className={styles.loading}>
        <div className={styles.current} style={{ width: `${progress}%` }} />
      </div>
      <p className={styles.progress}>{progress}%</p>
    </div>);
  }

  back3 = () => {
    return (<div className={styles.back3}>
      <img className={styles.leftTop} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_161503_meigui3.png" alt="" />
      <img className={styles.rightBottom} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_141801_meigui2.png" alt="" />
      <img className={styles.leftBottom} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_104813_meigui.png" alt="" />
    </div>);
  }

  scene4 = () => {
    const { copied } = this.state;
    return (<div className={`${styles.scene} ${styles.scene4}`}>
      <p className={styles.title}>You’re a real hotshot! </p>
      <p className={styles.subTitle}>Here is(are) the coupon(s) you won!</p>
      <div className={styles.conpon}>
        <p>£70 OFF £200 With code: EUFYLOVE&nbsp;
          <a onClick={e => this.copy(e, 'EUFYLOVE')}>Copy Code</a>&nbsp;{copied === 'EUFYLOVE' && '(Copied)'}
        </p>
        <p>£80 OFF £300 With code: EUFYCUPID&nbsp;
          <a onClick={e => this.copy(e, 'EUFYCUPID')}>Copy Code</a>&nbsp;{copied === 'EUFYCUPID' && '(Copied)'}
        </p>
        <p>£100 OFF £400 With code: EUFYCHOCO&nbsp;
          <a onClick={e => this.copy(e, 'EUFYCHOCO')}>Copy Code</a>&nbsp;{copied === 'EUFYCHOCO' && '(Copied)'}
        </p>
      </div>
      <div className={styles.btnbox}>
        <a className={styles.btn}>Shop eufy now</a>
      </div>
      <p className={styles.desc}>Use your coupon on eufylife.com to be entered into the grand prize draw. There is a £1000 romantic getaway fund to be won!</p>
      <a className={styles.save}
        onClick={() => this.setState({ step: 6 })}
      >Submit your email to save your coupon code(s).</a>
    </div>);
  }

  copy = (e, copied) => {
    const input = document.createElement('input');
    input.setAttribute('readonly', 'readonly');
    input.setAttribute('value', copied);
    document.body.appendChild(input);
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      console.log('copied');
      this.setState({ copied });
    }
    document.body.removeChild(input);
    return false;
  }

  back4 = () => {
    return (<div className={`${styles.back3} ${styles.back4}`}>
      <img className={styles.leftTop} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200121_105917_zanshi.png" alt="" />
      <img className={styles.rightBottom} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_141801_meigui2.png" alt="" />
      <img className={styles.leftBottom} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_104813_meigui.png" alt="" />
    </div>);
  }
  scene5 = () => {
    return (<div className={`${styles.scene} ${styles.scene5}`}>
      <p className={styles.subTitle}>Do you want to exit the game without saving your coupon code(s)?</p>
      <div className={styles.btnbox}>
        <a className={styles.btnBig} onClick={() => this.setState({ step: 1, showModal: false })}>No, send it (them) to <br /> my email</a>
        <a className={styles.btnBigblue} onClick={() => this.setState({ step: 6 })}>Yes, I have the memory of an elephant</a>
      </div>
    </div>);
  }
  back5 = () => {
    return (<div className={styles.back3}>
      <img className={styles.leftTop} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_180315_caidai.png" alt="" />
      <img className={styles.rightBottom} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_141801_meigui2.png" alt="" />
      <img className={styles.leftBottom} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_104813_meigui.png" alt="" />
    </div>);
  }
  scene6 = () => {
    return (<div className={`${styles.scene} ${styles.scene6}`}>
      <p className={styles.subTitle}>Enter your email address to save your code(s)</p>
      <form className={styles.emailform} action="">
        <input placeholder="Email" type="email" />
        <input placeholder="Captcha" type="captcha" />
      </form>
      <div className={styles.btnbox}>
        <a className={styles.btn} onClick={() => this.setState({ step: 2 })}>Submit</a>
      </div>
      <a className={styles.policy}>Term of Use & Policy Privacy</a>
    </div>);
  }

  back6 = () => {
    return (<div className={`${styles.back1} ${styles.back6}`}>
      <img className={styles.leftTop} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200121_134852_gongjian.png" alt="" />
      <img className={styles.rightBottom} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_095854_qinlv.png" alt="" />
      <img className={styles.leftBottom} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_104813_meigui.png" alt="" />
    </div>);
  }

  render() {
    const { show, showModal, visible, visibleStage, goldbin, countdown = 10, stageW = 100, stageH, step } = this.state;
    return (
      <div className={styles.valentinesDay}>
        <a className={styles.playBtn} onClick={this.showBtn}>PLAY</a>
        <div className={`${styles.modal} ${!showModal && styles.hide} ${visible && styles.visible}`}>
          <img className={styles.back} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200120_095851_bg.png" alt="" />
          {step === 1 && this.back1()}
          {step === 2 && this.back2()}
          {step === 3 && this.back3()}
          {step === 4 && this.back4()}
          {step === 5 && this.back5()}
          {step === 6 && this.back6()}
          <div className={styles.content}>
            <div className={styles.close} onClick={this.hideBtn} />
            <div className={styles.video} />
            {step === 4 && <a className={styles.rulesJump}>Rules</a>}
            {step === 1 && this.scene1()}
            {step === 2 && this.scene2()}
            {step === 3 && this.scene3()}
            {step === 4 && this.scene4()}
            {step === 5 && this.scene5()}
            {step === 6 && this.scene6()}
          </div>
        </div>
        <div className={`${styles.stage} ${!show && styles.hide} ${visibleStage && styles.visible}`}>
          <div id="pixi" className={styles.pixiStage} style={{ width: stageW }} />
          <div className={styles.close} onClick={this.stopBtn} />
          <div className={styles.video} />
          <div className={styles.goldbin}>
            <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/200119_104657_gold.png" alt="" />
            <span>{goldbin > 0 && '+'}{goldbin}</span>
          </div>
          <div className={styles.countdown}>
            0 : {countdown}
          </div>
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
