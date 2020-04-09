import "./index.scss";
import React from "react";

const Post = ({ item, site }) => {
  const { content } = item;

  return (
    <div>
      <div>
        POST: {site.title} - {item.title}
      </div>
      <div>{content}</div>
    </div>
  );
};

export default Post;
