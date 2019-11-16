import React from "react";
import cx from "classnames";



import img_l from "./img/newlogo_l.png";
import img_m from "./img/newlogo_m.png";
import img_r from "./img/newlogo_r.png";
import img_l2 from "./img/newlogo_glitch_l.png";
import img_m2 from "./img/newlogo_glitch_m.png";
import img_r2 from "./img/newlogo_glitch_r.png";

// import logo_l from "./img/logo_glitch_l.png";
// import logo_m from "./img/logo_normal.png";
// import logo_h from "./img/logo_glitch_m.png";
// import logo_r from "./img/logo_glitch_r.png";
import css from "./logo.module.scss";

const Logo = ({ className, size, to }) => (
  <a
    className={cx(css.logo, className)}
    href="http://lisadezaki.me"
    style={{ height: size, width: size }}
    title="Return to LisaDezaki.me"
  >
    <img
      className={cx(css.logo, css.left)}
      alt="Return to LisaDezaki.me"
      style={{ height: size, width: size }}
      src={img_l}
      />
    <img
      className={cx(css.logo, css.main)}
      alt="Return to LisaDezaki.me"
      style={{ height: size, width: size }}
      src={img_m}
    />
    <img
      className={cx(css.logo, css.right)}
      alt="Return to LisaDezaki.me"
      style={{ height: size, width: size }}
      src={img_r}
    />
    <img
      className={cx(css.logo, css.left, css.hover)}
      alt="Return to LisaDezaki.me"
      style={{ height: size, width: size }}
      src={img_l2}
    />
    <img
      className={cx(css.logo, css.main, css.hover)}
      alt="Return to LisaDezaki.me"
      style={{ height: size, width: size }}
      src={img_m2}
    />
    <img
      className={cx(css.logo, css.right, css.hover)}
      alt="Return to LisaDezaki.me"
      style={{ height: size, width: size }}
      src={img_r2}
    />
  </a>
);

export default Logo;
