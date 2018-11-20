import PropTypes from "prop-types";
import React from "react";
import { Link } from 'gatsby'

import "./styles.scss"


const Services = props => {
  const { posts, theme } = props;

  return (
    <React.Fragment>
      <div className="services__wrapper">
        <h1 className="services__title">Le ofrecemos servicios de reparacion en:</h1>
        <div className="services">
          <Link  to="/contact">
            <div className="services__item" >
              <img className="services__item-image" src="./images/taladro.jpg"></img>
              <div className="services__item-info-wrapper">
                <div className="services__item-info" >
                  <div className="services__name">Herramienta manual</div>
                  <div className="services__devices">Taladros, cepillos</div>
                </div>
                <img className="services__item-image-svg" src="./images/repair.svg"></img>
              </div>
            </div>
          </Link>
          <Link  to="/contact">
            <div className="services__item" >
              <img className="services__item-image" src="./images/hidro.jpg"></img>
              <div className="services__item-info-wrapper">
                <div className="services__item-info" >
                  <div className="services__name">Hidrolavadoras</div>
                </div>
                <img className="services__item-image-svg" src="./images/repair.svg"></img>
              </div>
            </div>
          </Link>
          <Link  to="/contact">
            <div className="services__item" >
              <img className="services__item-image" src="./images/inversor.jpg"></img>
              <div className="services__item-info-wrapper">
                <div className="services__item-info" >
                  <div className="services__name">Inversores</div>
                </div>
                <img className="services__item-image-svg" src="./images/repair.svg"></img>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </React.Fragment>
  );
};

Services.propTypes = {
  posts: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default Services;
