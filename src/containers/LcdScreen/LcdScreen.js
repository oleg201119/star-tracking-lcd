import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { translate } from "react-i18next";
import Slider from "react-slick";
import HomeSlide from "./HomeSlide/HomeSlide";
import ImageSlide from "./ImageSlide/ImageSlide";

import * as adActions from "../../store/ads/actions";
import * as adSelectors from "../../store/ads/reducer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./LcdScreen.css";

class LcdScreen extends Component {
  static propTypes = {
    ads: PropTypes.arrayOf(PropTypes.any).isRequired
  };

  componentDidMount = () => {
    // Get event id
    const eventId = this.props.match.params.id;

    // Get current language
    let currentlanguage = this.props.i18n.language;
    if (this.props.i18n.language.length > 2) {
      currentlanguage = this.props.i18n.language.substring(0, 2);
    }

    this.props.dispatch(adActions.fetchAds(eventId, currentlanguage));
  };

  render() {
    const settings = {
      dots: false,
      arrows: false,
      pauseOnHover: false,
      fade: true,
      lazyLoad: true,
      infinite: true,
      // autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const { ads } = this.props;

    return (
      <div className="LcdScreen">
        <Slider {...settings}>
          <HomeSlide /> {ads.map(ad => <ImageSlide url={ad} key={ad} />)}
        </Slider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const ads = adSelectors.getAds(state);
  return { ads };
}

export default connect(mapStateToProps)(translate("translations")(LcdScreen));
