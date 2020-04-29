import { connect } from 'dva';

import React from 'react';
import styles from './Capsule.scss';

class Capsule extends React.Component {
  state = {
    lang: {},
    fileName: '',
    Percent: 50,
    uploading: false
  }

  componentDidMount() {

  }

  subscribeSubmit = e => {
    e.preventDefault();
    const arr = document.getElementsByName("a");
    if (arr) {
      const value = [];
      arr.forEach(v => v.checked && value.push(v.value));
    }
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
  uploadAttach(event) {
    // 上传附件
    // const { common } = this.props;
    const { files = [] } = event.target;
    const file = files[0];
    if (!file) return;
    if (!['image', 'pdf'].find(t => file.type.includes(t))) {
      // this.props.errorModal({ error: common.file_format_error });
      return;
    } if (file.size > 1024 * 1024 * 10) {
      // this.props.errorModal({ error: common.file_size_error });
      return;
    }
    this.setState({ fileName: file.name });
    const data = new FormData();
    data.append('picture', file);
    console.log('data', data)
    // if (__DEVELOPMENT__) console.warn(file, data);
    this.setState({ uploading: true });
    // this.props
    //   .uploadAttach(data)
    //   .then(body => {
    //     const json = this.state.formDate;
    //     const attachs = (json.attachs || []).concat(body);
    //     if (__DEVELOPMENT__) console.log({ body, attachs }, json.attachs);
    //     json.attachs = attachs;
    //     this.setState({
    //       uploading: false,
    //       formDate: json
    //     });
    //   })
    //   .catch(err => {
    //     this.setState({ uploading: false });
    //     this.props.errorModal(err);
    //   });
  }
  valueChange(event) {
    // 表单值更改(input/textarea/select)
    const { name, value } = event.target;
    const { formDate = {} } = this.state;
    formDate[name] = value;
    this.setState({ formDate: formDate });
  }
  rmaConfirm(event) {
    event.preventDefault();
    const { formDate = {} } = this.state;
    const errors = [];
    // if (!formDate.email) errors.push(common.fill_email);
    // if (errors.length) return this.props.errorModal({ errors });
  }
  render() {
    const {
      lang = {},
      formDate = {},
      fileName
    } = this.state;
    return (
      <div className={styles.Cable}>
        <section className={styles.banner}>
          {
            lang.bannerMobile ? <img src={lang.bannerMobile} alt="" /> :
              <img className={styles.img} src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191114_144506_.jpg" alt="" />

          }
          <div className={styles.section}>
            <div className={styles.content}>
              <h1>XXX XXX XXXXX XXXX XXXXX XXXXX XXXXX</h1>
              <h3>xxxxx xxxxx xxxxx xxxxxxx xxxx</h3>
              <i className={styles.reline} />
              <p>
                x xxx x x x x x x xxxxxx xx x x xxxxxx x x xxxxx x
              </p>
              <p>
                x x x x xxx xxxxxxxx x xxxxx x x x xx xxxxx x x x x
              </p>
            </div>
          </div>
        </section>
        <section className={`${styles.section1} ${styles.section}`}>
          <div className={styles.content}>
            <div className={styles.infoBox}>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191114_145327_1.png" alt="" />
              <div className={styles.txtBox}>
                <h2 className="line1">Xxx x</h2>
                <i className={styles.reline} />
                <div>
                  <p>adasdasasd  asd asddasdasd asdasda asd asd a ad as a</p>
                  <p>adasdasasd  asd asddasdasd asdasda asd asd a ad as a</p>
                  <p>adasdasasd  asd asddasdasd asdasda asd asd a ad as a</p>
                </div>
              </div>
            </div>
            <div className={styles.infoBox}>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191114_145327_1.png" alt="" />
              <div className={styles.txtBox}>
                <h2 className="line2">Xxx x xxxx ssxx x x x x xxxxx</h2>
                <i className={styles.reline} />
                <div>
                  <p>adasdasasd  asd asddasdasd asdasdsdasasd  asd asddasdasd asdasdsdasasd  asd asddasdasd asdasda asd asd a ad as a</p>
                  <p>adasdasasd  asd asddasdasd asdasda asd asd a ad as a</p>
                  <p>adasdasasd  asd asddasdasd asdasda asd asd a ad as a</p>
                </div>
              </div>
            </div>
            <div className={styles.infoBox}>
              <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191114_145327_1.png" alt="" />
              <div className={styles.txtBox}>
                <h2 className="line1">Xxx x</h2>
                <i className={styles.reline} />
                <div>
                  <p>adasdasasd  asd asddasdasd asdasda asd asd a ad as a</p>
                  <p>adasdasasd  asd asddasdasd asdasda asd asd a ad as a</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section2}>
          <div className={styles.section}>
            <h1> xxczcz zc z czc zczxcz zxc zxc zxc zxc zxc zx </h1>
            <div className={styles.iconArrow}>
              <div className={styles.icon}>
                <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191114_150716_icon1.png" alt="" />
                <p>asda sdasda sdasda dasd asadasdasd asadasdasd asadas</p>
              </div>
              <div className={styles.arrow}>
                <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191114_151051_.png" alt="" />
              </div>
              <div className={styles.icon}>
                <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191114_150716_icon1.png" alt="" />
                <p>asda sdasda sdasda dasd asadasdasd asadasdasd asadas</p>
              </div>
              <div className={styles.arrow}>
                <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191114_151051_.png" alt="" />
              </div>
              <div className={styles.icon}>
                <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191114_150716_icon1.png" alt="" />
                <p>asda sdasda sdasda dasd asadasdasd asadasdasd asadas</p>
              </div>
              <div className={styles.arrow}>
                <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191114_151051_.png" alt="" />
              </div>
              <div className={styles.icon}>
                <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191114_150716_icon1.png" alt="" />
                <p>asda sdasda sdasda dasd asadasdasd asadasdasd asadas</p>
              </div>
              <div className={styles.arrow}>
                <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191114_151051_.png" alt="" />
              </div>
              <div className={styles.icon}>
                <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191114_150716_icon1.png" alt="" />
                <p>asda sdasda sdasda dasd asadasdasd asadasdasd asadas</p>
              </div>
              <div className={styles.arrow}>
                <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191114_151051_.png" alt="" />
              </div>
              <div className={styles.icon}>
                <img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191114_150716_icon1.png" alt="" />
                <p>asda sdasda sdasda dasd asadasdasd asadasdasd asadas</p>
              </div>
            </div>
            <h3>Xzxczc  zxxc zxcada azcxz </h3>
            <form className={styles.amazon} onSubmit={e => this.rmaConfirm(e)}>
              <div className={styles.group}>
                <div className={styles.groupInput}>
                  <input
                    autoComplete="nope"
                    type="text"
                    name="name"
                    onChange={e => this.valueChange(e)}
                    value={formDate.name}
                    placeholder="asdasdada*"
                  />
                </div>
                <div className={styles.groupInput}>
                  <div className={styles.fileUpload}>
                    <p>{fileName || "asdadadadad"}</p>
                    <i><img src="https://dz02g1kgtiysz.cloudfront.net/deals/files/191114_150833_up.png" alt=""/></i>
                  </div>
                  <input
                    className={styles.file}
                    autoComplete="nope"
                    type="file"
                    name="file"
                    accept="image/*,application/pdf"
                    onChange={e => this.uploadAttach(e)}
                    value={this.state.file}
                    placeholder="asdasdada"
                  />
                </div>
              </div>
              <div className={styles.group}>
                <div className={styles.groupInput}>
                  <input
                    autoComplete="nope"
                    type="text"
                    name="name1"
                    onChange={e => this.valueChange(e)}
                    value={formDate.name1}
                    placeholder="asdasdada*"
                  />
                </div>
                <div className={styles.groupInput}>
                  <input
                    autoComplete="nope"
                    type="text"
                    name="name2"
                    onChange={e => this.valueChange(e)}
                    value={formDate.name2}
                    placeholder="asdasdada*"
                  />
                </div>
              </div>
              <div className={styles.group}>
                <div className={styles.groupInput}>
                  <input
                    autoComplete="nope"
                    type="text"
                    name="name3"
                    onChange={e => this.valueChange(e)}
                    value={formDate.name3}
                    placeholder="asdasdada*"
                  />
                </div>
                <div className={styles.groupInput}>
                  <input
                    autoComplete="nope"
                    type="text"
                    name="name4"
                    onChange={e => this.valueChange(e)}
                    value={formDate.name4}
                    placeholder="asdasdada*"
                  />
                </div>
              </div>
              <span className="btns">
                <button type="submit" className="button-normal submit">Apply Now</button>
              </span>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

Capsule.propTypes = {

};

function mapStateToProps(state) {
  const { example } = state;
  return {
    ...example
  };
}

export default connect(mapStateToProps)(Capsule);
