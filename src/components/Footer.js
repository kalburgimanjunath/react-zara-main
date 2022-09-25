import React from 'react';
export default function Footer() {
  const footeritems = {
    HELP: [
      'SHOP AT ZARA.COM',
      'PRODUCT',
      'GIFT CARD',
      'PAYMENT',
      'SHIPPING',
      'EXCHANGES AND RETURNS',
      'SHOPS AND COMPANY',
      'CLOTHES COLLECTION PROGRAMME',
      'MY ACCOUNT',
    ],
    FOLLOWUS: [
      'NEWSLETTER',
      'INSTAGRAM',
      'FACEBOOK',
      'TWITTER',
      'PINTEREST',
      'YOUTUBE',
    ],
    COMPANY: ['ABOUT US', 'JOIN LIFE', 'OFFICES', 'STORES', 'WORK WITH US'],
    POLICIES: [
      'PRIVACY POLICY',
      'PURCHASE CONDITIONS',
      'GIFT CARD CONDITIONS',
      'COOKIES SETTINGS',
    ],
  };
  const keys = Object.keys(footeritems);
  return (
    <div className="mainfooter">
      {keys.map((item) => {
        let footersub = footeritems[item];
        return (
          <>
            <div className="header">
              {item}
              <div className="subitems">
                {footersub.map((subitem) => {
                  return <div>{subitem}</div>;
                })}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
