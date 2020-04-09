import "./index.scss";
import React from "react";

const Home = ({ item, site }) => {
  const { content } = item;

  return (
    <div>
      <div>
        {site.title} - {item.title}
      </div>
      <div>{content}</div>
    </div>
  );
};

export default Home;
