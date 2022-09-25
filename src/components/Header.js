import React, { useState } from 'react';

export default function Header() {
  const [showHamberger, setHamberger] = useState(false);
  const container = {
    header: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      padding: 20,
    },
    right_menu: {
      width: '50%',
      justifyContent: 'space-around',
      display: 'flex',
      textTransform: 'uppercase',
    },
    search: {
      textDecoration: 'underline',
    },
    logo: {
      fontSize: 72,
    },
    // sidebarmenu: {
    //   // display: 'flex',
    //   flex: '1',
    //   backgroundColor: '#fff',
    //   position: 'fixed',
    //   top: 0,
    //   left: -500,
    //   bottom: 0,
    //   width: '300px',
    //   padding: 20,
    //   fontSize: 10,
    //   lineHeight: 1.2,
    // },
    sidebartabs: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    sidebaritems: {
      flex: 1,
      marginTop: 20,
    },
    show: {
      display: 'block',
      left: 0,
    },
  };
  const sidebar = [
    'NEW',
    'ZARA ATHLETICZ',
    'BEST SELLERS',
    'TREND',
    'JACKETS | PUFFERS',
    'SHIRTS',
    'T-SHIRTS',
    'POLO SHIRTS',
    'TROUSERS',
    'JEANS',
    'SHORTS',
    'BASICS',
    'HOODIES | SWEATSHIRTS',
    'SWEATERS | CARDIGANS',
    'OVERSHIRTS',
    'GILETS',
    'COATS | TRENCH COATS',
    'BLAZERS',
    'SUITS',
    'TRACKSUITSNEW',
    'SHOES',
    'BAGS | BACKPACKS',
    'ACCESSORIES',
    'PERFUMES',
    'SPECIAL PRICES',
  ];
  const displayMenu = () => {
    console.log(showHamberger);
    setHamberger(!showHamberger);
  };
  const tabs = [' WOMAN', ' MEN', ' KIDS', ' ZARA ORIGINAL'];
  return (
    <div style={container.header}>
      <div onClick={displayMenu}>
        O
        <div
          className="sidebar"
          style={
            (container.sidebarmenu,
            { left: showHamberger ? 0 : -500, position: 'fixed' })
          }
        >
          <div className="sidebartabs" style={container.sidebartabs}>
            {tabs.map((item) => {
              return <div>{item}</div>;
            })}
          </div>
          <div className="sidebaritems" style={container.sidebaritems}>
            {sidebar.map((item) => (
              <div>{item}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={container.logo}>
        <a href="/">ZARA</a>
      </div>

      <div style={container.right_menu}>
        <div style={container.search}>Search</div>
        <div>Login</div>
        <div>Help</div>
        <div>Cart</div>
      </div>
    </div>
  );
}
