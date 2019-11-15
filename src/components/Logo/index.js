import React from "react";
import cx from "classnames";
import logo_l from "./img/logo_glitch_l.png";
import logo_m from "./img/logo_normal.png";
import logo_h from "./img/logo_glitch_m.png";
import logo_r from "./img/logo_glitch_r.png";
import css from "./logo.module.scss";

const Logo = ({ className, size, to }) => (
  <a
    className={cx(css.logo, className)}
    href="http://lisadezaki.me"
    style={{ height: size, width: size }}
    title="Return to LisaDezaki.me"
  >
    <img
      className={cx(css.logo__img, css["logo__img--m"])}
      alt="Return to LisaDezaki.me"
      src={logo_m}
      style={{ height: size, width: size }}
    />
    <img
      className={cx(css.logo__img, css["logo__img--m--hover"])}
      alt="Return to LisaDezaki.me"
      src={logo_h}
      style={{ height: size, width: size }}
    />
    <img
      className={cx(css.logo__img, css["logo__img--l"])}
      alt="Return to LisaDezaki.me"
      src={logo_l}
      style={{ height: size, width: size }}
    />
    <img
      className={cx(css.logo__img, css["logo__img--r"])}
      alt="Return to LisaDezaki.me"
      src={logo_r}
      style={{ height: size, width: size }}
    />
  </a>
);

export default Logo;
