import React from "react";
import cx from "classnames";

import img from "./img/logo.png";
import img_h from "./img/logo-hover.png";

import css from "./logo.module.scss";

const Logo = ({ className, size, to }) => (
  <a
    className={cx(css.logo, className)}
    href="http://lisadezaki.me"
    style={{ height: size, width: size }}
    title="Return to LisaDezaki.me"
  >
    <img
      className={cx(css.logo, css.main)}
      alt="Return to LisaDezaki.me"
      style={{ height: size, width: size }}
      src={img}
    />
    <img
      className={cx(css.logo, css.hover)}
      alt="Return to LisaDezaki.me"
      style={{ height: size, width: size }}
      src={img_h}
    />
  </a>
);

export default Logo;
