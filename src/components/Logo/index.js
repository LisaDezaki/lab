import React from "react";
import cx from "classnames";
import logo_l from "./img/logo_l.png";
import logo_m from "./img/logo_m.png";
import logo_r from "./img/logo_r.png";
import css from "./logo.module.scss";

const Logo = ({ className, size, to }) => (
  <a
    className={cx(css.logo, className)}
    href="http://ellieashton.me"
    style={{ height: size, width: size }}
    title="Return to EllieAshton.me"
  >
    <img
      className={cx(css.logo__img, css["logo__img--m"])}
      alt="Return to EllieAshton.me"
      src={logo_m}
      style={{ height: size, width: size }}
    />
    <img
      className={cx(css.logo__img, css["logo__img--l"])}
      alt="Return to EllieAshton.me"
      src={logo_l}
      style={{ height: size, width: size }}
    />
    <img
      className={cx(css.logo__img, css["logo__img--r"])}
      alt="Return to EllieAshton.me"
      src={logo_r}
      style={{ height: size, width: size }}
    />
  </a>
);

export default Logo;
