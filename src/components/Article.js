import React from "react";

function Article({ title, date, preview}) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date ?? "January 1, 1970"}</small>
      <p>{preview}</p>
      {/* {minutes > 30 ? (
        <span>{`${Array(Math.ceil(minutes / 10))
          .fill("🍱")
          .join(" ")} ${minutes} min read`}</span>
      ) : (
        <span>{`${Array(Math.ceil(minutes / 5))
          .fill("☕️")
          .join(" ")} ${minutes} min read`}</span>
      )} */}
    </article>
  );
}

export default Article;
