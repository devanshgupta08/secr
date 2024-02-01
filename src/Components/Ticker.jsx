import React, { useState } from 'react';
import { ReactTicker } from "@guna81/react-ticker";
import tickerImg from './Images/new.gif';

export default function Ticker() {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleMouseOver = (id) => {
    setHoveredItemId(id);
  };

  const handleMouseOut = () => {
    setHoveredItemId(null);
  };

  const handleItemClick = (link) => {
    window.open(link, '_blank'); // Opens the link in a new tab
  };

  const data = [
    {
      id: 1,
      value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      link: "https://www.google.com"
    },
    {
      id: 2,
      value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      link: "https://www.google.com"
    },
    {
      id: 3,
      value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      link: "https://www.google.com"
    },
  ];

  const renderItem = (item) => {
    return (
      <>
        <p
          style={{
            whiteSpace: "nowrap",
            color: "white",
            margin: 0,
            marginInlineEnd: "2rem",
            textDecoration: hoveredItemId === item.id ? "underline" : "none",
            cursor: "pointer",
          }}
          onMouseOver={() => handleMouseOver(item.id)}
          onMouseOut={handleMouseOut}
          onClick={() => handleItemClick(item.link)}
        >
          <span><img
            src={tickerImg}
            alt=" "
            style={{ height: "1.7rem" }}
          /></span>
          {item.value}
        </p>
      </>
    );
  };

  return (
    <>
      <ReactTicker
        data={data.map(item => ({ ...item, key: item.id }))}
        component={renderItem}
        speed={40}
        keyName="key"
        tickerStyle={{
          width: "100%",
          height: "2.4rem",
          backgroundColor: "#1e1e1e",
          zIndex: 99,
          border: "2px solid #0e0e0e",
          display: "flex",
          alignItems: "center",
        }}
        tickerClassName="tickerImgs-ticker"
      />
    </>
  )
}
