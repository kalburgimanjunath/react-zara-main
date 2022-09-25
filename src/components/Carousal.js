import React, { useState, useEffect } from 'react';
export default function Carousal({ category }) {
  const container = {
    image1: {
      backgroundImage: `url('https://images.unsplash.com/photo-1663875942232-07e9e32555e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
      // backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      position: 'fixed',
      zIndex: '-1',
    },
    image2: {
      backgroundImage: `url('https://images.unsplash.com/photo-1663776211814-ffdd8553e00d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)`,
      // backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      position: 'fixed',
      zIndex: '-1',
    },
    image3: {
      backgroundImage: `url('https://images.unsplash.com/photo-1663877430904-7fdf2283a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)`,
      // backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      position: 'fixed',
      zIndex: '-1',
    },
    footer: {
      position: 'fixed',
      bottom: '0px',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      margin: '0 20px',
    },
    footer_item: {
      cursor: 'pointer',
      textTransform: 'uppercase',
    },
    next: {
      display: 'flex',
      justifyContent: 'right',
      marginRight: 20,
      top: '50%',
      right: 0,
      position: 'absolute',
    },
    prev: {
      display: 'flex',
      justifyContent: 'left',
      marginRight: 20,
      top: '50%',
      left: 0,
      position: 'absolute',
    },
  };
  const footer = ['new', 'best sellers', 'collections', 'basics', 'shoes'];
  const Footer = () => {
    return (
      <div style={container.footer}>
        {footer.map((item) => {
          return (
            <div key={item.id} style={container.footer_item}>
              <a href={`category/${item}`}>{item}</a>
            </div>
          );
        })}
      </div>
    );
  };
  const [prevCategory, setPrevCategory] = useState(0);
  const [nextCategory, setNextCategory] = useState(1);
  const getCurrentItem = () => {
    switch (nextCategory) {
      case 1:
        return container.image2;
      case 2:
        return container.image3;
      case 3:
        return container.image1;
      default:
        return container.image1;
    }
  };
  return (
    <div>
      <div className="crousal-item" style={getCurrentItem()}>
        <div
          style={container.prev}
          onClick={() => {
            setPrevCategory(prevCategory - 1);
            setNextCategory(nextCategory - 1);
          }}
        >
          {category[prevCategory]}
        </div>

        <Footer />

        <div
          style={container.next}
          onClick={() => {
            setNextCategory(nextCategory + 1);
            setPrevCategory(prevCategory + 1);
          }}
        >
          {category[nextCategory]}
        </div>
      </div>
    </div>
  );
}
