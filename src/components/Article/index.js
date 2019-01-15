import React from "react";
import cx from "classnames";
import css from "./article.module.scss";

const Article = ({ className, children, direction, id, style, title }) => (
  <article
    id={id}
    className={cx(css.article, direction === "col" ? css.col : null, className)}
    style={style}
  >
    <h1 className={css.title}>{title}</h1>
    <div className={css.content}>{children}</div>
  </article>
);

export default Article;
