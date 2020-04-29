import React from 'react';
import { connect } from 'dva';
import Draggable from 'react-draggable';
import Slider from 'react-slick';
import csv from 'csv-parser';
import Papa from 'papaparse';
import moment from 'moment';
import 'moment-timezone';
// import styles from './IndexPage.scss';
import styles from './Tsetpage.scss';
import utils from '../utils/utils';

class Testpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: [
        {
          img: 'https://d2fn1ti8mb8fwr.cloudfront.net/spree/activities/49187/image/large/Michael_Barker.jpg?1546055053',
          header: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191017_151433_-704.png',
          name: 'Tin***'
        },
        {
          title: 'Exxxx xxxxx xxx',
          star: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191017_151440_-34.png',
          txt: 'Exxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxx',
          header: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191017_151433_-704.png',
          name: 'Tin***'
        },
        {
          img: 'https://d2fn1ti8mb8fwr.cloudfront.net/spree/activities/49187/image/large/Michael_Barker.jpg?1546055053',
          header: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191017_151433_-704.png',
          name: 'Tin***'
        },
        {
          title: 'Exxxx xxxxx xxx',
          star: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191017_151440_-34.png',
          txt: 'Exxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxx',
          header: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191017_151433_-704.png',
          name: 'Tin***'
        },
        {
          img: 'https://d2fn1ti8mb8fwr.cloudfront.net/spree/activities/49187/image/large/Michael_Barker.jpg?1546055053',
          header: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191017_151433_-704.png',
          name: 'Tin***'
        },
        {
          title: 'Exxxx xxxxx xxx',
          star: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191017_151440_-34.png',
          txt: 'Exxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxx',
          header: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191017_151433_-704.png',
          name: 'Tin***'
        },
        {
          img: 'https://d2fn1ti8mb8fwr.cloudfront.net/spree/activities/49187/image/large/Michael_Barker.jpg?1546055053',
          header: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191017_151433_-704.png',
          name: 'Tin***'
        },
        {
          title: 'Exxxx xxxxx xxx',
          star: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191017_151440_-34.png',
          txt: 'Exxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxx',
          header: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191017_151433_-704.png',
          name: 'Tin***'
        },
        {
          img: 'https://d2fn1ti8mb8fwr.cloudfront.net/spree/activities/49187/image/large/Michael_Barker.jpg?1546055053',
          header: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191017_151433_-704.png',
          name: 'Tin***'
        },
        {
          title: 'Exxxx xxxxx xxx',
          star: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191017_151440_-34.png',
          txt: 'Exxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxxExxxx xxxxx xxx',
          header: 'https://dz02g1kgtiysz.cloudfront.net/deals/files/191017_151433_-704.png',
          name: 'Tin***'
        },
      ]
    }
  }


  componentDidMount() {
    console.log('utils', utils)
    document.getElementById('thumbnailClass').addEventListener('mousemove', utils.throttle(this.fn), 1000);
    const m1 = moment();
    const m2 = moment('2019-10-19T05:37:00.000-07:00').local();
    const du = moment.duration(m2 - m1);
    console.log('object :', du, m1.format('YYYY-MM-DD hh mm'), m2.format('YYYY-MM-DD hh mm'));
  }

  fn() {
  }
  bulkUpload = evt => {
    const target = evt.target;
    const file = target.files[0];
    if ( typeof(FileReader) !== 'undefined' ) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = e => {
        const result = e.target.result;
        const str = Papa.parse(result, {
          quotes: false,
          quoteChar: '"',
          escapeChar: '"',
          delimiter: ",",
          header: true,
          newline: "\r\n",
          skipEmptyLines: true,
          columns: null
        })
        console.log('str', str)
      }
    }
  }
  render() {
    const { peopleI = 0, slider } = this.state;
    return (
      <div className={styles.normal}>
        <h1>TESTPAGE</h1>
        <div id="thumbnailClass" style={{ width: '200px', height: '200px', backgroundColor: '#ccc' }} contentEditable="true"></div>
        <Slider ref={slider => (this.slider = slider)} className={styles.swiper} {...{
          infinite: true,
          arrows: false,
          centerPadding: '50px',
          slidesToShow: 4,
          swipeToSlide: true,
          afterChange: index => {
            this.setState({ peopleI: index });
          }
        }}
        >
          {[1, 2, 3, 4, 5, 6].map((item, key) => (
            <div key={key} className={styles.swiperitem}>
              <a href="https://fanyi.baidu.com/" target="_blank" rel="noopener noreferrer">{item}</a>
            </div>
          ))}
        </Slider>
        <div style={{ width: '500px', margin: '0 auto' }}>
          <div className="box" style={{ width: '100%', overflow: 'hidden', textAlign: 'left' }}>
            <Draggable
              axis="x"
              handle=".handle"
              bounds={{ top: 0, left: 0, right: 500 - 150, bottom: 0 }}
              position={{ x: (500 - 150) / 5 * peopleI, y: 0 }}
              grid={[(500 - 150) / 5, 0]}
              onStop={(e, u) => {
                const g = (500 - 150) / 5;
                const index = Math.round(u.x / g);
                this.slider.slickGoTo(index);
                this.setState({ peopleI: index });
              }}
            >
              <div>
                <div style={{ width: '150px', height: '50px', backgroundColor: '#eee', display: 'inline-block' }} className="handle">Drag from here</div>
              </div>
            </Draggable>
          </div>
        </div>
        <div className={styles.section4}>
          <h1 className={styles.section4H1}>XXXXXX XXXXX<br />XXX XXXXXX XXXXXX XXXXXX XXXXX XXXX</h1>
          <Slider ref={slider => (this.slider = slider)} className={styles.swiper} {...{
            infinite: true,
            centerPadding: '50px',
            slidesToShow: 5,
            swipeToSlide: true,
            afterChange: index => {
              this.setState({ peopleI: index });
            }
          }}
          >
            {slider.map((item, i) => (
              <div key={i} onDragStart={() => false} className={styles.item}>
                <div className={styles.box}>
                  {item.img && <div className={styles.imgbox} style={{ backgroundImage: 'url(https://d2fn1ti8mb8fwr.cloudfront.net/spree/activities/49187/image/large/Michael_Barker.jpg?1546055053)' }} />}
                  <div className={styles.userBox}>
                    <img src={item.header} alt="" />
                    <p dangerouslySetInnerHTML={{ __html: item.name }} />
                  </div>
                  {item.txt && <div className={styles.txtBox}>
                    <div className={styles.txtFixed}>
                      <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                      <img src={item.star} alt="" />
                      <p dangerouslySetInnerHTML={{ __html: item.txt }} />
                    </div>
                  </div>}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      
        <div style={{ margin: '50px auto' }} className="upfile">
          批量导入:
          <input type="file" accept=".csv" onChange={this.bulkUpload} />
        </div>
        <table>
          <tr>
            <td></td>
            <td>asdada 2111133</td>
          </tr>
          <tr>
            <td></td>
            <td>3</td>
          </tr>
        </table>
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
