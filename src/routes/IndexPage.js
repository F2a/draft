import React from "react";
import { connect } from "dva";
import styles from "./IndexPage.scss";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: ''
    };
  }
  autocomplete = null;
  componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
  };

  componentDidMount() {
    window.google.maps.event.addDomListener(window, 'load', () => {
      this.initAutocomplete();
    })
  }

  initAutocomplete = () => {
    // Create the autocomplete object, restricting the search predictions to
    // geographical location types.
    this.autocomplete = new window.google.maps.places.Autocomplete(
        document.getElementById('autocomplete'), {types: ['geocode']});
  
    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components.
    this.autocomplete.setFields(['address_component']);
  
    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    this.autocomplete.addListener('place_changed', this.fillInAddress);
  }

  fillInAddress = () => {
    const place = this.autocomplete.getPlace();
    console.log('place', place);
  }

  geolocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var circle = new window.google.maps.Circle(
            {center: geolocation, radius: position.coords.accuracy});
        this.autocomplete.setBounds(circle.getBounds());
      });
    }
  }

  goto = (url) => {
    return function () {
      this.props.dispatch({
        type: "example/goto",
        payload: url,
      });
    }.bind(this);
  };
  render() {
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <div id="locationField">
          <input
            id="autocomplete"
            placeholder="Enter your address"
            onFocus={this.geolocate}
            type="text"
          />
        </div>
        <ul className={styles.list}>
          <li>
            <h2 onClick={this.goto("/testpage")}>testpage</h2>
          </li>
          <li>
            <h2 onClick={this.goto("/PIQ3")}>PIQ3</h2>
          </li>
          <li>
            <h2 onClick={this.goto("/material")}>Material</h2>
          </li>
          <li>
            <h2 onClick={this.goto("/flaremini")}>Flaremini</h2>
          </li>
          <li>
            <h2 onClick={this.goto("/rope")}>Rope</h2>
          </li>
          <li>
            <h2 onClick={this.goto("/animate")}>Animate</h2>
          </li>
          <li>
            <h2 onClick={this.goto("/cable")}>Cable</h2>
          </li>
          <li>
            <h2 onClick={this.goto("/t2118")}>T2118</h2>
          </li>
          <li>
            <h2 onClick={this.goto("/Capsule")}>Capsule</h2>
          </li>
          <li>
            <h2 onClick={this.goto("/Referral")}>Referral</h2>
          </li>
          <li>
            <h2 onClick={this.goto("/CampaignLanding")}>CampaignLanding</h2>
          </li>
          <li>
            <h2 onClick={this.goto("/PixiDemo")}>PixiDemo</h2>
          </li>
          <li>
            <h2 onClick={this.goto("/Camp")}>Camp</h2>
          </li>
          <li>
            <h2 onClick={this.goto("/Momshare")}>Momshare</h2>
          </li>
          <li>
            <h2 onClick={this.goto("/MothersDay")}>MothersDay</h2>
            <h2 onClick={this.goto("/MothersDayUk")}>MothersDayUk</h2>
          </li>
          <li>
            <h2 onClick={this.goto("/Friendbuy")}>Friendbuy</h2>
            <h2 onClick={this.goto("/ProductNan")}>ProductNan</h2>
            <h2 onClick={this.goto("/Eufyrefrral")}>Eufyrefrral</h2>
          </li>
        </ul>
      </div>
    );
  }
}

IndexPage.propTypes = {};

function mapStateToProps(state) {
  const { example } = state;
  return {
    ...example,
  };
}

export default connect(mapStateToProps)(IndexPage);
